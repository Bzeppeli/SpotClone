import Api from './api';

const SearchService = {
 index: (query) => Api.get(`/search?query=${query}`)
}

export default SearchService;