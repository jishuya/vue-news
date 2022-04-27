
import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js' 

export default {
    FETCH_NEWS(context) {
      fetchNewsList()
      .then((response) => {
        console.log(response.data);
        context.commit('SET_NEWS', response.data)
      })
      .catch(error => {
        console.log(error);
      });   
  },
  // context.commit을 Destructuring해서 {commit}으로 받아온다
  FETCH_JOBS({ commit }) {
    fetchJobsList()
    // response.data를 Destructuring해서 {data}로 받아온다
      .then(({ data })=>{
        console.log(data); 
        commit('SET_JOBS', data)
      })
      .catch(error => {
        console.log(error);
      })
  },
  FETCH_ASK({ commit }){
    fetchAskList()
      .then(({ data })=>{
        console.log(data)
        commit('SET_ASK', data)
      })
      .catch(error => {
        console.log(error);
      })
  }

}