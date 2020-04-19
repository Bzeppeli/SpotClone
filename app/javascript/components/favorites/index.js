import React, { Fragment, useState, useEffect } from 'react';

import FavortiesService from '../../services/favorites_service'; 
import ResultsTabs from '../../components/common/resultTabs';
import ResultTabs from '../../components/common/resultTabs';

const Favorites = () => {

    const [favorites, setFavorites] = useState({});

    async function fetchFavorites(){
        const response = await FavortiesService.index();
        await setFavorites(response.data);
    }

    useEffect(() => {
        fetchFavorites()
    }, []);


    return (
        <Fragment>
            <ResultTabs albums={favorites.albums || []} artists = {favorites.artists || []} songs={favorites.songs || []} />
        </Fragment>
    );
}

export default Favorites