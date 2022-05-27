import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid } from 'semantic-ui-react'

import { FETCH_POSTS_QUERY } from '../utils/graphql';

function Home() {
  // eslint-disable-next-line
  const {
    loading,
    data: { getPosts: posts },
  } = useQuery(FETCH_POSTS_QUERY);

  return (
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
      </Grid.Column>
    </Grid.Row>
  </Grid>

  );
}

export default Home;
