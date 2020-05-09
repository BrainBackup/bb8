import { Client as NativeClient } from '@elastic/elasticsearch';
import Configuration from '../config/configuration';
const configuration = Configuration();
const convertArrayToObject = (array: any, key: string) => {
    const initialValue = {};
    return array.reduce((obj: any, item: any) => {
        return {
        ...obj,
        [item[key]]: item,
        };
    }, initialValue);
};
const client = new NativeClient({ 
    node: `http://${configuration.elastic.host}:${configuration.elastic.port}`
});


const GetClient = () => {
    return client;
}
interface Body {
    properties: Record<string, any>
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

const init = async (): Promise<any> => {
    try {
        const client = GetClient();
        const indices = Object.keys(SchemesNameToIndices);

        await Promise.all(indices.map(async index => {
            const { body: isIndexExist } = await client.indices.exists({ index });
            if (!isIndexExist) {
                await client.indices.create({ index })
                await client.indices.putMapping(SchemesNameToIndices[index])
            }
        }));
    }
    catch(err) {
        console.log(err);
        throw err;
    }
}

export default { GetClient, Schemes, SchemesNameToIndices, init };
