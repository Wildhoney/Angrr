import React, { ReactElement } from 'react';
import { Text } from 'react-native';

export default function Paragraph({ children }): ReactElement {
    return <Text>{children}</Text>;
}
