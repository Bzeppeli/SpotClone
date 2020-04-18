import React, { Fragment } from 'react';
import { Heading } from 'react-bulma-components';

import SectionWrapper from '../../components/common/section_wrapper';
import NavbarFooter from '../../components/common/navbar_footer';
import Search from '../../components/search';

const SearchScreen = () => {
    return(
        <Fragment>
            <SectionWrapper>
                <Heading className='has-text-centered has-text-white'>Buscar</Heading>
                <Search />
            </SectionWrapper>
            <NavbarFooter/>
        </Fragment>
    )
}

export default SearchScreen;