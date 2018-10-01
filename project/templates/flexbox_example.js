import styled from "styled-components";
import React from 'react';

class Flexed_li_base extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <li className={this.props.className}>
                {this.props.children}
            </li>
        )
    };
}

const Flexed_li = styled(Flexed_li_base)`
  background: tomato;
  padding: 5px;
  width: 200px;
  height: 150px;
  margin-top: 10px;
  
  line-height: 150px;
  color: white;
  font-weight: bold;
  font-size: 3em;
  text-align: center`;

class Flexed_ul_base extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul className={this.props.className}>
                {this.props.children}
            </ul>
        )
    };
}

const Flexed_ul = styled(Flexed_ul_base)`
  padding: 0;
  margin: 0;
  list-style: none;
  
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  
  -webkit-flex-flow: row wrap;
  justify-content: space-around;
`;


class CoolList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Flexed_ul>
                <Flexed_li>1</Flexed_li>
                <Flexed_li>2</Flexed_li>
                <Flexed_li>3</Flexed_li>
                <Flexed_li>4</Flexed_li>
                <Flexed_li>5</Flexed_li>
                <Flexed_li>6</Flexed_li>
            </Flexed_ul>
        )
    };
}

export default CoolList;