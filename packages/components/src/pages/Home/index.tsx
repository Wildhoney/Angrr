import Header from '@angrr/components/atoms/Header';
import { ReactElement } from 'react';
import Paragraph from '@angrr/components/atoms/Paragraph';

import { Props } from './types';

export default function Home({ data }: Props): ReactElement {
    return (
        <section>
            <Header>{`Todos (${data.list.length})`}</Header>

            <ul>
                {data.list.map((todo) => (
                    <li key={todo.id}>
                        <Paragraph>{todo.description}</Paragraph>
                    </li>
                ))}
            </ul>
        </section>
    );
}
