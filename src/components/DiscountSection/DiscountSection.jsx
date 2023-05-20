import React, { useState, useEffect } from "react";
import { useInterval } from "react-use";
import classNames from "classnames";
import Swal from "sweetalert2";

//timer storage and functionalities
const DiscountSection = () => {
  const initialTimeRemaining = () => {
    const savedTimeRemaining = localStorage.getItem("timeRemaining");
    return savedTimeRemaining
      ? parseInt(savedTimeRemaining, 10)
      : 20 * 24 * 60 * 60;
  };

  const [timeRemaining, setTimeRemaining] = useState(initialTimeRemaining);

  useEffect(() => {
    localStorage.setItem("timeRemaining", timeRemaining.toString());
  }, [timeRemaining]);

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

  //just some normal alerts
  const handleShopNowClick = () => {
    if (timerExpired) {
      Swal.fire({
        title: "Offer Expired",
        text: "The discount offer has expired.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "A wise man said,",
        text: "Every discount is a scam!",
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "Agree",
        cancelButtonText: "Die",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Take my respect");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          let timerInterval;
          Swal.fire({
            title: "Bombing Alert!",
            html: "Bomb will blast in <b></b> milliseconds.",
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const b = Swal.getHtmlContainer().querySelector("b");
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft();
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
            }
          });
        }
      });
    }
  };

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
        <button
          className="bg-white text-green-700 font-bold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
          onClick={handleShopNowClick}
        >
          Claim Now
        </button>
      </div>
    </div>
  );
};

export default DiscountSection;
