import React from 'react'
import '../../../App.css'
import './css/lectie.css'
import { Button } from '../../Button'

import baudelaire from '../../../img/baudelaire.jpg'

export default function Lectia32() {
  return (
    <div className='container'>
      <div className='text-container'>
        <div className='text'>
          <p className='text-lectie'>
            <table>
              <tr>
                <td>
                  <h3 className='span-color'>Charles Baudelaire (1821 - 1867)</h3><br />
                  <p className='text-lectie'>
                    A fost un poet francez care a produs, de asemenea, lucrări notabile ca eseist, critic de artă și unul dintre primii 
                    traducători ai lui Edgar Allan Poe. Poeziile sale prezintă măiestrie în folosirea rimei și a ritmului, și conțin un 
                    exotism moștenit de la romantici, dar se bazează pe observații ale vieții reale.
                  </p>
                  <p className='text-lectie'>
                    Cea mai cunoscută lucrare a sa, opera sa de căpătâi, o carte de poezie lirică intitulată "Les Fleurs du mal"
                    (Florile Răului), exprimă natura schimbătoare a frumuseții în Parisul care se industrializa rapid la mijlocul 
                    secolului al XIX-lea. Stilul său extrem de original de poezie în proză a influențat o întreagă generație de poeți, 
                    printre care Paul Verlaine, Arthur Rimbaud și Stéphane Mallarmé, printre mulți alții. I se atribuie faptul că a 
                    inventat termenul de modernitate (modernité) pentru a desemna experiența trecătoare și efemeră a vieții într-o 
                    metropolă urbană și responsabilitatea expresiei artistice de a surprinde acea experiență.
                  </p>
                </td>
                <td>
                  <img className='img-rep' src={baudelaire} alt='baudelaire' />
                </td>
              </tr>
            </table>
          </p>
          <div className='navigation'>
            <Button buttonStyle='btn--primary' buttonSize='btn--large' to='/Lectii/Lectia32'>&#8678;</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

