<template>
  <div>
    <p v-bind:class="{textClass: classState}" v-on:click="myText()">{{ title }}</p>
    <p v-bind:class="toggleStatus">
        Hello
    </p>
    <button  v-on:click="changeBtnClr()">Change Color</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            title: 'Class Test',
            classState: false,
            myButton: false
        }
    },

    methods:{
        myText: function(){
            return this.classState= !this.classState
        },

        changeBtnClr: function(){
            return this.myButton = !this.myButton;
        }
    },

    computed:{
        /* computed acts as a data field */
        toggleStatus: function(){
            return {
                myButton: this.myButton
            }
        }   
    }

}
</script>

<style>
.textClass{
    font-size: 60px;
    font-weight: bolder;
}

.myButton{
    font-size: 60px;
    font-weight: bolder;
    color: green;
}

</style>