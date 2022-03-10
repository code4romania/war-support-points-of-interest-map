import React from 'react';
import { Button, Typography } from 'antd';
import { Trans } from '@lingui/macro';
import { Hero } from '../../components/Hero';
import heroImage from '../../images/Hands4.png';

const { Paragraph } = Typography;

export default () => {
  return (
    <Hero heroImage={heroImage} title={<Trans id="404.title" />}>
      <Paragraph>
        <Trans id="404.sorry_message" />
      </Paragraph>
      <Button type="primary" className="hero-btn-primary" href="/">
        <Trans>Back to home page</Trans>
      </Button>
    </Hero>
  );
};
