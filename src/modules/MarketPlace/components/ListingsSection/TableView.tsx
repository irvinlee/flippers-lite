import styled from 'styled-components';
import { IListingDisplayComponentProps } from '../../types';
import { Link } from 'react-router-dom';
import { IListing } from '../../modules/Listing/types';
import NichesAndStateBox from './NichesAndStateBox';
import { formatCurrency } from '../../../common/utils/helpers';

const Wrapper = styled.div`
  table {
    th {
      padding: 10px 15px;      
      font-size: 1.6rem;
      text-align: center;
      color: rgb(102, 107, 112);
    }
    tr {
      td {
        text-align: center;
        font-size: 1.4rem;

        &:first-child {
          border-left: 5px transparent solid;          
        }
      }
      &.new-listing {
        td {
          border-left-color: rgb(245, 166, 34);
        }
      }
    }
  }
`;


export default function TableView({listings, metaData, page}: IListingDisplayComponentProps) {
  
  if(!listings.length) {
    return null;
  }

  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th>
              Listing
            </th>
            <th>
              Niches &amp; State
            </th>
            <th>
              Monetization
            </th>
            <th>
              Price
            </th>
            <th>
              Avg Monthly Profit
            </th>            
            <th>
              Multiple
            </th>
            <th>
              Pricing Period
            </th>
          </tr>
        </thead>
        <tbody>
          {
            listings.map(
              (listing: IListing) => {
                const {
                  id, 
                  listing_number, 
                  new_listing, 
                  pricing_period_months, 
                  listing_multiple, 
                  average_monthly_net_profit, 
                  listing_price, 
                  monetizations,
                } = listing;

                return (
                  <tr key={id} className={`${new_listing ? 'new-listing' : ''}`}>
                    <td>
                      <Link to={`/listing/${listing_number}`}>#{listing_number}</Link>
                    </td>
                    <td>
                      <NichesAndStateBox listing={listing} />
                    </td>
                    <td>
                      {monetizations.map(item => item.monetization).join(', ')}
                    </td>
                    <td>
                      {formatCurrency(listing_price)}
                    </td>
                    <td>
                      {formatCurrency(average_monthly_net_profit)}
                    </td>
                    <td>
                      {listing_multiple}x
                    </td>
                    <td>
                      {pricing_period_months} {`${pricing_period_months > 1 ? 'months' : 'month'}`}
                    </td>
                  </tr>
                )              
              }
            )
          }
        </tbody>
      </table>
    </Wrapper>
  );
}
