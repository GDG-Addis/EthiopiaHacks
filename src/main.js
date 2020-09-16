// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VParallax,
  VExpansionPanel,
  VTimeline,
  VCard,
  VSwitch,
  VDivider,
  VTabs,
  VSheet,
  VImg,
  transitions,
  VSlider,

} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'


Vue.use(Vuetify, {
  iconfont: 'mdi',
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VParallax,
    VExpansionPanel,
    VTimeline,
    VCard,
    VSwitch,
    VDivider,
    VTabs,
    VSheet,
    VImg,
    transitions
  }
})

Vue.config.productionTip = false




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
