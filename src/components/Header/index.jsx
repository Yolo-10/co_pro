import {React} from 'react'
import { Link } from 'umi';
import './index.less'
import 'font-awesome/css/font-awesome.min.css';


const Header = ({data})=>{
  return(
    <div className='hd'>
      <header>
        <div id="logo">
          <a href="#"><img src={data.logo} alt="" /></a>
        </div>
        <div className="nav_box">
          <div className="header_tel">{data.tel}</div>
          <div className="header_time">{data.time}</div>
          <ul className="sns">
              <li><a id="fb" href=""><i className="fa fa-facebook-official" aria-hidden="true"></i></a></li>
              <li><a id="tw" href=""><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a id="wx" href=""><i className="fa fa-weixin" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </header>

    <nav>
      {data.nav.map((item,i)=>
          <li key={i}><Link to={item.url}>{item.name}<div></div></Link></li>
      )}
    </nav>
      
    </div>
   
  )
}


export default Header;