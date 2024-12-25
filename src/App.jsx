import ButtonPrimary from "./components/ui/ButtonPrimary"
import ButtonSecondary from "./components/ui/ButtonSecondary"

function App() {
  return (
    <>
      <div className="flex justify-center items-center w-svw h-svh gap-5 bg-slate-900">
        <ButtonPrimary text="my projects" />
        <ButtonPrimary text="LieOnLion" />
        <ButtonSecondary text="more about me" />
        <ButtonSecondary text="other button" />
        <ButtonSecondary text="I will lead you to the abyss" />
      </div>
    </>
  )
}

export default App;