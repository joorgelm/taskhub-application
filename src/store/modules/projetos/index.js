import { actionTypes, mutationTypes } from '@/constants/'
import projetoApi from '@/endpoints/projetoApi'

export default {
    state: {
        projetos: []
    },
    mutations: {
        [mutationTypes.PROJETO.SET_PROJETO_LIST](state, projetoList) {
            state.projetoList = projetoList
        },
    },
    actions: {
        async [actionTypes.PROJETO.BUSCAR_POR_CLIENTE]({ commit }, clienteId) {
            const { data } = await projetoApi.buscarProjetoPorClienteId(clienteId)
            commit(mutationTypes.PROJETO.SET_PROJETO_LIST, data)
        },
    },
}
