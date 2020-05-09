interface IElastic { 
    host: string;
    port: number;
    username?: string;
    password?: string;
    name?: string;
}
interface Auth {
    key: string;
    secret: string;
    callback: string;
}
interface Configuration {
    port: number,
    elastic: IElastic,
    twitter?: Auth
}
interface ConfigurationResult {
    development: Configuration;
    testing: Configuration;
    production?: Configuration;
}
const configuration: ConfigurationResult = {
    development: {
        port: parseInt(process.env.PORT, 10) || 3009,
        elastic: {
            host: 'localhost',
            port: 9200,
            username: 'root',
            password: 'w3lc0me!',
            name: 'auth_service',
        },
    },
    testing: {
        port: parseInt(process.env.PORT, 10) || 3009,
        elastic: {
            host: 'localhost',
            port: 9200,
            username: 'root',
            password: 'w3lc0me!',
            name: 'auth_service',
        }
    }
};
export default (): Configuration => configuration[process.env.NODE_ENV] || configuration['development'];
