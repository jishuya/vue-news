import Vue from 'vue';
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        ask: [],
    },
    getters: {
      fetchedAsk(state){
        return state.ask
      },
      fetchedJobs(state){
        return state.jobs
      },
      fetchedNews(state){
        return state.news
      },
    },
    // mutations: mutations
    mutations,
    // actions: actions
    actions
});
