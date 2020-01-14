import { Client, ApiResponse, RequestParams } from '@elastic/elasticsearch'
import Elastic from '../helpers/Elastic'; // TODO: add node path for lookup
import ElasticShcems from '../helpers/ElasticShcems';
const body =  {
    "properties": {
        "selectionText": {
            "type": "text"
        },
        "pageUrl": {
            "type": "text"
        }
    }
};
// {
//     "menuItemId": "saveCodeSnippet",
//     "saveCodeSnippet": "lflamoameidbdinphdjhmpbkimfobcdc",
//     "pageUrl": "chrome://extensions/"
// }
// in case the index doesnt exist
    //     "elasticshcems": {
    //         "mappings": {
    //             "type_name": {
    //             }
    //         }
    //     }
    // }
const init = async (): Promise<any> => {
    try {
        // TODO: add check if index exist
        const client = Elastic.GetClient();
        await client.indices.create(Elastic.getIndexes())
        client.indices.putMapping({ ...ElasticShcems.Snippets });
    }
    catch(err) {
        console.error(err.meta.body.error);
        throw err;
    }
}
export default { init };