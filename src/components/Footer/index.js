import React from 'react';
import { Col, Layout, Row, Typography } from 'antd';
import { Trans } from '@lingui/macro';
import { Link } from 'react-router-dom';
import CfRTaskForceLogo from '../../images/code_logo_colored.svg';
import VercelLogo from '../../images/powered-by-vercel.svg';

const { Paragraph, Text } = Typography;
const { Footer } = Layout;

const FooterFragment = () => {
  return (
    <Footer className="footer">
      <Row className="container developed" align="middle" type="flex" justify="end">
        <Text>
          <Trans>Project Developed In Program</Trans>
        </Text>
        <Link to={{ pathname: 'https://code4.ro/ro/code-for-romania-war-task-force' }}>
          <img src={CfRTaskForceLogo} alt="Code 4 Romania logo" />
        </Link>
      </Row>
      <Row className="links">
        <Row className="container" type="flex">
          <Col xs={24} md={12} xl={8}>
            <ul>
              <li>
                <Trans>Useful Links</Trans>
              </li>

              <li>
                <Link
                  to={{ pathname: 'https://sprijindeurgenta.ro/about-project' }}
                  target="_blank"
                >
                  <Trans>About the Project</Trans>
                </Link>
              </li>
              <li>
                <Link target="_blank" to={{ pathname: 'https://dopomoha.ro/' }}>
                  Dopomoha.ro
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to={{
                    pathname: 'https://github.com/code4romania/war-support-points-of-interest-map',
                  }}
                >
                  <Trans>Source code</Trans>
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={24} md={12} xl={8}>
            <ul>
              <li>
                <Trans>Legal Information</Trans>
              </li>

              <li>
                <Link
                  to={{ pathname: 'https://sprijindeurgenta.ro/confidentiality-policy' }}
                  target="_blank"
                >
                  <Trans>Privacy Policy</Trans>
                </Link>
              </li>
              <li>
                <Link
                  to={{ pathname: 'https://sprijindeurgenta.ro/confidentiality-policy' }}
                  target="_blank"
                >
                  <Trans>Terms and Conditions</Trans>
                </Link>
              </li>
            </ul>
            <br />
          </Col>
          <Col xs={24} md={24} xl={8}>
            <Paragraph>&copy; {new Date().getFullYear()} Code for Romania</Paragraph>
            <Paragraph>
              <Trans>
                Independent Non-Governmental Organization, Politically Unaffiliated and Apolitical
              </Trans>
            </Paragraph>
            <Link
              to={{
                pathname: 'https://vercel.com/?utm_source=war-taskforce&utm_campaign=oss',
              }}
              target="_blank"
            >
              <img src={VercelLogo} alt="Vercel logo" />
            </Link>
          </Col>
        </Row>
      </Row>
    </Footer>
  );
};

export default FooterFragment;
