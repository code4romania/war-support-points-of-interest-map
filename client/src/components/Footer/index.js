import React from 'react';
import { Divider, Layout, Typography } from 'antd';
import { Trans } from '@lingui/macro';

const { Paragraph } = Typography;
const { Footer } = Layout;

const FooterFragment = () => {
  return (
    <Footer className="footer">
      <div className="container">
        <Paragraph>
          <Trans>
            If you’d like to report any mistakes, inconsistencies or omissions please let us know by
            writing an e-mail to contact@code4.ro. We’ll do our best to integrate your feedback.
          </Trans>
        </Paragraph>
        <Divider />
        <Paragraph>
          &copy; {new Date().getFullYear()} Sprijin de urgență.{' '}
          <Trans>A Code for Romania solution.</Trans>
        </Paragraph>
      </div>
    </Footer>
  );
};

export default FooterFragment;
