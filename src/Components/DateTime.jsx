import React, { useState, useEffect } from 'react';
import '../assets/stylesheets/clock.scss';

export default function DateTime () {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {setTime(new Date());}, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes().toString();
  const seconds = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds().toString();

  const options = { /*day: 'numeric' to avoid having 2 days, used to give 10th of 10 jan (Retarded),*/ month: 'long', year: 'numeric' };
  const formattedDate = time.toLocaleDateString('en-UK', options);
  // i can have two option variables so i can get specific strings, this gives month,year but i can let it only give month or year if i want to use span to style smth specific

  const formattedDay = (day) => {
    if (day >= 11 && day <= 13) { // this takes care of 11th 12th 13th, they dont follow rules like 21st 22nd 23rd, 1st 2nd 3rd..
      return `${day}th`;
    }

    switch (day % 10) {
      case 1:
        return `${day}st`;
      case 2:
        return `${day}nd`;
      case 3:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  };

  const day = time.getDate();
  const daySuffix = formattedDay(day);

  return (
    <div className='clock'>
      <h1>Today is the {daySuffix} of {formattedDate}</h1>
      <h3>It's Currently {hours}:{minutes}:{seconds}</h3>
    </div>
  );
};



