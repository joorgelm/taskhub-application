import { actionTypes, mutationTypes, getterTypes } from '@/constants/'
import clienteApi from '@/endpoints/clienteApi'

export default {
    state: {
        clienteList: [],
        clienteData: {},
    },
    mutations: {
        [mutationTypes.CLIENTE.SET_CLIENTE_LIST](state, clienteList) {
            state.clienteList = clienteList
        },
        [mutationTypes.CLIENTE.SET_CLIENTE](state, clienteData) {
            state.clienteData = clienteData
        },
    },
    actions: {
        async [actionTypes.CLIENTE.BUSCAR_TODOS]({ commit }) {
            const { data } = await clienteApi.buscarCliente()
            commit(mutationTypes.CLIENTE.SET_CLIENTE_LIST, data)
        },
        async [actionTypes.CLIENTE.BUSCAR]({ commit }, id) {
            const { data } = await clienteApi.buscarCliente(id)
            commit(mutationTypes.CLIENTE.SET_CLIENTE, data)
        },
        async [actionTypes.CLIENTE.CADASTRAR]({ commit }, dadosCliente) {
            const { data } = await clienteApi.cadastrarCliente(dadosCliente)
            commit(mutationTypes.CLIENTE.SET_CLIENTE, data)
        },
    },
    getters: {
        [getterTypes.CLIENTE.GET_CLIENTE]: (state) => {
            return state.clienteData
        },
    },
}
