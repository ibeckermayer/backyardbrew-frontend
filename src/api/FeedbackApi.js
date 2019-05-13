import axios from 'axios';
import Common from '@/api/Common'
import router from '../router';

const FEEDBACK_URL = process.env.VUE_APP_API_BASE_URL + '/feedback';

export default {
    getFeedbackPage(page, resolved) {
        let body = {
            resolved: resolved,
            page: page
        };
        let header = Common.jwtAccessHeader();
        return axios.post(FEEDBACK_URL, body, header).catch(error => {
            // if authorization fails
            console.log(error);            
            router.push({ path: '/unauthorized' }); // push user to unauthorized route
            throw error;
        });
    },
    toggleFeedbackResolved(id, resolved) {
        let body = {
            id: id,
            resolved: resolved
        };
        let header = Common.jwtAccessHeader();
        return axios.patch(FEEDBACK_URL, body, header).catch(error => {
            // if authorization fails
            console.log(error);            
            router.push({ path: '/unauthorized' }); // push user to unauthorized route
            throw error;
        });
    },
    submitFeedback(name, email, text) {
        let body = {
            name: name,
            email: email,
            text: text
        };
        return axios.put(FEEDBACK_URL, body).catch(error => {
            console.log(error);
            throw error;
        });
    }
}