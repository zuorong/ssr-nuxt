<template>
  <div class="home">
    <Search />
    <div class="wrap">
      <div class="swiper">
        <a-carousel :autoplay="true">
          <div>
            <img src="http://dev-cr-cloud-hcres.oss-cn-hangzhou.aliyuncs.com/pcp/picture/advtsmt/da846dee89cf429598fde8b0cb9083f6.png" alt="">
          </div>
          <div>
            <img src="http://dev-cr-cloud-hcres.oss-cn-hangzhou.aliyuncs.com/pcp/picture/advtsmt/dd67bbf7ebbe4269b21eb9fe1d5b9a25.png" alt="">
          </div>
          <div>
            <img src="http://oss-prod.cr-health.com/pcp/picture/advtsmt/3a780292ee8e4441b5d458b6aaa24581.jpg" alt="">
          </div>
        </a-carousel>
      </div>
      <div @click="onDetail" class="register">
        <div class="register-list">
          <p>当日挂号</p>
          <p>挂号不排队</p>
          <img src="~/assets/images/ad1.png" alt="">
        </div>
        <div class="register-list">
          <div>
            <img src="~/assets/images/ad2.png" alt="">
            <p>预约挂号</p>
            <p>专家坐诊早看早好</p>
          </div>
          <div>
            <img src="~/assets/images/ad3.png" alt="">
            <p>住院服务</p>
            <p>押金报告一键搞定</p>
          </div>
        </div>
      </div>
      <nav @click="onDetail" class="menu">
        <ul>
          <li>
            <a>
              <img src="~/assets/images/menu/fee.png" alt="">
              <span>门诊缴费</span>
            </a>
          </li>
          <li>
            <a>
              <img src="~/assets/images/menu/report.png" alt="">
              <span>电子报告</span>
            </a>
          </li>
          <li>
            <a>
              <img src="~/assets/images/menu/test.png" alt="">
              <span>自测</span>
            </a>
          </li>
          <li>
            <a>
              <img src="~/assets/images/menu/my.png" alt="">
              <span>我的待诊</span>
            </a>
          </li>
        </ul>
      </nav>
      <nuxt-link to="/about">
        <div @click="onDetail" class="online">
          <span>
            <img src="~/assets/images/online1.png" alt="">
          </span>
          <span>
            <img src="~/assets/images/online2.png" alt="">
          </span>
        </div>
      </nuxt-link>
      <Subtitle title-text="推荐名医" more-text="更多" />
      <div @click="onDetail" class="recommend-wrap">
        <div class="recommend">
          <div :style="{width: 3 * doctors.length + 'rem'}" class="recommend-scroll">
            <Item :source-data="doctors" />
          </div>
        </div>
      </div>
      <Subtitle title-text="互联网医院" />
      <div @click="onDetail" class="hospital">
        <Hospital />
        <Hospital />
        <Hospital />
      </div>
      <Subtitle title-text="热门应用" />
      <div @click="onDetail" class="online">
        <span>
          <img src="https://prod-cr-cloud-hcres.oss-cn-shenzhen.aliyuncs.com/pcp/picture/appconfig/557eb9b7186e4ee3b88b253fed631be1.jpg" alt="">
        </span>
        <span>
          <img src="https://prod-cr-cloud-hcres.oss-cn-shenzhen.aliyuncs.com/pcp/picture/appconfig/557eb9b7186e4ee3b88b253fed631be1.jpg" alt="">
        </span>
      </div>
      {{
        $store.state.todo.list
      }}
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Search: () => import('~/components/common/Search'),
    Subtitle: () => import('~/components/home/Subtitle'),
    Item: () => import('~/components/home/Item'),
    Hospital: () => import('~/components/home/Hospital')
  },
  data () {
    return {
      doctors: [
        {
          id: 0,
          photo: 'http://dev-cr-cloud-hcres.oss-cn-hangzhou.aliyuncs.com/hcsp/temp/picture/153f574e231642ae93ded143f6218b36png',
          deptName: '泌尿外科',
          name: '刘存东',
          jobTitle: '主任医师'
        },
        {
          id: 1,
          photo: 'http://dev-cr-cloud-hcres.oss-cn-hangzhou.aliyuncs.com/hcsp/temp/picture/592231e910c041619bae8b12969a1cdfpng',
          deptName: '心血管内科',
          name: '胡兆霆',
          jobTitle: '主任医师'
        },
        {
          id: 2,
          photo: '',
          deptName: '心血管内科',
          name: '测试账号',
          jobTitle: '主治医生'
        }
      ]
    }
  },
  methods: {
    onDetail () {
      // this.$message.error('test')
      // this.$store.commit('todo/setLanguage', '中文')
      this.$router.push({
        path: '/about'
      })
    }
  }
}
</script>

<style lang="scss">
.home{
  .wrap{
    width: 100%;
    padding: 0 .2rem;
    box-sizing: border-box;
    padding-bottom: 1.4rem;
  }
  .swiper{
    padding-bottom: .2rem;
  }
  .ant-carousel{
    height: 2.2rem;
    border-radius: 3px;
    overflow: hidden;
    .slick-slider{
      height: 100%;
      overflow: hidden;
      img{
        width: 100%;
        height: 2.2rem;
      }
    }
  }
  .register{
    display: flex;
    height: 2.8rem;
    padding: 0 0 .2rem;
    .register-list{
      &:first-child{
        width: 48%;
        margin-right: 2%;
        position: relative;
        img{
          width: 2rem;
          position: absolute;
          right: 0;
          bottom: 0;
        }
        p{
          &:nth-of-type(1){
            font-size: .3rem;
            color: #32343E;
          }
          &:nth-of-type(2){
            font-size: .24rem;
            color: #999;
          }
        }
      }
      &:last-child{
        flex: 1;
        div{
          overflow: hidden;
          &:first-child{
            margin-top: 0.1rem;
          }
          p{
            &:nth-of-type(1){
              color: #32343E;
              font-size: .3rem;
              padding-top: .15rem;
            }
            &:nth-of-type(2){
              color: #999;
              font-size: .26rem;
            }
          }
          img{
            width: 1.1rem;
            float: left;
            margin-right: 0.1rem;
          }
        }
      }
    }
  }
  .menu{
    margin: .1rem 0 .5rem;
    ul{
      display: flex;
      li{
        flex: 1;
        a{
          display: block;
        }
        img{
          width: 0.5rem;
          height: 0.5rem;
          margin: 0 auto;
        }
        span{
          color: #32343E;
          font-size: .24rem;
          display: block;
          margin: .15rem auto 0;
          text-align: center;
        }
      }
    }
  }
  .online{
    overflow: hidden;
    position: relative;
    span{
      width: 48%;
      float: left;
      display: block;
      &:nth-of-type(1){
        margin-right: 2%;
      }
    }
    img{
      width: 100%;
    }
    .soon{
      width: 0.97rem;
      height: 0.97rem;
      position: absolute;
      left: calc(48% - 0.97rem);
      top: 0;
    }
  }
  .recommend-wrap{
    height: 3.04rem;
    overflow: hidden;
    .recommend{
      width: 100%;
      height: 4rem;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar{
        background: none;
      }
    }
  }
}
</style>
