import React from 'react';
import SignOutButton from './SignOutButton';
import '../style/style.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }
    increment() {
        this.setState({ value: this.state.value + 1 });
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.increment(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    checkTime(time) {
        if (time.toString().length === 1) {
            return "0" + time;
        }
        return time;
    }

    render() {
        const value = new Date(this.state.value * 1000);
        return (
            <div className="ui container">
                <div className="ui center aligned container large header">Time Tracker</div>
                <div className="ui right aligned container">
                    <SignOutButton />
                </div>
                <div id="clock">
                    <div className="clock"></div>
                </div>
                <div className="ui center aligned container" >
                    <div class="ui huge message">
                        {`${value.getUTCHours()} Hours || ${value.getUTCMinutes()} Minutes || ${this.checkTime(value.getUTCSeconds())} Seconds`}
                    </div>
                </div>
            </div>
        )

    }
}


export default Home;


