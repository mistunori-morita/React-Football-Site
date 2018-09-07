import React, { Component } from 'react'
import { firebaseMatches } from '../../../firebase'
import { firebaseLooper, reverseArray } from "../../../Ui/misc";


export default class Blocks extends Component {


  state = {
    matches: []
  }


  componentDidMount = () => {
    firebaseMatches.limitToLast(6).once('value')
    .then((snapshot)=> {
      const m = firebaseLooper(snapshot);

      this.setState({ matches: reverseArray(m) });
    })
  }

  showMatches = () => (
    <div>
      match
    </div>
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
