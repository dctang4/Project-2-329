import React from "react"
import Media from 'react-media';

const Home = (props) => {

  const descS = () => {
    return (
      <p className="desc desc-S">
        A manga/anime that's set in Japan, in a world where superpowers, called Quirks, exist.  The story follows a group of students as they learn and train to harness and master their Quirks so that one day they can become pro heroes and fight against villains that misuse their Quirks for evil.
      </p>
    )
  }

  const descM = () => {
    return (
      <p className="desc desc-M">
        A manga/anime that centers around a boy named Izuku Midoriya, who was born without any superpowers, called Quirks.  One day he earns the recognition of All Might, the greatest hero in Japan, through his heroic act of risking his life to try and save a superpowered classmate/bully, from a villian that is attacking.  After recognizing Midoriya's hero potential, All Might decides to make Midoriya his successor and pass down his Quirk to him and help him enroll into the prestigious U.A. High School, that train kids to become future pro heroes.
      </p>
    )
  }

  return (
  <div className="home">
    <img 
      className="villains-heroes"
      src="https://res.cloudinary.com/dvxvez8mj/image/upload/v1620060253/Project%202/villainsvsheroes_djtylw.jpg"
      alt="villains and heroes"
    />
    <div className="description">
      <Media queries={{
        small: "(max-width: 659px)",
        medium: "(min-width: 660px)"
      }}>
        {matches => (
          <>
            {matches.small && descS()}
            {matches.medium && descM()}
          </>
        )}
      </Media>
    </div>
  </div>
  )
}

export default Home