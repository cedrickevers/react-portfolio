 
import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from "./components/main"

class App extends Component {
  render() {
    return (
<div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header  className="header-color" title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
            <Navigation>
                <Link to="resume">CV</Link>
                <Link to="aboutme">A propos de moi</Link>
                <Link to="projects">Projets</Link>
                <Link to="contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="resume">CV</Link>
                <Link to="aboutme">A propos de moi</Link>
                <Link to="projects">Projets</Link>
                <Link to="contact">Contact</Link>
            </Navigation>
        </Drawer>
      <content>
        <div className="page-content"/>
        <Main/>
      </content>
    </Layout>
</div>

    );
  }
}

export default App;