import { createApp } from 'vue'
import App from './App.vue'
import articles from './articles.vue'
import recipes from './recipes.vue'
import planner from './planner.vue'
//import Vuetify from "vuetify";
//import "vuetify/dist/vuetify.min.css";
//Vue.config.productionTip = false;
//Vue.use(Vuetify);

console.log('Edu Tots')

createApp(App).mount('#app')
createApp(articles).mount('#articles')
createApp(recipes).mount('#recipes')
createApp(planner).mount('#planner')
