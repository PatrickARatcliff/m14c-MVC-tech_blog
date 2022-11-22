
const makeCommentButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'POST',
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to create comment!');
        }
    }
};

document
    .querySelector('.post-list')
    .addEventListener('click', delButtonHandler);