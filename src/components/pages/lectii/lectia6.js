import React from 'react'
import '../../../App.css'
import './css/lectie.css'
import ReactAudioPlayer from 'react-audio-player'
import { Button } from '../../Button'

export default function Lectia6() {
  return (
    <div className='container'>
      <div className='btn-container'>
        <Button buttonStyle='btn--primary' buttonSize='btn--medium' to='/Lectii'>&#8678; Înapoi la Lecții</Button>
      </div>
      <div className='text-container'>
      <h1 className='l-h1'>L7.Plumb - analiză</h1>
        <div className='text'>
          <p className='text-lectie'>
            <table>
              <tr>
                <td style={{width: '60%'}}>
                  <p className='text-lectie'>
                    Simbolul central al poeziei "Plumb" de George Bacovia este chiar termenul care 
                    apare în titlu; repetat de încă șase ori, în poziții simetrice, în fiecare dintre cele 
                    două catrene, termenul indică obsesia convertirii universului cunoscut, în 
                    cenușiul mineralului. Simbolul este un procedeu expresiv prin care un termen concret (metalul plumb,
                    în cazul de față) sugerează, prin corespondența analogică, o seamă de stări 
                    sufletești abstracte. Cele două trăsături ale termenului concret fiind culoarea și greutatea, acestea ar 
                    putea sa aibă mai multe semnificații:
                  </p>
                  <p className='text-lectie'>
                    a) Cenușiul ar putea sugera plictisul, monotonia și urâtul care caracterizează 
                    lumea bacoviană. Rezultat din amestecul dintre alb și negru (culori 
                    predominante în lirica poetului), cenușiul este culoarea humei în care se întorc 
                    toate lucrurile, ca și oamenii.
                  </p>
                  <p className='text-lectie'>
                    b) Elementul care contribuie la întoarcerea în humă este greutatea. Sub povara ei
                    are loc regresiunea, căderea în timp, de parcă destinul însuși este de plumb și-l 
                    presează pe om, adâncindu-l treptat, dar implacabil spre golul neființei. De aici,
                    sugestia unei stări sufletești apăsătoare, într-un decor în care plumbul a invadat 
                    totul, până și moartea.
                  </p>
                </td>
                <td>
                <h3 className='span-color'>Plumb - George Bacovia</h3><br />
                  <p className='poezie'>
                    Dormeau adânc sicriele de plumb,<br />
                    Şi flori de plumb şi funerar veștmânt-<br />
                    Stăm singur în cavou... şi era vânt...<br />
                    Şi scârţâiau coroanele de plumb.<br /><br />
                    Dormea întors amorul meu de plumb<br />
                    Pe flori de plumb... şi-am început să-l strig-<br />
                    Stăm singur lângă mort... şi era frig...<br />
                    Şi-i atârnau aripile de plumb.<br />
                  </p>
                </td>
              </tr>
            </table>
          </p>
        </div>
        <div className='navigation'>
          <ReactAudioPlayer 
            src={require('../../../audio/plumb.mp3')}
            controls
          />
        </div>
      </div>
    </div>
  )
}

