<template>
    <div>
        <p v-for="(job, index) in this.$store.state.jobs" :key="index">
            <a :href="job.url">
                {{ job.title }}
            </a>
            <small>{{ job.time_ago }}, {{ job.domain }}</small>
        </p>
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