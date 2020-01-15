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
        const schemes = Elastic.getSchemes();
        const indices = Object.keys(Elastic.SchemesNameToIndices);
        console.log('=================', indices)
        
        await Promise.all(indices.map(index => {
            // const d: RequestParams.IndicesCreate = TODO: use this one to create multiple indices.
            client.indices.create()
        }))
            
        // await client.indices.create() //TODO: change to Promise.all
        client.indices.putMapping({ ...Elastic.SchemesOld.Snippets });
    }
    catch(err) {
        console.log(err.meta.body.error);
        // console.error(err.meta.body.error);
        throw err;
    }
}
export default { init };