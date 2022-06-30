import type { ApolloQueryResult } from '@apollo/client';
import { useLoaderData } from '@remix-run/react';
import type { ReactElement } from 'react';
import Home from '@angrr/components/pages/Home';

import apollo from '../utils/graphql';
import { ListDocument } from '../utils/schema';
import type { ListQuery } from '../utils/schema';

export function loader() {
    return apollo.query({ query: ListDocument });
}

export default function Index(): ReactElement {
    const query = useLoaderData<ApolloQueryResult<ListQuery>>();

    return <Home query={query} />;
}
