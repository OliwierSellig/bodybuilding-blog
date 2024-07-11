import 'server-only';
import { createClient, type ClientConfig, type QueryParams } from '@sanity/client';
import { isPreviewDeployment, isProductionDeployment } from './is-preview-deployment';

const config: ClientConfig = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-06-18',
  useCdn: false,
};

const client = createClient(config);

export async function sanityFetch<QueryResponse>({
  query,
  qParams = {},
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    ...(!isProductionDeployment
      ? {
          cache: 'reload',
        }
      : {
          ...(isPreviewDeployment || !tags
            ? {
                cache: 'no-cache',
              }
            : {
                next: { tags },
              }),
        }),
  });
}
