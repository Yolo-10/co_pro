import React from 'react'
import { List01, List02, List03,List04,List05,Article, Carousel,Title,Map} from '../../es'
import Cta from '../components/Cta'
import './index.less'
const {main,cta} = require('../data.json');

const IndexPage = ()=> {
  const {
    list01,carousel_1,carousel_2,nav,
    section1,section2,section3,section4,section5,
    map,map_title,
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
            <Article data={section1.article_1} />
            <List02 data={section1.list02_1}/>
            <Article data={section1.article_2} />
            <Article data={section1.article_3} />
            <Article data={section1.article_4} />
            <List04 data={section1.list04_1}/>
            <List03 data={section1.list03_1}/>
          <Cta data={cta}></Cta></section>

        <section>
          <Article data={section2.article_5} />
          <List02 data={section2.list02_2}/>
          <Article data={section2.article_6} />
          <List04 data={section2.list04_2}/>
          <List03 data={section2.list03_2}/>
          <Cta data={cta}></Cta></section>

        <section>
          <List05 data={section3.list05}/>
          <Cta data={cta}></Cta></section>

        <section>
          <Article data={section4.article_7} />
          <List02 data={section4.list02_3}/>
          <Article data={section4.article_8} />
          <List04 data={section4.list04_3}/>
          <List03 data={section4.list03_3}/>
          <Cta data={cta}></Cta></section>

        <section>
          <Article data={section5.article_9} />
          <List02 data={section5.list02_4}/>
          <Article data={section5.article_10} />
          <List04 data={section5.list04_4}/>
          <List03 data={section5.list03_4}/>
          <Cta data={cta}></Cta></section>

        <Title title={map_title.title} line={map_title.line}/>
        <Map data={map}/>
      </section>
    </div>
  )
}

export default IndexPage;
