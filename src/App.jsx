import "./App.scss";
import team from "./data/team"
import TicketBox from "./components/TicketBox/TicketBox";

const App = () => {

  return (
    <div className="app font-link">
      <header className="greeting font-link">
        <h1 className="greeting__heading font-link">Ticket Tracker</h1>
      </header>
      
      <section className="main  font-link">
        <TicketBox teamArr={team}/>
      </section>
    </div>
  );
};

export default App;