import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase';
import store from './store/index';

Vue.config.productionTip = false;

var config = {
  apiKey: 'AIzaSyAws7WclwzN5IMomsy549E_Y37Se0qOD8c',
  authDomain: 'score-tracker-4ea58.firebaseapp.com',
  databaseURL: 'https://score-tracker-4ea58.firebaseio.com',
  projectId: 'score-tracker-4ea58',
  storageBucket: 'score-tracker-4ea58.appspot.com',
  messagingSenderId: '726738788308',
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
