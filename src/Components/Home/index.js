import React from 'react'
import Featured from './featured'
import Matches from './matches'
import MeetPlaers from './meetPlayers'
import Promotion from './Promotion'

const Home = () => {
  return (
    <div className="bck_blue">
      <Featured />
      <Matches />
      <MeetPlaers />
      <Promotion />
    </div>
  )
}

export default Home
