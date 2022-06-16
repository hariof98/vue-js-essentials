<template>
  <div>
    <div id="content">
        <ul v-for="(thisData, index) in userData" :key="index">
           <li>{{ thisData.name }}</li>
           <li>{{ thisData.age }}</li>
           <li>{{ thisData.job }}</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            userData:
            [
                {name: 'Hari',   age: 23, job: 'Developer'},
                {name: 'Jack',   age: 43, job: 'Developer'},
                {name: 'Jon',    age: 33, job: 'Developer'},
                {name: 'Jamie',  age: 43, job: 'Developer'},
                {name: 'Tywin',  age: 73, job: 'Developer'},
                {name: 'Ned',    age: 63, job: 'Developer'},
                {name: 'Robert', age: 63, job: 'Developer'},
                {name: 'Peter',  age: 33, job: 'Developer'},
                {name: 'Yuva',   age: 23, job: 'Developer'},
                {name: 'Sansa',  age: 23, job: 'Developer'},
                {name: 'Arya',   age: 13, job: 'Developer'},
                {name: 'Cercei', age: 43, job: 'Developer'},
            ]
        }
    },
}
</script>

<style scoped>
    #content{
        padding: 50px;
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
</style>