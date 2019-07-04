<template>
	<header class="header">
		<h1 v-on:click="changedTitle">{{headerTitle}}</h1>
		<p>{{title}}</p>
		
	</header>
</template>

<script>
export default {
  name: 'app-header',// 组件名
  //  传值则不会影响其他部门，只影响当前值
  props:{
	  title:{
		  type:String
	  }
  },
  data () {
    return {
      headerTitle: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
	  changedTitle:function(){
		  // this.title = "change title"
		this.$emit("changeParentTitle","当前实现子组件向父组件传值");
	  }
  },
  // VUE的生命周期
  /* beforeCreate:function(){
	  alert('组件实例化之前执行的函数')
  },
  create:function(){
	  alert("组件实例化完成")
  },
  beforeMount:function(){
	  alert("组件挂载前，此时页面内容不显示，但虚拟Dom已经开始配置")
  },
  mounted:function(){
	  alert('组件挂载后，当前方法执行完成之后，页面显示')
  },
  beforeUpdate:function(){
  	alert("组件更新前 ，页面暂未更新， 但虚拟Dom已经开始配置")
  },
  updated:function(){
  	alert('组件更新，此方法执行后，页面更新后内容显示')
  },
  beforeDestroy:function(){
  	alert('组件销毁前')
  },
  destroyed:function(){
  	alert('组件销毁完成')
  } */
}
</script>

<style>
	header{
		background: #42B983;
		padding:1.875rem 0.625rem;
	}
	h1,p{
		width: 100%;
		text-align: center;
	}
</style>
