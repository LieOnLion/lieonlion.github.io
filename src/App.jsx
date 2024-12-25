import ButtonPrimary from "./components/ui/ButtonPrimary"
import ButtonSecondary from "./components/ui/ButtonSecondary"

function App() {
  return (
    <>
      <div className="flex justify-center items-center w-svw h-svh gap-5 bg-slate-900">
        <ButtonPrimary text="my projects" />
        <ButtonSecondary text="more about me" />
      </div>
    </>
  )
}

export default App
