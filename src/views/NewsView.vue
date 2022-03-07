<template>
    <div>
        <div v-for="user in users" :key="user">{{ user.title }}</div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            users: []
        }
    },
    created() {
        var vm = this;
        axios.get('https://api.hnpwa.com/v0/news/1.json')
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