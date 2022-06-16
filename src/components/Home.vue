<template>
    <div>
        {{ number() }}
        <ul class="routes">
            <li v-for="(ids, index) in id" :key="index" v-bind:class="{myClass: true}">
                <router-link :to="'/' + ids"  exact>{{ ids }}</router-link>
                <!-- :href="'#purchase-' + item.id" -->
                <!-- exact property is used to take the exactly provided URL, instead of considering suffix or any containing words -->
            </li>

        
        </ul>
    </div>
</template>

<script>
export default{
    data(){
        return{
            id: [],
        }
    },

    methods:{
        number: function(){
            var n = 25;
            for(var i=0; i< n; i ++){
                // console.log(i);
                this.id = i
            }
        }
    }
}

</script>

<style scoped>
.routes{
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
    font-size: 20px;
    color: white;
}
a{
    text-decoration: none;
}
.myClass{
    background-image: linear-gradient(166deg,#42d392 25%,#647eff);
    padding: 50px;
    border-radius: 20px;    
    width: 300px;
}

</style>