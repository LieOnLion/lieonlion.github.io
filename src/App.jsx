import { Route, Router } from "@solidjs/router";

// Pages
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </>
  )
}

export default App;