<template>
  <div id="message-bar">
    <div class="message">{{message}}</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "MessageBar",
  components: {},
  props: ["message", "messageType"],
  data: function() {
    return {};
  },
  methods: {
    ...mapActions(["setMessage"])
  },
  computed: {},
  mounted() {
    setTimeout(() => {
      this.setMessage(null);
    }, 2000);
  }
};
</script>

<style scoped>
#message-bar {
  width: 100%;
  text-align: center;
  padding: 20px 0;
}
.message {
  display: inline-block;
}
</style>
