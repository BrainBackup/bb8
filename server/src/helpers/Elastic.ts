// import redis from 'redis';
import { Client, ApiResponse, RequestParams } from '@elastic/elasticsearch'
const client = new Client({ node: 'http://localhost:9200' }); // TODO: break into configuration
// TODO: break to a singleton and import here.


//TODO: load redis host from nconf
const get = () => {
    return client;
}
export default get;
// module.exports = function() {
//     return client;
// };