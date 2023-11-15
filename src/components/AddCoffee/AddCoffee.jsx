
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee);


        fetch('https://coffe-store-server-5r7hi91uq-gisans-projects.vercel.app/coffee',{
            method:"POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Coffee added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

            }
        })
    }

    return (
        <div className="bg-[#F4F3F0]">
            <Link to={'/'}><button className='btn'>Home</button></Link>

            <h2 className="text-4xl text-center font-bold pt-8">add a coffee</h2>
            <div className="max-w-screen-xl mx-auto flex justify-center bg-sky-50">
                <form onSubmit={handleAddCoffee}>
                    {/* row */}
                    <div className="md:flex justify-center gap-12 mt-12">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <label className="input-group">
                                <span>Name</span>
                                <input type="text" name="name" placeholder="Coffee Name" id=""
                                    className="input input-bordered pr-20" />
                            </label>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <span>Name</span>
                                <input type="text" name="quantity" placeholder="Available Quantity" id=""
                                    className="input input-bordered pr-20" />
                            </label>

                        </div>
                    </div>
                    {/* row */}
                    <div className="md:flex justify-center gap-12 mt-12">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Supplier Name</span>
                            </label>
                            <label className="input-group">
                                <span>Name</span>
                                <input type="text" name="supplier" placeholder="Enter coffee supplier" id=""
                                    className="input input-bordered pr-20" />
                            </label>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group">
                                <span>Name</span>
                                <input type="text" name="taste" placeholder="Enter coffee taste" id=""
                                    className="input input-bordered pr-20" />
                            </label>

                        </div>
                    </div>
                    {/* row */}
                    <div className="md:flex justify-center gap-12 mt-12">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <span>Name</span>
                                <input type="text" name="category" placeholder="Enter coffee category" id=""
                                    className="input input-bordered pr-20" />
                            </label>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <span>Name</span>
                                <input type="text" name="details" placeholder="Enter coffee details" id=""
                                    className="input input-bordered pr-20" />
                            </label>

                        </div>
                    </div>
                    {/* row */}
                    <div className="md:flex justify-center gap-12 mt-12 ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <label className="input-group">
                                <span>Name</span>
                                <input type="text" name="photo" placeholder="Enter photo URL" id=""
                                    className="input input-bordered pr-20 md:pr-[485px]" />
                            </label>

                        </div>

                    </div>
                    <input type="submit" value="Add Coffee" className="btn btn-block my-8 bg-[#D2B48C] border-2 border-black" />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;