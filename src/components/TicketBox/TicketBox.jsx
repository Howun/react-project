import React from "react";
import "./TicketBox.scss";
import CounterBox from "../CounterBox/CounterBox";

const TicketBox = (props) => {

  const {title, teamArr} = props;

  const employeeIDs = teamArr.map((team, index) => {
    return (
    <>
    <div key={title + index} className="team-info">
      <p className="teamName">Name: {team.name}</p>
      <p className="teamRole">Role: {team.role}</p>
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

export default TicketBox;