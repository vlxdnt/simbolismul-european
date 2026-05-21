import React from 'react'
import '../../../App.css'
import './css/lectie.css'
import { Button } from '../../Button'

import mallarme from '../../../img/mallarme.jpg'

export default function Lectia32() {
  return (
    <div className='container'>
      <div className='text-container'>
        <div className='text'>
          <p className='text-lectie'>
            <table>
              <tr>
                <td>
                  <h3 className='span-color'>Stéphane Mallarmé (1842 - 1898)</h3><br />
                  <p className='text-lectie'>
                    A cultivat o poezie cerebrală, voit obscură, bogată în sensuri filozofice, de o rară muzicalitate și forță sugestivă. 
                    Creația sa („Herodiada”, „După-amiaza unui faun”, „Poezii”) constituie o expresie viguroasă și originală a poeziei 
                    moderne. Mai târziu, prin opera sa a influențat decisiv școli artistice reprezentative ale secolului al XX-lea, 
                    cum ar fi: cubismul, futurismul, dadaismul, suprarealismul.
                  </p>
                  <p className='text-lectie'>
                    Unii consideră că Mallarmé are unele dintre cele mai dificile poezii de tradus în alte limbi. Dificultatea se datorează 
                    complexității textului, naturii multistratificate, dar cel mai important muzicalității cuvintelor. 
                    Când sunt recitate în limba franceză, poeziile admit sensuri care nu sunt evidente la lecturare. Aspectul 
                    poeziei sale este un subiect de analiză muzicală, poezia neputând fi tradusă fără a-i schimba sensul.
                  </p>
                </td>
                <td>
                  <img className='img-rep' src={mallarme} alt='mallarme' />
                </td>
              </tr>
            </table>
          </p>
          <div className='navigation'>
            <Button buttonStyle='btn--primary' buttonSize='btn--large' to='/Lectii/Lectia3'>&#8678;</Button>
            <Button buttonStyle='btn--primary' buttonSize='btn--large' to='/Lectii/Lectia33'>&#8680;</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

