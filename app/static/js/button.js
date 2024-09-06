// Function to toggle emergency message visibility with blinking effect
function toggleEmergencyMessage() {
    const message = document.getElementById('emergencyMessage');
    
    message.classList.remove('hidden');   // Make the message visible
    message.classList.add('blinking');    // Add the blinking effect
    
    // Hide the message after 10 seconds
    setTimeout(() => {
      message.classList.remove('blinking'); // Stop blinking after 10 seconds
      message.classList.add('hidden');      // Hide the message
    }, 10000); // 10 seconds duration for showing the message
  }
  
  // Initial 5-second delay on page load, followed by recurring interval
  setTimeout(() => {
    // Show the message after 5 seconds, then repeat every 15 seconds
    toggleEmergencyMessage();
    
    setInterval(() => {
      toggleEmergencyMessage();
    }, 15000); // 15 seconds (10s blinking + 5s delay before the next display)
  }, 5000); // Initial 5-second delay on page load
  
  

function toggleDropdown(contentId, iconId) {
    const content = document.getElementById(contentId);
    const icon = document.getElementById(iconId);

    // Toggle the hidden class to show or hide the dropdown
    content.classList.toggle('hidden');

    // Toggle the icon direction
    if (content.classList.contains('hidden')) {
        icon.classList.remove('fa-video-slash');
        icon.classList.add('fa-video');
    } else {
        icon.classList.remove('fa-video');
        icon.classList.add('fa-video-slash');
    }
}


function updateLaneStatus(index, randomNumber) {
    const statusElement = document.getElementById(`lane-status-${index + 1}`);
    if (randomNumber <= 25) {
        statusElement.textContent = 'Open Lane';
        statusElement.className = 'text-sm text-green-500 border-2 border-[#0e852dc2] px-1 py-1 rounded-full';
    } else if (randomNumber >= 26 && randomNumber <= 52) {
        statusElement.textContent = 'Moderate Traffic';
        statusElement.className = 'text-sm text-yellow-500 border-2 border-yellow-500 px-1 py-1 rounded-full';
    } else {
        statusElement.textContent = 'Congested';
        statusElement.className = 'text-sm text-red-500 border-2 border-red-600 px-1 py-1 rounded-full';
    }
}

// Timer function to count down and trigger reset or other logic when it hits zero
function toggleTrafficLight(timerElement1, timerElement2, isTimer1Green) {
    if (isTimer1Green) {
        timerElement1.classList.remove('red');
        timerElement1.classList.add('green');
        timerElement1.style.color = 'green'; // Change text color to green
        timerElement1.style.borderColor = 'green'; // Change border color to green

        timerElement2.classList.remove('green');
        timerElement2.classList.add('red');
        timerElement2.style.color = 'red'; // Change text color to green
        timerElement2.style.borderColor = 'red'; // Change border color to green


    } else {
        timerElement1.classList.remove('green');
        timerElement1.classList.add('red');
        timerElement1.style.color = 'red'; // Change text color to red
        timerElement1.style.borderColor = 'red'; // Change border color to green


        timerElement2.classList.remove('red');
        timerElement2.classList.add('green');
        timerElement2.style.color = 'green'; // Change text color to red
        timerElement2.style.borderColor = 'green'; // Change border color to green

    }
}

function startAlternateTimers(initialDuration1, initialDuration2) {
    let seconds1 = initialDuration1;
    let seconds2 = initialDuration2;
    const timerElement1 = document.getElementById('timer1');
    const timerElement2 = document.getElementById('timer2');
    let isTimer1Green = true; // Timer 1 starts green, Timer 2 starts red

    const timerInterval = setInterval(() => {
        // Update Timer 1
        const minutes1 = Math.floor(seconds1 / 60);
        const remainingSeconds1 = seconds1 % 60;
        timerElement1.textContent = 
            `${String(minutes1).padStart(2, '0')}:${String(remainingSeconds1).padStart(2, '0')}`;

        if (seconds1 > 0) {
            seconds1--;
        } else {
            // Timer 1 hits 0, toggle the colors
            isTimer1Green = !isTimer1Green;
            toggleTrafficLight(timerElement1, timerElement2, isTimer1Green);
            seconds1 = initialDuration1; // Reset Timer 1
        }

        // Update Timer 2
        const minutes2 = Math.floor(seconds2 / 60);
        const remainingSeconds2 = seconds2 % 60;
        timerElement2.textContent = 
            `${String(minutes2).padStart(2, '0')}:${String(remainingSeconds2).padStart(2, '0')}`;

        if (seconds2 > 0) {
            seconds2--;
        } else {
            // Timer 2 hits 0, reset Timer 2
            seconds2 = initialDuration2; // Reset Timer 2
        }
    }, 1000); // Update timer every second
}



// Function to generate and update random numbers independently
function startRandomNumberUpdates() {
    let lastRandomNumbers = [1, 1, 1, 1]; // Initialize random numbers to 1
    const updateDelay = 3000; // 3-second delay between updates
    let randomNumberIntervals = [];

    for (let i = 0; i < 4; i++) {
        randomNumberIntervals[i] = setInterval(() => {
            const randomNumberElement = document.getElementById(`random-number-${i + 1}`);
            const min = lastRandomNumbers[i] + 1; // Ensure number only increases
            const max = (i === 0) ? 49 : (i === 1) ? 79 : (i === 2) ? 20 : (i === 3) ? 55 : 98;

            // Generate a random number within the range
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            lastRandomNumbers[i] = randomNumber;
            randomNumberElement.textContent = randomNumber;

            // Update lane status based on random number
            updateLaneStatus(i, randomNumber);
        }, updateDelay);
    }

    // Store randomNumberIntervals so they can be cleared later
    window.randomNumberIntervals = randomNumberIntervals;
}

// Function to stop all random number updates
function stopRandomNumberUpdates() {
    if (window.randomNumberIntervals) {
        window.randomNumberIntervals.forEach(interval => clearInterval(interval));
    }
}

// Function to reset random numbers to 1
function resetRandomNumbers() {
    stopRandomNumberUpdates(); // Stop existing random number updates
    let lastRandomNumbers = [1, 1, 1, 1]; // Reset random numbers to 1

    // Display 1 in each div initially
    for (let i = 0; i < 4; i++) {
        const randomNumberElement = document.getElementById(`random-number-${i + 1}`);
        if(i === 0) randomNumberElement.textContent = '2';
        if(i === 1) randomNumberElement.textContent = '4';
        if(i === 2) randomNumberElement.textContent = '7';
        if(i === 3) randomNumberElement.textContent = '3';
    }

    // Start random number updates after resetting
    startRandomNumberUpdates();
}


// Start everything when the page loads
window.onload = function() {
    startAlternateTimers(10, 10); // Timers with a duration of 30 seconds each
    // Example initial duration: 30 seconds for the timer
    startRandomNumberUpdates(); // Start random number updates immediately
};


