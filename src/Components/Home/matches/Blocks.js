import React, { Component } from 'react'
import { firebaseMatches } from '../../../firebase'
import { firebaseLooper, reverseArray } from "../../../Ui/misc"
import MatchesBlock from '../../../Ui/matches_block'
import Slide from "react-reveal/Slide"



export default class Blocks extends Component {
  state = {
    matches: []
  }

  componentDidMount = () => {
    firebaseMatches.limitToLast(6).once('value')
    .then((snapshot)=> {
      const matches = firebaseLooper(snapshot);

      this.setState({ matches: reverseArray(matches) });
    })
  }

  showMatches = (matches) => (
   matches ?
      matches.map((index)=>(
        <Slide bottom key={index}>
          <div className="item">
            <div className="wrapper">
              <MatchesBlock match={index}/>
            </div>
          </div>
        </Slide>
      ))
    : null
  )


  render() {
    console.log(this.state)
    return (
      <div className="home_matches">
        {this.showMatches(this.state.matches)}
      </div>
    )
  }
}
