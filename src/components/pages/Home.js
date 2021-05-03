import React from "react"

const Home = (props) => {
  return (
  <div className="home">
    <img 
      className="villians-heroes"
      src="https://res.cloudinary.com/dvxvez8mj/image/upload/v1620060253/Project%202/villiansvsheroes_djtylw.jpg"
      alt="villians and heroes"
    />
    <div className="description">
      <p className="description-1">
        A manga/anime that's set in Japan, in a world where there are superpowers, called Quirks.  The story follows a group of students as they learn and train to harness and master their Quirks so that one day they can become pro heroes and fight against villians that misuse their Quirks.
      </p>
      <p className="description-2">
        The manga/anime centers around a boy named Izuku Midoriya, who was born without a Quirk.  One day he earns the recognition of All Might, the greatest hero in Japan, through his heroic act of risking his life to try and save a superpowered classmate/bully, from a villian that is attacking.  After recognizing Midoriya's hero potential, All Might decides to make Midoriya his successor and pass down his Quirk to him and help him enroll into the prestigious U.A. High School, that train kids to become future pro heroes.
      </p>
    </div>
  </div>
  )
}

export default Home