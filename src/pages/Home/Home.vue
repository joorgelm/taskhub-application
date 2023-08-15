<template>
    <v-app>
        <vue-main/>
        <v-main>
            <v-container class=" ma-2 fill-height" fluid>
                <v-row justify="center">
                    <v-col cols="10">
                        <v-btn
                            @click="mostrarDialogCadastroCliente"
                            rounded
                            outlined
                        >
                            Novo cliente
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="10">
                        <v-simple-table v-if="clienteList.length" fixed-header height="300px">
                            <template v-slot:default>
                                <thead>
                                <tr>
                                    <th class="text-left">Clientes</th>
                                    <th class="text-left">CPF</th>
                                    <th class="text-left">Telefone</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr
                                  class="table-row"
                                  v-for="item in clienteList"
                                  :key="item.index"
                                >
                                    <td>{{ item.nome }}</td>
                                    <td>{{ item.cpf }}</td>
                                    <td>{{ item.telefone }}</td>
                                </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                        <v-alert
                            v-else
                            outlined
                            dense
                            width="300"
                            color="grey darken-3"
                            type="info"
                        >
                            Não há clientes cadastrados
                        </v-alert>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <cliente-cadastro
            :validacao-regras="{ nome: nomeRegras, telefone: telefoneRegras, cpf: cpfRegras }"
            :visivel="verDialogCadastro"
            @fechar="verDialogCadastro = !verDialogCadastro"
            @salvar="salvar"
        />
    </v-app>
</template>

<script>
import ClienteCadastro from './Components/ClienteCadastro.vue'
import VueMain from '@/layouts/Main'
import { actionTypes } from '@/constants/'

export default {
    name: 'Home',
    components: {
        ClienteCadastro,
        VueMain
    },
    computed: {
        clienteList() {
            return this.$store.state.cliente.clienteList
        },
    },
    mounted() {
        this.$store.dispatch(actionTypes.CLIENTE.BUSCAR_TODOS)
    },
    data: () => ({
        licitacoes: [],
        nomeRegras: [
            v => !!v || 'nome é obrigatório',
            v => (v || '').length <= 300 || 'Limite de caracteres excedido'
        ],
        telefoneRegras: [
            v => !!v || 'telefone é obrigatório',
            v => (v || '').length <= 300 || 'Limite de caracteres excedido'
        ],
        cpfRegras: [
            v => !!v || 'cpf é obrigatório',
            v => (v || '').length <= 300 || 'Limite de caracteres excedido'
        ],
        tipoRegras: [
            v => !!v || 'tipo é obrigatório'
        ],
        verDialogCadastro: false,
        verDialogDetalhes: true,
        tipos: {

        }
    }),
    methods: {
        salvar(cliente) {
            this.$store.dispatch(actionTypes.CLIENTE.CADASTRAR, cliente)
            this.verDialogCadastro = false
        },
        mostrarDialogCadastroCliente() {
            this.verDialogCadastro = true
        }
    }
}
</script>
<style scoped>
.table-row {
    cursor: pointer;
}
</style>
