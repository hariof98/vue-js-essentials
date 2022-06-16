<template>
  <div>
      <pre>{{ title }}</pre>
      <!-- <names></names> --> <!-- example of global import component -->

      <!-- <button v-on:click="a++">Methods - 1</button>
       {{ vueMethods() }}
       <p>{{ a }}</p>

      <button v-on:click="b++">Methods - 2</button>
        {{ vueMethods2() }}
      <p>{{ b }}</p>

      <button v-on:click="c++">Computed Button - 1</button>
        {{ vueComputed }} 
      <p>{{ c }}</p>

      <button v-on:click="d++">Computed Button - 2</button>
        {{ vueComputed2 }}
      <p>{{ d }}</p>

      <div>
          <p>{{ title2 }}</p>
          <span v-bind:class="btnColor" v-bind:style="{cursor: 'pointer'}" v-on:click="btnClick()">Click me to change me</span>
      </div>
        <br>
      <div>
          <input type="text" ref="testRef" placeholder="Test For Ref...">
          <button v-on:click="refData()">Submit</button>
          {{ referData }}
      </div>

      <div>
        <input type="text" v-model="modelData" placeholder="Test For v-model...">
        <button v-on:click="thisData()">Submit</button>
        {{ thisAns }}
      </div> -->
    
      <div>
        <input type="text" v-model="debounceThrottle" placeholder="type please....">
            <div v-if="debounceThrottle">
                {{ specialFunction }}
            </div>
      </div>

  </div>
</template>

<script>
export default {
    data() {
       return {
           title: 'Test (Methods and Computed)',
           a: 0,
           b: 0,
           c: 0,
           d: 0,
           title2: 'Dynamic Css Binding',
           btnClass: true,
           referData: '',
           modelData: '',
           thisAns: '',
           debounceThrottle: ''
       }
    },
    methods:{
        // vueMethods: function() {
        //     console.log('First Method', this.a)
        // },
        // vueMethods2: function() {
        //     console.log('Second Method', this.b)
        // },
        // btnClick: function() {
        //     return this.btnClass= !this.btnClass
        // },
        // refData: function(){
        //     console.log(this.$refs)
        //     this.referData = this.$refs.testRef.value
        // },
        // thisData: function(){
        //     this.thisAns = this.modelData
        // }
    },
    computed:{
        // vueComputed: function() {
        //     console.log('First Computed', this.c)
        // },
        // vueComputed2: function() {
        //     console.log('Second Computed', this.d)
        // },
        // btnColor: function() {
        //     return {
        //         btnClass: this.btnClass
        //     }
        // },
        specialFunction: function(){
            //console.log(this.debounceThrottle);
            if(this.debounceThrottle.length > 3){
              console.log(this.debounceThrottle);
            }
        }
    },
}
</script>

<style scoped>
span{
    background-color: aquamarine;
    padding: 10px;
    border: none;
    border-radius: 10px;
}
.btnClass{
    background-color: rgb(201, 75, 75);
}
</style>