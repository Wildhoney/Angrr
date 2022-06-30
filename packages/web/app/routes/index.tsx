import type { ApolloQueryResult } from '@apollo/client';
import { useLoaderData } from '@remix-run/react';
import type { ReactElement } from 'react';
import Home from '@angrr/components/pages/Home';

import apollo from '../utils/graphql';
import { ListDocument } from '@angrr/types/schema';
import type { ListQuery } from '@angrr/types/schema';

export function loader() {
    return apollo.query({ query: ListDocument });
}

export default function Index(): ReactElement {
    const query = useLoaderData<ApolloQueryResult<ListQuery>>();

    return <Home data={query.data} />;
}
