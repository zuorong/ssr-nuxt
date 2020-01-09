<template>
  <div class="item">
    <div v-for="item in sourceData" @click="onDetail(item)" :key="item.id" class="box">
      <i>
        <img :src="item.photo || require('~/assets/images/default-face.png')" alt="">
      </i>
      <p>
        {{ item.deptName }}
      </p>
      <div>
        <span>
          {{ item.name }}
        </span>
        <span>
          {{ item.jobTitle }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sourceData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    onDetail (item) {
      console.log(item)
    }
  }
}
</script>

<style scoped lang="scss">
.item{
  .box{
    width: 2.8rem;
    height: 2.8rem;
    background: #f9f9f9;
    padding-top: 0.25rem;
    border-radius: 4px;
    margin-right: .2rem;
    float: left;
    display: block;
    i{
      width: 1.24rem;
      height: 1.24rem;
      border-radius: 100%;
      overflow: hidden;
      margin: 0 auto .25rem;
      display: block;
    }
    img{
      width: 100%;
    }
    p{
      color: #32343E;
      font-size: .3rem;
      text-align: center;
      height: .42rem;
      line-height: .42rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 0.15rem;
      padding: 0 .1rem;
    }
    div{
      height: 0.3rem;
      line-height: 0.3rem;
      color: #575B6E;
      font-size: .26rem;
      display: flex;
      span{
        width: 50%;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:nth-of-type(1){
          text-align: right;
          padding-right: 0.1rem;
          border-right: 1px solid #a8aab3;
        }
        &:nth-of-type(2){
          text-align: left;
          padding-left: 0.1rem;
        }
      }
    }
  }
}
</style>
