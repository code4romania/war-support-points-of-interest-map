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
          The Sprijin de Urgență Platform is an integrated resource management system that the civil
          society and all individuals and legal entities can bring together in order to help in
          critical situations. Depending on your current needs, choose one of the options below.
        </Trans>
      </Paragraph>
      <Paragraph>
        <Trans>
          Sprijin de Urgență is a project developed by Code for Romania for the Department of
          Emergency Situations for managing resources and needs in times of crisis.
        </Trans>
      </Paragraph>
    </Hero>
  );
};
