import React, { Fragment, useEffect, useState } from 'react';
import { Columns } from 'react-bulma-components';

import SearchBar from './searchbar';
import Categories from '../common/categories';

import SearchService from '../../services/search_service';
import CategoriesService from '../../services/categories_service';

const Search = () => {
    
    const [albums, setAlbums] = useState([]);
    const [artists, setArtist] = useState([]);
    const [songs, setSongs] = useState([]);

    async function fetchCategorySearch(id){
        const response = await CategoriesService.show(id);
        setAlbums(response.data['albums']);
        setArtist(response.data['artists']);
        setSongs(response.data['songs']);
    }

 return (
   <Fragment>
​    <Columns>
        <Columns.Column desktop={{ size: 6, offset: 3 }} mobile={{ size: 12 }}>
            <SearchBar/>
        </Columns.Column>
    </Columns>
    <Categories/>
   </Fragment>
);
}
export default Search;