import React, { Component } from 'react'

import Title from './Title'
import Body from './Body'
import Buttons from './Buttons'
import Sponsor from './Sponsor'
import Links from './Links'

class Main extends Component {
    render() {
        return (
            <main className="expanded row">
          <div className="large-8 medium-12 columns article">
            <Title />
            <Body />
            <Buttons />
          </div>
          <Sponsor />
          <Links />
        </main>
        )
    }
}

export default Main