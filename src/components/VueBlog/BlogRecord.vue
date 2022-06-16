<template>
    <div>
        <div>
            <h2>{{ title }}</h2>
        </div>

        <div>
            <button v-on:click="blogFunction()">Show Data</button>
        </div>

        <div class="blog-grid">
          <p v-if="dataStatus">No Records available!</p>
          <div class="loopClass" v-for="(blogRecord, index) in blogRecords" :key="index">
              <ul>
                  <li>{{ blogRecord[index].name   }}</li>
                  <li>{{ blogRecord[index].email  }}</li>
                  <li>{{ blogRecord[index].mobile }}</li>
                  <li>{{ blogRecord[index].gender }}</li>
              </ul>
          </div>
        </div>
    </div>
</template>

<script>
export default {    
    data(){
        return{
            title: 'Blog Records',
            blogRecords: [],
            dataStatus: false
        }
    },
    methods:{
        blogFunction: function(){
            const lsData = JSON.parse(localStorage.getItem('User-Blog-Data'));
            const lsData2 = lsData.slice(0, 2)
            console.log(lsData2);
            if(lsData != null){ 
                this.blogRecords.push(lsData2);
            }
            else{
                this.dataStatus = true;
            }
        }
    }
}
</script>

<style>
.blog-grid{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 20px;
}
.blog-grid, ul{
    padding: 30px;
    list-style-type: none;
}
p{
    text-align: center;
}
.loopClass{
    background-color: aquamarine;
    padding: 50px;
    border-radius: 50px;
    width: fit-content;
}
</style>