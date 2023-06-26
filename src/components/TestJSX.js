import React, { useEffect } from 'react';
import fff from '../logo/fff.png';

const TestJSX = () => {
    const compétences = ['ReactJS', 'SQL', 'Python', ];
    const loisirs = ['Sport', 'Jeux vidéos', 'Films','Séries'];
    const passions = ['Football', 'Jeux vidéos'];
  
    return (
        <div className='Nom/Prénom'> 
        <h2>Bonjour, je suis Piravin NAGANATHAN</h2>
      <div>
        <h3>Mes compétences :</h3>
        <ul>
          {compétences.map((a, index) => (
            <li key={index}>{a}</li>
          ))}
        </ul>
  
        <h3>Mes loisirs :</h3>
        <ul>
          {loisirs.map((a, index) => (
            <li key={index}>{a}</li>
          ))}
        </ul>
  
        <h3>Mes passions :</h3>
        <ul>
          {passions.map((a, index) => (
            <li key={index}>{a}</li>
          ))}
        </ul>
      </div>

      <img src= {fff} alt="" style={{ width: '600px', height: '700px' }}/>
      </div> 

    );
  };

export default TestJSX;