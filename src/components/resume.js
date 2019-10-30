import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
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
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Cédric Kévers</h2>
            <h4 style={{color: 'grey'}}>Back-end</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Préférant développer des fonctionalités que faire du visuel, c'est tout naturellement que je me suis orienté vers les technologie backend- tel que nodeJS ou laravel.<br/>J'aime avoir de l'autonomie dans mon travail et pouvoir apprendre et évoluer. </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/> 
            <h5>Addresse</h5>
            <p>09 Rue de la vallée, 4610 Bellaire</p>
            <h5>Téléphone</h5>
            <p>(04) 74760835</p>
            <h5>Email</h5>
            <p>k_cedric@live.fr</p>
            <h5>Web</h5>
            <p><a href="https://licorne-kawaii.Com">Mon site E-commerce</a></p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p><a href="https://sheepbay.com">Mon site E-commerce avec un partenaire</a></p>

          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2002}
              endYear={2006}
              schoolName="Becode"
              schoolDescription="Formation intensive de web dévolppeur.
              Apprentissage en autonomie par des projets concrets. Cette formation m'as permit de développer mon esprit d'équipe car une grande partie des projets sont réalisés en groupe et la formation est basée sur l'entre aide entre apprenant.
              L'accent est aussi grandement port sur la débrouillardize, car il n 'y pas de cours, les coach sont la pour nous soutenir et nous aiguiller, mais c 'est a nous de travailler et de nous appliquer à trouver nous même la solution à nos problèmes  
              "
               />

               <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="Saint Laurent"
                 schoolDescription="Cour du soirs de web développeur, c'est ici que j'ai fait mes premier pas en code, parant de 0 j'ai beacoup appris sur les bonnne pratique 
                 => Respect du W3C, comment bien préparer la réalisation d'un algorithme, structure MCV, requêtes sql."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Réalisation de travaux seul ou en équipe  avec deadline (voir la partie projet), présentation orale technique (Explication de code, SEO, Google analityc)"
              />


              {/* <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                /> */}
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
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