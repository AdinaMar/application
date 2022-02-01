import react from 'react';
import NavBar from '../NavBar';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Cards from '../cards/Cards';

const Home = () =>{
    return (
        
       <Cards title={title} image={image} description={description} date={date} />,
      <Cards title={title} image={image} description={description} date={date}/>,
      <Cards title={title} image={image} description={description} date={date}/>
    )
}

export default Home;
