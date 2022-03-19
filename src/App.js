import './App.css';
import Resize from './Resize';

import { elementStyles1, elementStyles2, elementStyles3, styles1, styles2, styles3 } from './constants';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Resize size={{width: styles1.width, height: styles1.height}} parent direction={'row'} elementStyles={elementStyles1} style={{...styles1, display: 'flex', margin: 5}}>

            <Resize size={{width: styles2.width, height: styles2.height}} elementStyles={elementStyles2} style={{...styles2}}>


              <Resize size={{width: 100, height: 100}}></Resize>

            </Resize>
            <Resize size={{width: styles2.width, height: styles2.height}} elementStyles={elementStyles2} style={{...styles2}}></Resize>
            <Resize size={{width: styles2.width, height: styles2.height}} elementStyles={elementStyles2} style={{...styles2}}></Resize>

        </Resize>


        <Resize
        size={{width: styles1.width, height: styles1.height}}
        elementStyles={elementStyles1} 
        style={{...styles1, display: 'flex', margin: 5}}
        >
            <div>Some content</div>
        </Resize>

        <Resize size={{width: styles1.width, height: styles1.height}} parent direction={'column'} elementStyles={elementStyles1} style={{...styles1, display: 'flex', margin: 5}}>

          <Resize size={{width: styles3.width, height: styles3.height}} elementStyles={elementStyles3} style={{...styles3}}></Resize>
          <Resize size={{width: styles3.width, height: styles3.height}} elementStyles={elementStyles3} style={{...styles3}}></Resize>
          <Resize size={{width: styles3.width, height: styles3.height}} elementStyles={elementStyles3} style={{...styles3}}></Resize>

        </Resize>
      </header>
    </div>
  );
}


export default App;
