<template>
  <div>
    <div>
      <ol>
        <li v-for="item in taskListByState" :key="item.key">
          <check-task-bar :task="getNewItem(item)"></check-task-bar>
        </li>
      </ol>
    </div>
    <div>
      <button
        v-for="button in BUTTONS"
        :key="button.key"
        @click="changeButtonState(button.name)"
      >
        {{ button.name }}
      </button>
    </div>
  </div>
</template>

<script>
import CheckTaskBar from "@/components/CheckTaskBar";
import CONSTANTS from "@/constants/index";
import { mapGetters, mapActions } from "vuex";
import _ from "lodash";

export default {
  name: "ListContainer",
  data() {
    const {
      COMMON: { BUTTONS }
    } = CONSTANTS;
    return {
      BUTTONS
    };
  },
  components: {
    CheckTaskBar
  },
  computed: mapGetters(["taskListByState"]),
  methods: {
    ...mapActions(["changeButtonState"]),
    getNewItem(item) {
      return _.cloneDeep(item);
    }
  }
};
</script>
