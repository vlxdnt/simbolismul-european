import React from 'react'
import '../../../App.css'
import './css/lectie.css'
import { Button } from '../../Button'

import mace from '../../../img/mace.jpg'

export default function Lectia5() {
  return (
    <div className='container'>
      <div className='btn-container'>
        <Button buttonStyle='btn--primary' buttonSize='btn--medium' to='/Lectii'>&#8678; Înapoi la Lecții</Button>
      </div>
      <div className='text-container'>
        <div className='text'>
          <p className='text-lectie'>
            <table>
              <tr>
                <td>
                  <h3 className='span-color'>Alexandru A. Macedonski (1854 - 1920)</h3><br />
                  <p className='text-lectie'>
                    A fost un poet, prozator, dramaturg și publicist român. Supranumit poetul rondelurilor, inspirându-se din literatura 
                    franceză, este primul reprezentant al simbolismului în literatura română. Inițiatorul cenaclului și revistei literare 
                    Literatorul, a susținut modernizarea poeziei românești, fiind într-o continuă polemică cu junimiștii. Aceste polemici 
                    i-au afectat serios cariera literară și viața și au rămas notabile polemicile sale cu Vasile Alecsandri, Mihai Eminescu 
                    și Ion Luca Caragiale.
                  </p>
                  <p className='text-lectie'>
                    Pe de altă parte, Alexandru Macedonski a încurajat, la începuturile activității lor scriitoricești, numeroși tineri 
                    talentați, printre care George Bacovia și Tudor Vianu, pe care i-a publicat în revista sa Literatorul, iar în revista 
                    Liga ortodoxă debutează, printre alții, Tudor Arghezi și Gala Galaction.
                  </p>
                </td>
                <td>
                  <img className='img-rep' src={mace} alt='macedonski' />
                </td>
              </tr>
            </table>
          </p>
          <div className='navigation'>
            <Button buttonStyle='btn--primary' buttonSize='btn--large' to='/Lectii/Lectia52'>&#8680;</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

