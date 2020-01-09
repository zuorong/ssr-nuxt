<template>
  <footer class="tab">
    <ul>
      <li v-for="item in list" :key="item.id" :class="{ active: $route.path === item.name }">
        <template>
          <nuxt-link :to="item.name">
            <i />
            <span>
              {{ item.text }}
            </span>
          </nuxt-link>
        </template>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      list: [
        {
          id: 0,
          text: '主页',
          name: '/',
          active: true
        },
        {
          id: 4,
          text: '我的',
          name: '/person',
          active: false
        }
      ]
    }
  },
  methods: {
    onNav (item) {
      console.log(item)
    }
  }
}
</script>

<style lang="scss">
.tab{
  width: 100%;
  height: 1.2rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
  z-index: 100;
  box-shadow: 0px 0px 15px #efefef;
  ul{
    display: flex;
    align-items: center;
    li{
      flex: 1;
      a{
        display: block;
      }
      i{
        width: 0.5rem;
        height: 0.5rem;
        display: block;
        margin: .15rem auto .1rem;
      }
      &:nth-of-type(1) i{
        background: url('~assets/images/tab/home.png') no-repeat center center;
        background-size: .5rem .5rem;
      }
      // &:nth-of-type(1) .nuxt-link-exact-active i{
      &:nth-of-type(1).active i{
        background: url(~assets/images/tab/home_active.png) no-repeat center center;
        background-size: .5rem .5rem;
      }
      &:nth-of-type(2) i{
        background: url(~assets/images/tab/profile.png) no-repeat center center;
        background-size: .5rem .5rem;
      }
      // &:nth-of-type(2) .nuxt-link-exact-active i{
      &:nth-of-type(2).active i{
        background: url(~assets/images/tab/profile_active.png) no-repeat center center;
        background-size: .5rem .5rem;
      }
      // .nuxt-link-exact-active span{
      &.active span{
        color: #40BB90;
      }
      span{
        display: block;
        height: 0.28rem;
        font-size: .2rem;
        text-align: center;
        color: #575B6E;
      }
    }
  }
}
</style>
