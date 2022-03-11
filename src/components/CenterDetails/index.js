import React, { useMemo } from 'react';
import { Button, Card, Col, Icon, Row, Descriptions, Empty } from 'antd';
import { Trans } from '@lingui/macro';
import { CenterDetailsTitle } from '../CenterDetailsTitle';

export const CenterDetails = ({ onClose, isLoading, details, onClick }) => {
  const detailsItems = useMemo(() => {
    if (!details) {
      return [];
    }

    return [
      {
        label: <Trans>Name</Trans>,
        value: details.name,
      },
      {
        label: <Trans>Email</Trans>,
        value: <a href={`mailto:${details.email}`}>{details.email}</a>,
      },
    ].filter(({ value }) => value);
  }, [details]);

  const hasDetailItems = detailsItems.length > 0;

  return (
    <Card className="center-details" loading={isLoading}>
      <Row type="flex" gutter={10} className="center-details-header">
        <CenterDetailsTitle
          address={details?.address ?? ''}
          locality={details?.locality}
          countyCode={details?.countyCode ?? details?.county}
          lat={details?.lat}
          lng={details?.lng}
        />
        <Col span={2}>
          <Icon type="close" onClick={onClose} />
        </Col>
      </Row>

      {hasDetailItems ? (
        <Descriptions column={1}>
          {detailsItems.map(({ label, value }) => (
            <Descriptions.Item key={label} label={label}>
              {value}
            </Descriptions.Item>
          ))}
        </Descriptions>
      ) : (
        <Row type="flex" align="middle" justify="space-around" style={{ height: '100%' }}>
          <Empty description={<Trans>Information missing</Trans>} />
        </Row>
      )}

      {details?.phoneNumber ? (
        <Button
          className="call-center-btn"
          icon="phone"
          size="large"
          type="primary"
          ghost
          block
          disabled={!hasDetailItems || !details?.phoneNumber}
          href={`tel:${details?.phoneNumber}`}
        >
          <span>{details?.phoneNumber ?? <Trans>Phone number missing</Trans>}</span>
        </Button>
      ) : (
        <Button
          className="call-center-btn"
          size="large"
          type="primary"
          ghost
          block
          disabled={!hasDetailItems || !details?.phoneNumber}
          onClick={onClick}
        >
          <span>
            <Trans>Call center</Trans>
          </span>
        </Button>
      )}
    </Card>
  );
};

export default { CenterDetails };
