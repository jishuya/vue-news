<template>
    <div>
      <ul class="news-list">
        <li v-for="(item, index) in this.$store.state.news" :key="index" class="post">
          <!-- 포인트 영역 -->
          <div class="points">
            {{ item.points }}
          </div>
          <!-- 기타정보 영역 -->
          <div>
            <p class="news-title">
              <a v-bind:href="item.url">
              {{ item.title }}
              </a>
            </p>
            <small class="link-text">
              by    
              <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
            </small>
          </div>
        </li>
      </ul>
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
    
</style>