import React, { useState, useEffect } from "react";
import { useInterval } from "react-use";
import classNames from "classnames";

const DiscountSection = () => {
  const [timeRemaining, setTimeRemaining] = useState(20 * 24 * 60 * 60); // 20 days in seconds

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useInterval(() => {
    setTimeRemaining((prevTime) => prevTime - 1);
  }, 1000);

  const days = Math.floor(timeRemaining / (24 * 60 * 60));
  const hours = Math.floor((timeRemaining % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  const timerExpired = timeRemaining <= 0;

  return (
    <div className="bg-gradient-to-br from-green-200 to-sky-300 py-12 px-6 text-red-500 text-center">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">
          Hurry up and grab your{" "}
          <span className="text-5xl  text-blue-800 font-extrabold">10%</span>{" "}
          discount!
        </h2>
        <div
          className={classNames("text-2xl font-bold mb-6", {
            "animate-pulse": !timerExpired,
          })}
        >
          {timerExpired ? (
            <span>Offer expired!</span>
          ) : (
            <div className="flex items-center bg-slate-400 rounded-lg p-3 sm:p-8">
              <div className="flex flex-col items-center mx-2">
                <span className="font-bold text-xl sm:text-8xl">{days} :</span>
                <span className="text-xs sm:text-lg">Days</span>
              </div>
              <div className="flex flex-col items-center mx-2">
                <span className="font-bold text-xl sm:text-8xl">{hours} :</span>
                <span className="text-xs sm:text-lg">Hrs</span>
              </div>
              <div className="flex flex-col items-center mx-2">
                <span className="font-bold text-xl sm:text-8xl">
                  {minutes} :
                </span>
                <span className="text-xs sm:text-lg">Mins</span>
              </div>
              <div className="flex flex-col items-center mx-2">
                <span className="font-bold text-xl sm:text-8xl">{seconds}</span>
                <span className="text-xs sm:text-lg">Secs</span>
              </div>
            </div>
          )}
        </div>
        <button className="bg-white text-green-700 font-bold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default DiscountSection;
