import React, { Component } from 'react'

import Author from './Author'

class Title extends Component {
    render() {
        return (
            <div>
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            <Author />
            </div>
        )
    }
}

export default Title