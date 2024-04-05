import React, {useState} from 'react';

const Dog = () => {
    const [dogImageUrl, setDogImageUrl] = useState('');

    const fetchDogImage = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setDogImageUrl(data.message);
            })
            .catch(error => {
                console.error('Fetch operation failed:', error);
                alert('Fetch operation failed. Try again.');
            });
    };

    return (
        <div className='container'>
            <h1>Dog</h1>
            <div className='button-click'>
                <button onClick={fetchDogImage}>I Can Haz Dog?</button>
            </div>
            {dogImageUrl && <img src={dogImageUrl} alt='Dog' style={{maxWidth: '100%'}} />}
        </div>
    );
};


export default Dog;