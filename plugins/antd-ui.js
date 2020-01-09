import Vue from 'vue'

// import Antd from 'ant-design-vue/lib'
// Vue.use(Antd)

// import Alert from 'ant-design-vue/lib/alert'
// Vue.use(Alert)
// import Message from 'ant-design-vue/lib/message'
import Carousel from 'ant-design-vue/lib/carousel'
import DatePicker from 'ant-design-vue/lib/date-picker'
import LocaleProvider from 'ant-design-vue/lib/locale-provider'
Vue.use(Carousel)
Vue.use(DatePicker)
Vue.use(LocaleProvider)
// Vue.prototype.$message = Message
import('ant-design-vue/lib/message')
  .then((res) => {
    Vue.prototype.$message = res.default
  })
