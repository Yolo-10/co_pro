import React from 'react'
import { List01, List02, List03,List04,List05,Article, Carousel,Title,Map} from '../../es'
import Cta from '../components/Cta'
import './index.less'
const {main,cta} = require('../data.json');

const IndexPage = ()=> {
  const {
    carousel_1,carousel_2,
    article_1,article_2,article_3,article_4,article_5,
    article_6,article_7,article_8,article_9,article_10,
    list01,
    list02_1,list02_2,list02_3,list02_4,
    list03_1,list03_2,list03_3,list03_4,
    list04_1,list04_2,list04_3,list04_4,
    list05,
    map,map_title,nav
  } = main;

  return (
    <div className='pg_main'>
      <Carousel data={carousel_1} />
      <Carousel data={carousel_2} />
      <section>
        <List01 data={list01} />
        <div className='m-nav'>
          {nav.map((item,i)=>
            <a key={i} href={item.url} className="btn01">{item.name}</a>
          )}
        </div>

        <section>
            <Article data={article_1} />
            <List02 data={list02_1}/>
            <Article data={article_2} />
            <Article data={article_3} />
            <Article data={article_4} />
            <List04 data={list04_1}/>
            <List03 data={list03_1}/>
          <Cta data={cta}></Cta></section>
        <section>
          <Article data={article_5} />
          <List02 data={list02_2}/>
          <Article data={article_6} />
          <List04 data={list04_2}/>
          <List03 data={list03_2}/>
          <Cta data={cta}></Cta></section>
        <section>
          <List05 data={list05}/>
          <Cta data={cta}></Cta></section>
        <section>
          <Article data={article_7} />
          <List02 data={list02_3}/>
          <Article data={article_8} />
          <List04 data={list04_3}/>
          <List03 data={list03_3}/>
          <Cta data={cta}></Cta></section>
        <section>
          <Article data={article_9} />
          <List02 data={list02_4}/>
          <Article data={article_10} />
          <List04 data={list04_4}/>
          <List03 data={list03_4}/>
          <Cta data={cta}></Cta></section>

        <Title title={map_title.title} line={map_title.line}/>
        <Map data={map}/>
      </section>
    </div>
  )
}

export default IndexPage;
