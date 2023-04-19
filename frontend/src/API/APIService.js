import axios from 'axios';

export default class APISerive {
    static updateClick(buttonNumber, token) {
        return axios.patch(
            `http://localhost:8000/api/button-clicks/?button_number=${buttonNumber}`,
            {},
            {
                headers: {
                    'Authorization': `Token ${token}`
                }
            }
        ).then((resp) => resp.data);
    }

    static updateTime(time, token) {
        return axios.patch(
            `http://localhost:8000/api/sessions/?time=${time}`,
            {},
            {
                headers: {
                    'Authorization': `Token ${token}`
                }
            }
        ).then((resp) => resp.data);
    }

    static setupDetail(user, token) {
        return axios.get(`http://localhost:8000/api/detail/${user}/`, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            }).then((resp) => resp.data);
    }

    static setupUsers(token) {
        return axios.get('http://localhost:8000/api/users/', {
                headers: {
                    'Authorization': `Token ${token}`
                }
            }).then((resp) => resp.data);
    }

    static setupRegular(token) {
        return axios.get('http://localhost:8000/api/landing/', {
                headers: {
                    'Authorization': `Token ${token}`
                }
            }).then((resp) => resp.data);
    }

    static LoginUser(body) {
        return axios.post('http://localhost:8000/auth/', body, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => resp.data);
    }
}