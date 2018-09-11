import React from 'react'
import Featured from './featured'
import Matches from './matches'
import MeetPlaers from './meetPlayers'


const Home = () => {
  return (
    <div className="bck_blue">
      <Featured />
      <Matches />
      <MeetPlaers />
    </div>
  )
}

export default Home
