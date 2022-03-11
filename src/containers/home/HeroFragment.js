import React from 'react';
import { Typography } from 'antd';
import { Trans } from '@lingui/macro';
import { Hero } from '../../components/Hero';
import heroImage from '../../images/Hands4.png';

const { Paragraph } = Typography;

export default () => {
  return (
    <Hero
      heroImage={heroImage}
      title={<Trans>Integrated resource and demand management platform</Trans>}
    >
      <Paragraph>
        <Trans>
          The Sprijin de Urgență Platform is an integrated resource management system that civil
          society and all individuals and legal entities can bring together to help in critical
          situations. Individuals who wish to provide food, clothing, bedding, tents or other
          donations or who wish to volunteer can do so directly at dedicated collection points. From
          there, resources will be directed where they are most needed.
        </Trans>
      </Paragraph>
    </Hero>
  );
};
