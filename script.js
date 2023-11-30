document.addEventListener('DOMContentLoaded', function () {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.innerText = 'Welcome to RoninChiefX\'s Stream!';
    document.getElementById('chat-box').appendChild(welcomeMessage);
  
    // Simulate a new follower alert after 10 seconds (you can replace this with actual Twitch events)
    setTimeout(() => showFollowerAlert('NewFollower123'), 10000);
  });
  
  function showFollowerAlert(followerName) {
    const alertContainer = document.getElementById('alert-container');
    alertContainer.innerText = `${followerName} is now following!`;
    alertContainer.style.display = 'block';
  
    // Hide the alert after 5 seconds
    setTimeout(() => {
      alertContainer.style.display = 'none';
    }, 5000);
  }
  