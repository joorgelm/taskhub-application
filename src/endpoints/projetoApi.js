import http from '@/plugins/axios.js'

export default {
    cadastrarProjeto(params) {
        return http.post('/projeto', params)
    },
    async buscarProjetoPorClienteId(clienteId) {
        return await http.get(`/projeto/${clienteId}`)
    },
}
