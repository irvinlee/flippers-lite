import { IListing } from '../modules/Listing/types';
import IQueryResultMetaData from './QueryResultMetaData';

export default interface IListingDisplayComponentProps {
  listings: Array<IListing>,
  metaData: IQueryResultMetaData,
  page?: number,
};
