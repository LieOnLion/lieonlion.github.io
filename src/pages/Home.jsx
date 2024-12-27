import Button from "../components/ui/button";

const Home = () => {
  return (
    <div className="flex justify-center items-center gap-3 w-svw min-h-svh">
      <Button onClick={() => {console.log('hi');}}>my projects</Button>
      <Button href="/" styles={{variant: "outline"}}>more about me</Button>
    </div>
  )
}

export default Home;