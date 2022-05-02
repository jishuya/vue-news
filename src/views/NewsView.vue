<template>
    <div>
        <p v-for="(item, index) in this.$store.state.news" :key="index">
            <a v-bind:href="item.url">
            {{ item.title }}
            </a>
            <small>{{ item.time_ago }} by 
                <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
            </small>
        </p>
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