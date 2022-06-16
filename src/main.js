// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* Global Import */
import Components from '@/components/Components'
Vue.component('names', Components)


/* Custom Directive */
Vue.directive('rainbow', {
  bind(el, binding, vnode){   // vnode stands for virtual node, binding gives info about the directives
    el.style.color= '#' + Math.random().toString().slice(2, 8);
    el.style.fontSize= '20px';
    el.style.padding= '20px';
    el.style.fontWeight= 'bolder'
  }
})

Vue.directive('container', {
  bind(el, binding, vnode){
    if(binding.value == 'light'){
      el.style.backgroundColor= 'white';
    }
    else{
      el.style.backgroundColor= 'black';
    }
  }
})

/* Filters */
Vue.filter('first-filter', function(data){
  return data.toUpperCase();
})

Vue.filter('shorten-filter', function(text){
  return text.slice(0, 50) + '...';
})

Vue.directive('filter-and-directive', {
  bind(el, binding, vnode){
    console.log(binding.value);
    el.style.fontSize= '20px';
    el.style.color= 'orange';
  }
})

/* Event Bus */
export const bus = new Vue();


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
