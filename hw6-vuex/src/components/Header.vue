<template>
    <div>
        <h2>Hello {{user}}!</h2>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    data(){
        return {
            
        }
    },
    computed: {
        ...mapGetters([
            'info',
            'formSubmited'
        ]),
        user() {
            return this.formSubmited === true ? this.info[0].value : 'User';
        }
    }
}
</script>
