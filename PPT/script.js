function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    document.getElementById('time').textContent = timeString;
  }
  
  updateTime(); // Call the function once to set the initial time
  
  // Update the time every second
  setInterval(updateTime, 1000);



  
  