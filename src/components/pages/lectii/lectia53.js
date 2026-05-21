import React from 'react'
import '../../../App.css'
import './css/lectie.css'
import { Button } from '../../Button'

import bacovia from '../../../img/bacovia2.jpg'

export default function Lectia53() {
  return (
    <div className='container'>
      <div className='text-container'>
        <div className='text'>
          <p className='text-lectie'>
            <table>
              <tr>
                <td>
                  <h3 className='span-color'>George Bacovia (1881- 1957)</h3><br />
                  <p className='text-lectie'>
                    A fost un scriitor român format la școala simbolismului literar francez. Este autorul unor volume de versuri și proză 
                    scrise în baza unei tehnici unice în literatura română, cu vădite influențe din marii lirici moderni francezi pe care-i 
                    admira, dar și, cum spune versul bacovian, „din Eminescu, Heine și Lenau.” La început văzut ca poet minor de critica 
                    literară, va cunoaște treptat o receptare favorabilă, mergând până la recunoașterea sa drept cel mai important poet 
                    simbolist român și unul dintre cei mai importanți poeți din poezia română modernă.
                  </p>
                  <p className='text-lectie'>
                    Cromatica lui Bacovia este una limitată centrată pe câteva motive tipic 
                    simboliste: urâtul, plictisul ,tristețea si monotonia. Culoarea, esențial 
                    sugestivă ,în loc sa reliefeze obiectul ,dimpotrivă, estompează conturul, îl 
                    dizolvă într-un fluid unic capabil să impună o anumită stare de spirit. Culorile, 
                    ca și instrumentele muzicale au rolul de a induce o anumită stare sufletească. 
                    Bacovia îmbrățișează griurile, culorile palide și chiar și puținele pete mai vii 
                    ce apar în poeziile acestuia au o nuanță total diferită de simbolistica la baza
                  </p>
                </td>
                <td>
                  <img className='img-rep' src={bacovia} alt='bacovia' />
                </td>
              </tr>
            </table>
          </p>
          <div className='navigation'>
            <Button buttonStyle='btn--primary' buttonSize='btn--large' to='/Lectii/Lectia52'>&#8678;</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

