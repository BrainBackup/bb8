import { Client, ApiResponse, RequestParams } from '@elastic/elasticsearch'
import Elastic from '../helpers/Elastic'; // TODO: add node path for lookup

const init = async (): Promise<any> => {
    try {
        const client = Elastic.GetClient();
        // TODO: add check if index exist
        // const params: RequestParams.Exists = {
        //     index: Elastic.Schemes.Snippets.index
        // }
        // const result: ApiResponse = await client.indices.exists({ index: Elastic.Schemes.Snippets.index })
        await client.indices.create(Elastic.getIndexes())
        client.indices.putMapping({ ...Elastic.Schemes.Snippets });
    }
    catch(err) {
        console.error(err.meta.body.error);
        throw err;
    }
}
export default { init };