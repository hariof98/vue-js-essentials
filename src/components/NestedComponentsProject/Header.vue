<template>
    <div id="app">
        <h2>{{ title }}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Header for the project'
        }
    }
}
</script>

<style scoped>
    #app{
        background-color: #429842;
        padding: 20px;
    }
    h2{
        color: white;
    }
</style>