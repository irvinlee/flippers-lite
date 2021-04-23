export default interface IQueryParams {
  listing_status: Array<string>,
  monetization: Array<string>,
  niche: Array<string>,
  listing_price_from?: number,
  listing_price_to?: number,
  page: number,
  limit: number,
}
