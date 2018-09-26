import React from 'react';
import Button from '@material-ui/core/Button';

class Second extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            someshit: 3,
            moreshit: ""
        };
        // YOU HAVE TO BIND THIS TO A FUNCTION IF IT IS GOING TO CHANGE THE VALUE OF THIS
        this.onClick = this.onClick.bind(this);
    }

    onClick () {
        console.log("yolo");
        this.setState({
            someshit: this.state.someshit + 1
        });
        // THIS IS A GOOD EXAMPLE OF LINKING TO THE SERVER TO MAKE AN API REQUEST
        // IT IS ALSO AN EXAMPLE OF HOW TO USE PROMISES FOR SYNCHRONOUS PROGRAMMING!!
        fetch('http://127.0.0.1:5000/yolo')
        .then( (r) => {
            return r.text();
        })
        .then((t)=>{

            // N.B YOU CANT WRITE THE LINES BELOW BECAUSE THE DOM DOES NOT UPDATE, SETSTATE AUTOMATICALLY CALLS RENDER
            // this.state = {
            //     someshit: this.state.someshit,
            //     moreshit: this.state.someshit + " - " + t
            // };

            this.setState({
                moreshit: this.state.someshit + " - " + t 
            });
        })
    }

    render() {
        console.log("i render");

      return (
        <div>
          <div>Second</div>
          <Button variant="contained" color="primary" onClick={this.onClick}>click</Button>
          <div>{this.state.someshit}</div>
        </div>
      );
    }
  }
export default Second;