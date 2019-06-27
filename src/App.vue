<template>
  <div id="app">
		<!-- <h1>{{title}}</h1> -->
		<app-header v-bind:title="title" v-on:changeParentTitle="updateParentTitle($event)"></app-header>
		<app-container v-bind:users="users"></app-container>
		<app-container v-bind:users="users"></app-container>
		<app-footer v-bind:title="title"></app-footer>
		
  </div>
</template>

<script>
	import Header from "./components/Header.vue"
	import Container from "./components/Container.vue"
	import Footer from "./components/Footer.vue"

	
export default {
  name: 'App',
	data(){
		return {
			title:"首个VUE练习项目",
      users:[
				{name:"Alice",job:'teacher',show:false},
				{name:"Alice",job:'teacher',show:false},
				{name:"Alice",job:'teacher',show:false},
				{name:"Alice",job:'teacher',show:false},
				{name:"Alice",job:'teacher',show:false},
				{name:"Alice",job:'teacher',show:false},
				{name:"Alice",job:'teacher',show:false},
				{name:"Alice",job:'teacher',show:false},
				{name:"Alice",job:'teacher',show:false}
			]
			
		}
	},
	components:{
		"app-header":Header,
		"app-container":Container,
		"app-footer":Footer,
	},
	methods:{
		updateParentTitle(sonTitle){
			// this.title为当前父组件中的title
			// sonTitle 为子组件传过来的参数title
			this.title = sonTitle
		}
	}
}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
</style>
