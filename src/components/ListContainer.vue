<template>
    <div>
        <div>
            <ol>
                <li v-for="item in taskListByState" :key="item.key">
                    <CheckTaskBar :task="item"></CheckTaskBar>
                </li>
            </ol>
        </div>
        <div>
            <button v-for="button in buttonNames" :key="button.key" @click="changeState(button.name)">{{button.name}}</button>
        </div>
    </div>
</template>

<script>
    import CheckTaskBar from '../components/CheckTaskBar.vue';
    export default {
        name:"ListContainer",
        data(){
            return{
                buttonNames:[
                    {index:1,name:"ALL"},
                    {index:2,name:"Active"},
                    {index:3,name:"Complete"}
                ]
            }
        },
        components:{
            CheckTaskBar
        },
        computed: {
            taskListByState(){
                return this.$store.getters.getTaskListByState;
            }
        },
        methods:{
            changeState(buttonName){
                this.$store.commit("setButtonState",buttonName);
            }
        }
    };

</script>