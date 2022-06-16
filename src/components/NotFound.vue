<template>
  <div v-not-found class="colorChanges">
      {{ title | not-found}}
  </div>
</template>

<script>
export default {
    data(){
        return{
            title: "page yet to be developed!",
        }
    },

    filters:{
        'not-found': function(value){
            return value.toUpperCase();
        }
    },
    
    directives: {
        'not-found':{
            bind(el, binding, vnode){
                el.style.color = '#' + Math.random().toString().slice(2, 8);
                el.style.fontSize='50px';
                el.style.fontWeight='bolder';
            }
        }
    }
}
</script>

<style>

</style>