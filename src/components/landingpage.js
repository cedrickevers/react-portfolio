import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Développeur Back-end</h1>

            <hr/>

          <p>Laravel | NodeJS | ReactJS | Bootstrap | MySQL | Express | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/c%C3%A9dric-k%C3%A9vers-321985186/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/cedrickevers?tab=repositories" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="https://www.freecodecamp.org/miakis" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Sololearn */}
          <a href="https://www.sololearn.com/Profile/13155511#_=_" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>
        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;

