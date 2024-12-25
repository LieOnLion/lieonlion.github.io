import { Route, Router } from "@solidjs/router";

// Pages
import Home from "./pages/Home";

function App() {
  return (
    <>
      {/* <div className="flex justify-center items-center w-svw h-svh gap-5 bg-slate-900">
        <ButtonPrimary text="my projects" />
        <ButtonPrimary text="LieOnLion" />
        <ButtonSecondary text="more about me" />
        <ButtonSecondary text="other button" />
        <ButtonSecondary text="I will lead you to the abyss" />
      </div> */}
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </>
  )
}

export default App;