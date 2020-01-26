import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import '~/assets/styles/scss/element-variables.scss'

Vue.use(Element, {
  locale,
  size: 'small'
})
