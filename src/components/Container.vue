<template>
	<div class="container">
		<ul>
			<li v-for="user in users" @click="user.show =! user.show">
				<h2>{{user.name}}</h2>
				<h3>{{user.email}}</h3>
			</li>
		</ul>
		<button v-on:click="deleteUser">delete</button>
	</div>
</template>

<script>
export default {
  name: 'app-container',// 组件名
	// 父组件向子组件传值
	props:{
		users:{
			type:Array,
			require:true
		}
	},
  data () {
    return {
    }
  },
	methods:{
		// 传引用时，对一个引用有了操作则会影响其他引用
		deleteUser:function(){
			this.users.pop();
		}
	}
	
}
</script>
<style scoped>
	.container{
		width: 100%;
		max-width:75rem;
		margin: 30px auto;
		padding: 0 1.25rem;
		box-sizing: border-box;
	}
	ul{
		display: flex;
		flex-wrap: wrap;
		list-style-type: none;
		padding: 0;
	}
	li{
		flex-grow: 1;
		flex-basis: 12.5rem;
		text-align: center;
		padding: 1.875rem;
		margin: 0.625rem;
		border: 1px solid blueviolet;
		box-shadow: 0px 3px 3px #8A2BE2;
	}
</style>
