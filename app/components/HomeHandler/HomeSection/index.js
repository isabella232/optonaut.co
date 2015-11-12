'use strict'

import React from 'react'
import { findDOMNode } from 'react-dom'
import cx from 'classnames'
import AppStoreBadge from './AppStoreBadge'
import PlayStoreBadge from './PlayStoreBadge'
import AndroidWaitlist from './AndroidWaitlist'
import styles from './index.scss'

export default class HomeSection extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showAndroidWaitlist: false
    }
  }

  _toggleAndroidWaitlist() {
    this.setState({ showAndroidWaitlist: !this.state.showAndroidWaitlist })
  }

  componentDidMount() {
    //if (window.innerWidth >= 750) {
    ////if (false) {
      //const backgroundVideo = findDOMNode(this.refs.backgroundVideo)
      //const footBackgroundVideo = findDOMNode(this.refs.footBackgroundVideo)

      //// starts both videos simultaneously
      //let canplayCallback = function() {
        //if (backgroundVideo.readyState === backgroundVideo.HAVE_ENOUGH_DATA 
            //&& footBackgroundVideo.readyState === footBackgroundVideo.HAVE_ENOUGH_DATA) {
          //backgroundVideo.play()
          //footBackgroundVideo.play()
          //backgroundVideo.oncanplay = null
          //footBackgroundVideo.oncanplay = null
        //}
      //}
      //backgroundVideo.oncanplay = canplayCallback
      //footBackgroundVideo.oncanplay = canplayCallback

      //// resets both videos
      //let endedCallback = function() {
        //backgroundVideo.currentTime = 0
        //footBackgroundVideo.currentTime = 0
        //backgroundVideo.play()
        //footBackgroundVideo.play()
      //}
      //backgroundVideo.onended = endedCallback
      //footBackgroundVideo.onended = endedCallback
    //}
  }

  render() {
    //let backgroundVideo, footBackgroundVideo
    //if (window.innerWidth >= 750) {
    ////if (false) {
      //backgroundVideo = (
        //<video className={styles.video} ref='backgroundVideo'>
          //<source src='http://192.168.0.3:8080/video.mp4' type='video/mp4'/>
        //</video>
      //)
      //footBackgroundVideo = (
        //<video className={styles.video} ref='footBackgroundVideo'>
          //<source src='http://192.168.0.3:8080/video-blur.mp4' type='video/mp4'/>
        //</video>
      //)
    //}

    //if (false) {
      //backgroundVideo = (
        //<video className={styles.video} ref='backgroundVideo' loop>
          //<source src='http://static.optonaut.io.s3.amazonaws.com/home.mp4' type='video/mp4'/>
        //</video>
      //)
      //footBackgroundVideo = (
        //<video className={styles.video} ref='footBackgroundVideo' loop>
          //<source src='http://static.optonaut.io.s3.amazonaws.com/home-blur.mp4' type='video/mp4'/>
        //</video>
      //)
    //}

    let foot
    if (this.state.showAndroidWaitlist) {
      foot = (
        <AndroidWaitlist close={this._toggleAndroidWaitlist.bind(this)} />
      )
    } else {
      foot = (
        <div className={`${styles.footWrapper} row`}>
          <div className={styles.footLeft}>
            <div className={styles.footTextBig}>
              Optonaut is a <strong>free app</strong> and works with <strong>most VR glasses</strong>
            </div>
            <div className={styles.footTextSmall}>
              <strong>Discover, capture and share</strong> unique moments and beautiful places just using your phone
            </div>
          </div>
          <div className={styles.footRight}>
            <a href='https://itunes.apple.com/app/apple-store/id1013817652?pt=117831029&ct=website&mt=8'>
              <AppStoreBadge />
            </a>
            <a className={styles.footPlayStore} onClick={this._toggleAndroidWaitlist.bind(this)}>
              <PlayStoreBadge />
            </a>
          </div>
        </div>
      )
    }

    return (
      <div className={styles.root}>
        <div className={styles.background}>{/*backgroundVideo*/}</div>
        <div className={styles.headline}>
          <h1>“It's the <strong>Instagram</strong> <br />for <strong>Virtual Reality</strong>”</h1>
        </div>
        <div className={styles.foot}>
          <div className={styles.footBackground}>
            <div className={styles.footBackgroundImage} />
            {/*footBackgroundVideo*/}
          </div>
          <div className={cx(styles.footContainer, 'container')}>
            {foot}
          </div>
        </div>
      </div>
    )
  }
}

                  //<img src={require('../../../assets/images/play-store.svg')} />
