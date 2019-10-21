import React, {Component} from "react";

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 2 };
    }

            
                render() {
                    return (
                        <div className="demo-tabs">
                            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                                <Tab>Starks</Tab>
                                <Tab>Lannisters</Tab>
                                <Tab>Targaryens</Tab>
                            </Tabs>
                            <section>
                                <div className="content">Content for the tab: {this.state.activeTab}</div>
                            </section>
                        </div>    
                    );
                }
            }
        )
    }
}

export default Projects;
