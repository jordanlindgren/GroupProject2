const newEntryHandler = async (event) => {
    event.preventDefault();
  
    const img_id = document.querySelector('#img-id').textContent;
    const meme_text = document.querySelector('#new-entry-text').value.trim();
    
    console.log(img_id, meme_text);

    if (meme_text) {
      
      const response = await fetch(`/api/memes`, {
        method: 'POST',
        body: JSON.stringify({ meme_text, img_id }),
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
  
  document
    .querySelector('.meme-submit-form')
    .addEventListener('submit', newEntryHandler);