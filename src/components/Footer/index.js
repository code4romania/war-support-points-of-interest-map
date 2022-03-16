import React from 'react';
import { Col, Divider, Layout, Row, Typography } from 'antd';
import { Trans } from '@lingui/macro';

const { Paragraph } = Typography;
const { Footer } = Layout;

const FooterFragment = () => {
  return (
    <Footer className="footer">
      <Row className="container" align="middle" type="flex">
        <Col xs={24} lg={14}>
          <Paragraph>
            <Trans>
              If you'd like to report any mistakes, inconsistencies or omissions please let us know
              by writing an e-mail to <a href="mailto:dopomoha@code4.ro">dopomoha@code4.ro</a>.
              We'll do our best to integrate your feedback.
            </Trans>
          </Paragraph>
        </Col>
        <Divider />
        <Paragraph type="secondary">
          &copy; {new Date().getFullYear()} Dopomoha. <Trans>A Code for Romania solution</Trans>
        </Paragraph>
      </Row>
    </Footer>
  );
};

export default FooterFragment;
