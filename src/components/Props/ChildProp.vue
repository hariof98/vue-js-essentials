<template>
  <div>

    <div id="string">
        {{ workDetails }}
    </div>

    <div>
        {{ eventBus }}
    </div>

    <div id="content">
      <ul v-for="(data, index) in userData" :key="index">
          <li>{{ data.name }}</li>
          <li>{{ data.age }}</li>
          <li>{{ data.job }}</li>
      </ul>
    </div>

  </div>
</template>

<script>
import { bus } from '@/main'

export default {
    //props: ['userData', 'workDetails'],
    props:{
        userData:{
            type: Array
        },
        workDetails:{
            type: String
        },
        eventBus:{
            type: String
        }
    },

    // For Event Bus
    created(){
        bus.$on('event-bus', (data) => {
            this.eventBus = data;
        })
        /* The above line acts as a event listener and it listents to the event 'event-bus' thrown from the child component PrimandRefer */ 
        /* data consists of the value thrown from the second parameter of the child component PrimandRefer */
    },

    data() {
        return {}
    },
}
</script>

<style scoped>
    #content{
        padding: 20px;
        background-color: antiquewhite;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    ul{
        list-style-type: none;
    }
    li{
        padding: 20px;
        background-color: aliceblue;
    }
    #string{
        background-color: rgb(81, 255, 0);
    }
</style>


