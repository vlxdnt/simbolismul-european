import React from 'react'
import '../../App.css'
import '../Lectii.css'
import Card from '../Card.js'

import intro from '../../img/introducere.jpeg'
import tree from '../../img/tree.png'
import trasaturi from '../../img/trasaturi.jpg'
import steph from '../../img/steph.jpg'
import sro from '../../img/sro.jpg'
import bacovia from '../../img/bacovia.jpg'
import plumb from '../../img/plumb.jpg'

export default function Lectii() {
  return (
    <div className='container'>
      <ul className='cards'>
        <Card to="./lectia1" src={intro} text="L1. Despre simbolism" alt="Introducere" />
        <Card to="./lectia12" src={tree} text="L2. Teme și motive" alt="Teme" />
        <Card to="./lectia2" src={trasaturi} text="L3. Trăsături" alt="Trasaturi" />
        <Card to="./lectia3" src={steph} text="L4. Reprezentanți" alt="Reprezentanti" />
        <Card to="./lectia4" src={sro} text="L5. Simbolismul românesc" alt="Rom" />
        <Card to="./lectia5" src={bacovia} text="L6. Reprezentanți" alt="Rom" />
        <Card to="./lectia6" src={plumb} text="L7. Plumb - analiză" alt="plumb" />
      </ul>
    </div>
  )
}