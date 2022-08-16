import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../redux/actions/eventAction";
import CardEvent from "./CardEvent";
import "./Card.css";

function LandPage({ name }) {
  const events = useSelector((state) => state.eventReducer.evenments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  return (
    <div>
      <div className="landpage">
        {events
          .filter((event) =>
            event.name_event.toLowerCase().includes(name.toLowerCase().trim())
          )
          .map((event) => {
            return (
              <div className="cards">
                <CardEvent event={event} key={event._id} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default LandPage;
