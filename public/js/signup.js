const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#username-input').value.trim();
  const email = document.querySelector('#email-input').value.trim();
  const password = document.querySelector('#password-input').value.trim();

  // CREATE NEW USER BY POSTING TO API/USERS/signup
  // if (!name || !email || !password) {
  //   alert("Please enter valid username (can't be blank), email (xyz@example.com) and password (minimum of eight characters).");
  //   return;
  // }

  if (name && email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    }
    // else {
    //   alert("Please enter valid username (can't be blank), email (xyz@example.com) and password (minimum of eight characters).");
    //   return;
    // }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);