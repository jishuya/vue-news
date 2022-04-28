<template>
    <div>
        <p v-for="(item, index) in fetchedAsk" :key="index">
            <a :href="item.url">{{ item.title }}</a>
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