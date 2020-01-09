<template>
  <div class="about">
    <a class="logo" href="/web">
      <img src="~/assets/images/about.png" alt="">
    </a>
    <div class="article">
      xx是国内领先的互联网医院服务平台，为患者提供就医全流程服务，院外全方位康复护理服务。提供智能导诊、预约挂号、在线缴费、在线问诊、住院服务和健康管理等涵盖诊前、诊中和诊后、线上线下一体化的一站式健康 医疗服务。与全国近400家医院系统实现联通，平台拥有超过1万名三甲注册医生，致力于成为中国互联网医疗服务体系中最受患者信任的服务商。
    </div>
    <div class="footer">
      <div>
        <a>服务条款</a>
      </div>
      <div>
        微信公众号：天下
      </div>
      <div>
        Copyright 2009-2016,All rights reserved
      </div>
    </div>
  </div>
</template>

<script>
import { homeService } from '~/services'
export default {
  components: {
  },
  middleware: 'auth',
  data () {
    return {
    }
  },
  async asyncData ({ req, $axios }) {
    // console.log(await homeService.getMoney($axios, {}))
    console.log(await homeService.getToken($axios, { user: 'steven', age: 56 }))
    return {
      result: []
    }
  }
}
</script>
<style lang="scss" scoped>
.about{
  .logo{
    display: block;
    width: 1.3rem;
    height: 1.3rem;
    margin: .32rem auto;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .article{
    margin: 0 .58rem;
    font-size: .3rem;
    line-height: 0.42rem;
    color: #32343E;
  }
  .footer{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    div:nth-of-type(1){
      display: flex;
      justify-content: center;
      align-items: center;
      a{
        color: #007AFF;
        font-size: .32rem;
        line-height: 0.44rem;
        padding: 0 .15rem;
        &:nth-of-type(1){
          // border-right: 1px solid #007AFF;
        }
      }
    }
    div:nth-of-type(2){
      font-size: .28rem;
      color: #666;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0.1rem 0 0.05rem;
      line-height: 0.4rem;
    }
    div:nth-of-type(3){
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: .24rem;
      color: #999;
      line-height: 0.34rem;
      margin-bottom: 0.1rem;
    }
  }
}
</style>
