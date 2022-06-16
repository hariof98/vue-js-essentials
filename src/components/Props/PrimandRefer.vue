<template>
    <div>
        
        <button v-on:click="deleteData()">
            <div id="content">
                <ul v-for="(data, index) in userData" :key="index">
                    <li>{{ data.name }}</li>
                    <li>{{ data.age }}</li>
                    <li>{{ data.job }}</li>
                </ul>
            </div>
        </button>

        <div id="string" v-on:click="changeName()">
            {{ workDetails }}
        </div>

        <div v-on:click="changeName2()">
            {{ eventBus }}
        </div>

    </div>
</template>

<script>
import { bus } from '@/main'

export default {
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
    
    methods:{
        changeName: function() {
            this.workDetails = 'Hari'
        },

        deleteData: function() {
            this.userData.pop()
        },

        changeName2: function(){
            this.eventBus = 'Event Bus Worked!',
            bus.$emit('event-bus', 'Event Bus Worked!')
            // first parameter (event-bus) is the event name
            // we also will pass the second parameter to the child component ChildProp
        }
    }
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