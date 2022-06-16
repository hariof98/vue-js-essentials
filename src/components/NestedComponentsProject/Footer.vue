<template>
    <div id="app">
        <h2>{{ title }}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Footer for the project'
        }
    }
}
</script>

<style scoped>
    #app{
        background-color: rgb(53, 60, 53);
        padding: 20px;
    }
    h2{
        color: white;
    }
</style>