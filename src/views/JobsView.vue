<template>
    <div>
        <div v-for="(job, index) in jobs" :key="index">{{ job.title }}</div>
    </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js'

export default {
    data() {
        return {
            jobs: []
        }
    },
    created() {
        // var vm = this;
        fetchJobsList()
          .then(respose => this.jobs = respose.data)
          .catch(error => console.log(error))
        


    }
    
}
</script>

<style>
    
</style>