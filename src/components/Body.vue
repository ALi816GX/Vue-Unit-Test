<template>

    <div>

        <InputBar @push="onPushTodoItem"></InputBar>

        <ListContainer :list="list"></ListContainer>

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

        // props:{
        //     list: {
        //         type: Array,
        //         default: () => []   //default 引用类型时的必须用一个方法返回
        //     }
        // },
        //
        // methods: {
        //     onPushTodoItem(payload){
        //         this.$emit("push",payload);
        //     }
        // }


    };


</script>