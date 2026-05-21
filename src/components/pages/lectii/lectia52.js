import React from 'react'
import '../../../App.css'
import './css/lectie.css'
import { Button } from '../../Button'

import minulescu from '../../../img/minu.jpg'

export default function Lectia52() {
  return (
    <div className='container'>
      <div className='text-container'>
        <div className='text'>
          <p className='text-lectie'>
            <table>
              <tr>
                <td>
                  <h3 className='span-color'>Ion Minulescu (1881 - 1944)</h3><br />
                  <p className='text-lectie'>
                    Ion Minulescu se distinge în peisajul literar ca un poet al tuturor, refuzând să se limiteze doar la elitele culturale, 
                    în contrast cu erijarea lui Macedonski. El adoptă o lirică dinamică, plină de viață, lipsită de orice sterilitate și 
                    se concentrează în special pe trăirile personale, în loc să se angajeze în polemici de cenaclu sau speculații teoretice. 
                    Alegând să se adreseze unei agore însetate de poezie, Minulescu adoptă simbolul, dar într-o manieră subtilă și sugerată, 
                    în care acesta devine ceva ascuns, doar evocat prin imagini difuze. El menține un cod al simbolului, dar unul lejer și 
                    seducător, prin utilizarea eufoniei și a coloraturii. Prin abordarea sa, Minulescu se străduiește să păstreze deschis 
                    orizontul imaginii, oferind cititorului posibilitatea de a interpreta și de a descoperi multiple înțelesuri. Tehnica 
                    sa poate fi privită ca o formă de dizidență în interiorul simbolismului, întrucât Minulescu refuză să se conformeze 
                    rigidității convențiilor și se angajează într-o explorare creativă și liberă a simbolurilor și a expresiei poetice.
                  </p>
                </td>
                <td>
                  <img className='img-rep' src={minulescu} alt='minulescu' />
                </td>
              </tr>
            </table>
          </p>
          <div className='navigation'>
            <Button buttonStyle='btn--primary' buttonSize='btn--large' to='/Lectii/Lectia5'>&#8678;</Button>
            <Button buttonStyle='btn--primary' buttonSize='btn--large' to='/Lectii/Lectia53'>&#8680;</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

