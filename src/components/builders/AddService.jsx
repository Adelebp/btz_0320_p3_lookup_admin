import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import {
  Form,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Row,
  Col,
} from "reactstrap";
import Axios from "axios";

toast.configure();
const AddService = ({ onClick }) => {
  const notifySuccess = () => {
    toast.success("Service bien ajouté !", {
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
    toast.error("Erreur Notification !", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const [modal, setModal] = useState(false);

  const [services, setService] = useState({});
  const { handleSubmit, register } = useForm();
  // const onSubmit = (values) => console.log(values);

  const toggle = () => setModal(!modal);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwODAzMjkyLWE4YTgtNGVlYy04OTViLTliODlmYzk1OWY0ZiIsImVtYWlsIjoiYW50aG9uaW42NEBsb29rdXAuZnIiLCJpYXQiOjE1OTQyMjQwMDgsImV4cCI6MTU5NDIyNzYwOH0.JjSegdHiJ_53PL3hdBk5fgv7beHulG_0ux4KdpiLgeY";

  const postService = async () => {
    try {
      await Axios.post(
        `https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/services/`,
        services,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      notifySuccess();
    } catch (err) {
      notifyError();
      console.log(err);
    }
  };

  return (
    <Container>
      <Button color="danger" onClick={toggle}>
        Ajouter
      </Button>

      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Conferences</ModalHeader>
        <Form onSubmit={handleSubmit(postService)}>
          <ModalBody>
            <Row>
              <Col lg="12">
                <label>Titre </label>
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="title"
                  onChange={(e) =>
                    setService({
                      ...services,
                      title: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <label>Subject</label>
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  ref={register({ required: true })}
                  name="description"
                  type="text"
                  onChange={(e) =>
                    setService({
                      ...services,
                      description: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <label> Image</label>
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="image"
                  onChange={(e) =>
                    setService({
                      ...services,
                      logo: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={onClick}>
              Valider
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Annuler
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
};

export default AddService;
