import Button from "../components/ui/button";

const Home = () => {
  return (
    <div className="flex justify-center items-center gap-3 w-svw min-h-svh">
      <Button>my projects</Button>
      <Button variant="outline">more about me</Button>
    </div>
  )
}

export default Home;