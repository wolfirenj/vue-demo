<template>
    <div class="box">
        <p class="titles">录入完成</p>
        <div>
            <p>恭喜您</p>
            <p>您的信息录入完成</p>
        </div>
        <div class="pic">
            <img src="../../assets/img/wanc.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style>
.titles{
    height: 2rem;
    line-height: 2rem
}
.box p{
    font-size: .5rem;
    text-align: center
}
.pic{
    height: 4rem;
  width: 100%;
  position: relative;
}
.pic img{
    height: 3rem;
  width: 3rem;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -1.5rem;
  margin-top: -1.5rem;
}
</style>