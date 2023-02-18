import React, { useState } from 'react';

function ReviewPage(props) {
    const product = props.product;
    const reviews = props.reviews;

    const [name, setName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add code to submit the review data to a database or API
        setName('');
        setReviewText('');
        setRating(0);
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleReviewTextChange = (event) => {
        setReviewText(event.target.value);
    }

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>

            <h2>Reviews</h2>
            {reviews.map((review, index) => (
                <div key={index}>
                    <h3>{review.name}</h3>
                    <p>{review.text}</p>
                    <p>{review.date}</p>
                </div>
            ))}

            <h2>Add Review</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <label>
                    Review:
                    <textarea value={reviewText} onChange={handleReviewTextChange} />
                </label>
                <label>
                    Rating:
                    <input type="number" value={rating} onChange={handleRatingChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
