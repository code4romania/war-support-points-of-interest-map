import React from 'react';
import Layout from '../../components/Layout';
import HeroFragment from './HeroFragment';
import { SearchMapFragment } from './SearchMapFragment';

export default () => {
  return (
    <Layout hero={<HeroFragment />}>
      <SearchMapFragment />
      <br />
    </Layout>
  );
};
