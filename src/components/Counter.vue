<template>
    <h1>Counter - Vuex</h1>
    <p>Direct access: {{ $store.state.counter.count }}</p>
    <p>Computed: {{ countComputed }}</p>

    <h1>{{ mapState }}</h1>
    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="incrementRandomInt" :disabled="isLoading">Random</button>

    <h2>mapState: {{ count }}</h2>
    <h2>LastMutation: {{ lastMutation }}</h2>
    <h2>isLoading: {{ isLoading }}</h2>

    <h2>Direct getter: {{ $store.getters['counter/squareCount'] }}</h2>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            mapState: null
        }
    },
    computed: {
        countComputed() {
            return this.$store.state.counter.count
        },
        ...mapState( 'counter', ['count', 'lastMutation', 'isLoading'])
    },
    methods: {
        increment() {
            // Llamado a una mutación
            this.$store.commit('counter/increment')
        },
        incrementBy() {
            this.$store.commit('counter/incrementBy', 5)
        },
        // incrementRandomInt() {
        //     // Llamado a una acción
        //     this.$store.dispatch('incrementRandomInt')
        // },
        ...mapActions('counter', ['incrementRandomInt'])
    },
}
</script>

<style>

</style>