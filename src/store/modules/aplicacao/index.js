import { actionTypes, mutationTypes, getterTypes } from '@/constants/'

export default {
    state: {
        erro: '',
        loading: {
            visible: false,
            text: 'Carregando'
        }
    },
    mutations: {
        [mutationTypes.APLICACAO.SET.MENSAGEM_ERRO](state, msg) {
            state.erro = msg
        },
        [mutationTypes.APLICACAO.SET.DIALOG_CARREGAMENTO](state, visible) {
            state.loading.visible = visible
        },
    },
    actions: {
        [actionTypes.APLICACAO.EXIBIR.MENSAGEM_ERRO]({ commit }, msg) {
            commit(mutationTypes.APLICACAO.SET.MENSAGEM_ERRO, msg)
        },
        [actionTypes.APLICACAO.EXIBIR.LOADING]({ commit }) {
            commit(mutationTypes.APLICACAO.SET.DIALOG_CARREGAMENTO, true)
        },
        [actionTypes.APLICACAO.OCULTAR.LOADING]({ commit }) {
            commit(mutationTypes.APLICACAO.SET.DIALOG_CARREGAMENTO, false)
        },
    },
    getters: {
        [getterTypes.APLICACAO.GET_LOADING_STATUS]: (state) => {
            return state.loading.visible
        }
    }
}
