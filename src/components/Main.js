import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import download from '../images/download.png'
import football from '../images/football.jpg'
import gundam from '../images/gundam.jpg'
import line from '../images/line.jpg'
import calm from '../images/calm.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={download} alt="" />
          </span>

          <p>
            Hello my name is Anthony Boston I am developer located in the
            Atlanta area I am a graduate of the CodeBridge program at Per
            Scholas and the Web Development Immersive at General Assembly here
            in Atlanta. The opportunity to learn to program has been a dream
            come true for me. As a former, I was ecstatic to learn the
            similarities in diagnosing opponents tape and debugging code As a
            working professional, I found myself at a crossroads in my life
            where I was either going to work a job that I would just use to
            sustain myself or follow my passion and become a developer. I have
            found the world of web development to be this amazing place to learn
            and meet amazing people that have the same fervor growth and
            collaboration. I hope to meet work and learn from as many people as
            possible! Please feel free to connect with many on any of my social
            media sites!
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Portfolio</h2>
          <span className="image main">
            <img src={football} alt="" />
          </span>
          <p>
            My first project in at general assembly where i used vanilla java
            script html and css to create a football jeopardy game
          </p>
          <img src={line} alt="" />
          <p>
            {' '}
            using the mern stack i created a app that is supposed to help
            fantasy football players draft using a diffrent guide with alternate
            values.{' '}
          </p>
          <img src={gundam} alt="" />
          <p>
            {' '}
            A general assembly project used the MEHN stack to create a webapp
            that is anime fans to colloaborate and and reccomend anime{' '}
          </p>
          <img src={calm} alt="" />
          <p>
            {' '}
            Another project for general assembly the technologies i used to
            build this project are Django, React, Express, javascript, Node,
            Material-UI, and CSS
          </p>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            I was born in Chattanooga and raised in Atlanta Georgia. I grduated
            from parkview high were i took ap computer science. We did most our
            leaning in java after that i went to the University of tennesee
            Chattanooga to continue my learning and play college football. I did
            some self learning online using both udemy and code academy while i
            worked multiple jobs. I than was accepted in to the per scholas code
            bridge program where i studied web devlopemnt.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href=""
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="  " className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/aboston93"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
