import React from "react";
import PropTypes from 'prop-types';

export default class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.zone = this.props.zone;
    this.state = this.getTimeZoneTime();
    this.title = this.props.title;
    this.deg = 6;
    this.interval = null;
    this.id = this.props.id;
    this.onDelete = this.props.onDelete;
  }

  static propTypes = {
    zone: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState(this.getTimeZoneTime(this.zone)), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getTimeZoneTime(zone) {
    const day = new Date();
    const hours = (day.getUTCHours() + +zone) * 30;
    const minutes = day.getUTCMinutes() * this.deg;
    const seconds = day.getUTCSeconds() * this.deg;
    return { hours, minutes, seconds };
  }

  render() {
    const { hours, minutes, seconds } = this.state;
    return (
      <div className="clock">
        <button className="clock__btn" onClick={() => this.onDelete(this.id)}>X</button>
        <h2 className="clock__title">{this.title}</h2>
        <div className="clock__dial">
          <div className="clock__hour">
            <div className="hours"
              style={{ transform: `rotateZ(${hours + (minutes / 12)}deg)` }}>
            </div>
          </div>
          <div className="clock__minute">
            <div className="minutes"
              style={{ transform: `rotateZ(${minutes}deg)` }}
            ></div>
          </div>
          <div className="clock__second">
            <div className="seconds"
              style={{ transform: `rotateZ(${seconds}deg)` }}></div>
          </div>
        </div>
      </div>
    )
  }
}