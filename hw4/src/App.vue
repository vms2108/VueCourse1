<template>
    <div class="container">
      <div v-show="!done">
        <app-radio 
            :items="info[count].list"
            :q="info[count].q"
            v-if="info[count].type === 'radio'"
            @changedata="onChangeData(count, $event)"
        ></app-radio>
        <app-check 
            :items="info[count].list"
            :q="info[count].q"
            v-else
            @changedata="onChangeData(count, $event)"
        ></app-check>
        <button @click="next" :disabled="!choosen">Next</button>
      </div>
      <div v-show="done">
        <h2>{{finalAnswer}}</h2>
      </div>
    </div>
</template>

<script>
import AppRadio from './components/Radio';
import AppCheck from './components/Check';
export default {
  name: 'app',
  data () {
    return {
      info: [
        {
          list: [
            'в России',
            'за границей России',
            'в нейтральных водах'
          ],
          type: 'radio',
          q: 'Где Вы находитесь?'
        },
        {
          list: [
            'в Европе',
            'в Азии',
            'в сердце'
          ],
          type: 'check',
          q: 'Где находится Россия?'
        }
      ],
      count: 0,
      done: false,
      choosen: false,
      answer: [],
      finalAnswer: ''
    }
  },
  methods: {
    next() {
      if((this.count + 1) < this.info.length) {
        this.choosen = false;
        this.count = this.count + 1;
      }
      else {
        let place = "";
        this.answer[1].forEach(element => {
          place = place + " " + element + "";
        });
        this.finalAnswer = "Вы находитесь " + this.answer[0] + 
        ', а Россия находится ' + place;
        this.done = true;
      }
    },
    onChangeData(index, data){
        this.choosen = true;
        if (data.length === 0) this.choosen = false;
        this.answer[index] = data;
    }
  },
  components: {
    AppRadio, AppCheck
  }
}
</script>

<style lang="scss">

</style>
