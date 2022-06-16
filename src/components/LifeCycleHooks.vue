<template>
  <div>
      <div>
          <h2>{{ title }}</h2>
          <ul v-bind:class="listStyleFun()">
              <li v-for="(names, index) in namelist" :key="index">
                  {{ names }}
              </li>
          </ul>
      </div>
      <div>
           <button v-on:click="deleteName()">Delete Names</button>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return{
            title: 'Life Cycle Hooks',
            namelist: ['Hari', 'Jaime', 'Ned', 'Jon'],
            listStyle: [],
        }
    },

    methods: {
        listStyleFun: function(){
            return {
                listStyle: this.listStyle
            }
        },
        deleteName: function(){
            this.namelist.pop()
        }
    },

    // beforeCreate(){
    //     alert('beforeCreated');
    // },

    // created(){
    //     alert('created');   // created life cycle hook is used to fetch whatever data required
    // },

    // beforeMount(){
    //     alert('beforeMount');
    // },

    // mounted(){
    //     alert('mounted');
    // },

    // beforeUpdate(){
    //     alert('beforeUpdate');   
    //     /* If vue detects a change, then it's going to occur in this component 
    //     and this component will get executed before the changes took place */   
    // },

    // updated(){
    //     alert('updated'); 
    //     // this occurs after the DOM has been updated and re-rendered 
    // }
}
</script>

<style>
.listStyle{
    list-style-type: none;
}
</style>