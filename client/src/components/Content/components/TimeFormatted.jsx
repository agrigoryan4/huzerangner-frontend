import React from 'react';
import moment from 'moment';
import momentLocalization from 'moment/locale/hy-am';


const TimeFormatted = ({ timeStamp, relative }) => {

  const getTimeFormatted = (timeStamp) => {
    moment.locale('hy-am');
    const time = moment(timeStamp);
    const formatted = relative ? time.fromNow() : time.format('LL');
    return formatted;
  }

  return (
    <span>
      {getTimeFormatted(timeStamp, relative)}
    </span>
  );
};

export default TimeFormatted;
