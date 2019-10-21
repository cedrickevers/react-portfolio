import React, {Component} from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 2 };
    }

    render () {
        return (
            <div>
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
              <Tab>React</Tab>
              <Tab>NodeJS</Tab>
              <Tab>Laravel</Tab>
              <Tab>Css</Tab>
            </Tabs>
    
        )
    }

}
export default Projects;
