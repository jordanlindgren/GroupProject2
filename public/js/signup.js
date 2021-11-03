const signupRequestHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#signup-username-input').value.trim();
    const password = document.querySelector('#signup-password-input').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('#signup-form')
    .addEventListener('submit', signupRequestHandler);