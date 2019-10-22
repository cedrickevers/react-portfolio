import React, {Component} from "react";
import {
    Tabs,
    Tab,
    Grid,
    Cell,
    Card,
    CardTitle,
    CardText,
    CardActions,
    Button,
    CardMenu,
    IconButton
  } from "react-mdl";

class Contact extends Component {
    render () {
        return (
          <div className="contact-body">
           <Grid className="contact-grid">
            <Cell col={6}>col 1</Cell>
            <Cell col={6}> Col 2</Cell>
           </Grid>
          </div>
        )
    }
}

export default Contact;