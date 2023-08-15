<template>
    <v-row justify="center">
        <v-dialog :value="dialogVisivel" persistent max-width="70%">
            <v-card>
                <v-card-title>
                    <span class="headline">Novo Cliente</span>
                </v-card-title>
                <v-card-text>
                    <v-form
                        ref="form"
                        @keyup.enter.native="validar"
                    >
                        <v-container>
                          <v-row>
                            <v-col>
                              <v-text-field
                                  v-model="cliente.nome"
                                  label="Nome"
                                  :rules="$props.validacaoRegras.nome"
                                  required
                              />
                            </v-col>
                          </v-row>
                            <v-row>
                                <v-col cols="3">
                                  <v-text-field
                                      v-model="cliente.telefone"
                                      v-mask="'(##)#####-####'"
                                      label="Telefone"
                                      :rules="$props.validacaoRegras.telefone"
                                      required
                                  />
                                </v-col>
                              <v-col cols="3">
                                <v-text-field
                                    v-model="cliente.cpf"
                                    v-mask="'###.###.###-##'"
                                    label="CPF"
                                    :rules="$props.validacaoRegras.cpf"
                                    required
                                />
                              </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="fechar">Cancelar</v-btn>
                    <v-btn color="blue darken-1" text @click="validar">Salvar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>

export default {
    name: 'ClienteCadastro',
    props:{
        validacaoRegras:{
            type: Object,
            required: true
        },
        visivel: {
            type: Boolean,
            required: true
        }
    },
    watch: {
        visivel() {
            if (this.$refs.form) this.$refs.form.reset()
            this.dialogVisivel = this.$props.visivel
        }
    },
    data: () => ({
        cliente: {
            nome: '',
            cpf: '',
            telefone: ''
        },
        dialogVisivel: false
    }),
    methods: {
        validar() {
            if (this.$refs.form.validate()) {
                this.$emit('salvar', { ...this.cliente })
                this.dialogVisivel = false
            }
        },
        fechar () {
            this.dialogVisivel = false
            this.$emit('fechar')
        },
    }
}
</script>
