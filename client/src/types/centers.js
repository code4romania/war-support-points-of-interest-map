import { number, oneOfType, string } from 'prop-types';

export const CenterDetailsTitleType = {
  countyCode: string,
  lat: oneOfType([string, number]),
  lng: oneOfType([string, number]),
  locality: string,
  address: string.isRequired,
};

export default { CenterDetailsTitleType };
