import { ReactElement } from 'react';

import { Props } from './types';

export default function Button({ label, onPress }: Props): ReactElement {
    return <button onClick={onPress}>{label}</button>;
}
