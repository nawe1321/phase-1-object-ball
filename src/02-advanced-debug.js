console.log('Advanced debugging example running.')
debugger

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    debugger
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      debugger

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.players
      for (let key in data) {
        debugger
      }
    }
  }
}
function numPointsScored(playerName) {
  let game = gameObject();
  for (let gameKey in game) {
    debugger;
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      debugger;
      if (teamKey === 'players') {
        for (let playerKey in teamObj[teamKey]) {
          debugger;
          if (playerKey === playerName) {
            debugger;
            return teamObj[teamKey][playerKey].points;
          }
        }
      }
      
    }
  }
}

function shoeSize(playerName) {
  let game = gameObject();
  for (let gameKey in game) {
    debugger;
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      if (teamKey === "players") {
        for (let playerKey in teamObj[teamKey]) {
          debugger;
          if (playerKey === playerName) {
            return teamObj[teamKey][playerKey].shoe;
          }
        }
      }
    }
  }
}

function teamColors(teamName) {
  let game = gameObject();
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    if (teamObj.teamName === teamName) {
      debugger;
      return teamObj.colors;
    }
  }
}

function teamNames() {
  let game = gameObject();
  debugger;
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  let game = gameObject();
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    if (teamObj.teamName === teamName) {
      let numbers = [];
      for (let playerKey in teamObj.players) {
        numbers.push(teamObj.players[playerKey].number);
      }
      debugger;
      return numbers;
    }
  }
}

function playerStats(playerName) {
  let game = gameObject();
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      if (teamKey === "players") {
        let playerStats = teamObj[teamKey][playerName];
        debugger;
        return playerStats;
      }
    }
  }
}

function bigShoeRebounds() {
  let game = gameObject();
  let largestShoeSize = 0;
  let playerWithLargestShoe = "";
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      if (teamKey === "players") {
        for (let playerKey in teamObj[teamKey]) {
          let player = teamObj[teamKey][playerKey];
          if (player.shoe > largestShoeSize) {
            largestShoeSize = player.shoe;
            playerWithLargestShoe = playerKey;
          }
        }
      }
    }
  }
  debugger;
  return game.home.players[playerWithLargestShoe].rebounds || game.away.players[playerWithLargestShoe].rebounds;
}


// then, call the function so it runs!
// goodPractices()
// numPointsScored("Alan Anderson")
// shoeSize("Alan Anderson")
// teamColors("Brooklyn Nets")
// teamNames()
// playerNumbers("Brooklyn Nets")
// playerStats("Alan Anderson")
bigShoeRebounds()