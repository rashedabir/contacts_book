import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactList from "./screens/ContactList";
import CreateContact from "./screens/CreateContact";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact="true" path="/" component={ContactList} />
        <Route exact="true" path="/create" component={CreateContact} />
        <Route exact="true" path="/edit/:id" component={CreateContact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
