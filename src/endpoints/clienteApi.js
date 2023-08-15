import http from '@/plugins/axios.js'

export default {
    cadastrarCliente(params) {
        return http.post('/cliente', params)
    },
    async buscarCliente(id = null) {
        if (id) return await http.get(`/cliente/${id}`)

        return await http.get('/cliente')
    },
}

