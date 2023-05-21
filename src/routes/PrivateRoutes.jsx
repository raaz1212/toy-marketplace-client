import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../components/Provider/AuthProvider";
import Spinner from "../Spinner/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    if (loading) {
      setShowSpinner(true);
    } else {
      setShowSpinner(false); // Spinner won't stop without this
      if (!user) {
        const showAlert = () => {
          Swal.fire({
            title: "You have to log in first to view details",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const b = Swal.getHtmlContainer().querySelector("b");
              updateTimerText(b);
            },
            willClose: () => {
              console.log("SweetAlert closed");
              navigateToLogin();
            },
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log("I was closed by the timer");
              navigateToLogin();
            }
          });
        };

        showAlert();
      }
    }
  }, [user, loading, navigate]);

  const updateTimerText = (element) => {
    const timer = Swal.getTimerLeft();
    if (element && timer) {
      element.textContent = timer;
    }
  };

  const navigateToLogin = () => {
    navigate("/login", { state: { from: location } });
  };

  return showSpinner ? <Spinner /> : user ? children : null;
};

export default PrivateRoute;
