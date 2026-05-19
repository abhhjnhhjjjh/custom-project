import React, { useState } from "react";
import "./App.css";

function App() {

  const [tickets, setTickets] = useState([
    {
      id: 1,
      customer: "Akshaya",
      status: "Open",
      agent: "Not Assigned"
    }
  ]);

  const [messages, setMessages] = useState([]);

  const [input, setInput] = useState("");

  

  const closeTicket = (id) => {

    const updatedTickets = tickets.map(ticket => {

      if (ticket.id === id) {

        return {
          ...ticket,
          status: "Closed"
        };
      }

      return ticket;
    });

    setTickets(updatedTickets);
  };

  
  const assignAgent = (id) => {

    const agentName = prompt("Enter Agent Name");

    const updatedTickets = tickets.map(ticket => {

      if (ticket.id === id) {

        return {
          ...ticket,
          agent: agentName
        };
      }

      return ticket;
    });

    setTickets(updatedTickets);
  };

  // Send chat message
  const sendMessage = () => {

    if (input.trim() === "") return;

    setMessages([
      ...messages,
      input
    ]);

    setInput("");
  };

  return (

    <div className="container">

      <h1>Live Customer Support Desk</h1>

      <h2>Tickets</h2>

      {
        tickets.map(ticket => (

          <div className="ticket" key={ticket.id}>

            <h3>Ticket #{ticket.id}</h3>

            <p>
              Customer: {ticket.customer}
            </p>

            <p>
              Status: {ticket.status}
            </p>

            <p>
              Agent: {ticket.agent}
            </p>

            <button
              onClick={() => closeTicket(ticket.id)}
            >
              Close Ticket
            </button>

            <button
              onClick={() => assignAgent(ticket.id)}
            >
              Assign Agent
            </button>

          </div>
        ))
      }

      <h2>Live Chat</h2>

      <div className="chatBox">

        {
          messages.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))
        }

      </div>

      <input
        type="text"
        placeholder="Type message"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={sendMessage}>
        Send
      </button>

    </div>
  );
}

export default App;