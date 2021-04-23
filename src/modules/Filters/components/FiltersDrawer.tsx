import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEFConfig } from '../redux/actions';
import { selectNiches, selectMonetizations, selectRequestStatus } from '../redux/selectors';
import { RequestStatus } from '../../common/types';

export default function FiltersDrawer() {
  const dispatch = useDispatch();
  const niches = useSelector(selectNiches);
  const monetizations = useSelector(selectMonetizations);
  const configRequestStatus = useSelector(selectRequestStatus);

  useEffect(
    () => {
      if(configRequestStatus === RequestStatus.notStarted) {
        dispatch(fetchEFConfig());
      }
    }, [dispatch, configRequestStatus]
  );

  return (
    <div>
      Filters
    </div>
  );
}
