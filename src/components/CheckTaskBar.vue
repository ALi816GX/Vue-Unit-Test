<template>

    <div>
        <input type="checkbox" v-model="task.isChecked" @click="selected"/>
        <span v-bind:contenteditable="getEditableByTask" @dblclick="changeValue" @keydown.enter.prevent="changeValue">{{task.value}}</span>
    </div>

</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        name:"CheckTaskBar",
        props:['task'],
        methods:{
            ...mapMutations([
                'changeTaskListByState'
            ]),
            selected(){
               this.task['isChecked'] = !this.task.isChecked;
               this.changeTaskListByState()
            },
            changeValue(e){
                this.task['isEditable'] = !this.task.isEditable;
                this.task['value'] = e.target.innerText;
                this.changeTaskListByState()
            }
        },
        computed:{
            getEditableByTask(){
                return this.task.isEditable;
            }
        }
    };


</script>