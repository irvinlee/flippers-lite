import { INiche, IMonetization} from '../../common/types';

export default interface IEFConfig {
  niches: Array<INiche>,
  monetizations: Array<IMonetization>,
  requestStatus: string,
}
