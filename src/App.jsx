import React from 'react'
import Card from './components/Card'
import Logo from './components/Logo'
import Rating from './components/Rating'
import Button from './components/Button'

export default function App() {
  const [rating, setRating] = React.useState(null)
  const [ratingSubmitted, setRatingSubmitted] = React.useState(false)

  console.log(rating)

  function handleSubmitClick() {
    if (rating) {
      setRatingSubmitted(true)
    }

      // Set up message warning user to rate before hitting submit

  }

  return (
    <>
    <main>

      {
        !ratingSubmitted 
        ?
        <Card>
          <Logo />
          <h1>How did we do?</h1>
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <div className="ratings-container">
              <Rating setRating={setRating} val={1} rating={rating}>1</Rating>
              <Rating setRating={setRating} val={2} rating={rating}>2</Rating>
              <Rating setRating={setRating} val={3} rating={rating}>3</Rating>
              <Rating setRating={setRating} val={4} rating={rating}>4</Rating>
              <Rating setRating={setRating} val={5} rating={rating}>5</Rating>
          </div>
          <Button 
            className="submit-btn" 
            handleClick={handleSubmitClick}
          >Submit</Button>
        </Card>
        : <h1>Rating submitted</h1>
      }

      
    </main>

    <footer>
      <div className="attribution">
        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.</p>
        <p>Coded by <a href="https://github.com/BrianSlaby">Brian Slaby</a>.</p>
      </div>
    </footer>
    </>
  )
}
