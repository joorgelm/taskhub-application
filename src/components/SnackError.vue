<template>
  <div>
    <v-snackbar
        v-model="show"
    >
      {{ erro }}

      <template v-slot:action="{ attrs }">
        <v-btn
            color="red"
            text
            v-bind="attrs"
            @click="fechar"
        >
          Fechar
        </v-btn>
      </template>

    </v-snackbar>
  </div>
</template>

<script>
import {actionTypes} from '@/constants'
export default {
    name: 'SnackError',
    watch: {
        erro() {
            this.show = Boolean(this.erro)
        }
    },
    computed: {
        erro() {
            return this.$store.state.aplicacao.erro
        },
    },
    data: () => ({
        show: false
    }),
    methods: {
        fechar() {
            this.show = false
            this.$store.dispatch(actionTypes.APLICACAO.EXIBIR.MENSAGEM_ERRO, '')
        }
    },
}
</script>
