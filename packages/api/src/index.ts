import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import TodoResolver from './resolvers/todo';
import Todo from './entities/todo';

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
            path: `${__dirname}/schema.graphql`,
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
