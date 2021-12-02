import React from "react";
import "./TicketBox.scss";
import CounterBox from "../CounterBox/CounterBox";

const TicketBox = (props) => {

  const {title, teamArr} = props;

  const employeeIDs = teamArr.map((team, index) => {
    return (
    <>
    <div key={title + index} className="team-info">
      <h3 className="teamName">{team.name}</h3>
      <h3 className="teamRole">{team.role}</h3>
      <CounterBox/>
    </div>
    </>
    )
  })

  return (
    <section className="ticketBox">
      <div className="employeeID">
        {employeeIDs}       
      </div>
    </section>
  )
};

export default TicketBox