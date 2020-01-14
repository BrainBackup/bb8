import { Client, ApiResponse, RequestParams } from '@elastic/elasticsearch'
import Elastic from '../helpers/Elastic'; // TODO: add node path for lookup

const init = async (): Promise<any> => {
    const client = Elastic.GetClient();
    await client.index(Elastic.getIndexes())
}
export default { init };