import React, { useRef, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { getTimeZoneTime } from '../../utils/getTimeZoneTime';

const Watch = ({ id, zone, title, onDelete }) => {
  const [time, setTime] = useState(getTimeZoneTime(zone));
  const { hours, minutes, seconds } = time;
  const ref = useRef();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeZoneTime(zone));
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, [zone, id]);

  const onBtnDeleteClick = () => {
    const { id } = ref.current.dataset;
    onDelete(id);
  }

  return (
    <div ref={ref} className="clock" data-id={id}>
      <button className="clock__btn" onClick={onBtnDeleteClick}>X</button>
      <h2 className="clock__title">{title}</h2>
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

Watch.propTypes = {
  zone: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Watch
