<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/Toolbar.vue'

export default {
  method: {
    fetchData(){
      console.log("hello")
    }
  },
  components: {
    ToolBar,
  },
  
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color : #34495e;
  text-decoration: none;
}
/* a:hover {
  color: #42b883;
  text-decoration: underline;
} */
a .router-link-exact-active{
  text-decoration: underline;
}

.router-link-exact-active[data-v-021887fb]{
  color: #828282
}  

</style>
