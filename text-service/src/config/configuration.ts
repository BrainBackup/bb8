interface IDatabase { 
    host: string;
    port: number;
    username: string;
    password: string;
    name: string;
}
interface Auth {
    key: string;
    secret: string;
    callback: string;
}
interface Configuration {
    port: number,
    database: IDatabase,
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
        database: {
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'w3lc0me!',
            name: 'auth_service',
        },
    },
    testing: {
        port: parseInt(process.env.PORT, 10) || 3009,
        database: {
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'w3lc0me!',
            name: 'auth_service',
        }
    }
};
export default (): Configuration => configuration[process.env.NODE_ENV] || configuration['development'];
