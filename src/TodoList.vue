<template>
    <div id="app">

        <Header></Header>

        <Body v-on="onPushTodoItem" list="list" @push=""></Body>

        <Footer></Footer>

    </div>
</template>

<script>

    import Header from "./components/Header.vue";
    import Body from "./components/Body.vue";
    import Footer from "./components/Footer.vue";

    // let id = 0;
    // const getId = () =>{
    //
    // }

    export default {
        name: 'app',
        components:{
            Header,
            Body,
            Footer
        },

        methods: {
            onPushTodoItem(value){
                const  item = {
                    value,
                    finished:false,
                    id:getId()
                };
                this.list.push(item);
            }
        }

    };


</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
