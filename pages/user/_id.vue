<template>
  <div class="user-detail">
    user-detail
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  data () {
    return {
    }
  },
  asyncData () {
    console.log('async')
  }
}
</script>
<style lang="scss" scoped>
.user-detail{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: #333;
}
</style>
