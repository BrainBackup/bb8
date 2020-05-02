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
        port: parseInt(process.env.PORT, 10) || 3010,
        database: {
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'w3lc0me!',
            name: 'auth_service',
        },
        twitter: {
            key: '5GvNgRMSQFaab70EBfV5psXW8',
            secret: 'D6qXsHHpJGk2427lJ9AveC3XBjcFfyBp3ZaaEB95y65RGm7Zb8',
            callback: 'http://localhost:3010'
        }
    },
    testing: {
        port: parseInt(process.env.PORT, 10) || 3010,
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
