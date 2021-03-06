import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{ minWidth: '50', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYFYUMxwjoJUgk-Bv9mwUGhi6uhAIKOfWZHw&usqp=CAU) center / cover' }}>React Project #1</CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Github</Button>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project 1*/}
                    <Card shadow={5} style={{ minWidth: '50', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYFYUMxwjoJUgk-Bv9mwUGhi6uhAIKOfWZHw&usqp=CAU) center / cover' }}>React Project #1</CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Github</Button>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project 1*/}
                    <Card shadow={5} style={{ minWidth: '50', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYFYUMxwjoJUgk-Bv9mwUGhi6uhAIKOfWZHw&usqp=CAU) center / cover' }}>React Project #1</CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Github</Button>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>

            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is Node JS</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is Javascript</h1></div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div><h1>This is Express</h1></div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Node JS</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>Express</Tab>
                </Tabs>


                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div >
        )
    }
}

export default Projects;