<template>
    <div>
        <h1>{{ topics }}</h1>
        <pre>{{ name }}</pre>
        <p>{{ greet('afternoon') }}</p>
    </div>
</template>

<script>
export default({
  // vue instance
  data () {
    return {
      topics: '1. The Vue Instance, Data and Methods',
      name: 'Hari Vue'
    }
  },

  // methods in vue
  methods:{
    greet: function(time) { // passing time as parameter  

      /* arrow functions are bound to the parent context, this will not be the Vue instance as you’d expect and 
         this.name will be undefined. In order to get the correct reference to this as the Vue instance, use a regular function. */

      return 'Good' + ' '  + time + ' ' + this.name
    }
  }
})
</script>
