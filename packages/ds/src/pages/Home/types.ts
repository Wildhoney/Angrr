import { ApolloQueryResult } from '@apollo/client';
import { ListQuery } from '@angrr/ui.web';

export type Props = {
    data: ApolloQueryResult<ListQuery['data']>;
};
