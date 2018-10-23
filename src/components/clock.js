import React, { Component } from 'react';

class TimerWrapper extends Component {
    constructor() {
        super();
        this.state = {
            time: 0,
            currentTime: '00:00:0',
            timerIsActive: false
        };
    }

    startTimer() {
        if(this.state.timerIsActive) return;
       this.timer(true, true);
    }

    stopTimer() {
        this.timer(false, true);
    }

    timer(start, fromOutside) {
        const { time, timerIsActive} = this.state;

        if(fromOutside && timerIsActive !== start) {
            this.setState({ timerIsActive: start})
        }

        if(!timerIsActive && !start) return;

        setTimeout(() => {
            const newTime = time + 1;
            let mins = Math.floor(newTime / 10 / 60);
            let secs = Math.floor(newTime / 10);
            let msecs = newTime % 10;

            if (mins < 10) mins = `0${mins}`;

            if (secs < 10) secs  = `0${secs}` ;

            this.setState({
                time: newTime,
                currentTime: `${mins}:${secs}:${msecs}`
            });

            this.timer(timerIsActive, false);
        }, 100)
    }

    resetTimer() {
        this.timer(false);
        this.setState({
            time: 0,
            currentTime: '00:00:0',
            timerIsActive: false
        })
    }

    render() {
        const { currentTime } = this.state;

        return <div>
            <h1>{currentTime}</h1>
            <Buttons name='start' onClick={() => this.startTimer()}/>
            <Buttons name='stop' onClick={() => this.stopTimer()}/>
            <Buttons name='reset' onClick={() => this.resetTimer()}/>
        </div>
    }
}

class Buttons extends Component {
    render() {
        return <button onClick={this.props.onClick}>{this.props.name}</button>
    }
}

export default TimerWrapper;
