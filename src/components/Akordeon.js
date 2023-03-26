import Accordion from 'react-bootstrap/Accordion';
import SedangDibaca from './SedangDibaca';
import SelesaiDibaca from './SelesaiDibaca';

function Akordeon() {
  const dummyData=[
    {
      title: "Bulan",
      totalPage: 60
    },
    {
      title: "Bumi",
      totalPage: 100
    },
    {
      title: "Matahari",
      totalPage: 100
    }
  ]
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>SEDANG DIBACA</Accordion.Header>
        <Accordion.Body>
          <div className='sedangDibaca'>
            <SedangDibaca data={dummyData}/>
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>SELESAI DIBACA</Accordion.Header>
        <Accordion.Body>
          <div className='selesaiDibaca'>
            <SedangDibaca data={dummyData}/>
            <SelesaiDibaca/>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Akordeon;