<template>
  <div class="wrapper">
    <div class="title">请选择您的个人状态</div>
    <div class="man" @touchend="turnone">
      <img :src="this.i == 0 ? srcs : nosrc" alt=""  :checked="select"/>
    </div>
    <div class="lady" @touchend="turntwo">
      <img :src="this.j == 0 ? srcss : nosrcs" alt=""  :checked="select"/>
    </div>
    <div class="baby" @touchend="turnthree">
      <img :src="this.k == 0 ? srcsss : nosrcss" alt=""  :checked="select"/>
    </div>
    <div class="arrow1">
      <img src="../../assets/img/anniuz.png" alt @touchend="turnto" />
    </div>
    <div class="arrow">
      <img src="../../assets/img/anniuyou.png" alt @touchend="pass" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select:'',
      i: 0,
      j: 0,
      k: 0,
      //备孕
      srcs: require("../../assets/img/beiyun.png"),
      nosrc: require("../../assets/img/caibeiyz.png"),
      //怀宝宝
      srcss: require("../../assets/img/hui.png"),
      nosrcs: require("../../assets/img/yun.png"),
      //生宝宝
      srcsss: require("../../assets/img/huihZ.png"),
      nosrcss: require("../../assets/img/hz.png")
    };
  },
  methods: {
    turnto() {
      this.$router.push("/index1");
    },
    pass() {
        if(this.i==1||this.j==1||this.k==1){
            this.$router.push("/index3");
        }
      
    },
    turnone() {
      if (this.i == 0) {
        this.i = 1;
        this.k=0;
        this.j=0
      } else {
        this.i = 0;
      }
    },
    turntwo() {
      if (this.j == 0) {
        this.j = 1;
        this.i=0
        this.k=0
        this.select = true;
      } else {
        this.j = 0;
        this.select = false;
      }
    },
    turnthree() {
      if (this.k == 0) {
        this.k = 1;
        this.i=0
        this.j=0
        this.select = true;
      } else {
        this.k = 0;
        this.select = false;
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
  height: 2.2rem;
  width: 2.2rem;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -1.1rem;
  margin-top: -1.1rem;
}
.lady {
  height: 4rem;
  width: 100%;
  position: relative;
}
.lady img {
  height: 2.2rem;
  width: 2.2rem;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -1.1rem;
  margin-top: -1.1rem;
}
.baby {
  height: 4rem;
  width: 100%;
  position: relative;
}
.baby img {
  height: 2.2rem;
  width: 2.2rem;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -1.1rem;
  margin-top: -1.1rem;
}
.arrow img {
  position: fixed;
  height: 1.5rem;
  width: 1.5rem;
  right: -0.2rem;
  top: 50%;
}
.arrow1 img {
  position: fixed;
  height: 1.5rem;
  width: 1.5rem;
  left: -0.2rem;
  top: 50%;
}
</style>