import React, { ReactElement } from 'react';

import { Props } from './types';

export default function Home({ query }: Props): ReactElement {
    return (
        <section>
            <h1>Todos ({query.data.list.length})</h1>

            {query.data.list.map((todo) => (
                <li key={todo.id}>{todo.description}</li>
            ))}
        </section>
    );
}
