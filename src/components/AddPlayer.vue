<template>
  <div id="add-player">
    <div class="title">Add Player</div>
    <div class="add-player-inner">
      <div class="box">
        <div class="player-wrap">
          <label for="player-name">Player name</label>
          <input type="text" v-model="name" placeholder="Name" name="player-name" class="player-name"><br>
          <button class="button is-primary" @click="add">Add Player</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapActions, mapState } from "vuex";

export default {
  name: "AddPlayer",
  components: {},
  data: function() {
    return {
      name: "",
    };
  },
  methods: {
    ...mapActions({
      addPlayer: "addPlayer",
      findPlayer: "findPlayer",
      getPlayers: "getPlayers",
    }),
    add() {
      this.addPlayer(this.name).then(response => {
        this.getPlayers();
      });
    },
  },
  computed: {
    ...mapState(["players"]),
  },
  mounted() {
    this.getPlayers();
  },
};
</script>

<style>
#add-player {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.add-player-inner {
  width: 300px;
  display: flex;
  flex-direction: column;
}
.player-wrap {
  display: flex;
  flex-direction: column;
}
</style>
