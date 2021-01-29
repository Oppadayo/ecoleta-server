import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'mysql',
    connection:{        
        user : 'root',
        password : 'pc2910',
        database : 'ecoleta',
        insecureAuth : true
    },
});

export default connection;