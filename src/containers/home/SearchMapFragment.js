import React, { useCallback, useState } from 'react';
import { Trans } from '@lingui/macro';
import { Tabs, Typography } from 'antd';
import { MapFragment } from './MapFragment';
import { SearchFragment } from './SearchFragment';
import { useGeoCodeSearch } from '../../hooks/map/useGeoCodeSearch';
import { zoomToNearestPointToPosition } from '../../utils';
import { useMap, useSelectedCenterPk } from '../../store';
import { useClearSelectedMarkers } from '../../hooks/map/useClearSelectedMarkers';
import { policeStations, medicalClinics, banks } from '../../data';

const { Paragraph } = Typography;
const { TabPane } = Tabs;

const tabs = [
  {
    key: 'police',
    label: <Trans>Police</Trans>,
  },
  {
    key: 'medical',
    label: <Trans>Medical clinics</Trans>,
  },
  {
    key: 'bank',
    label: <Trans>Banks</Trans>,
  },
];

const searchTitles = {
  police: <Trans>See here where your nearest police station is:</Trans>,
  medical: <Trans>See here where your nearest medical clinic is:</Trans>,
  bank: <Trans>See here where your nearest bank is:</Trans>,
};

export const SearchMapFragment = () => {
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [points, setPoints] = useState(policeStations);
  const [searchTitle, setSearchTitle] = useState(searchTitles.police);

  const { map, mapPlatform } = useMap();

  const { clearSelectedCenterPk } = useSelectedCenterPk();
  const clearSelectedMarkers = useClearSelectedMarkers();

  const geoCodeSearch = useGeoCodeSearch(mapPlatform, {
    onSuccess({ items }) {
      setIsLoadingLocation(false);
      if (!map || items.length === 0) return;

      const [firstItem] = items;
      const { position } = firstItem;

      zoomToNearestPointToPosition(map, position, points);
    },
  });

  const onSearchHandler = useCallback(
    (searchText) => {
      clearSelectedCenterPk();
      setIsLoadingLocation(true);
      geoCodeSearch(searchText);
    },
    [clearSelectedCenterPk, geoCodeSearch],
  );

  const onSelectResultHandler = useCallback(() => {
    clearSelectedMarkers();
    setIsLoadingLocation(true);
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setIsLoadingLocation(false);
      zoomToNearestPointToPosition(map, { lat: coords.latitude, lng: coords.longitude }, points);
    });
  }, [clearSelectedMarkers, map, points]);

  const onTabChangeHandler = useCallback(
    (key) => {
      clearSelectedCenterPk();
      map
        .getLayers()
        .asArray()
        .forEach((layer) => {
          map.removeLayer(layer);
        });

      switch (key) {
        case 'police':
          setPoints(policeStations);
          setSearchTitle(searchTitles.police);
          break;
        case 'medical':
          setPoints(medicalClinics);
          setSearchTitle(searchTitles.medical);
          break;
        case 'bank':
          setPoints(banks);
          setSearchTitle(searchTitles.bank);
          break;
        default:
          break;
      }
    },
    [clearSelectedCenterPk, map],
  );

  return (
    <>
      <SearchFragment
        isLoading={isLoadingLocation}
        onSearch={onSearchHandler}
        onSelectResult={onSelectResultHandler}
        searchTitle={searchTitle}
      />
      <Tabs type="card" onChange={onTabChangeHandler}>
        {tabs.map(({ key, label }) => (
          <TabPane tab={label} key={key} />
        ))}
      </Tabs>
      <MapFragment points={points} />
      <br />
      <Paragraph>
        <Trans>
          The map is continuously updated. If you know of any official collecting center that we did
          not add to the map, please send us an email with its details at{' '}
          {<a href="mailto:dopomoha@code4.ro">dopomoha@code4.ro</a>}.
        </Trans>
      </Paragraph>
    </>
  );
};

export default { SearchMapFragment };
