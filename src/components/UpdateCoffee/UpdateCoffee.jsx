import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData();

    const { _id, photo, name, details, taste, quantity, category, supplier
    } = coffee;

    const handleUpdateCoffee = event => {
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
        console.log(quantity);


        fetch(`https://coffe-store-server-5r7hi91uq-gisans-projects.vercel.app/coffee/${_id}`,{
            method:"PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'success!',
                    text: 'Coffee updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

            }
        })
    }

    return (
        <div className="bg-[#F4F3F0]">
        <Link to={'/'}><button className='btn'>Home</button></Link>

        <h2 className="text-4xl text-center font-bold pt-8">Update coffee : {name}</h2>
        <div className="max-w-screen-xl mx-auto flex justify-center bg-sky-50">
            <form onSubmit={handleUpdateCoffee}>
                {/* row */}
                <div className="md:flex justify-center gap-12 mt-12">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="name" placeholder="Coffee  Name" defaultValue={name} id=""
                                className="input input-bordered pr-20" />
                        </label>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="quantity"
                            defaultValue={quantity} placeholder="Available Quantity"  id=""
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
                            <input type="text" name="supplier" 
                            defaultValue={supplier}
                            placeholder="Enter coffee supplier" id=""
                                className="input input-bordered pr-20" />
                        </label>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="taste" placeholder="Enter coffee taste"
                            defaultValue={taste}
                            id=""
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
                            <input type="text" name="category" 
                            defaultValue={category}
                            placeholder="Enter coffee category" id=""
                                className="input input-bordered pr-20" />
                        </label>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="details" 
                            defaultValue={details}
                            placeholder="Enter coffee details" id=""
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
                            <input type="text" name="photo" placeholder="Enter photo URL"
                            defaultValue={photo}
                            id=""
                                className="input input-bordered pr-20 md:pr-[485px]" />
                        </label>

                    </div>

                </div>
                <input type="submit" value="Update Coffee" className="btn btn-block my-8 bg-[#D2B48C] border-2 border-black" />
            </form>
        </div>
    </div>
    );
};

export default UpdateCoffee;