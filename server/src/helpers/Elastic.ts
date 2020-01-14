import { Client as NativeClient, ApiResponse, RequestParams } from '@elastic/elasticsearch'
const client = new NativeClient({ node: 'http://localhost:9200' }); // TODO: break into configuration

const Schemes = {
    Snippets: {
        index: 'snippets',
        body: {
            "properties": {
                "selectionText": {
                    "type": "text"
                },
                "pageUrl": {
                    "type": "text"
                }
            }
        }
    },
    Test: 'test'
};
const GetClient = () => {
    return client;
}
const getIndexes = (): RequestParams.Index => {
    const doc1: RequestParams.Index = {
        index: Schemes.Snippets.index,
        body: {}
    };
    return doc1; //return array
}

export default { GetClient, getIndexes, Schemes };
