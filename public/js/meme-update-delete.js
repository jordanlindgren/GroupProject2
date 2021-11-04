const editEntryHandler = async (event) => {
    event.preventDefault();
  
    const meme_id = document.querySelector('#edit-meme-id').textContent;
    const meme_text = document.querySelector('#edited-meme').value.trim();
    
    console.log(meme_id, meme_text);
    if (meme_text) {
      const response = await fetch(`/api/memes/${meme_id}`, {
        method: 'PUT',
        body: JSON.stringify({ meme_text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create entry');
      }
    }
  };
  
  const deleteEntryHandler = async (event) => {
    event.preventDefault();
  
    const meme_id = document.querySelector('#edit-meme-id').textContent;
       
    const response = await fetch(`/api/memes/${meme_id}`, {
        method: 'DELETE',
      });
  
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  };
  
  document
    .querySelector('#edit-meme-form')
    .addEventListener('submit', editEntryHandler);
  
  document
    .querySelector('.delete-button')
    .addEventListener('click', deleteEntryHandler);
  