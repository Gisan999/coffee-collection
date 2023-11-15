import { Link, useLoaderData } from 'react-router-dom';
import './App.css';
import CoffeeCard from './components/CoffeeCard/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  // console.log(loadedCoffees);

  return (
    <>
      <h1 className='text-3xl font-bold'>Coffee Store:{coffees.length}</h1>
      <Link to={'/addCoffee'}><button className='btn'>Add</button></Link>
      <Link to={'/signin'}><button className='btn'>Sign in</button></Link>
      <Link to={'/signup'}><button className='btn'>Sign up</button></Link>
      <Link to={'/users'}><button className='btn'>users</button></Link>
      <div className='max-w-screen-xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {
            coffees?.map(coffee => <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>)
          }
        </div>
      </div>
    </>
  )
}

export default App
