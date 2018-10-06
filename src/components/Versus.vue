<template>
  <div id="versus">
    <div class="title">Score Tracker</div>
    <div class="box" v-if="transformedPlayers && transformedPlayers.length >= 2">
      <div class="versus-wrap">
        <div class="left">
          <label for="left-player">Player</label>
          <select v-model="p1" name="left-player" class="player-name">
            <option :value="player.name" v-for="player in transformedPlayers" :key="player.name">{{player.name}}</option>
          </select>
          <label for="left-score">Score:</label>
          <input class="num-input" min="0" type="number" name="left-score" v-model="p1Score">
    </div>
          <div class="vs">
            <div class="title">VS</div>
            <button class="button is-primary" @click="submitScores()">Submit Scores</button>
          </div>
          <div class="right">
            <label for="right-player">Player</label>
            <select v-model="p2" name="right-player" class="player-name">
              <option :value="player.name" v-for="player in transformedPlayers" :key="player.name">{{player.name}}</option>
            </select>
            <label for="right-score">Score:</label>
            <input class="num-input" min="0" type="number" name="right-score" v-model="p2Score">
    </div>
          </div>
        </div>
        <div v-else>
          <div class="content">
            <h4>Less than 2 players!</h4>
          </div>
          <router-link to="/add-player">Add some players!</router-link>
        </div>
      </div>
</template>

<script>
import firebase from "firebase";
import { mapActions, mapState } from "vuex";
import { find } from "lodash";

export default {
  name: "Versus",
  components: {},
  data: function() {
    return {
      p1: null,
      p2: null,
      p1Score: 0,
      p2Score: 0,
    };
  },
  methods: {
    ...mapActions({
      getPlayers: "getPlayers",
      saveScore: "saveScore",
    }),
    submitScores() {
      if (this.p1 && this.p2) {
        let final = {
          player1: {
            name: this.p1,
            score: this.p1Score,
          },
          player2: {
            name: this.p2,
            score: this.p2Score,
          },
        };
        this.saveScore(final);
      } else {
        alert("Please select both players");
      }
    },
  },
  computed: {
    ...mapState(["players"]),
    transformedPlayers() {
      let m = [];
      for (var i in this.players) {
        m.push({ name: i, ...this.players[i] });
      }
      return m;
    },
  },
  mounted() {
    this.getPlayers();
  },
};
</script>

<style>
#versus {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.versus-wrap {
  display: grid;
  width: 600px;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: left;
}
.vs {
  text-align: center;
  align-self: center;
}
.player-name {
  margin-bottom: 20px;
  width: 100%;
  height: 30px;
  font-size: 1.1em;
  padding: 0 5px;
}
.right,
.left {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.num-input {
  width: 60px;
  height: 50px;
  font-size: 1.5em;
  padding: 5px;
}
</style>
