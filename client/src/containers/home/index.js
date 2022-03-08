import React from 'react';
import Layout from '../../components/Layout';
import HeroFragment from './HeroFragment';
import { MapFragment } from './MapFragment';

export default () => {
  return (
    <Layout hero={<HeroFragment />}>
      <br />
      <MapFragment />
      <br />
    </Layout>
  );
};
