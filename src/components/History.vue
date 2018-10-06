<template>
  <div id="history">
    <div class="title">Previous Games</div>
    <div class="games" v-if="games">
      <div class="box">
        <table class="table is-fullwidth is-bordered is-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Player 1</th>
              <th></th>
              <th>Player 2</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="game in transformedGames.slice().reverse()" :key="game.createdAt" class="game">
              <td>{{game.createdAt | friendlyDate}}</td>
              <td>Player: {{game.game.player1.name}}<br>
        Score: {{game.game.player1.score}}</td>
              <td>VS</td>
              <td>Player: {{game.game.player2.name}}<br>
        Score: {{game.game.player2.score}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else>
      <div class="content">
        <h4>No games yet!</h4>
      </div>
      <router-link to="/">Add some games!</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "History",
  components: {},
  data: function() {
    return {};
  },
  methods: {
    ...mapActions({
      getGames: "getGames",
    }),
  },
  computed: {
    ...mapState(["games"]),
    transformedGames() {
      let m = [];
      for (var i in this.games) {
        m.push({ ...this.games[i] });
      }
      return m;
    },
  },
  mounted() {
    this.getGames();
  },
  filters: {
    friendlyDate: function(value) {
      let time = new Date(value);
      return time.toString().split("GMT")[0];
    },
  },
};
</script>

<style>
#history {
  text-align: center;
}
.games {
  display: grid;
  grid-template-columns: 600px;
  align-items: center;
  justify-content: center;
  grid-row-gap: 20px;
}
</style>
