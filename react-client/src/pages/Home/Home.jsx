import Carousel from "../../components/Carousel/Carousel";
import News from "../../components/News/News";
import { countries } from "../../components/Carousel/Data";
import Countdown from "../../components/Countdown/Countdown";
import { useState, useEffect } from "react";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";

function Home() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  const [post, setPost] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let interval;

  const startTimer = () => {
    const countdownDate = new Date("November 11,2022").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countdownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  useEffect(() => {
    axios.get("http://localhost:3000/post").then((response) => {
      let temp = [];

      for (let i = 0; i < response.data.length; i++) {
        temp.push(response.data[i]);
      }

      setPost(temp);
    });
  }, []);

  if (!post) {
    return (
      <div
        style={{ height: "100vh", width: "100vw" }}
        className="mt-5 pt-5 d-flex justify-content-center align-items-center"
      >
        <PulseLoader color="#36d7b7" size={21} speedMultiplier={0.5} />
      </div>
    );
  }

  return (
    <div className="container-fliud mt-5 pt-5">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <Carousel images={post} />
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="d-flex justify-content-center">
            <Countdown
              timerDays={timerDays}
              timerHours={timerHours}
              timerMinutes={timerMinutes}
              timerSeconds={timerSeconds}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <News />
      </div>
      {/* <div className="d-flex justify-content-center flex-wrap">
        <div className="d-flex justify-content-center">
          <Carousel images={post} />
        </div>

        <div className="d-flex justify-content-center">
          <Countdown
            timerDays={timerDays}
            timerHours={timerHours}
            timerMinutes={timerMinutes}
            timerSeconds={timerSeconds}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center container">
       
      </div> */}
    </div>
  );
}

export default Home;
