const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const comment_text = document.querySelector('#new-comment-text').value.trim();
    const meme_id = document.querySelector('#meme-id').textContent;
  
    if (comment_text) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment_text, meme_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/entries/${meme_id}`);
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  
  document
    .querySelector('.comment-submit-form')
    .addEventListener('submit', newCommentHandler);