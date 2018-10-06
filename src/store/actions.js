import firebase from "firebase";

export const getPlayers = ({ commit }) => {
  firebase
    .database()
    .ref("players")
    .limitToLast(100)
    .once("value", snapshot => {
      commit("set", { var: "players", val: snapshot.val() });
    });
};

export const addPlayer = ({ state, commit }, name) => {
  if (name == "") {
    alert("Please enter a valid name");
    resolve("Valid name required");
  }
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref("players/" + name)
      .set({
        wins: 0,
      });
    alert(`Player ${name} added!`);
    resolve("User added");
  });
};

export const saveScore = ({ state }, game) => {
  return new Promise((resolve, reject) => {
    if (game.player1.name == game.player2.name) {
      alert("Player must play a different player");
      resolve("Player can't play against themselves");
    }
    if (game.player1.score > game.player2.score) {
      firebase
        .database()
        .ref("players/" + game.player1.name)
        .set({ wins: state.players[game.player1.name].wins + 1 });
      state.players[game.player1.name].wins += 1;
      alert(`${game.player1.name} wins! Game added`);
    } else if (game.player1.score == game.player2.score) {
      alert("Game cannot end in a tie!");
      resolve("Game cannot end in tie");
    } else {
      firebase
        .database()
        .ref("players/" + game.player2.name)
        .set({ wins: state.players[game.player2.name].wins + 1 });
      state.players[game.player2.name].wins += 1;
      alert(`${game.player2.name} wins! Game added`);
    }
    let entry = firebase
      .database()
      .ref("games/")
      .push();
    entry.set({
      game,
      createdAt: Date.now(),
    });
    resolve("Score added");
  });
};

export const getGames = ({ commit }) => {
  firebase
    .database()
    .ref("games")
    .orderByChild("createdAt")
    .once("value", snapshot => {
      commit("set", { var: "games", val: snapshot.val() });
    });
};
