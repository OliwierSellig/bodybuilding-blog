import { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

type RequestType = {
  tag: string;
};

export async function POST(request: NextRequest) {
  const { tag } = (await request.json()) as RequestType;

  if (tag) {
    revalidateTag(tag);
    return Response.json({ revalidated: true, timestamp: Date.now() });
  } else {
    return Response.json({ revalidated: false, timestamp: Date.now() });
  }
}
