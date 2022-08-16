import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent } from "../../redux/actions/eventAction";

import EditEvenment from "./EditEvenment";

function CardUserEvent({ evenment }) {
  const dispatch = useDispatch();
  const handelDelete = () => {
    if (window.confirm("are you sure")) {
      dispatch(deleteEvent(evenment._id));
    }
  };

  return (
    <Card style={{ width: "20rem" }} className="CardPage">
      <Card.Img
        variant="top"
        src={
          evenment.imageUrl
            ? `upload/${evenment.imageUrl}`
            : "https://les-seminaires.eu/wp-content/uploads/2019/04/organisation-evenement-grand-public-735x400.jpg"
        }
      />
      <Card.Body>
        <Card.Title>{evenment.name_event}</Card.Title>
        <Card.Text>{evenment.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{evenment.date}</ListGroup.Item>
        <ListGroup.Item>{evenment.place}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>

        <Button onClick={handelDelete} variant="danger">
          {" "}
          Remove Event
        </Button>

        <EditEvenment event={evenment} />
      </Card.Body>
    </Card>
  );
}

export default CardUserEvent;
