<template>
    <div>
        <div v-for="(user, index) in users" :key="index">{{ user.title }}</div>
    </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';

export default {
    data() {
        return {
            users: []
        }
    },
    created() {
        var vm = this;
        fetchNewsList()
          .then(function(respose) {
            console.log(respose)
            vm.users = respose.data;
          })
          .catch(function(error) {
            console.log(error);
          });    
    },
}
</script>

<style>
    
</style>