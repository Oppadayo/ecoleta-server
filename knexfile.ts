import path from 'path';

module.exports = {
    client: 'mysql',
    connection:{
        user : 'root',
        password : 'pc159357',        
        database : 'ecoleta',
        insecureAuth : true        
    },
    migrations:{
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds:{
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    }
}