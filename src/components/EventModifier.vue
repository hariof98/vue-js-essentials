<template>
    <div>
        <div>
            <h2>{{ title }}</h2>
            <button v-on:click.once="onceClick">Once</button>
        </div>
        <div>
            <a v-bind:href="link" v-on:click.prevent="preventClick">Prevent</a>
        </div>
    </div>
</template>


<script>
export default{
    data () {
        return {
            title: 'Event Modifiers',
            link: 'https://vuejs.org/'
        }
    },
    methods:{
        onceClick: () => {
            alert('❌Only allowed once❌');
        },
        preventClick: function() {
            alert('Prevents opening hyper links')
        }
        
    },
}
</script>
