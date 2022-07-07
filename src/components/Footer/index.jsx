import {React} from 'react';
import './index.less'

const Footer = ({data})=>{
  return(
    <footer>
    {data.map((item,i)=>
      <div key={i}>{item}</div>
    )}
    </footer>
  )
}

export default Footer;