import { Client, ApiResponse, RequestParams } from '@elastic/elasticsearch'
import Elastic from '../helpers/Elastic'; // TODO: add node path for lookup

const init = async (): Promise<any> => {
    try {
        const client = Elastic.GetClient();
        await client.indices.create(Elastic.getIndexes())
        // await client.index(Elastic.getIndexes())
    }
    catch(err) {
        console.error(err);
        throw err;
    }
}
export default { init };