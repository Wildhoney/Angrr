import { ApolloServer } from 'apollo-server';
import path from 'node:path';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { DataSource } from 'typeorm';

import Todo from './entities/todo';
import TodoResolver from './resolvers/todo';

const db = new DataSource({
    type: 'sqlite',
    database: `${__dirname}/db.sqlite`,
    entities: [Todo],
    synchronize: true,
    logging: true,
});

async function main(): Promise<void> {
    await db.initialize();

    const schema = await buildSchema({
        emitSchemaFile: {
            path: path.join(__dirname, 'schema.graphql'),
            commentDescriptions: true,
            sortedSchema: true,
        },
        resolvers: [TodoResolver],
    });

    const server = new ApolloServer({ schema, context: { db } });
    await server.listen(4000);
    console.log('Server has started!');
}

main();
