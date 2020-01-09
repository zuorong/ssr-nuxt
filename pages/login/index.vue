<template>
  <div class="login">
    <h1>手机号验证</h1>
    <div class="check">
      <img src="~/assets/images/login/mobile.png" alt="">
      <input v-model="mobile" type="text" placeholder="请输入手机号">
      <button :class="{active: !isNext}" @click="getCode">
        {{ codeText }}
      </button>
    </div>
    <div class="check code">
      <img src="~/assets/images/login/code.png" alt="">
      <input v-model="code" type="text" placeholder="请输入验证码">
    </div>
    <div @click="onLogin" class="hand">
      绑定登录
    </div>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
export default {
  data () {
    return {
      codeText: '获取验证码',
      isNext: true,
      mobile: '13800138000',
      code: '123456'
    }
  },
  asyncData ({ query }) {
    return {
      query
    }
  },
  mounted () {
    const { redirect, from } = this.query
    if (redirect && from) {
      this.$message.error('token过期，请重新登录')
    }
  },
  methods: {
    onLogin () {
      Cookie.set('token', 'imatoken')
      const path = this.query.redirect
      if (path) {
        this.$router.replace({
          path
        })
        return false
      }
      this.$router.back()
    },
    getCode () {
    }
  }
}
</script>
<style lang="scss" scoped>
.login{
  padding: .3rem;
  height: 100vh;
  background: #fff;
  h1{
    color: #747474;
    font-size: .52rem;
    margin-top: 1.7rem;
    font-weight:600;
    margin-bottom: .6rem;
  }
  .check{
    display: flex;
    padding: .1rem 0;
    align-items: center;
    border-bottom: 1px solid #eee;
    margin: 0 0 .2rem 0;
    img{
      width: 0.24rem;
      height: 0.39rem;
    }
    input{
      flex: 1;
      height: 100%;
      color: #333;
      padding-left: 0.2rem;
      font-size: .32rem;
    }
    input::placeholder{
      color: #9A9A9A;
    }
    button{
      color: #00C1A7;
      font-size: .32rem;
      transition: all 0.1s;
      &:active{
        color: #08907b;
      }
      &.active{
        color: #929292;
      }
      &.active:active{
        color: #929292;
      }
    }
    &.code{
      img{
        width: 0.32rem;
        height: 0.37rem;
      }
    }
  }
  .hand{
    margin: 1.5rem .3rem 0;
    height: 0.85rem;
    color: #fff;
    font-size: .32rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1ec0a7;
    border-radius: 4px;
    transition: all 0.1s;
    &:active{
      background: #08907b;
    }
  }
  .activated{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.6);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
