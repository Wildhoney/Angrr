import { ReactElement } from 'react';

import { Props } from './types';

export default function Paragraph({ children }: Props): ReactElement {
    return <p>{children}</p>;
}
