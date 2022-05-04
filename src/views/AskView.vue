<template>
    <div>
        <p v-for="(item, index) in fetchedAsk" :key="index">
            <router-link :to="`item/${item.id}`">{{ item.title }}</router-link>
            <small>{{ item.time_ago }} by {{ item.user }}</small>
        </p>
    </div>
</template>

<script>
import { mapGetters} from 'vuex';

export default {
    data() {
        return {
            ask: []
        }
    },
    computed: {
      ...mapGetters(['fetchedAsk'])
    },
    created() {
        this.$store.dispatch('FETCH_ASK');
    }
    
}
</script>

<style>
    
</style>