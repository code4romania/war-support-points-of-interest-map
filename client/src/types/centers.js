import { arrayOf, bool, number, oneOfType, shape, string } from 'prop-types';

export const CenterDetailsTitleType = {
  countyCode: string,
  lat: oneOfType([string, number]),
  lng: oneOfType([string, number]),
  locality: string,
  address: string.isRequired,
};

export const CenterDetailsType = {
  isLoading: bool.isRequired,
  details: shape({
    ...CenterDetailsTitleType,
    schedule: string,
    testTypes: arrayOf(number),
  }),
};

export default { CenterDetailsTitleType };
