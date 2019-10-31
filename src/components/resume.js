import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import me from "./me.jpg"

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={me}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Cédric Kévers</h2>
            <h4 style={{color: 'grey'}}>Back-end</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Préférant développer des fonctionalités que faire du visuel, c'est tout naturellement que je me suis orienté vers les technologie backend, tel que nodeJS ou laravel.<br/>J'aime avoir de l'autonomie dans mon travail, pouvoir apprendre et évoluer. </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/> 
            <h5>Addresse</h5>
            <p>56 Rue de la vallée, 4610 Bellaire</p>
            <h5>Téléphone</h5>
            <p>(04) 74760835</p>
            <h5>Email</h5>
            <p>keverscedric@gmail.com</p>
            <h5>Web</h5>
            <p><a href="https://licorne-kawaii.Com">Mon site E-commerce</a></p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p><a href="https://sheepbay.com">Mon site E-commerce  en anglais avec un partenaire</a></p>

          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={"Mai 2019"}
              endYear={"En cours"}
              schoolName="Becode"
              schoolDescription="Formation intensive de web dévolppeur.
              Apprentissage en autonomie par des projets concrets. Cette formation m'a permis de développer mon esprit d'équipe car une grande partie des projets sont réalisés en groupe et la formation est basée sur l'entre aide entre apprenant.
              L'accent est aussi grandement port sur la capacité à se débrouiller, car il n' y pas de cours, les coach sont la pour nous soutenir et nous aiguiller, mais c'est a nous de travailler et de nous appliquer à trouver nous même la solution à nos problèmes  
              "
               />

               <Education
                 startYear={2017}
                 endYear={2019}
                 schoolName="Saint Laurent"
                 schoolDescription="Cour du soirs de web développeur, c'est ici que j'ai fait mes premier pas en code, partant de zéro j'ai beacoup appris sur les bonnne pratique 
                 => Respect du W3C, comment bien préparer la réalisation d'un algorithme, structure MCV, requêtes sql."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={"Mai 2019"}
              endYear={"En cours"}
              jobName="Becode"
              jobDescription="Réalisation de travaux seul ou en équipe  avec deadline (voir la partie projet), présentation orale technique (Explication de code, SEO, Google analityc)"
              />


              {}
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="SEO"
                progress={60}
                />
              <Skills
                skill="Javascript"
                progress={60}
                />
                <Skills
                  skill="PHP"
                  progress={50}
                  />
                  <Skills
                    skill="CSS"
                    progress={25}
                    />
                    <Skills
                      skill="Selenium"
                      progress={10}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;