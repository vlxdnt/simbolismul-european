import React from 'react'
import '../../../App.css'
import './css/lectie.css'
import { Button } from '../../Button'

import verlaine from '../../../img/verlaine.jpg'

export default function Lectia3() {
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
                  <h3 className='span-color'>Paul Verlaine (1844 - 1896)</h3><br />
                  <p className='text-lectie'>
                    Paul Verlaine este considerat de către simboliștii francezi ca fiind șeful curentului simbolist. El a trăit o viață de 
                    boem, fiind adesea descris ca un "poet blestemat", contrastând astfel în planul creației cu aspirația sa spre puritate 
                    și candoare. Versurile sale de început, din volumul "Poeme saturniene" din 1866, cu influențe din parnasieni și din 
                    Baudelaire, exprimă tonul său inconfundabil prin viziunea dramatică asupra lumii, prin melancolie și căutarea armoniilor. 
                    Verlaine cultivă o lirică a sentimentelor intime și a variatelor stări sufletești într-o atmosferă crepusculară și vagă. 
                    Poeziile sale reușesc să transmită o profundă introspecție și să provoace emoții complexe, fiind adesea descrise ca fiind 
                    delicate și pline de subtilitate. Această abordare a făcut din Verlaine unul dintre cei mai influenți poeți ai secolului 
                    al XIX-lea și un pilon al mișcării simboliste.
                  </p>
                </td>
                <td>
                  <img className='img-rep' src={verlaine} alt='verlaine' />
                </td>
              </tr>
            </table>
          </p>
          <div className='navigation'>
            <Button buttonStyle='btn--primary' buttonSize='btn--large' to='/Lectii/Lectia32'>&#8680;</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

