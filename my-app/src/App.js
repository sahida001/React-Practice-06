
import Card from './components/Card'
import Data from './data.json'
function App() {


  //<Card todoTitle = {Data[x].title}todoDesc = {Data[x].desc}/>



  return ( <div>
    <h1 className='headingStyle'>Mapping data into Components using ReactJS</h1>
    {Data.map ((item, index) => <Card key ={index} todoTitle = {item.title}todoDesc = {item.desc}/>)}
    
   
   
 </div>
  ); 
}

export default App;
