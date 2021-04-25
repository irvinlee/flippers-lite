export default interface FilterConfig {  
  selectedNiches: Array<string>,
  selectedMonetizations: Array<string>,
  searchQuery: string,
  selectedStatuses: Array<string>,
  listingPriceFrom?: number,
  listingPriceTo?: number,
  page?: number,
  limit?: number
}
