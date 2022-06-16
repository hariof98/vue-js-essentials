<template>
  <div>
      <!-- {{ searchKeyword() }} -->
      <div v-title-directive v-on:click="searchKeyword()">
          {{ title | local-filter}}
      </div>
      <div>
          <input v-search-directive type="text" v-model="searchWord" placeholder="Search...">
          <input  v-search-directive v-bind:type="type" placeholder="Enter id" v-model="id">
      </div>
      <div>
          <ul v-local-directive>
             <li v-for="(api, index) in apiData" :key="index">
                <p v-data-style>
                    {{ api[index].id }}
                    {{ api[index].title }}
                    {{ api[index].body }}
                </p>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import firstMixin from '../components/Mixins/firstMixins'

export default {
   data(){
       return{
           title: 'Search Filter',
           apiData: [],
           searchWord: '',
           type: 'number',
           id: ''
        }
   },

    /* Operation is performed via MIXINS */
    methods:{
        searchKeyword: function(){
            if(this.id != ''){
                var myFetch = 'https://jsonplaceholder.typicode.com/posts/' + this.id;
            }
            else{
                var myFetch = 'https://jsonplaceholder.typicode.com/posts';
            }

            fetch(myFetch).then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data);
                this.apiData.push(data);
            }).catch((err) => {
                console.log(err)
            })
        }
    },


   /* Declaring Filters and Directives locally */
    directives:{
       'local-directive':{
            bind(el, binding, vnode){
                el.style.listStyleType='none';
                el.style.color='#' + Math.random().toString().slice(2, 8);
            }
        },
        'title-directive':{
            bind(el, binding, vnode){
               el.style.fontSize= '100px';
            }
        },
       'search-directive':{
           bind(el, binding, vnode){
               el.style.padding='30px';
               el.style.width='500px';
            }
        },
       'data-style':{
            bind(el, binding, vnode){
               el.style.fontSize='20px';
               el.style.paddingTop='25px';
            }
        }
    },

    filters: {
        'local-filter': function(value){
            return value.toUpperCase();
        }
    },

    /* MIXINS */
    mixins: [firstMixin]

}
</script>

<style>

</style>