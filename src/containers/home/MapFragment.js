import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Col, Row } from 'antd';
import { CenterDetails } from '../../components/CenterDetails';
import { InteractiveMap } from '../../components/InteractiveMap';
import { useCreateMap } from '../../hooks/map/useCreateMap';
import { useMap, useSelectedCenterPk } from '../../store';
import { useClearSelectedMarkers } from '../../hooks/map/useClearSelectedMarkers';
import { useCreateMapClusters } from '../../hooks/map/useCreateMapClusters';

export const MapFragment = ({ points }) => {
  const mapRef = useRef(null);

  useCreateMap(mapRef);
  const { map, isMapLoading } = useMap();
  const createMapClusters = useCreateMapClusters();
  createMapClusters(points);

  const { selectedCenterPk, clearSelectedCenterPk } = useSelectedCenterPk();
  const clearSelectedMarkers = useClearSelectedMarkers();

  const details = useMemo(
    () => points.find(({ pk }) => pk === selectedCenterPk),
    [points, selectedCenterPk],
  );

  const showRightPanel = Boolean(selectedCenterPk);

  const onCloseRightPanel = useCallback(() => {
    clearSelectedCenterPk();
    clearSelectedMarkers();
  }, [clearSelectedCenterPk, clearSelectedMarkers]);

  useEffect(() => {
    if (!map) return;

    map.getViewPort().resize();
  }, [map, showRightPanel]);

  return (
    <Row type="flex" gutter={30} style={{ height: '100%' }}>
      <Col
        xs={{ span: showRightPanel ? 0 : 24 }}
        sm={{ span: showRightPanel ? 12 : 24 }}
        lg={{ span: showRightPanel ? 16 : 24 }}
      >
        <InteractiveMap mapRef={mapRef} isMapLoading={isMapLoading} />
      </Col>
      <Col
        xs={{ span: showRightPanel ? 24 : 0 }}
        sm={{ span: showRightPanel ? 12 : 0 }}
        lg={{ span: showRightPanel ? 8 : 0 }}
      >
        <CenterDetails details={details} onClose={onCloseRightPanel} />
      </Col>
    </Row>
  );
};

export default { MapFragment };
