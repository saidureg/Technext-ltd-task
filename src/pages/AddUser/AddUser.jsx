import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import BackButton from "../../components/BackButton";

const AddUser = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        image: data.image[0].name,
        address: {
          address: data.address,
          city: data.city,
        },
        company: {
          name: data.name,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          reset();
          Swal.fire({
            icon: "success",
            title: "Success",
            text: `New user is added id is ${data.id}!`,
            position: "center",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <BackButton />
      <h1 className="text-2xl md:text-5xl text-gray-700 uppercase my-10 font-bold">
        Add New User
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>

          <input
            type="text"
            id="firstName"
            placeholder="First name"
            {...register("firstName", { required: true, maxLength: 50 })}
          />
          {errors.firstName && (
            <span className="text-red-600">First name is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            placeholder="Last name"
            {...register("lastName", { required: true, maxLength: 50 })}
          />
          {errors.lastName && (
            <span className="text-red-600">Last name is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", { required: true, maxLength: 50 })}
          />
          {errors.email && (
            <span className="text-red-600">Email is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            placeholder="Enter Street & suite"
            {...register("address", { required: true, maxLength: 50 })}
          />
          {errors.address && (
            <span className="text-red-600">Address is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            placeholder="City"
            {...register("city", { required: true, maxLength: 100 })}
          />
          {errors.city && (
            <span className="text-red-600">City is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            placeholder="Company name"
            {...register("name", { required: true, maxLength: 200 })}
          />
          {errors.name && (
            <span className="text-red-600">Company name is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="avatar">Avatar Image:</label>
          <input
            type="file"
            id="avatar"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="text-red-600">Image is required</span>
          )}
        </div>
        <button className="py-2 px-2 mt-3 bg-gradient-to-r from-[#835D23] to-[#B58130] text-white rounded-lg">
          Add New User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
