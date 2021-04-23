import INiche from './Niche';
import IMonetization from './Monetization';

export default interface IEFConfig {
  niches: Array<INiche>,
  monetizations: Array<IMonetization>,
  requestStatus: string,
}
