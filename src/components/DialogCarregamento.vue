<template>
    <div class="text-center">
        <v-overlay :value="loading.visible">
            <v-container>
                <v-layout row justify-center>
                    <v-progress-circular indeterminate size="72"></v-progress-circular>
                </v-layout>
                <v-layout row justify-center>
                    {{ loading.text }}
                </v-layout>
            </v-container>
        </v-overlay>
    </div>
</template>

<script>
export default {
    name: 'DialogCarregamento',
    computed: {
        loading() {
            return this.$store.state.aplicacao.loading
        }
    },
}
</script>

<style scoped>

</style>