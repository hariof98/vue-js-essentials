<template>
    <div>
        <h2>{{ title }}</h2>
        <input v-model="myName" placeholder="Enter your name"/>
        <input v-model="myNumber" placeholder="Enter your Reg.No"/>
        <div>
            <br><button class="btn" v-on:click="checkResult()" v-bind:style="{cursor: 'pointer'}">Check Result</button>
        </div><br>
        {{ details }}
        <br>
        <div v-if="!details">
            <ul v-bind:class="{marks}">
                <div>
                    {{ error }}
                </div>
            </ul>
        </div>
        <div v-else>
            <ul v-bind:class="{marks}">
                <div class="container">
                    <li class="col" v-for="(data , index) in mySubjects" :key="index">{{ data }}</li>
                </div>
                <div class="container">
                    <li class="col" v-for="(marks , index) in myMarks" :key="index">{{ marks }}</li>
                </div>
                <p>Total: {{ totalMarks }}</p>
                <p v-if="totalMarks >= 100">Status: {{ pass }}</p>
                <p v-else>Status: {{ fail }}</p>
            </ul>
        </div>
    </div>
</template>

<script>
export default{
    data () {
        return {
            title: 'Conditional Statements in VUE',
            myName: '',
            myNumber: '',
            mySubjects: ['English', 'Maths', 'Science'],
            myMarks: [100, 50, 80],
            details: '',
            totalMarks: '',
            error: 'Please enter all the details',
            myCheck: 'Check your marks below',
            marks: true,
            pass: 'PASS',
            fail: 'FAIL'
        }
    },
    methods:{
        checkResult: function() {
            if((!this.myName && !this.myNumber) || (!this.myName || !this.myNumber)) {
                alert(this.error)
            }
            else{
                this.details = 'Hello' + ' ' + this.myName +  ',' + '\n' + this.myCheck
                var markArray = this.myMarks
                this.totalMarks = markArray.reduce((list, val) => {
                    return list + val
                }, 0)
            }
        }
    }
}
</script>

<style scoped>
.btn{
    background: green;
    padding: 10px;
    color: white;
}
.marks{
    list-style-type: none;
}
.container {
  display: inline-table;
  border: 1px solid;
}
.col {
  margin: 10px;
  flex-grow: 1;
}
.item-container {
  border: 1px solid;
  padding: 5px;
  margin: 5px;
}
</style>
