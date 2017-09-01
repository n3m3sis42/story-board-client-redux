import React, {Component} from 'react'
import { connect } from 'react-redux'
import { selectScene } from '../actions/index'
import { bindActionCreators } from 'redux'

class SceneDetail extends Component {

  render() {

    if (!this.props.scene) {
      return <div>Select a scene to get started.</div>
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.scene.title}</div>
        <div>Notes: {this.props.scene.notes}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    scene: state.activeScene
  }
}

// function mapDispatchToProps(dispatch) {
//
// }

export default connect(mapStateToProps)(SceneDetail)
