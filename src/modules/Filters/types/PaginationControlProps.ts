export default interface IPaginationCtonrolProps {
  currentPage?: number,
  itemsPerPage?: number,
  totalNumberOfPages?: number,
  onChangePage: Function,
  onChangeItemsPerPage: Function,
}
