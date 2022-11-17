
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Not your post!');
        }
    }
};

document
    .querySelector('.post-list')
    .addEventListener('click', delButtonHandler);
