import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import ModalLookup from "./lookup";

const BaseCardLookup = ({
  uuid,
  companyName,
  streetName,
  postalCode,
  city,
  email,
  phone,
  siret,
}) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{companyName}</CardTitle>
          <CardSubtitle>email: {email}</CardSubtitle>
          <CardText>
            adresse: {streetNumber} {streetName}, {city} {postalCode}
          </CardText>
          <ModalLookup
            uuid={uuid}
            title={titre}
            description={descriptif}
            link={link}
            picture={picture}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardLookup;
