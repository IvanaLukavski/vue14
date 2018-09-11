// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Router from './router'
import VueModalTor from 'vue-modaltor'


import { mixin as focusMixin }  from 'vue-focus';
import innerFocus from 'vue-in-out/src/inner-focus';

import VeeValidate from 'vee-validate'
import VueValidationCro from 'vee-validate/dist/locale/hr';
import { focus } from 'vue-focus';

//import VuejsDialog from "vuejs-dialog"
//import VuejsDialogMixin from "vuejs-dialog/vuejs-dialog-mixin.min.js" // only needed in custom components



// Tell Vue to install the plugin.
//Vue.use(VuejsDialog.main.default)


// include the default style
//import 'vuejs-dialog/vuejs-dialog.min.css'

// Tell Vue to install the plugin.
//Vue.use(VuejsDialog)

Vue.use(VeeValidate, {
  locale: 'hr',
  dictionary: {
    hr: VueValidationCro
  }
});


Vue.use(VueModalTor)
//Vue.use(VeeValidate)


Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(focus);

const router=new VueRouter({
  routes:Router,
  mode:'history'
});

Vue.filter('to-uppercase',function(value){
  return value.toUpperCase();
})

Vue.filter('to-skraceno',function(value){
  return value.slice(0,100)+ '...';
})


Vue.component('modal', {
  template: '#modal-template'
})

/*
var xhr = new XMLHttpRequest();
xhr.open('get', 'https://vuejs-bfbf4.firebaseio.com/posts.json');
xhr.withCredentials = true;*/


Vue.http.headers.common['Access-Control-Allow-Origin'] = 'https://vuejs-bfbf4.firebaseio.com/posts.json'



/* eslint-disable no-new */
new Vue({
  el: '#app',
  //    props:['focused_naslov'],
  directives: {
      'inner-focus': innerFocus,
      'focus':focus
  },
  components: { App },
  template: '<App/>',
  router:router,
  mixins: [ focusMixin ],
  //template: '<input type="text" v-focus="focused" @focus="focused = true" @blur="focused = false">',

  //directives: { focus: focus },
  data(){
    return{
    //  focused_naslov:false
    /* showModal: false,

        list: JSON.parse(this.focused_naslov)*/
      }
  },
  externals: {
    // .. other externals if any
    'vuejs-dialog': 'VuejsDialog'
}
})
