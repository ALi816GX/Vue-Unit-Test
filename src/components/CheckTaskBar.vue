<template>

    <div>
        <input type="checkbox" v-model="task.isChecked" @click="selected"/>
        <span v-bind:contentEditable="getEditable" @dblclick="changeValue" @keydown.enter.prevent="changeValue">{{task.value}}</span>
    </div>

</template>

<script>
    export default {
        name:"CheckTaskBar",
        props:['task'],
        methods:{
            selected(){
               this.task.isChecked = !this.task.isChecked;
               this.$store.commit("changeTaskListByState");
            },
            changeValue(e){
                this.task.isEditable = !this.task.isEditable;
                this.task.value = e.target.innerText;
                this.$store.commit("changeTaskListByState");
            }
        },
        computed:{
            getEditable(){
                return this.task.isEditable;
            }
        }
    };


</script>