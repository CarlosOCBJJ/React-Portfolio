import React, {Component } from 'react';
import { Grid, Cell,} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>

                        <div style={{textAlign: 'center'}}>
                            <img 
                            src="https://image.flaticon.com/icons/svg/3135/3135768.svg"
                            alt="avatar"
                            style={{height: '200px' }}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Carlos Perez</h2>
                        <h4 style={{color: 'grey'}}>Full Stack Developer</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>42 Wallaby Way, Sydney</p>
                        <h5>Phone</h5>
                        <p>(848)250-4909</p>
                        <h5>Email</h5>
                        <p>Carlosocbjj@Gmail.com</p>
                        <h5>Web</h5>
                        <p>https://github.com/CarlosOCBJJ</p>
                        <h5>Resume</h5>
                        <p>https://drive.google.com/file/d/0B-JvwuobPCtPLUxxNGV6V0swMFpTR1RweE9waDhYLTJfV1JZ/view?usp=sharing</p>
                        <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
                        

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>


                        <Education 
                            startYear={2020}
                            endYear={2020}
                            schoolName="Rutgers Coding Bootcamp"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />

                        <Education 
                            startYear={2013}
                            endYear={2015}
                            schoolName="Kean University"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />

                        <Education 
                            startYear={2010}
                            endYear={2013}
                            schoolName="Middlesex County College"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Experience</h2>

                        <Experience 
                        startYear={2015}
                        endYear="present"
                        jobName="Samson Electrical"
                        jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />

                        <Experience 
                        startYear={2013}
                        endYear={2015}
                        jobName="Last Job"
                        jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills 
                            skill="HTML/CSS"
                            progress={95}
                        />
                         <Skills 
                            skill="Javascript"
                            progress={85}
                        />
                         <Skills 
                            skill="React"
                            progress={85}
                        />
                         <Skills 
                            skill="NodeJS"
                            progress={65}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;