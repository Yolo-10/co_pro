import {React} from 'react';
import './index.less'

const Cta = ({data})=>{
  return(
    <div className='cta'>
      <div className="cta_title">{data.title}</div>
      <div className='c_width'>
        <div className="cta_tel">
          <div className="tel_telnum">{data.telnum}</div>
          <div className="cta_add">{data.add}</div>
        </div>
        <div className="cta_btn">
          <a href="#">{data.btn}</a>
        </div>
      </div>
    </div>
  )
}

export default Cta;