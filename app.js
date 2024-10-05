// Function to handle tab switching
function openHall(hallName) {
    // Hide all hall content
    const halls = document.getElementsByClassName('hall-content');
    for (let i = 0; i < halls.length; i++) {
      halls[i].style.display = "none";
    }
    
    // Show the selected hall
    document.getElementById(hallName).style.display = "block";
  }
  
  // Function to update the occupancy status for a specific dining hall
  function updateOccupancyStatus(hallId, occupancyRate) {
    const statusElement = document.getElementById(`occupancy-${hallId}`);
    const detailsElement = document.getElementById(`details-${hallId}`);
  
    if (occupancyRate < 30) {
      statusElement.textContent = "Low Traffic";
      statusElement.className = 'w3-text-green';
      detailsElement.textContent = "Plenty of space available!";
    } else if (occupancyRate < 70) {
      statusElement.textContent = "Moderate Traffic";
      statusElement.className = 'w3-text-yellow';
      detailsElement.textContent = "Moderate crowd, but still space.";
    } else {
      statusElement.textContent = "Busy";
      statusElement.className = 'w3-text-red';
      detailsElement.textContent = "It's quite crowded. You might want to wait.";
    }
  }
  
  // Function to simulate random occupancy rate between 0 and 100
  function simulateRandomOccupancy(hallId) {
    const randomOccupancyRate = Math.floor(Math.random() * 101); // Random number between 0 and 100
    updateOccupancyStatus(hallId, randomOccupancyRate);
  }
  
  // Simulate occupancy every 5 seconds for all dining halls
  setInterval(() => simulateRandomOccupancy('west'), 5000);
  setInterval(() => simulateRandomOccupancy('east'), 5000);
  setInterval(() => simulateRandomOccupancy('north'), 5000);
  
  // Call it once immediately to display initial status for all halls
  simulate