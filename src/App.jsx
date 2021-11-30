import "./App.scss";
import team from "./data/team"
import TicketBox from "./components/TicketBox/TicketBox";
import CounterBox from "./components/CounterBox/CounterBox";

const App = () => {
  console.log(team)
  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Ticket Tracker</h1>
      </header>
      <TicketBox teamId={team.id} teamName={team.name} teamRole={team.role}>
        <CounterBox/>
      </TicketBox>
    </div>
  );
};

export default App;