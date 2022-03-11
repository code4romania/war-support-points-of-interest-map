import React from 'react';
import { Col, Icon, Row, Typography } from 'antd';
import { Trans } from '@lingui/macro';
import { Link } from 'react-router-dom';
import { CenterDetailsTitleType } from '../../types/centers';

const { Paragraph, Text } = Typography;

export const CenterDetailsTitle = ({ address, locality, countyCode, lat, lng }) => {
  const showSubtext = locality || countyCode;

  return (
    <Col span={22} className="center-details-title">
      <Row>
        <Col span={2}>
          <Icon type="environment" />
        </Col>
        <Col span={22}>
          <Paragraph className="center-details-title__text">{address} </Paragraph>

          <Paragraph>
            {showSubtext && (
              <Text className="center-details-title__subtext">
                {locality && countyCode ? `${locality}, ${countyCode}` : locality ?? countyCode}
              </Text>
            )}{' '}
            <Text className="center-details-title__link" underline>
              (
              <Link
                to={{
                  pathname: `https://maps.google.com?q=${parseFloat(lat, 10)},${parseFloat(
                    lng,
                    10,
                  )}`,
                }}
                target="_blank"
              >
                <Trans>see how to get there</Trans>
              </Link>
              )
            </Text>
          </Paragraph>
        </Col>
      </Row>
    </Col>
  );
};

CenterDetailsTitle.defaultProps = {
  streetNumber: null,
  locality: null,
  countyCode: null,
};

CenterDetailsTitle.propTypes = CenterDetailsTitleType;

export default { CenterDetailsTitle };
