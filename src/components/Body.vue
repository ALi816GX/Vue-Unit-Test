<template>

    <div>
        <InputBar></InputBar>
        <ListContainer></ListContainer>
    </div>


</template>


<script>

    import InputBar from "../components/InputBar.vue";
    import ListContainer from "../components/ListContainer.vue";

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