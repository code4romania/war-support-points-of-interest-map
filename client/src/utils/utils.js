import { camelCase, isArray, isObject, snakeCase } from 'lodash';

const createObjectKeyMapper = (keyMappingFunction) => {
  function mapper(data) {
    if (isArray(data)) {
      return data.map(mapper);
    }

    if (isObject(data)) {
      return Object.entries(data).reduce(
        (o, [key, value]) => ({
          ...o,
          [keyMappingFunction(key)]: mapper(value),
        }),
        {},
      );
    }

    return data;
  }

  return mapper;
};

export const mapKeysToCamelCase = createObjectKeyMapper(camelCase);
export const mapKeysToSnakeCase = createObjectKeyMapper(snakeCase);

const getDistanceBetweenTwoPoints = (x, y) => {
  const dx = x.lng - y.lng;
  const dy = x.lat - y.lat;

  const sumOfSquares = dx ** 2 + dy ** 2;

  return Math.sqrt(sumOfSquares);
};

export const getNearestPoint = (origin, points) => {
  return points.reduce(
    ({ minLength, nearestPoint }, currentPoint) => {
      const currentLength = getDistanceBetweenTwoPoints(origin, currentPoint);

      if (minLength === 0 || currentLength < minLength) {
        return { minLength: currentLength, nearestPoint: currentPoint };
      }

      return { minLength, nearestPoint };
    },
    { minLength: 0, nearestPoint: null },
  );
};

export const sortCoordinates = (x, y) => {
  return [parseFloat(x.lat), parseFloat(x.lng), parseFloat(y.lat), parseFloat(y.lng)].sort();
};