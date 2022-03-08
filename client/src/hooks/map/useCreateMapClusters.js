import { useCallback } from 'react';
import { useMap, useSelectedCenterPk } from '../../store';
import ClusterLayerBuilder from './ClusterLayerBuilder';
import { useClearSelectedMarkers } from './useClearSelectedMarkers';
import { useZoomToMarker } from './useZoomToMarker';
import { DEFAULT_MAP_OPTIONS } from '../../constants';

const { mapBounds } = DEFAULT_MAP_OPTIONS;

export const useCreateMapClusters = () => {
  const { map } = useMap();
  const { setSelectedCenterPk } = useSelectedCenterPk();
  const zoomToMarker = useZoomToMarker();
  const clearSelectedMarkers = useClearSelectedMarkers();

  const onClusterClick = useCallback(
    (marker) => {
      map.getViewModel().setLookAtData(
        {
          position: marker.getData().getPosition(),
          zoom: map.getZoom() + 2,
        },
        true,
      );
    },
    [map],
  );

  const onMarkerClick = useCallback(
    (marker) => {
      if (!marker) return;

      clearSelectedMarkers();

      zoomToMarker(marker);

      setSelectedCenterPk(marker.getData().getData().pk);
    },
    [clearSelectedMarkers, setSelectedCenterPk, zoomToMarker],
  );

  return useCallback(
    (points) => {
      if (!map) return;

      const markers = map
        .getLayers()
        .asArray()
        .filter((layer) => layer.getProvider().providesDomMarkers())
        .map((layer) => layer.getProvider().requestDomMarkers(mapBounds, 20))
        .flat()
        .filter((marker) => marker.getData());

      if (markers.length > 0) return;

      map.addLayer(ClusterLayerBuilder.buildClusterLayer(points, onClusterClick, onMarkerClick));
    },
    [map, onClusterClick, onMarkerClick],
  );
};

export default { useCreateMapClusters };
