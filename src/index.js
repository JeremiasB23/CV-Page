import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ContentDisplay } from './components/contentDisplay';

class Main extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <ContentDisplay/>
      </div>
    )
  }
}

ReactDOM.render(<Main/>, document.getElementById("root"));