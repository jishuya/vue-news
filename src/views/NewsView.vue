<template>
  <div>
    <ul class="news-list">
      <li v-for="(item, index) in this.$store.state.news" :key="index" class="post">
        <!-- 포인트 영역 -->
        <div class="points">{{ item.points }}</div>
        <!-- 기타정보 영역 -->
        <div>
          <p class="news-title"><a :href="item.url">{{ item.title }}</a></p>
          <small class="link-text">
            by <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
            </small>
        </div>
      </li>
    </ul>
    <!-- <p v-for="(item, index) in this.$store.state.news" :key="index">
        <a v-bind:href="item.url">
        {{ item.title }}
        </a>
        <small>{{ item.time_ago }} by 
            <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
        </small>
    </p> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            users: []
        }
    },
    created() {
        this.$store.dispatch('FETCH_NEWS');
    },
    computed: {
      ...mapGetters(['fetchedNews'])
    }
}
</script>

<style>
  .news-list{
    margin: 0;
    padding: 0;
  }

  .post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  .points{
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
  }
  .news-title{
    margin: 0;
  }
  .link-text {
    color: #828282
  }
</style>