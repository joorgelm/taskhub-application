import Vue from 'vue'
import Vuex from 'vuex'
import aplicacao from './modules/aplicacao'
import cliente from '@/store/modules/cliente'
import projetos from '@/store/modules/projetos'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cliente,
        aplicacao,
        projetos
    }
})
