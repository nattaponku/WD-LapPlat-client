import axios from 'axios'
import store from '@/store'

export default () => {
    return axios.create({
        baseURL: 'http://10.31.26.12:8081/',
        //baseURL: ' http://f0a958176b35.ngrok.io ',
        headers: {
            Authorization: `Bearer ${store.state.token}`
        }
    })
}