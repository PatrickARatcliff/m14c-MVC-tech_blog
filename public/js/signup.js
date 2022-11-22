const signupFormHandler = async (event) => {
  event.preventDefault();
  // console.log('hello george')
  const name = document.querySelector('#username-input').value.trim();
  const email = document.querySelector('#email-input').value.trim();
  const password = document.querySelector('#password-input').value.trim();

  // CREATE NEW USER BY POSTING TO API/USERS/signup
  if (!name || !email || !password) {
    // validationModal(
    //   'Login Failed',
    //   "Please enter valid username (can't be blank), email (xyz@example.com) and password (minimum of eight characters)."
    // );
    alert("Please enter valid username (can't be blank), email (xyz@example.com) and password (minimum of eight characters).");
    return;
  }

  if (name && email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    }
    else {
      // validationModal(
      //   'Login Failed',
      //   "Please enter valid username (can't be blank), email (xyz@example.com) and password (minimum of eight characters)."
      // );
      alert("Please enter valid username (can't be blank), email (xyz@example.com) and password (minimum of eight characters).");
      return;
    }
  }

  //FETCH USER ID FOR NEW USER THEN POST TO REQ.SESSION.USER_ID
  // if (name && email && password) {
  //   const response = await fetch('/api/users/login', {
  //     method: 'POST',
  //     body: JSON.stringify({ email }),
  //     headers: { 'Content-Type': 'application/json' },
  //   });

  //   if (response.ok) {
  //     document.location.replace('/');
  //   } else {
  //     alert(response.statusText);
  //   }
  // }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);