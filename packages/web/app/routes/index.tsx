import Home from '@angrr/components/pages/Home';
import { ListDocument } from '@angrr/types/schema';
import type { ListQuery } from '@angrr/types/schema';
import type { ApolloQueryResult } from '@apollo/client';
import { useLoaderData } from '@remix-run/react';
import type { ReactElement } from 'react';

import apollo from '../utils/graphql';

export function loader() {
    return apollo.query({ query: ListDocument });
}

export default function Index(): ReactElement {
    const { data } = useLoaderData<ApolloQueryResult<ListQuery>>();

    return <Home data={data} />;
}
