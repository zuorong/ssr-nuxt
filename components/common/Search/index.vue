<template>
  <div class="search">
    <figure class="figure">
      <a href="https://www.baidu.com">
        <img src="~/assets/images/search.png" alt="">
      </a>
    </figure>
  </div>
</template>

<script>
export default {
  props: {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.search{
  width: 100%;
  height: 1.04rem;
  position: relative;
}
.figure{
  margin: 0;
  padding: 0;
  // position: relative;
  width: 100%;
  height: 1.04rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  i{
    width: 1rem;
    height: 100%;
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    img {
      width: 0.4rem;
      height: 0.4rem;
    }
  }
  a{
    img{
      width: 100%;
    }
  }
}
</style>
