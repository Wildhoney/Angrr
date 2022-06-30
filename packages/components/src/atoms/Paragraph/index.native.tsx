import { ReactElement } from 'react';
import { Text } from 'react-native';

import { Props } from './types';

export default function Paragraph({ children }: Props): ReactElement {
    return <Text>{children}</Text>;
}
