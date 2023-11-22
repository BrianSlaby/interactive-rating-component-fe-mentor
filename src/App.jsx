import React from 'react'
import Card from './components/Card'
import Logo from './components/Logo'
import Rating from './components/Rating'
import Button from './components/Button'

export default function App() {
  const [rating, setRating] = React.useState(null)


  return (
    <>
    <main>
      <Card>
        <Logo />
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className="ratings-container">
            <Rating setRating={setRating} value={1}>1</Rating>
            <Rating setRating={setRating} value={2}>2</Rating>
            <Rating setRating={setRating} value={3}>3</Rating>
            <Rating setRating={setRating} value={4}>4</Rating>
            <Rating setRating={setRating} value={5}>5</Rating>
        </div>
        <Button className="submit-btn">Submit</Button>
      </Card>
    </main>

    <footer>
      <div class="attribution">
        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.</p>
        <p>Coded by <a href="https://github.com/BrianSlaby">Brian Slaby</a>.</p>
      </div>
    </footer>
    </>
  )
}
