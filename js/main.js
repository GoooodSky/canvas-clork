Vue.component("canvas-clork",{
	data:function(){
		return{
			isShow:true
		}
	},
	template:`
	<div v-on:click="isShow=!isShow">
		<canvas id="clork" height="200px" width="200px" v-show="isShow"></canvas>
		<canvas id="date" height="200px" width="200px" v-show="!isShow"></canvas>
	</div>
	`
})
new Vue({
	el:"canvas-clork",
})