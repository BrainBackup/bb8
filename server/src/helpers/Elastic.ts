import { Client as NativeClient, ApiResponse, RequestParams } from '@elastic/elasticsearch'
const client = new NativeClient({ node: 'http://localhost:9200' }); // TODO: break into configuration
import ElasticShcems from './ElasticShcems';

const GetClient = () => {
    return client;
}
const getIndexes = (): RequestParams.Index => {
    const doc1: RequestParams.Index = {
        index: ElasticShcems.Snippets.index,
        body: {}
    };
    return doc1; //return array
}
export default { GetClient, getIndexes };
