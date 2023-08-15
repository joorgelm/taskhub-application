import axios from 'axios'
import {actionTypes} from '@/constants/'
import store from '@/store/store'

const ax = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL
})

ax.interceptors.request.use((config) => {
    store.dispatch(actionTypes.APLICACAO.EXIBIR.LOADING)
    return config
})

ax.interceptors.response.use(res => {
    store.dispatch(actionTypes.APLICACAO.OCULTAR.LOADING)
    return res
},err => {
    store.dispatch(actionTypes.APLICACAO.OCULTAR.LOADING)
    store.dispatch(actionTypes.APLICACAO.EXIBIR.MENSAGEM_ERRO, err.response.data)

    return Promise.reject(err)
})

export default ax
