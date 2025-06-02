// Declare variables using let or const
const votes = {
  Johnson: 0,
  Tohu: 0,
  DWZ: 0,
};

// Function to handle vote increase and update display
function voteForPlayer(playerName) {
  // Increase the vote count for the selected player
  votes[playerName] = votes[playerName] + 1;

  // Update the vote count displayed on the page
  const countSpan = document.getElementById("count-" + playerName);
  countSpan.textContent = votes[playerName];

  // Update the overall vote results
  updateResults();

  // Determine and display the current leader
  displayLeader();
}

// Function to update the vote results text
function updateResults() {
  const resultText =
    "Votes - Johnson: " +
    votes.Johnson +
    ", Tohu: " +
    votes.Tohu +
    ", DWZ: " +
    votes.DWZ;
  const resultElement = document.getElementById("vote-results");
  resultElement.textContent = resultText;
}

// Function to determine and display the current leader
function displayLeader() {
  let maxVotes = 0;
  let currentLeader = "";

  // Use a loop to compare the votes for each player
  for (let player in votes) {
    if (votes[player] > maxVotes) {
      maxVotes = votes[player];
      currentLeader = player;
    } else if (votes[player] === maxVotes && currentLeader !== player) {
      currentLeader = "Tie"; // Handle ties if there are multiple players with the same votes
    }
  }

  // Update the text with the current leader
  const leaderElement = document.getElementById("leader");
  if (currentLeader === "Tie") {
    leaderElement.textContent = "It's a tie!";
  } else {
    leaderElement.textContent = "Current leader: " + currentLeader;
  }
}

// Event listener for button clicks
document.addEventListener("DOMContentLoaded", function () {
  // Add click event listeners to each vote button
  const buttons = document.querySelectorAll(".vote-btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      const player = buttons[i].getAttribute("data-player"); // Get the player name from data-player attribute
      voteForPlayer(player); // Call the function to register the vote
    });
  }
});
