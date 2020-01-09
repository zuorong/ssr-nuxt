<template>
  <div class="person">
    <div class="wrap">
      <div @click="onLogin" v-if="!token" class="face">
        <figure>
          <img src="~/assets/images/default-face.png" alt="">
        </figure>
        <span class="unlogin">点击登录</span>
        <i class="set" />
      </div>
      <div v-else class="face">
        <figure>
          <img src="~/assets/images/person/face.png" alt="">
        </figure>
        <span class="unlogin">你好啊</span>
        <i class="set" />
      </div>
      <div class="card">
        <img src="~/assets/images/person/card.png" alt="">
      </div>
      <div class="nav">
        <Menu @click.native="onDetail(0)" :path="require('~/assets/images/person/shape1.png')" text="就诊人管理" />
        <Menu @click.native="onDetail(1)" :path="require('~/assets/images/person/shape2.png')" text="健康档案" />
        <Menu @click.native="onDetail(2)" :path="require('~/assets/images/person/shape3.png')" text="医疗记录" />
        <Menu @click.native="onDetail(3)" :path="require('~/assets/images/person/shape4.png')" text="我的挂号" />
        <Menu @click.native="onDetail(4)" :path="require('~/assets/images/person/shape5.png')" text="支付账单" />
      </div>
      <div @click="onDetail(6)" class="services">
        <img src="~/assets/images/person/services.png">
      </div>
    </div>
    <Tab />
  </div>
</template>

<script>
import Cookie from 'js-cookie'
import Tab from '~/components/common/Tab'
import Menu from '~/components/person/Menu'
export default {
  components: {
    Tab,
    Menu
  },
  data () {
    return {
    }
  },
  computed: {
    token () {
      return Cookie.get('token')
    }
  },
  methods: {
    onDetail (type) {
      this.$router.push({
        path: '/user/7'
      })
    },
    onLogin () {
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style lang="scss">
.person{
  .wrap{
    height: calc(100vh - 1.2rem);
    padding: 0 .2rem .2rem;
    box-sizing: border-box;
    overflow-y: auto;
    background: #f3f3f3;
    -webkit-overflow-scrolling: touch;
    .face{
      display: flex;
      height: 2.4rem;
      align-items: center;
      position: relative;
      figure{
        width: 1.64rem;
        height: 1.64rem;
        border-radius: 100%;
        overflow: hidden;
        border: 1px solid #e7e7e7;
        margin-right: 0.3rem;
        img{
          width: 100%;
        }
      }
    }
    .unlogin{
      font-size: .42rem;
      color: #32343E;
    }
    .set{
      width: 0.38rem;
      height: 0.38rem;
      display: block;
      position: absolute;
      right: .3rem;
      top: .3rem;
      background: url(~assets/images/person/set.png) no-repeat center center;
      background-size: .38rem .38rem;
    }
    .card{
      width: 94%;
      margin: 0 auto;
      img{
        width: 100%;
      }
    }
    .nav{
      margin-top: 0.2rem;
    }
    .services{
      margin-top: 0.2rem;
      display: block;
      img{
        width: 94%;
        height: 1.52rem;
        display: block;
        margin: 0 auto;
      }
    }
  }
}
</style>
