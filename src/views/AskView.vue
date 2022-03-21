<template>
    <div>
        <div v-for="(item, index) in ask" :key="index">{{ item.title }}</div>
    </div>
</template>

<script>
import { fetchAskList } from '../api/index.js'

export default {
    data() {
        return {
            ask: []
        }
    },
    created() {
        var vm = this;
        fetchAskList()
          .then(function(respose) {
            console.log(respose)
            vm.ask = respose.data
          })
          .catch(function(error){
            console.log(error)
          })


    }
    
}
</script>

<style>
    
</style>