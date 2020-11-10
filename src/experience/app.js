import React from 'react';
import ensta from './ensta.png'
import tel from './telecom.png'
import ilb from './ilb.png'
import kcl from './kcl.png'
import champo from './champo.png'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';



export default function experience() {

  return (
    
    <VerticalTimeline>
        
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Since September 2020"
        iconStyle={{ background: '#f50057', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">MSc Artificial Intelligence</h3>
        <h4 className="vertical-timeline-element-subtitle">Telecom Paris</h4>
        <a href="https://www.telecom-paris.fr/en/post-masters-degree/all-post-masters-degree/artificial-intelligence" target="_blank"><img src={tel} style={{float:'right', width:'20%'}} ></img></a>
        <p>
      Last year advanced specialization resulting from the partnership between Ensta Paris and Telecom Paris.
        </p>
        <p>
        Coursework includes: Deep Learning, Reinforcement Learning, Metaheuristic Optimization, Natural Language Processing, Statistical Learning, Multi-agent Programming, GPGPU Programming, Perception for autonomous systems, Large-scale statistical learning
        </p>

      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="March 2020 - August 2020"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Research Assistant</h3>
        <h4 className="vertical-timeline-element-subtitle">King's College London</h4>
        <a href="https://www.kcl.ac.uk/psychology-systems-sciences/about/departments/biostatistics-and-health-informatics" target="_blank"><img src={kcl} style={{float:'right', width:'20%'}} ></img></a>
        <p>
        <ul>
          <li>Scrapped medical web data to create a comprehensive disease database and applied classification and clustering techniques on it.</li>
          <li>Built a simplified interface for doctors to generate randomized patients and test diagnostic tools.</li>
          <li>Worked on improving state-of-the-art medical annotation tool for drug/dosage NER</li>
        </ul> 
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Septembre 2019 - March 2020"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Data Scientist</h3>
        <h4 className="vertical-timeline-element-subtitle">Institut Louis Bachelier, Paris</h4>
        <a href="https://www.institutlouisbachelier.org/en/homepage/" target="_blank" ><img src={ilb} style={{float:'right', width:'20%'}} ></img></a>
        <p>
          <ul>
            <li>Researched GAN applications for financial time series</li>
            <li> Prediction of food insecurity due to droughts in Africa using spatial and temporal data </li>
            <li> Built a tool to complete missing values in industrial databases using sequential models with customizable parameters</li>
          </ul>
        </p>

      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="May 2019 - August 2019"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Research Intership</h3>
        <h4 className="vertical-timeline-element-subtitle">King's College London</h4>
        <a href="ttps://www.kcl.ac.uk/psychology-systems-sciences/about/departments/biostatistics-and-health-informatics" target="_blank" ><img src={kcl} style={{float:'right', width:'20%'}} ></img></a>
        <p>
          <ul>
            <li>Improved Acute Kidney Injury diagnostic in Intensive Care Unit using machine learning (structured and unstructured data).</li>
            <li> Performed thorough model analysis and explanation using Shapley values and statistical tools.</li>
            <li> The whole pipeline was built in order to help improve physicians' diagnostics and is suitable for real-time implementation.</li>
            <li> Ongoing research publication</li>
          </ul>
        </p>

      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2017 - 2021"
        iconStyle={{ background: '#f50057', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Msc Computer Science</h3>
        <h4 className="vertical-timeline-element-subtitle">Ensta Paris</h4>
        <a href="https://www.ensta-paristech.fr/en/home" target="_blank"><img src={ensta} style={{float:'right', width:'20%'}} ></img></a>
        <p>
        ENSTA Paris belongs to the foremost graduate schools of engineering in France called "Grandes Ecoles" and awards the french "Diplôme d'Ingénieur". 
        </p>
        <p>
        Coursework includes core scientific training in:
        <ul>
          <li>Mechanics (Solid, Fluid, Quantum)</li>
          <li>Mathematics (Statistics & Probability, Calculus, Geometry)</li>
          <li>Computer Sciences (Signal Processing, Software Engineering, Databases, Parallel Programming)</li>
          <li>Biology (introduction to Genetic and Immunology)</li>
        </ul>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2014 - 2017"
        iconStyle={{ background: '#f50057', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Classe Préparatoire Aux Grandes Écoles</h3>
        <h4 className="vertical-timeline-element-subtitle">Champollion, Grenoble</h4>
        <a href="https://en.wikipedia.org/wiki/Classe_pr%C3%A9paratoire_aux_grandes_%C3%A9coles" target="_blank"><img src={champo} style={{float:'right', width:'20%'}} ></img></a>

        <p>
        2 years of very demanding scientific courses with prior selection before competing in nationwide exams to enter Top French Graduate Schools of Engineering.
        </p>
        <p>
Ranked 303 (top 5% overall) 
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>

  )
}



