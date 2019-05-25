<template>
    <div>
        <h2>{{q}}</h2>
        <div v-for="(item, index) in items" v-bind:key="index">
            <input 
            type="checkbox"
                name="check"
                :value="item" 
                id="index" 
                v-model="checked">
            <label  for="index">{{item}}</label>
        </div>
        
        
    </div>
</template>

<script>
	export default {
		props: ['items', 'q'],
		data(){
			return {
				checked: []
			}
        },
        watch: {
            checked() {
                this.$emit('changedata', this.checked);
            }
        }
	}
</script>