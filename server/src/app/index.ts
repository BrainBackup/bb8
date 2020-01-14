import { Client, ApiResponse, RequestParams } from '@elastic/elasticsearch'
import Elastic from '../helpers/Elastic'; // TODO: add node path for lookup
const body =  {
    "properties": {
        "email": {
            "type": "keyword"
        }
    }
};
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
        const client = Elastic.GetClient();
        await client.indices.create(Elastic.getIndexes())
        client.indices.putMapping({ index:"elasticshcems", body });
        // await client.index(Elastic.getIndexes())
    }
    catch(err) {
        console.error(err.meta.body.error);
        throw err;
    }
}
export default { init };