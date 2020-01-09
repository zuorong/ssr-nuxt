<template>
  <div class="list">
    <img src="http://dev-cr-cloud-hcres.oss-cn-hangzhou.aliyuncs.com/hcsp/temp/fc6fc5aeb56646da890a7a3253e15dc1swed.png" class="hospital-face">
    <div class="intro">
      <div class="intro-title">
        <h2>南方医科大学第三附属医院</h2>
        <span>综合</span>
      </div>
      <div class="rate">
        <div class="star-wrap">
          <div class="default">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div class="default">
            <i class="star-active" />
          </div>
          <span>三甲</span>
        </div>
      </div>
      <div class="address">
        <p>广东省广州市中山大道西183号</p>
      </div>
    </div>
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
.list{
  display: flex;
  align-items: center;
  padding: 0.22rem;
  background: #f9f9f9;
  border-radius: 4px;
  margin-bottom: 0.2rem;
  img{
    width: 1.28rem;
    height: 1.28rem;
    margin-right: 0.2rem;
    border-radius: 100%;
  }
  .intro{
    flex: 1;
    .intro-title{
      position: relative;
      h2{
        height: 0.45rem;
        line-height: 0.45rem;
        color: #32343E;
        font-size: .32rem;
        font-weight: normal;
        width: 4rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      span{
        padding: 2px;
        background: #40bb90;
        color: #fff;
        font-size: .2rem;
        border-radius: 4px;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
    .rate{
      // margin-top: .05rem;
    }
    .star-wrap{
      position: relative;
      height: 0.23rem;
      padding-top: 0.35rem;
      .default{
        width: 100%;
        height: 0.22rem;
        position: absolute;
        left: 0;
        top: .08rem;
        display: flex;
        i{
          width: 0.24rem;
          height: 0.22rem;
          background: url(~assets/images/star.png) repeat-x 0 0;
          background-size: .22rem .22rem;
          display: block;
          margin-right: 0.05rem;
        }
        .star-active{
          background: url(~assets/images/star_active.png) repeat-x 0 0;
          background-size: .22rem .22rem;
        }
      }
      span{
        padding: 2px;
        background: #f6af1c;
        color: #fff;
        font-size: .2rem;
        border-radius: 4px;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
    .address{
      height: 0.33rem;
      line-height: 0.33rem;
      font-size: .24rem;
      color: #575B6E;
      position: relative;
      p{
        width: 4rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      div{
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        align-items: center;
      }
      i{
        width: 0.16rem;
        height: 0.19rem;
        display: block;
        background: url(~assets/images/flag.png) repeat-x 0 0;
        background-size: .16rem .19rem;
      }
      span{
        margin-left: 5px;
      }
    }
  }
}
.list:last-child{
  margin-bottom: 0;
}
</style>
