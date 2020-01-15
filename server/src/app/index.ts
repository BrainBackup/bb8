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
        
        await Promise.all(indices.map(async index => {
            await client.indices.create({ index })
            await client.indices.putMapping(Elastic.SchemesNameToIndices[index])
            // await client.indices.putMapping(Elastic.Schemes.find(scheme => scheme.index === index))
        }));
    }
    catch(err) {
        console.log(err.meta.body.error);
        throw err;
    }
}
export default { init };