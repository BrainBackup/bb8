import { Client, ApiResponse, RequestParams } from '@elastic/elasticsearch'
import Elastic from 'helpers/Elastic';

const init = async (): Promise<any> => {
    try {
        const client = Elastic.GetClient();
        const indices = Object.keys(Elastic.SchemesNameToIndices);
        
        await Promise.all(indices.map(async index => {
            const { body: isIndexExist } = await client.indices.exists({ index });
            if (!isIndexExist) {
                await client.indices.create({ index })
                await client.indices.putMapping(Elastic.SchemesNameToIndices[index])
            }
        }));
    }
    catch(err) {
        console.log(err.meta.body.error);
        throw err;
    }
}
export default { init };