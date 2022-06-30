import Button from '@angrr/components/atoms/Button';
import Header from '@angrr/components/atoms/Header';
import Paragraph from '@angrr/components/atoms/Paragraph';
import { ReactElement } from 'react';

import { Props } from './types';

export default function Home({ data }: Props): ReactElement {
    return (
        <section>
            <Header>{`Todos (${data.list.length})`}</Header>
            <Button label="Add Todo" onPress={console.log} />

            <ul>
                {data.list.map((todo) => (
                    <li key={todo.id}>
                        <Paragraph>{todo.description}</Paragraph>
                        <Button label="Remove" onPress={console.log} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
