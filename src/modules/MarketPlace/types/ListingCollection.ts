import { IListing } from '../modules/Listing/types';

export default interface IListingCollection {
  listings: Array<IListing>,
  requestStatus: string,
  count?: number,
  pages?: number,
  page?: number,
  limit?: number,
}
