import { Client as NativeClient, ApiResponse, RequestParams } from '@elastic/elasticsearch'
const client = new NativeClient({ node: 'http://localhost:9200' }); // TODO: break into configuration


//TODO: load redis host from nconf
const GetClient = () => {
    return client;
}
const getIndexes = () => {
    const doc1: RequestParams.Index = {
        index: 'game-of-thrones',
        body: {
            character: 'Ned Stark',
            quote: 'Winter is coming.'
        }
    };
    return doc1; //return array
}
export default { GetClient, getIndexes };
