import { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";
import { client } from "@/utils/sanity";

type RequestType = {
  tag: string;
  id?: string;
};
type QueryType = {
  references: string[];
};

export async function POST(request: NextRequest) {
  const { tag, id } = (await request.json()) as RequestType;

  if (tag) {
    revalidateTag(tag);
    const data = await query(tag, id);
    const references = data?.references;
    references?.forEach((tag) => revalidateTag(tag));
    return Response.json({ revalidated: true, timestamp: Date.now() });
  } else {
    return Response.json({ revalidated: false, timestamp: Date.now() });
  }
}

const query = async (tag: string, id?: string): Promise<QueryType> => {
  let queryHeader = `*[_type == "${tag}"][0]`;
  if (id) queryHeader = `*[_type == "${tag}" && _id == "${id}"][0]`;
  return await client.fetch(`
      ${queryHeader}{
        "references": *[references(^._id)]._type,
      }
    `);
};
