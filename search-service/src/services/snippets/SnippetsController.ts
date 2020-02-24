import Elastic from '../../helpers/Elastic'; // TODO: add node path for lookup
import { Client, ApiResponse, RequestParams } from '@elastic/elasticsearch'
const SNIPPET_INDEX = Elastic.SchemesNameToIndices['snippets'].index;

interface Snippet {
  pageUrl: String,
  selectionText: String,
  menuItemId: String
}
export const fetch = async (params: any) => {
  try {
    const params1: RequestParams.Search = {
      index: SNIPPET_INDEX
    }
    const client = Elastic.GetClient();
    const result: ApiResponse = await client.search(params1);
    return result.body.hits.hits;
  }
  catch (err) {
    return err;
  }
}
export const create = async (data: Snippet) => {
  try {
    // TODO: need to add validation to the params as mw on the routes.
    const client = Elastic.GetClient();
    const doc: RequestParams.Index = {
      index: SNIPPET_INDEX,
      refresh: "true",
      body: {
        selectionText: data.selectionText,
        pageUrl: data.pageUrl
      }
    }
    await client.index(doc);
    return 'Created successfully';
  }
  catch (err) {
    return err;
  }
}



