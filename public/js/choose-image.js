const chooseImage = async (event) => {
    event.preventDefault();

    const chosenImage = event.target;
    const imageID = event.target.id;

    if (chosenImage) {
        const response = await fetch(`/profile/create`, {
            method: 'GET',
            body: JSON.stringify({ imageID }),
            headers: {
                'Content-Type': 'application/json',
              },
        }),

        if (response.ok) {
            document.location.replace(`/profile/create/${imageID}`);
        } else {
            alert('Failed to load image.')
        }
    }
};

document
    .querySelector(".choose-image-div")
    .addEventListener("click", chooseImage);