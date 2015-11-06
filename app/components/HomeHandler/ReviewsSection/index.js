'use strict'

import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Swipeable from 'react-swipeable'
import styles from './index.scss'

export default class ReviewsSection extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      active: 0
    }

    this._cycleForward = this._cycleForward.bind(this)
    this._cycleBackward = this._cycleBackward.bind(this)
    this._timeout = null
  }

  componentDidMount() {
    this._resetTimeout()
  }

  componentWillUnmount() {
    clearTimeout(this._timeout)
  }

  _resetTimeout() {
    if (this._timeout) {
      clearTimeout(this._timeout)
    }
    this._timeout = setTimeout(this._cycleForward, 4000)
  }

  _pick(active) {
    this.setState({ active })
    this._resetTimeout()
  }

  _cycleForward() {
    let active = (this.state.active + 1) % 3
    this.setState({ active })
    this._resetTimeout()
  }

  _cycleBackward() {
    let active = (this.state.active - 1 + 3) % 3
    this.setState({ active })
    this._resetTimeout()
  }

  render() {
    let picture, quote, name
    switch (this.state.active) {
      case 0:
        picture = 'alex'
        quote = '“It\'s amazing! Optonaut is like Instagram but for Virtual Reality.”'
        name = 'Alex'
        break
      case 1:
        picture = 'phoebe'
        quote = '“I was completely blown away when I tried Optonaut - unbelievable!”'
        name = 'Phoebe'
        break
      case 2:
        picture = 'michael'
        quote = '“I love the process of taking the image, by following the red dot - it\'s intuitive and makes sense.”'
        name = 'Michael'
        break
    }

    let transitionName = {
      enter: styles.fadeEnter,
      enterActive: styles.fadeEnterActive,
      leave: styles.fadeLeave
    }

    return (
      <div className={styles.root}>
        <div className={styles.headline}>
          <h2><strong>What people love</strong><br /> about Optonaut</h2>
        </div>
        <Swipeable onSwipedRight={this._cycleBackward} onSwipedLeft={this._cycleForward} className='container'>
          <ReactCSSTransitionGroup transitionName={transitionName} transitionEnterTimeout={500} transitionLeaveTimeout={300} >
            <div key={this.state.active} className={styles.review}>
              <div className={styles.image}>
                <img src={require(`./${picture}.jpg`)} /> <span className={styles.name}>{name}<br /></span>
              </div>
              <div className={styles.quote}>
                {quote}
              </div>
            </div>
          </ReactCSSTransitionGroup>
          <div className={styles.points}>
            <span onClick={this._pick.bind(this, 0)} className={`${styles.point} ${this.state.active === 0 ? 'active' : ''}`} />
            <span onClick={this._pick.bind(this, 1)} className={`${styles.point} ${this.state.active === 1 ? 'active' : ''}`} />
            <span onClick={this._pick.bind(this, 2)} className={`${styles.point} ${this.state.active === 2 ? 'active' : ''}`} />
          </div>
        </Swipeable>
      </div>
    )
  }
}

