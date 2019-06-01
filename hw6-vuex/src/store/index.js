import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        info: [
            {
                name: 'Name',
                value: '',
                pattern: /^[a-zA-Z ]{2,30}$/
            },
            {
                name: 'Phone',
                value: '',
                pattern: /^[0-9]{7,14}$/
            },
            {
                name: 'Email',
                value: '',
                pattern: /.+/
            },
            {
                name: 'Some Field 1',
                value: '',
                pattern: /.+/
            },
            {
                name: 'Some Field 2',
                value: '',
                pattern: /.+/
            }
        ],
        controls: [],
        done: 0,
        formSubmited: false,
        status: 'No'
    },
    getters: {
        info(state){
            return state.info;
        },
        controls(state){
            return state.controls;
        },
        done(state){
            return state.done;
        },
        formSubmited(state){
            return state.formSubmited;
        },
        status(state){
            return state.status;
        }
    },
    mutations: {
        created(state){
			for(let i = 0; i < state.info.length; i++){
				state.controls.push(false);
			}
        },
        onChangeData(state, payload){
            state.info[payload.index].value = payload.value;
            state.controls[payload.index] = payload.valid;

            let done = 0;

            for(let i = 0; i < state.controls.length; i++){
                if(state.controls[i]){
                    done++;
                }
            }

            state.done = done;
        },
        serverAnswer(state) {
            state.status = 'success';
            state.formSubmited = true;
        },
        submited(state) {
            state.status = 'waiting';
        }
    },
    actions: {
        submited(store){
            store.commit('submited');

            setTimeout(() => {
                store.commit('serverAnswer')
            }, 1000);
        }
    }
});