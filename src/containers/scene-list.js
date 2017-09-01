import React, {Component} from 'react'
import { connect } from 'react-redux'
import { selectScene } from '../actions/index'
import { bindActionCreators } from 'redux'

class SceneList extends Component {

  renderList() {
    return this.props.scenes.map((scene) => {
      return (
        <li
          key={scene.id}
          onClick={() => this.props.selectScene(scene)}
          className="list-group-item">
          {scene.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    scenes: state.scenes
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectScene: selectScene }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SceneList)
