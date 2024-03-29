import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Pomdoro</CardTitle>
            <CardText>
              Gestion d'un timer avec possibilitée de play, pause, réglage du temps et modal
            </CardText>
            <CardActions border>
            <Button colored><a href="https://github.com/cedrickevers/Pomodoro--react">GitHub</a></Button>
            <Button colored><a href="https://pedantic-shirley-5a257e.netlify.com/">démo</a></Button>

            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Trouvkash</CardTitle>
            <CardText>
            </CardText>
            Dispostion d'atm sur une map en fonction de la géocalisation d'une personne.
            <CardActions border>
              <Button colored><a href="https://github.com/mansan1souleiman1ahmed/TrouvKach">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Mopion</CardTitle>
            <CardText>
            Reproduction du jeu du morpion afin de s'initier à react

            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/cedrickevers/morpion-react">Github</a></Button>

            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >My Market Place</CardTitle>
            <CardText>
              Projet personnel en cours de développement
            </CardText>
            <CardActions border>
            <Button colored><a href="https://github.com/cedrickevers/MyMarketPlace">GitHub</a></Button>

            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Trouvkash</CardTitle>
            <CardText>
            Dispostion d'atm sur une map en fonction de la géocalisation d'une personne.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/mansan1souleiman1ahmed/TrouvKach">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Book App</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/cedrickevers/BookAppgraphql-test">Github</a></Button>

            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 2) {
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Laravel To do list</CardTitle>
            <CardText>
              Une liste   de taches avec possibilité d 'en ajouter, d'en surpprimer, de cocher et décocher...
            </CardText>
            <CardActions border>
            <Button colored><a href="https://github.com/cedrickevers/TODO_laravel">GitHub</a></Button>

            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Slim Unicensor</CardTitle>
            <CardText>
            Créations de routes et de vérifications de formulaire
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/ArzhMael/Project-Addanc">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

         
        </div>
      );
    } else if(this.state.activeTab === 3) {
        return(
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Test des commandes Selenium en php</CardTitle>
              <CardText>
                Familirisation de Selenium
              </CardText>
              <CardActions border>
              <Button colored><a href="https://github.com/cedrickevers/phpunit-playground">GitHub</a></Button>
  
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
  
            {/* Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Test des commandes selenium en Python</CardTitle>
              <CardText>
                  Familirisation de selenium en python
              </CardText>
              <CardActions border>
                <Button colored><a href="https://github.com/cedrickevers/selenium-python-playground">GitHub</a></Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
  
          
          </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>ReactJS</Tab>
          <Tab>nodeJS</Tab>
          <Tab>Laravel</Tab>
          <Tab>Selenium</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
