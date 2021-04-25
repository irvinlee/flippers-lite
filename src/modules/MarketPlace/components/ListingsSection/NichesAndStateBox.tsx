import styled from 'styled-components';
import { IListing } from '../../modules/Listing/types';
import ListingStatus from './ListingStatus';
import { getNicheImageUrl } from '../../../common/utils/helpers';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  img {
    max-width: 80px;
    height: 56px;
  }
`;

const NicheInfoWrapper = styled.div`  
  padding-left: 15px;
  text-align: left;
`;

const NicheText = styled.div`
`;

export default function NichesAndStateBox({listing}: {listing: IListing}) {
  const mainNiche = listing.niches[0].niche;

  return (
    <Wrapper>
      <img src={getNicheImageUrl(listing.niche_image)} alt={mainNiche}/>
      <NicheInfoWrapper>
        <NicheText>{mainNiche}</NicheText>
        <ListingStatus isNew={listing.new_listing} status={listing.listing_status}/>
      </NicheInfoWrapper>
    </Wrapper>
  );
}
