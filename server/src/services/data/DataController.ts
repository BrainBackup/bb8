import { Client, ApiResponse, RequestParams } from '@elastic/elasticsearch'
const client = new Client({ node: 'http://localhost:9200' }); // TODO: break into configuration

async function run (): Promise<any> {
    // Let's start by indexing some data
    const doc1: RequestParams.Index = {
      index: 'game-of-thrones',
      body: {
        character: 'Ned Stark',
        quote: 'Winter is coming.'
      }
    }
    await client.index(doc1)
  
    const doc2: RequestParams.Index = {
      index: 'game-of-thrones',
      body: {
        character: 'Daenerys Targaryen',
        quote: 'I am the blood of the dragon.'
      }
    }
    await client.index(doc2)
  
    const doc3: RequestParams.Index = {
      index: 'game-of-thrones',
      // here we are forcing an index refresh,
      // otherwise we will not get any result
      // in the consequent search
      refresh: "true",
      body: {
        character: 'Tyrion Lannister',
        quote: 'A mind needs books like a sword needs a whetstone.'
      }
    }
    await client.index(doc3)
  
    // Let's search!
    const params: RequestParams.Search = {
      index: 'game-of-thrones',
      body: {
        query: {
          match: {
            quote: 'winter'
          }
        }
      }
    }
    client
      .search(params)
      .then((result: ApiResponse) => {
        console.log(result.body.hits.hits)
        return result.body.hits.hits;
      })
      .catch((err: Error) => {
        console.log(err)
        return err;
      })
  }
export const saveData = async (data: any) => {
    console.log(data);
    await run()
    return data;
}


