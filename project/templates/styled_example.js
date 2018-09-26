import React from 'react';
import Second from './example_benoit_1';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Toolbar from '@material-ui/core/Toolbar';
import Box from 'grommet/components/Box';
import Hero from 'grommet/components/Hero';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';
import Columns from 'grommet/components/Columns';
import global_constants from './constants';
import styled, { css } from 'styled-components'

var column = {
    float: "left",
    width: "25%",
    padding: "10px",
    height: "300px" /* Should be removed. Only for demonstration */
}

// This is a way of defining a component with a lambda expression
// Also shows an example of passing children into the component
const LukeDiv = ({ className, children }) => (
    <div className={className}>
        {children}
    </div>
);

// This is a way of defining a component the same component with full on class shit
// class LukeDiv extends React.Component {
//     constructor(props, { className, children }) {
//         super(props);
//     }

//     render() {
//         return (
//             <div className={className}>
//                 {children}
//             </div>)
//     }
// }

const StyledDiv = styled(LukeDiv)`
color: palevioletred;
font-weight: bold;
`;


class TitleBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <StyledDiv>
                        <h2>Column 1</h2>
                        <p>Some text..</p>
                    </StyledDiv>
                    <div className="column" style={{ background: 'red' }}>
                        <h2>Column 2</h2>
                        <p>Some text..</p>
                    </div>
                    <div className="column" style={{ background: 'blue' }}>
                        <h2>Column 3</h2>
                        <p>Some text..</p>
                    </div>
                    <div className="column" style={{ background: 'red' }}>
                        <h2>Column 4</h2>
                        <p>Some text..</p>
                    </div>
                </div>
            </div>
        )
    };
}

export default TitleBar;