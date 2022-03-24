<template>
    <div>
        <div v-for="(item, index) in this.$store.state.ask" :key="index">{{ item.title }}</div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            ask: []
        }
    },
    created() {
        this.$store.dispatch('FETCH_ASK');
    }
    
}
</script>

<style>
    
</style>