/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    console.log(coffee);
    const { _id, photo, name, category, supplier
    } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://coffe-store-server-5r7hi91uq-gisans-projects.vercel.app/coffee/${_id}`,{
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                              Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                              )
                              const remaining = coffees.filter(cof => cof._id !== _id );
                              setCoffees(remaining)
                        }
                    })
            }
        })

    }

    return (
        <div className="">
            <div>
                <div className="card bg-[#F5F4F1] card-side  shadow-xl">
                    <figure><img className="w-56" src={photo} alt="Movie" /></figure>
                    <div className="flex justify-between pr-6 w-full">
                        <div className="pl-12 space-y-5 pt-5">

                            <h2 className="card-title">{name}</h2>
                            <h2 className="card-title">{category}</h2>
                            <h2 className="card-title">{supplier}</h2>

                        </div>

                        <div className="pt-8">
                            <div className="btn-group btn-group-vertical space-y-5">

                                <button className="btn bg-[#D2B48C] text-white">view</button>
                             <Link to={`updateCoffee/${_id}`}>
                             <button className="btn bg-[#3C393B] text-white">edit</button>
                             </Link>
                                <button
                                    onClick={() => handleDelete(_id)}
                                    className="btn bg-[#EA4744] text-white  ">X</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;