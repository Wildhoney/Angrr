import { useLoaderData } from '@remix-run/react';
import { ListDocument, ListQuery } from '../utils/schema';
import apollo from '../utils/graphql';
import { ApolloQueryResult } from '@apollo/client';
import { ReactElement } from 'react';

export function loader() {
    return apollo.query({ query: ListDocument });
}

export default function Index(): ReactElement {
    const query = useLoaderData<ApolloQueryResult<ListQuery>>();

    return (
        <section>
            <h1>Todos ({query.data.list.length})</h1>

            {query.data.list.map((todo) => (
                <li key={todo.id}>{todo.description}</li>
            ))}
        </section>
    );
}
