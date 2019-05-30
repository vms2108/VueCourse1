<template>
  <div id="app">
    <div class="progress">
			<div class="progress-bar" :style="width"></div>
		</div>
    <div class="container">
      <app-card 
          v-for="(item, index) in info" 
          :key="index"
          :number="item"
          :isOpen.sync="isOpens[index]"
          @clicked="oneClick(index)"
          >
      </app-card>
    </div>
  </div>
</template>

<script>
import AppCard from './components/Card';
export default {
  name: 'app',
  data() {
    return {
      info: [
        4,
        8,
        1,
        7,
        2,
        7,
        5,
        4,
        3,
        6,
        5,
        1,
        8,
        2,
        6,
        3
      ],
      isOpens: [],
      howMuch: 0,
      currentOpen: undefined,
      timer: true,
      done: 0
    }
  },
  created() {
    this.info.forEach((item, index) => {
      this.isOpens[index] = false;
    });
    this.info.sort((a,b) => {
      return Math.random() - 0.5;
    });
    console.log(this.info);
  },
  computed: {
    width() {
      return {
        minWidth: this.done / this.info.length * 2 * 100 + '%',
        transition: '0.5s'
      }
    }
  },
  methods: {
    oneClick(index) {
      switch(this.howMuch){
        case 0: 
          this.howMuch ++;
          this.$set(this.isOpens, index, true);
          this.currentOpen = index;
        break;
        case 1:
          this.howMuch ++;
          this.$set(this.isOpens, index, true);
          if (this.info[this.currentOpen] !== this.info[index]) {
            setTimeout(() => {
              this.$set(this.isOpens, index, false);
              this.$set(this.isOpens, this.currentOpen, false);
              this.howMuch = 0;
            }, 1000);
          } else {
            this.done ++;
             setTimeout(() => this.howMuch = 0, 1000);
          }
        break;
      }
    }
  },
  components: {
    AppCard
  }
}
</script>

<style lang="scss">
.progress {
  margin: 20px auto;
  height: 30px;
  width: 1050px;
}
 .container {
   display: flex;
   margin: auto;
   flex-wrap: wrap;
   justify-content: center;
   margin-left: 100px;
   margin-top: 30px;
   width: 1050px;
 }
</style>
