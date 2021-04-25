import { IMonetization, INiche} from '../../../../common/types';

export default interface Listing {
  id: string,
  listing_number: number,
  public_title: string,
  average_monthly_net_profit: number,
  listing_price: number,
  monetizations: Array<IMonetization>,
  niches: Array<INiche>,
  listing_status: string,
  niche_image: string,
  new_listing: boolean,
  listing_multiple: string,
  pricing_period_months: number,
}
