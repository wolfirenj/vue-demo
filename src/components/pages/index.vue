<template>
  <div class="wrapper">
    <div class="title">请选择您的性别</div>
    <div class="man" @click="showCont()">
      <img :src="this.i == 0 ? srcs : nosrc" alt="" :checked="select"/>
    </div>
    <div class="lady" @click="showConts()">
      <img :src="this.j == 0 ? srcss : nosrcs" alt="" :checked="select"/>
    </div>
    <div class="arrow">
      <img src="../../assets/img/anniuyou.png" alt="" @touchend="turn" />
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      select:'',
      i: 0,
      j:0,
      srcs: require("../../assets/img/nv2.png"),
      nosrc: require("../../assets/img/nan2.png"),
      srcss:require("../../assets/img/nv.png"),
      nosrcs: require("../../assets/img/nvcai.png"),
    };
  },
  methods: {
    //点击按钮跳转
    turn() {
        if(this.select==true){
            this.$router.push("/index2");
        }else{
            return
        }
    },
    showCont() {
      if (this.i == 0) {
        this.i = 1;
        this.j=0
        this.select=true
      } else {
        this.i = 0;
        this.select=false
      }
    },
    showConts(){
        if (this.j == 0) {
        this.j = 1;
        this.i=0
        this.select=true
      } else {
        this.j = 0;
        this.select=false
      }
    }
   
  }
};
</script>
<style>
.wrapper {
  height: 100vh;
  width: 100vw;
}
.title {
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: 0.5rem;
  text-align: center;
}
.man {
  height: 4rem;
  width: 100%;
  position: relative;
}
.man img {
  height: 3rem;
  width: 3rem;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -1.5rem;
  margin-top: -1.5rem;
}
.lady {
  height: 4rem;
  width: 100%;
  position: relative;
}
.lady img {
  height: 3rem;
  width: 3rem;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -1.5rem;
  margin-top: -1.5rem;
}
.arrow img {
  position: fixed;
  height: 1.5rem;
  width: 1.5rem;
  right: -0.2rem;
  top: 50%;
}
</style>