import { Client as NativeClient, ApiResponse, RequestParams } from '@elastic/elasticsearch'
const client = new NativeClient({ node: 'http://localhost:9200' }); // TODO: break into configuration
import ElasticShcems from './ElasticShcems';

//TODO: load redis host from nconf
const GetClient = () => {
    return client;
}
const getIndexes = (): RequestParams.Index => {
    const doc1: RequestParams.Index = {
        index: ElasticShcems.Test,
        body: {
            [ElasticShcems.Test]: {
                "properties": {
                    "source_id": {
                        "type": "keyword"
                    },
                    "source_type": {
                        "type": "keyword"
                    },
                    "author_id": {
                        "type": "keyword"
                    },
                    "author_name": {
                        "type": "text"
                    }
                }
            }
        }
    };
    return doc1; //return array
}
export default { GetClient, getIndexes };
