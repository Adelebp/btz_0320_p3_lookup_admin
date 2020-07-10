import React, { useState } from "react";
import { toast } from "react-toastify";
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
import { useSelector } from "react-redux";

toast.configure();
const AddProductInfo = ({ onClick, uuid }) => {
  const notifySuccess = () => {
    toast.success("Informations bien ajoutés !", {
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

  const [productInfo, setProductInfo] = useState({});
  const { handleSubmit, register } = useForm();
  // const onSubmit = (values) => console.log(values);

  const toggle = () => setModal(!modal);

  const token = useSelector((state) => state.admin.token);

  const postProductInfo = async () => {
    try {
      await Axios.post(
        `https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/products_info/`,
        { ...productInfo, ProductUuid: uuid },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      notifySuccess();
    } catch (err) {
      console.log(err);
      notifyError();
    }
  };

  return (
    <Container>
      <Button color="danger" onClick={toggle}>
        Ajouter
      </Button>

      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Produits</ModalHeader>
        <Form onSubmit={handleSubmit(postProductInfo)}>
          <ModalBody>
            <Row>
              <Col lg="12">
                <label>Titre</label>
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="title"
                  onChange={(e) =>
                    setProductInfo({
                      ...productInfo,
                      title: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <label>
                  <h5>Description</h5>
                </label>
              </Col>
            </Row>
            <Row>
              <Col>
                <textarea
                  ref={register({ required: true })}
                  name="description"
                  type="text"
                  onChange={(e) =>
                    setProductInfo({
                      ...productInfo,
                      description: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <textarea
                  ref={register({ required: true })}
                  name="description2"
                  type="text"
                  onChange={(e) =>
                    setProductInfo({
                      ...productInfo,
                      description2: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <textarea
                  ref={register({ required: true })}
                  name="description3"
                  type="text"
                  onChange={(e) =>
                    setProductInfo({
                      ...productInfo,
                      description3: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>

            <Row>
              <Col lg="12">
                <label>
                  <h5>Image</h5>
                </label>
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="image"
                  onChange={(e) =>
                    setProductInfo({
                      ...productInfo,
                      picture: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="image2"
                  onChange={(e) =>
                    setProductInfo({
                      ...productInfo,
                      picture2: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="image3"
                  onChange={(e) =>
                    setProductInfo({
                      ...productInfo,
                      picture3: e.target.value,
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
    </Container>
  );
};

export default AddProductInfo;