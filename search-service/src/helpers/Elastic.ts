import Utils from 'utils/utils';
import env from 'config/env';
import { Client as NativeClient, ApiResponse, RequestParams } from '@elastic/elasticsearch'
const client = new NativeClient({ 
    node: `http://${env.elastic.host}:${env.elastic.port}`
});


const GetClient = () => {
    return client;
}
interface Body {
    properties: Object
}
interface Scheme {
    index: string,
    body: Body
}
const Snippets: Scheme = {
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
}
const Test: Scheme = {
    index: 'test',
    body: Object.create({})
}
const Schemes: Array<Scheme> = [Snippets, Test];
const SchemesNameToIndices = Utils.convertArrayToObject(Schemes, 'index');


export default { GetClient, Schemes, SchemesNameToIndices };
