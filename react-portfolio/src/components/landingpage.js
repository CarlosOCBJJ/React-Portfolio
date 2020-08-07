import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_biker_tanktop_bald_shiny-512.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr />
                            <p>
                                HTML/CSS | Bootstrap | Javascript | React | React Native | Node.js | Express | MongoDB</p>

                            <div className="social-links">

                                {/*LinkedIn  */}
                                <a href="https://linkedin.com/in/carlos-perez-7471a51a2" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/*Github  */}
                                <a href="https://github.com/CarlosOCBJJ" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
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