import Api from './api';

const RecentlyHeardsServices = {
    create: (id) => Api.post(`/albums/${id}/recently_heards`),
}

export default RecentlyHeardsServices;