<template>
  <div>
    <section>
      <!-- 유저정보 -->
      <div class="user-container">
        <div>
          <i class="fa fa-user"></i>
        </div>
        <!-- 유저 상세정보 -->
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div class="time">
          {{ fetchedItem.time_ago }} 
          </div>
        </div>
      </div>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <!-- 질문댓글 -->
      <div v-html="fetchedItem.content"></div>
    <section>

    </section>
      
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['fetchedItem'])
    },
    created(){
        const itemID = this.$route.params.id
        this.$store.dispatch('FETCH_ITEM', itemID)
    },
}
</script>

<style scoped>
.user-container {
 display: flex;
 align-items: center;
 padding: 0.5rem;
}    

.fa-user{
  font-size: 2.5rem;
}

.user-description{
  padding: 8px;
}

.time{
  font-size: 0.7rem;
}
</style>