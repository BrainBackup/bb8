import { Client, ApiResponse, RequestParams } from '@elastic/elasticsearch'
import Elastic from '../../helpers/Elastic'; // TODO: add node path for lookup

// async function run (): Promise<any> {
//     const client = Elastic.GetClient();
//     // Let's start by indexing some data
//     const doc1: RequestParams.Index = {
//       index: 'game-of-thrones',
//       body: {
//         character: 'Ned Stark',
//         quote: 'Winter is coming.'
//       }
//     }
//     await client.index(doc1)
  
//     const doc2: RequestParams.Index = {
//       index: 'game-of-thrones',
//       body: {
//         character: 'Daenerys Targaryen',
//         quote: 'I am the blood of the dragon.'
//       }
//     }
//     await client.index(doc2)
  
//     const doc3: RequestParams.Index = {
//       index: 'game-of-thrones',
//       // here we are forcing an index refresh,
//       // otherwise we will not get any result
//       // in the consequent search
//       refresh: "true",
//       body: {
//         character: 'Tyrion Lannister',
//         quote: 'A mind needs books like a sword needs a whetstone.'
//       }
//     }
//     await client.index(doc3)
  
//     // Let's search!
//     const params: RequestParams.Search = {
//       index: 'game-of-thrones',
//       body: {
//         query: {
//           match: {
//             quote: 'winter'
//           }
//         }
//       }
//     }
//     client
//       .search(params)
//       .then((result: ApiResponse) => {
//         console.log(result.body.hits.hits)
//         return result.body.hits.hits;
//       })
//       .catch((err: Error) => {
//         console.log(err)
//         return err;
//       })
//   }
export const fetch = async (params: any) => {
  try {
    const params1: RequestParams.Search = { // TODO: change this
      index: 'game-of-thrones'
    }
    const client = Elastic.GetClient();
    const result: ApiResponse = await client.search(params1);
    console.log('result from elastic', result)
    return result.body.hits.hits;
  }
  catch (err) {
    return err;
  }
      // .then((result: ApiResponse) => {
      //   console.log(result);
      //   return result;
      //   // console.log(result.body.hits.hits)
      //   // return result.body.hits.hits;
      // })
      // .catch((err: Error) => {
      //   console.log(err)
      //   return err;
      // })
  }
  export const create = async (data: any) => {
    console.log(data);
    // TODO: define and create index.
    // TODO: insert to index
    // await run()
    return data;
}



