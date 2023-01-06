import React from "react";

class CountDown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: props.startFrom
        }
    }

    componentDidMount() {
        const intervalId = setInterval(()=> {
            if(this.state.count > 0)
             this.setState({count: this.state.count-1});
            else 
              clearInterval(intervalId);
        },1000);
    }

    componentDidUpdate(prevProps,prevState) {
       console.log({currentState: this.state, prevState})
       console.log({currentProps : this.props, prevProps})
    }

    componentWillUnmount() {
        console.log("Component will unmount")
    }

    render() {
        return (
            <div>
               <p>Started from: {this.props.startFrom}</p>
               <p>Current Count: {this.state.count}</p> 
            </div>
        )
    }
}
export default CountDown;