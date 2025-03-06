import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMovieForm = () => {
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [synopsis, setSynopsis] = useState('');
    const [posterUrl, setPosterUrl] = useState('');
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        alert('Movie Added')
        history('/')
        console.log('Movie added:', { title, director, genre, releaseYear, synopsis, posterUrl });
    };

    const handleCancel = () => {
        history('/'); // Navigate back to the Dashboard
    };

    return (
        <div>
            <h2>Add Movie</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Director:</label>
                    <input type="text" value={director} onChange={(e) => setDirector(e.target.value)} required />
                </div>
                <div>
                    <label>Genre:</label>
                    <select value={genre} onChange={(e) => setGenre(e.target.value)} required>
                        <option value="">Select Genre</option>
                        <option value="Action">Action</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Drama">Drama</option>
                        <option value="Horror">Horror</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                    </select>
                </div>
                <div>
                    <label>Release Year:</label>
                    <input type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} required />
                </div>
                <div>
                    <label>Synopsis:</label>
                    <textarea value={synopsis} onChange={(e) => setSynopsis(e.target.value)} required></textarea>
                </div>
                <div>
                    <label>Poster Image URL:</label>
                    <input type="url" value={posterUrl} onChange={(e) => setPosterUrl(e.target.value)} required />
                </div>
                <button type="submit">Submit</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default AddMovieForm;
