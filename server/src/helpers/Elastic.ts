import { Client as NativeClient, ApiResponse, RequestParams } from '@elastic/elasticsearch'
const client = new NativeClient({ node: 'http://localhost:9200' }); // TODO: break into configuration

const convertArrayToObject = (array: any, key: string) => {
    const initialValue = {};
    return array.reduce((obj: any, item: any) => {
        return {
        ...obj,
        [item[key]]: item,
        };
    }, initialValue);
};
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
const SchemesNameToIndices = convertArrayToObject(Schemes, 'index');

const SchemesOld = {
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
    Test: {
        index: 'test',
        body: {}
    }
};
const GetClient = () => {
    return client;
}
const getSchemes = (): Array<RequestParams.Index> => {
    const indices: Array<RequestParams.Index> = Schemes.map(scheme => {
        const doc: RequestParams.Index = {
            ...scheme
        }
        return doc;
    })
    // const doc: RequestParams.Index = {
    //     index: Schemes.Snippets.index,
    //     body: {}
    // };
    // return doc; //return array
    return indices;
}

export default { GetClient, getSchemes, Schemes, SchemesOld, SchemesNameToIndices };
