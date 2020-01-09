<template>
  <div class="container">
    <nuxt-child />
    <Tab />
  </div>
</template>

<script>
import Tab from '~/components/common/Tab'
export default {
  components: {
    Tab
  },
  data () {
    return {
    }
  },
  created () {
    console.log('pages/index.vue')
    console.log(process.env.baseUrl)
    console.log(process.env.nodeEnv)
    console.log(process.env.NODE_ENV)
    console.log('pages/index.vue')
  },
  methods: {
  }
}
</script>

<style lang="scss">
.container{
}
</style>
