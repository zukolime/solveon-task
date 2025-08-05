import PropTypes from "prop-types";
import useCountdown from "../hooks/useCountdown";
import getDayWord from "../utils/getDayWord";

import "../styles/promo-panel.scss";

const CountdownTimer = ({ targetDate }) => {
  const timeLeft = useCountdown(targetDate);
  const dayNumber = parseInt(timeLeft.days, 10);
  const dayWord = getDayWord(dayNumber);

  return (
    <div className="countdown-timer">
      <span className="countdown-timer__part">{timeLeft.days}</span> {dayWord} <span className="countdown-timer__part">{timeLeft.hours}</span>:
      <span className="countdown-timer__part">{timeLeft.minutes}</span>:<span className="countdown-timer__part">{timeLeft.seconds}</span>
    </div>
  );
};

CountdownTimer.propTypes = {
  targetDate: PropTypes.string.isRequired,
};

export default CountdownTimer;
