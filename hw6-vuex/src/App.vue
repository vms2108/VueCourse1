<template>
	<div class="wrapper">
        <div class="sample">
			<app-header></app-header>
            <form @submit.prevent="submited()" v-if="!formSubmited">
        		<div class="progress">
					<div class="progress-bar" :style="progressWidth"></div>
				</div>
				<div>
					<app-input v-for="(item, index) in  info"
							   :name="item.name"
							   :value="item.value"
							   :pattern="item.pattern"
							   :key="index"
							   @changedata="onChangeData(index, $event)"
					>
	                </app-input>
				</div>
				<button class="btn btn-primary" :disabled="done < info.length">
					Send Data
				</button>
				<p>{{ status }}</p>
			</form>
			<div v-else>
				<table class="table table-bordered">
					<tr v-for="(item, index) in  info" v-bind:key="index">
						<td>{{ item.name }}</td>
						<td>{{ item.value }}</td>
					</tr>
				</table>
			</div>
		</div>
    </div>
</template>

<script>
	import AppInput from './components/Input';
	import AppHeader from './components/Header';
	import {mapGetters} from 'vuex';

	export default {
		data(){
			return {
				
			}
		},
		created(){
			this.$store.commit('created');
		},
		methods: {
			onChangeData(index, data){
				this.$store.commit('onChangeData', {
					'index': index,
					'value': data.value,
					'valid': data.valid
					})
			},
			submited() {
				this.$store.dispatch('submited');
			}
		},
		computed: {
			...mapGetters([
				'info',
				'controls',
				'done',
				'formSubmited',
				'status'
			]),
			progressWidth(){
				return {
					width: (this.done / this.info.length * 100) + '%'
				}
			}
		},
		components: {
			AppInput,
			AppHeader
		}
	}
</script>

<style scoped>
	.wrapper{
		max-width: 600px;
		margin: 20px auto;
	}
</style>