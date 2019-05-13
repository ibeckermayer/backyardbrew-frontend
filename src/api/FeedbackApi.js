import axios from 'axios';
import Common from '@/api/Common'

const FEEDBACK_URL = process.env.VUE_APP_API_BASE_URL + '/feedback';

export default {
    getFeedbackPage(page, resolved) {
        let body = {
            resolved: resolved,
            page: page
        };
        let header = Common.jwtAccessHeader();
        return axios.post(FEEDBACK_URL, body, header);
    },
    toggleFeedbackResolved(id, resolved) {
        let body = {
            id: id,
            resolved: resolved
        };
        let header = Common.jwtAccessHeader();
        return axios.patch(FEEDBACK_URL, body, header);
    }
}