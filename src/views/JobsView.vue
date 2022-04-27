<template>
    <div>
        <div v-for="(job, index) in this.$store.state.jobs" :key="index">{{ job.title }}</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            jobs: []
        }
    },
    created() {
        this.$store.dispatch('FETCH_JOBS');
    },
    computed: {
      ...mapGetters(['fetchedJobs'])
    }
    
}
</script>

<style>
    
</style>