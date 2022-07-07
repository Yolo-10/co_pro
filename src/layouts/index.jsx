import Header from '../components/Header'
import Footer from '../components/Footer'
import '../gobal.less'

const data = require('../data.json');

export default function IndexPage(props) {
  return (
    <>
      <Header data={data.header} />
      {props.children}
      <Footer data={data.footer} />
    </>
  );
}
