const newFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#new-post-text').value.trim();
  
    if (content) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);
  
  