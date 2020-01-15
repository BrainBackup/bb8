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
        const indices = Elastic.getIndices();
        await Promise.all(indices.map(index => client.indices.create()))
        // await client.indices.create() //TODO: change to Promise.all
        client.indices.putMapping({ ...Elastic.SchemesOld.Snippets });
    }
    catch(err) {
        console.error(err.meta.body.error);
        throw err;
    }
}
export default { init };