import React, { Fragment } from 'react';
import { Heading } from 'react-bulma-components';

import NavbarFooter from '../../components/common/navbar_footer';
import SectionWrapper from '../../components/common/section_wrapper';
import Favortes from '../../components/favorites';
import Favorites from '../../components/favorites';

const FavoritesScreen = () => {
    return(
        <Fragment>
            <SectionWrapper>
                <Heading className='has-text-centered has-text-white'> Favoritos </Heading>
                <Favorites/>
            </SectionWrapper>
            <NavbarFooter />
        </Fragment>
    )
}

export default FavoritesScreen;