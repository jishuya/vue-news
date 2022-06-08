<template>
    <div>
        <ul class="ask-list">
            <li v-for="(item, index) in fetchedAsk" :key="index">
                <!-- 포인트영역 -->
                <div class="points">
                    {{ item.points }}
                </div>
                <!-- 기타정보 영역 -->
                <div>
                    <p class="ask-title">
                        <!-- <a :href=""></a> -->
                    </p>
                </div>
            </li>
        </ul>
        <!-- <p v-for="(item, index) in fetchedAsk" :key="index">
            <router-link :to="`item/${item.id}`">{{ item.title }}</router-link>
            <small>{{ item.time_ago }} by {{ item.user }}</small>
        </p> -->
    </div>
</template>

<script>
import { mapGetters} from 'vuex';

export default {
    data() {
        return {
            ask: []
        }
    },
    computed: {
      ...mapGetters(['fetchedAsk'])
    },
    created() {
        this.$store.dispatch('FETCH_ASK');
    }
    
}
</script>

<style>
    
</style>