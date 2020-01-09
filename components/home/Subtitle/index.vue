<template>
  <h1 class="recommend-title">
    <p>
      {{ titleText }}
    </p>
    <div v-if="moreText" @click="onMore">
      <span>
        {{ moreText }}
      </span>
      <i />
    </div>
  </h1>
</template>

<script>
export default {
  props: {
    titleText: {
      type: String,
      require: true,
      default: ''
    },
    moreText: {
      type: String,
      require: false,
      default: ''
    }
  },
  data () {
    return {
      show: true
    }
  },
  methods: {
    onMore () {
      this.$emit('subclick')
    }
  }
}
</script>

<style scoped lang="scss">
.recommend-title{
  font-weight: normal;
  position: relative;
  padding: 0.4rem 0 .2rem;
  line-height: 0.5rem;
  display: flex;
  justify-content: space-between;
  p{
    color: #32343E;
    font-size: .36rem;
    font-weight: 600;
  }
  div{
    display: flex;
    align-items: center;
    span{
      height: 100%;
      display: block;
      color: #999;
      font-size: .26rem;
      width: .6rem;
    }
    i{
      width: .3rem;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      &:after{
        width: 8px;
        height: 8px;
        border: 1px solid #999;
        border-left: none;
        border-bottom: none;
        transform: rotate(45deg);
        display: block;
        content: "";
        margin-right: 3px;
      }
    }
  }
}
</style>
