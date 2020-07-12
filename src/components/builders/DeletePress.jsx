import React from "react";
import { Button, Col } from "reactstrap";
import Axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { logout } from "../../store/actionCreators";

export default function DeletePress({ uuid, getPress }) {
  const token = useSelector((state) => state.admin.token);
  const dispatch = useDispatch();

  const notifySuccess = () => {
    toast.success("Relation Presse supprimée!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const notifyError = () => {
    toast.error("Erreur !", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const deletePress = async () => {
    try {
      await Axios.delete(
        `https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/press/${uuid}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getPress();
      notifySuccess();
    } catch (error) {
      notifyError();
      dispatch(logout());
    }
  };
  return (
    <Col>
      <Button color="danger" onClick={deletePress}>
        Supprimer
      </Button>
    </Col>
  );
}
