<template>

    <div>

        <InputBar></InputBar>

        <ListContainer></ListContainer>

    </div>


</template>


<script>

    import InputBar from "./body/InputBar.vue";
    import ListContainer from "./body/ListContainer.vue";

    export default {

        name:"Body",
        components:{
            InputBar,
            ListContainer

        },

        data(){
            return{
                list:[]
            }
        }
    };


</script>