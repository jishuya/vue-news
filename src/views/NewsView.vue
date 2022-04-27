<template>
    <div>
        <div v-for="(user, index) in this.$store.state.news" :key="index">{{ user.title }}</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            users: []
        }
    },
    created() {
        this.$store.dispatch('FETCH_NEWS');
    },
    computed: {
      ...mapGetters(['fetchedNews'])
    }
}
</script>

<style>
    
</style>