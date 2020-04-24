import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
import Nav from "./components/Nav";
// import JumboTron from "./components/Nav";
import SearchPage from "./pages/SearchPage"
import SavedPage from "./pages/SavedPage"

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Route exact path="/" component={SearchPage}/>
        <Route exact path="/search" component={SearchPage}/>
        <Route exact path="/saved" component={SavedPage}/>
      </div>
      </Router>
  )
}

export default App;

{/* <Nav />
<Switch>
  <Route exact path={["/", "/books"]}>
    <Books />
  </Route>
  <Route exact path="/books/:id">
    <Detail />
  </Route>
  <Route>
    <NoMatch />
  </Route>
</Switch> */}

{/* <Route exact path="/" component={SearchPage}/>
        <Route exact path="/saved" component={SavedPage}/> */}