<template>
  <div class="list-wrap">
    <div class="list">
      <img v-if="path" :src="path" alt="">
      <span>
        {{ text }}
      </span>
      <div v-if="isShowIcon">
        <i />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true,
      default: ''
    },
    text: {
      type: String,
      required: true,
      default: ''
    },
    arrow: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
    isShowIcon () {
      if (this.arrow === false) {
        return false
      }
      return true
    }
  }
}
</script>

<style scoped lang="scss">
  .list-wrap{
    padding: 0 .3rem;
    background: #fff;
    &:active{
      background: #fafafa;
    }
    .list{
      height: 0.9rem;
      display: flex;
      align-items: center;
      position: relative;
      border-bottom: 1px solid #f3f3f3;
      img{
        width: 0.32rem;
        height: 0.36rem;
        margin-right: 0.22rem;
      }
      span{
        display: block;
        flex: 1;
        font-size: .28rem;
        color: #32343E;
      }
      div{
        width: 0.4rem;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: .3rem;
        top: 0;
        i{
          width: 8px;
          height: 8px;
          display: block;
          border: 1px solid #ccc;
          border-left: none;
          border-bottom: none;
          transform: rotate(45deg);
        }
      }
    }
  }
</style>
