<template>
	<footer class="footer">
		<p>{{footerTitle}}</p>
		<p>{{title}}</p>
	</footer>
</template>

<script>
export default {
  name: 'app-footer',// 组件名
  props:{
	  title:{
		  type:String
	  }
  },
  data () {
    return {
      footerTitle: 'This is footer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	footer{
		background: #222;
		padding: 1.25rem 0.625rem;
	}
	p{
		color: #CCCCCC;
		text-align: center;
	}
</style>
