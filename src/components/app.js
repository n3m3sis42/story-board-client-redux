import React, { Component } from 'react';
import SceneList from '../containers/scene-list'
import SceneDetail from '../containers/scene-detail'

export default class App extends Component {
  render() {
    return (
      <div>
        <SceneList />
        <SceneDetail />
      </div>
    );
  }
}
