import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}
let data=imageData();

function App() {

  // code here
  let galleryStyle={
    textAlign:"center"
  }
  let styleMydiv={
    display:"grid",
    gridTemplateColumns:"repeat(2,1fr)",
    placeItems:"Center",
    gap:"100px"
  }
  return(
    <>
    <h1 style={galleryStyle}>Kalvium Gallery</h1>
    {/* <div style={styleMydiv}>
      <img src={data[0].img} alt="" width={"400px"}/>
      <img src={data[1].img} alt="" width={"400px"}/>
      <img src={data[2].img} alt="" width={"400px"}/>
      <img src={data[3].img} alt="" width={"400px"}/>
    </div> */}


    <div style={styleMydiv}>
      {data.map((el)=>(
        <div key={el.id}>
        <img src={el.img} width={"400px"} alt="" />
      </div>
      ))}
    </div>
    </>
  )
}

export default App;
