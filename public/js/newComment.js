// console.log('debug')
const newFormHandler = async (event) => {
    event.preventDefault();
    
    const content = event.target[0].value;
    
    const post_id = event.target.childNodes[3].innerText;
    
  console.log(event.target[0].value)
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
    .querySelector('#accordionExample')
    .addEventListener('submit', newFormHandler);
  