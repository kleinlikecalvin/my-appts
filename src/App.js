import "./App.css";
import Head from "./components/Head";
import Nav from "./components/Nav";
import Button from "./components/Button";
import Appointments from "./components/Appointments";

export default function App() {
  return (
    <div className="App">
      <Head />
      <Nav />
      <div className="appts">
        <h1>My Appointments</h1>
        <div className="apptsTypeCont">
          <Button>Upcoming Appointments</Button>
          <Button>Past Appointments</Button>
        </div>
        <Appointments />
      </div>
    </div>
  );
}
