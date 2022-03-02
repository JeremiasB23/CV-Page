import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ContentDisplay } from './components/contentDisplay';
import ReactToPrint from 'react-to-print';

class Main extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
         <ContentDisplay ref={el => (this.componentRef = el)} />
        <ReactToPrint trigger={() => {
          return <a href="#" className="Print">Print Your CV!</a>
        }}
        content={() => this.componentRef}
        />
      </div>
    )
  }
}

ReactDOM.render(<Main/>, document.getElementById("root"));