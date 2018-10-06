<template>
  <div id="leaderboard">
    <div class="title">Leaderboard</div>
    <div class="players" v-if="players">
      <table class="table is-striped is-bordered">
        <thead>
          <tr>
            <th>Place</th>
            <th>Player</th>
            <th>Wins</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in transformedPlayers" :key="player.name">
            <th>{{index + 1}}</th>
            <td>{{player.name}}</td>
            <td>{{player.wins}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <div class="content">
        <h4>No players yet!</h4>
      </div>
      <router-link to="/add-player">Add some players!</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { orderBy } from 'lodash';

export default {
  name: 'Leaderboard',
  components: {},
  data: function() {
    return {};
  },
  methods: {
    ...mapActions({
      getPlayers: 'getPlayers',
    }),
  },
  computed: {
    ...mapState(['players']),
    transformedPlayers() {
      let orderedPlayers = [];
      for (var i in this.players) {
        orderedPlayers.push({ name: i, ...this.players[i] });
      }
      orderedPlayers = orderBy(orderedPlayers, ['wins'], ['desc']);
      return orderedPlayers;
    },
  },
  mounted() {
    this.getPlayers();
  },
  filters: {
    friendlyDate: function(value) {
      let time = new Date(value);
      return time.toString();
    },
  },
};
</script>

<style>
#leaderboard {
  text-align: center;
}
.players {
  display: grid;
  grid-template-columns: 500px;
  align-items: center;
  justify-content: center;
}
</style>
