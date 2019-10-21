import React, {Component} from "react";
import {Grid, Cell} from "react-mdl";
class Landing extends Component {
    render () {
        return (
            <div style={{width:"100%", margin:"auto"}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                         class="avatar-image"
                         alt="avatar-image"
                         src="https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-couple-avatar-male-image_1256691.jpg"/> 
                         
                        <div className="banner-text">
                            <h1>Full troll web dev</h1>
                        </div> 
                                   </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;