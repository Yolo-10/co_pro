import React from 'react'
import { useState } from 'react'
import {Title,List06,List07,Img04,Img01} from '../../../es'
import Cta from '../../components/Cta'
const {list,cta} = require('../../data.json');

const listPage=()=> {
  const [activeLi,setActiveLi] = useState(0);
  const {
    title,navList,
    section1,section2,section3,section4
  } = list; 

  const handleLiClick = (index)=>{
    setActiveLi(index);
  }

  return (
    <div className='pg_list'>
      <Title title={title.string} line={title.line}/>
      <div className='menu_tab'>
          {navList.map((item,i)=>
            <li className={i==activeLi? "active":""} onClick={handleLiClick.bind(this,i)} key={i}>{item.name}</li>
          )}
      </div>

      <div className='m_bd'>
        <section style={{"display":activeLi == 0? "block":"none"}}>
          <List07 data={section1.list07_1}/>
          <List06 data={section1.list06_1}/>
        </section>

        <section style={{"display":activeLi == 1? "block":"none"}}>
          <List07 data={section2.list07_2}/>
          <List06 data={section2.list06_2}/>
        </section>

        <section style={{"display":activeLi == 2? "block":"none"}}>
          <List07 data={section3.list07_3}/>
          <List06 data={section3.list06_3}/>
        </section>

        <section style={{"display":activeLi == 3? "block":"none"}} className="sc4">
          <List07 data={section4.list07_4}/>
          
          <Title title={section4.title} line="true"/>
          <Img04 data={section4.img04}/>
          <img src={section4.img} alt="" />

          <div className='capsule_box'>
            <Img01 data={section4.img01}/>
            <p>{section4.inBoxP}</p>
          </div>
          <p>{section4.nearBoxP}</p>

          <List07 data={section4.list07_5}/>
        </section>

      </div>
   
      <Cta data={cta}></Cta>
    </div>
  )
}

export default listPage;
