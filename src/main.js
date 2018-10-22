// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource'
import VueModalTor from 'vue-modaltor'
import VueRouter from 'vue-router'
//import VModal from 'vue-js-modal'




//import VueModalTor from 'vue-modaltor'

//ovo se import ankon kaj smo napravili file routes.js
import Router from './routes.js'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueModalTor)
//Vue.use(VModal)
//Vue.use(VueModalTor);



Vue.config.productionTip = false
const router=new VueRouter({
  /*tu more biti i ovak:
      routes:[{path:'/'},{path:'/home'}...]
  */
  routes:Router,
  mode:'history'
});
/* eslint-disable no-new */

Vue.filter('to-skraceno', function(value){
  if(value.length>70){
  return value.slice(0,70)+'...';
}else{
  return value.slice(0,70);
}
});


Vue.component('modal', {
  template: '#modal-template'
})

Vue.directive('uredi', {

  bind(el,binding,vnode){
    el.style.color="#40b782"
  }

});
Vue.http.headers.common['Access-Control-Allow-Origin'] = 'https://shop-158bc.firebaseio.com/item.json'

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  //koristi vueRouter konstantu u vue instanci tu.
  //ove vue routere koristimo samo u ovoj instanci (da ima više instanci, koristili bi u njima neke drugo možda)
  router:router,

})
