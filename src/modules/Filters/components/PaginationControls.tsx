import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { IPaginationCtonrolProps } from '../types';
import { useSelector } from 'react-redux';
import { selectMarketplaceMetaData } from '../redux/selectors';

const Wrapper = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: flex-start;
  
  select {
    margin-left: 20px;
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationControls({
  currentPage = 1,
  itemsPerPage = 10,
  onChangePage,
  onChangeItemsPerPage,
}: IPaginationCtonrolProps) {
  const classes = useStyles();
  const marketplaceMetaData = useSelector(selectMarketplaceMetaData);

  return (
    <Wrapper>
      <Pagination
        page={currentPage}
        count={marketplaceMetaData.pages}
        variant="outlined"
        shape="rounded"
        onChange={(_e, page) => onChangePage(page)}
      />
      <select value={itemsPerPage} onChange={(e) => onChangeItemsPerPage(e.target.value)}>
        <option value="10">
          10 Results
        </option>
        <option value="20">
          20 Results
        </option>
        <option value="30">
          30 Results
        </option>
      </select>
    </Wrapper>
  );
}
