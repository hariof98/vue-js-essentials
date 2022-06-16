<template>
  <div>
        <div>
            <keep-alive>
                <!-- Line number 6 and 7 works identically -->
                <!-- <form-component></form-component> -->
                <component :is="whichComponent"></component>
            </keep-alive>
            <button v-on:click="whichComponent = 'form-component'">Switch back to native form</button>
            <button v-if="whichComponent != ''" v-on:click="resetForm()">Reset</button>
        </div>
    
      <h2>{{ title }}</h2>
      
        <div>
          <input v-bind:type="nameType" placeholder="Enter your name" v-model="nameModel">
          <input v-bind:type="numType" placeholder="Enter your number" v-model="numModel">
          <button v-bind:style="{cursor: cursorType}" v-on:click="submitRecord()">Submit</button>
        </div>

        <div v-bind:class="{classStatus}">
            <p>Your Marks</p>
            Hello {{ welcomeMsg }}
            <ul v-bind:class="{myClass: true}">
                <li v-for="(sub, index) in mySubjects" :key="index">
                    {{ sub }}
                </li>
            </ul>
        </div>

  </div>
</template>

<script>
// Dynamic Components Example
import Conditionals from '@/components/Conditionals'

export default {
    components:{
        'form-component': Conditionals    
    },
    
    data() {
        return{
            title: 'App',
            nameType: 'text',
            numType: 'number',
            cursorType: 'pointer',
            nameModel: '',
            numModel: '',
            mySubjects: ['English', 'Maths', 'Science', 'Computer', 'Tamil'],
            classStatus: true,
            welcomeMsg: '',
            whichComponent: ''
        }
    },

    methods:{
        submitRecord: function(){
            if(!this.nameModel || !this.numModel){
                alert('Please enter all the details')
            }
            else{
                this.welcomeMsg = this.nameModel
                this.classStatus = false
            }
        },
        resetForm: function(){
            return this.whichComponent= !this.whichComponent
        }
    }
}
</script>

<style scoped>
.myClass{
    list-style-type: none;
}
.classStatus{
    display: none;
}
</style>