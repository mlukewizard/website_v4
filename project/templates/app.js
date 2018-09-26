import React from 'react';
import Second from './example_benoit_1';
import { BrowserRouter, Route, Link } from "react-router-dom";
import BasicExample from './routing_example';
import ButtonAppBar from "./convert_to_ES6";
import TitleBar from './styled_example';
import global_constants from './constants';

// A WAY OF DEFINING A COMPONENT WITH A LAMBDA EXPRESSION (ALSO USED IN STYLED_EXAMPLE)
const Home = () => (
    <div>
      <h2>Home</h2>
    </div>
  );

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            someshit: 3
        };
    }

    render() {

        let second = null;

        // THIS IS AN EXAMPLE OF HOW YOU CAN TEST FOR THE EXISTANCE OF THIS.PROPS.STUFF BEFORE YOU TEST THIS.PROPS.STUFF.SHIT
        if (this.props.stuff && this.props.stuff.shit === 27) {
            second = <Second/>;
        }

        console.log(window.location.pathname);
      return (
        // WRAP BROWSERROUTER AROUND YOUR WHOLE APP
        <BrowserRouter>
            <div>
                {/* THIS IS A REALLY GOOD EXAMPLE OF HOW YOU CAN MAKE A GET REQUEST FOR IMAGES!!! */}
                <img src= {global_constants.server_address + "/home_image"} />
                <TitleBar />
                <ButtonAppBar />
                {/* THIS IS AN EXAMPLE OF HOW YOU CAN DO A COMMENT IN JSX*/}
                {/* AND THE BELOW IS AN EXAMPLE OF HOW YOU CAN USE {} TO GET A COMPONENT FROM OUTSIDE JSX*/}
                <div>{second}</div>
                <BasicExample />
                <Route exact path="/" component={Home} />
            </div>
        </BrowserRouter>
      );
    };
  }
export default App;