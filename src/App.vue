<template>
    <v-app>
        <dialog-carregamento/>
        <snack-error/>
        <router-view/>
    </v-app>
</template>

<script>

import DialogCarregamento from './components/DialogCarregamento'
import SnackError from '@/components/SnackError.vue'
export default {
    name: 'App',
    components: {
        DialogCarregamento,
        SnackError
    }
}
</script>

