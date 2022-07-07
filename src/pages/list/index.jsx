import React from 'react'
import { useState } from 'react'
import {Title,List06,List07,Img04,Img01} from '../../../es'
import Cta from '../../components/Cta'
const {list,cta} = require('../../data.json');

const listPage=()=> {
  const [activeLi,setActiveLi] = useState(0);
  const {
    title,navList,
    list06_1,list07_1,list06_2,list07_2,list06_3,list07_3,
    list07_4,list07_5,img04,sc4_title,img01
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
          <List07 data={list07_1}/>
          <List06 data={list06_1}/>
        </section>
        <section style={{"display":activeLi == 1? "block":"none"}}>
          <List07 data={list07_2}/>
          <List06 data={list06_2}/>
        </section>
        <section style={{"display":activeLi == 2? "block":"none"}}>
          <List07 data={list07_3}/>
          <List06 data={list06_3}/>
        </section>
        <section style={{"display":activeLi == 3? "block":"none"}} className="sc4">
          <List07 data={list07_4}/>
          <Title title={sc4_title} line="true"/>
          <Img04 data={img04}/>
          <img src="https://ginza-brc.jp/img/capsule02.jpg" alt="" />
          <div className='capsule_box'>
            <Img01 data={img01}/>
            <p>ここでは書ききれないほどの効果が酸素にはあります！<br/>点滴の施術後に入っていただくことによって、投与された点滴が高気圧によって全身を巡り、酸素が身体への吸収を手助けしてくれるため通常時の約2～10倍の効果アップが期待されています。</p>
          </div>
          <p>※スムーズにご案内できるよう予約を調整しておりますが、やむを得ずお待たせしてしまう可能性がございます。あらかじめご了承下さい。</p>
          <List07 data={list07_5}/>
        </section>
      </div>
   
      <Cta data={cta}></Cta>
    </div>
  )
}

export default listPage;
