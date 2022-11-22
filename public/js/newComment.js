// console.log('debug')
const newFormHandler = async (event) => {
    event.preventDefault();
    // console.log('debug')
    const content = document.querySelector('#new-comment-text').value.trim();
    const post_id = document.querySelector('#post_id').textContent;
  
    if (content) {
      const response = await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({ content, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);
  