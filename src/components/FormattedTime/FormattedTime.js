

const FormattedTime = ({ time }) => {

  let miliseconds, seconds, minutes, hours;
  const getTime = (duration) => {
    miliseconds = Math.floor((duration % 1000) / 10);
    seconds = Math.floor((duration / 1000) % 60);
    minutes = Math.floor((duration / 60000));
    hours = Math.floor((duration / 360000));
    if (miliseconds < 10) {
      miliseconds = '0' + miliseconds;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (hours < 10) {
      hours = '0' + hours;
    }
  };
  getTime(time);

  return(
    <div>
        <p>{hours}:{minutes}:{seconds}.{miliseconds}</p>
    </div>
  );
};

export default FormattedTime;
