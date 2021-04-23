import { IMonetization, INiche} from '../../../../Filters/types';

export default interface Listing {
  id: string,
  listing_number: number,
  public_title: string,
  average_monthly_net_profit: number,
  listing_price: number,
  monetizations: Array<IMonetization>,
  niches: Array<INiche>,
  listing_status: string,
}
