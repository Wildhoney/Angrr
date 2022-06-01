import React, { ReactElement } from 'react';
import { Props } from './types';

export default function Home({ data }: Props): ReactElement {
    return (
        <section>
            <h1>Todos ({data.list.length})</h1>

            {data.list.map((todo) => (
                <li key={todo.id}>{todo.description}</li>
            ))}
        </section>
    );
}
