import axios from 'axios';
const CATALOG_URL = process.env.VUE_APP_API_BASE_URL + '/fullcatalog';

export default {
    getFullCatalog() {
        return axios.get(CATALOG_URL).catch(error => {
            console.log(error);
        });
    }
};
