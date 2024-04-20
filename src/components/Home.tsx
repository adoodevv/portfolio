import Header from './Header'

const Home = () => {
  return (
    <div className=" relative h-screen bg-cover bg-center" style={{backgroundImage: "url('src/assets/space.jpg')"}}>
      <Header/>
      <div className="h-full bg-black bg-opacity-50 flex items-center justify-start pl-20">
        <div className="text-white">
          <h1 className="text-6xl font-bold">ADOO Jonathan</h1>
          <p className="text-2xl">A short description of me</p>
        </div>
      </div>
    </div>
  )
}

export default Home