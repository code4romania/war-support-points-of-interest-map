import React, { useCallback, useState } from 'react';
import { MapFragment } from './MapFragment';
import { SearchFragment } from './SearchFragment';
import { useGeoCodeSearch } from '../../hooks/map/useGeoCodeSearch';
import { zoomToNearestPointToPosition } from '../../utils';
import { useMap, useSelectedCenterPk } from '../../store';
import { useClearSelectedMarkers } from '../../hooks/map/useClearSelectedMarkers';
import { helpCenters } from '../../data';

export const SearchMapFragment = () => {
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  const { map, mapPlatform } = useMap();

  const { clearSelectedCenterPk } = useSelectedCenterPk();
  const clearSelectedMarkers = useClearSelectedMarkers();

  const geoCodeSearch = useGeoCodeSearch(mapPlatform, {
    onSuccess({ items }) {
      setIsLoadingLocation(false);
      if (!map || items.length === 0) return;

      const [firstItem] = items;
      const { position } = firstItem;

      zoomToNearestPointToPosition(map, position, helpCenters);
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
      zoomToNearestPointToPosition(
        map,
        { lat: coords.latitude, lng: coords.longitude },
        helpCenters,
      );
    });
  }, [clearSelectedMarkers, map]);

  return (
    <>
      <SearchFragment
        isLoading={isLoadingLocation}
        onSearch={onSearchHandler}
        onSelectResult={onSelectResultHandler}
      />
      <MapFragment />
    </>
  );
};

export default { SearchMapFragment };
