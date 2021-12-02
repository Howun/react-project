import "./App.scss";
import team from "./data/team"
import TicketBox from "./components/TicketBox/TicketBox";
import CounterBox from "./components/CounterBox/CounterBox";

const App = () => {

  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Ticket Tracker</h1>
      </header>
      
      <section className="main">
        <TicketBox teamArr={team}/>
      </section>
    </div>
  );
};

export default App;