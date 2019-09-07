<template>

    <div>
        <input type="text" @keyup.enter="handleClick" v-model="itemValue" class="inputText"/>
        <input type="button" @click="handleClick" value="Add" class="button" />
    </div>


</template>


<script >

    export default {
        name:"InputBar",
        data() {
            return{
                itemValue:"",
            }
        },
        methods:{
            handleClick(){
                if(this.itemValue !== "") {
                    let index = this.$store.getters.getTaskListLength;
                    const object = {
                        key: index,
                        value: this.itemValue,
                        isChecked: false,
                        isEditable: false
                    };
                    this.$store.commit('addTaskToList', object);
                }
            }
        }
    };

</script>


<style>

    .inputText{
        width: 150px;
        margin: 10px;
        color: blue;
    }

    .button{

        background: red;


    }


</style>