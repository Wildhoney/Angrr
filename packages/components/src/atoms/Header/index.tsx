import { ReactElement } from 'react';

import { Props } from './types';

export default function Header({ children }: Props): ReactElement {
    return <h1>{children}</h1>;
}
