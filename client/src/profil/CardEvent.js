import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
// import { deleteEvent } from "../redux/actions/eventAction";
// import EditEvenment from "./Profile/EditEvenment";

function CardEvent({ event }) {
  const dispatch = useDispatch();
  // const handelDelete = () => {
  //   if (window.confirm("are you sure")) {
  //     dispatch(deleteEvent(event._id));
  //   }
  // };

  return (
    <Card style={{ width: "20rem" }} className="CardPage">
      <Card.Img
        variant="top"
        src={
          event.imageUrl
            ? `upload/${event.imageUrl}`
            : "https://les-seminaires.eu/wp-content/uploads/2019/04/organisation-evenement-grand-public-735x400.jpg"
        }
      />
      <Card.Body>
        <Card.Title>Name: {event.name_event}</Card.Title>
        <Card.Text>description: {event.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>date: {event.date}</ListGroup.Item>
        <ListGroup.Item>palce: {event.place}</ListGroup.Item>
        {event.user_id?.name && (
          <ListGroup.Item>user name : {event.user_id?.name}</ListGroup.Item>
        )}
        {event.user_id?.tel && (
          <ListGroup.Item>user phone : {event.user_id?.tel}</ListGroup.Item>
        )}
      </ListGroup>
      <Card.Body>
        {/* <Button onClick={handelDelete} variant="danger">
          {" "}
          Remove Event
        </Button> */}

        {/* <EditEvenment event={event} /> */}
      </Card.Body>
    </Card>
  );
}

export default CardEvent;
