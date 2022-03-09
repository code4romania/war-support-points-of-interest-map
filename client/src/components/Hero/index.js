import React from 'react';
import { Col, Row, Typography } from 'antd';
import { Trans } from '@lingui/macro';
import { Link } from 'react-router-dom';
import { HeroType } from '../../types';
import GovLogo from '../../images/gov_ro.svg';
import DsuLogo from '../../images/dsu_logo.svg';
import CfRLogo from '../../images/footer_CfR.svg';

const { Title, Text } = Typography;

export const Hero = ({ heroImage, title, subTitle, children, titleLevel }) => {
  return (
    <div className="hero-container">
      <Row className="container partners" type="flex" align="middle" justify="end">
        <Text>
          <Trans>A Project In Partnership With</Trans>
        </Text>
        <Link to={{ pathname: 'https://gov.ro/' }} target="_blank">
          <img src={GovLogo} alt="Romanian GOV Logo" />
        </Link>
        <Link to={{ pathname: 'http://www.dsu.mai.gov.ro/' }} target="_blank">
          <img src={DsuLogo} alt="DSU Logo" />
        </Link>
        <Text>
          <Trans>done by</Trans>
        </Text>
        <Link to={{ pathname: 'https://www.code4.ro/' }} target="_blank">
          <img src={CfRLogo} alt="DSU Logo" />
        </Link>
      </Row>
      <Row className="help">
        <Row className="container" type="flex" justify="end">
          <Trans>
            Find out all the information you need on{' '}
            <Link to={{ pathname: 'https://www.dopomoha.ro' }} target="_blank">
              Dopomoha.ro
            </Link>
          </Trans>
        </Row>
      </Row>
      <Row
        className="container hero-body"
        type="flex"
        align="middle"
        justify="space-between"
        gutter={[0, { xs: 24, sm: 24, md: 0, lg: 0 }]}
      >
        <Col className="hero-img" xs={24} md={{ span: 12, order: 2 }}>
          <div style={{ backgroundImage: `url(${heroImage})` }} />
        </Col>
        <Col xs={24} md={11}>
          {subTitle && <Text type="secondary">{subTitle}</Text>}
          <Title level={titleLevel} className="hero-title">
            {title}
          </Title>
          {children}
        </Col>
      </Row>
    </div>
  );
};

Hero.defaultProps = {
  heroImage: null,
  subTitle: null,
  titleLevel: 2,
};

Hero.propTypes = HeroType;

export default { Hero };
