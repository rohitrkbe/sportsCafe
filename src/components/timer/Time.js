import React, { useState, useEffect } from 'react';
import moment from 'moment'

const TimeLabel = ( prop ) => {
  const [time, setTime] = useState(prop.time);

  useEffect(()=>{
    let fromTime = new Date(time);
    let toTime = new Date();
    let differenceTravel = toTime.getTime() - fromTime.getTime();
    let seconds = Math.floor((differenceTravel) / (1000));
    let newTime = moment().startOf('day').seconds(15457).format('H:mm:ss');
    setTime(newTime);
  }, []);

  return (
      <>
        {time} left
      </>
  );
}

export default TimeLabel;
