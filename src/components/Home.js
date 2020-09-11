import React from 'react';
import '../assets/css/home.css';
import Slider from '../Shared/Slider';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    }

    componentDidMount() {
        console.log("BasicClassComponent");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <div>
                <Slider name="idrees" city="karachi" image="1.png"/>
                <p>BasicFunctional</p>
            </div>
        );
    }
}

export default Home;