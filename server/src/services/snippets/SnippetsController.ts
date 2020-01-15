import { Client, ApiResponse, RequestParams } from '@elastic/elasticsearch'
import Elastic from '../../helpers/Elastic'; // TODO: add node path for lookup

interface Snippet {
  pageUrl: String,
  selectionText: String,
  menuItemId: String
}
export const fetch = async (params: any) => {
  try {
    const params1: RequestParams.Search = {
      index: Elastic.SchemesOld.Snippets.index
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
    const client = Elastic.GetClient();
    const doc: RequestParams.Index = {
      index: Elastic.SchemesOld.Snippets.index,
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



