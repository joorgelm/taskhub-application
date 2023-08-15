<template>
    <transition name="fade">
        <keep-alive>
            <div>
                <v-app-bar app color="primary" dark>
                    <slot name="header" />
                    <v-toolbar-title> Taskhub </v-toolbar-title>
                </v-app-bar>
                <slot name="body" />
                <v-footer color="primary" app>
                    <span class="white--text">Jorge Melgarejo@Desafio WK &copy; 2023</span>
                </v-footer>
            </div>
        </keep-alive>
    </transition>
</template>

<script>
export default {
    name: 'Main'
}
</script>

<style>

</style>
