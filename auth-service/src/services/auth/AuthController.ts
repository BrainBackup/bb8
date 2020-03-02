// import MySql from '../../helpers/MySql';
import DB from '../../helpers/DB';
// import { Client, ApiResponse, RequestParams } from '@elastic/elasticsearch'
// const SNIPPET_INDEX = Elastic.SchemesNameToIndices['snippets'].index;

interface Snippet {
  pageUrl: String,
  selectionText: String,
  menuItemId: String
}
export const fetch = async (params: any) => {
  try {
      console.log('DB', DB);
    // const params1: RequestParams.Search = {
    //   index: SNIPPET_INDEX
    // }
    // const client = Elastic.GetClient();
    // const result: ApiResponse = await client.search(params1);
    // return result.body.hits.hits;
  }
  catch (err) {
    return err;
  }
}