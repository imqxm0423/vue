<template>
  <div id="app">
		<!-- VUE组件之间的嵌套 -->
		<!-- <app-header v-bind:title="title" v-on:changeParentTitle="updateParentTitle($event)"></app-header>
		<app-container v-bind:users="users"></app-container>
		<app-container v-bind:users="users"></app-container>
		<app-footer v-bind:title="title"></app-footer> -->
		<!-- 使用路由 -->
		<ul>
			<li><router-link to="/">首页</router-link></li>
			<li><router-link to="/mine">我的</router-link></li>
			<li><router-link to="/userList">用户列表</router-link></li>
		</ul>
		<router-view></router-view>
  </div>
</template>

<script>
	/* '
	*  VUE组件之间的嵌套 
	import Header from "./components/Header.vue"
	import Container from "./components/Container.vue"
	import Footer from "./components/Footer.vue" */
	export default {
		name: 'App',
		data(){
			return {
				
			}
		},
		/* 
		* VUE组件之间的嵌套 components:{
			"app-header":Header,
			"app-container":Container,
			"app-footer":Footer,
		}, */
		methods:{
			
		}
	}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
</style>
