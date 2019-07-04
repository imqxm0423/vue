// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// VUE 路由Demo
import Home from '@/components/vueRouter/Home'
import Mine from '@/components/vueRouter/Mine.vue'
import UserList from '@/components/vueRouter/UserList.vue'

Vue.config.productionTip = false;
// 使用路由
Vue.use(VueRouter);
Vue.use(VueResource);
// 配置路由
const router = new VueRouter({
	routes : [
		{path:'/',name:"home",component:Home},
		{path:'/mine',name:"mine",component:Mine},
		{path:'/userList',name:'userList',component:UserList}
	],
	mode:'history'//不显示“ # ”
})


// import Container from './components/Container'
// 全局注册组件
// Vue.component("container",Container)


new Vue({
	router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
