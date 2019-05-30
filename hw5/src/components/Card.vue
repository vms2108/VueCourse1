<template>
    <div class="card" v-on:click="clicked">
        <div class="inner" :class="[myClass, myImg]"></div>
    </div>
</template>
<script>
export default {
    props: ['number', 'isOpen'],
    data() {
        return {
            checked: ''
        }
    },
    methods: {
        clicked() {
            if (this.isOpen === false) this.$emit('clicked');
        }
    },
    computed: {
        myClass() {
            return this.isOpen ? 'open animated flipInY ' : 'animated flipOutY';
        },
        myImg() {
            return 'img' + this.number;
        }
    }
}
</script>
<style scoped>
    @keyframes kuku {
        0% {
            opacity: 0;
        }
        90% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    .card {
        width: 200px;
        height: 200px;
        margin: 10px;
        background: rgba(50,50,50,0.3);
        animation: kuku 1s;
        cursor: pointer;
    }
    .open {
       display: block;
       cursor:auto;
    }
    .inner {
        width: 100%;
        height: 100%;
        background-position: 0 -0;
        background-repeat: no-repeat;
        background-size: 200px 200px;
    }
    .img1 {
        background-image: url('../assets/Ace.png');
    }
    .img2 {
        background-image: url('../assets/King.png');
    }
    .img3 {
        background-image: url('../assets/Dama.png');
    }
    .img4 {
        background-image: url('../assets/Valet.png');
    }
    .img5 {
        background-image: url('../assets/Ace2.png');
    }
    .img6 {
        background-image: url('../assets/King2.png');
    }
    .img7 {
        background-image: url('../assets/10.png');
    }
    .img8 {
        background-image: url('../assets/9.png');
    }
</style>
