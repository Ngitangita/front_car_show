import { ChangeEvent, FormEvent, useState } from "react";
import { CarRequest } from "../../type/type";
import { useNavigate } from "react-router-dom";

export default function PostCar() {
  const navigate = useNavigate()
  const [cars, setCars] = useState<CarRequest>({
    name: "",
    description: "",
    brand: "",
    model: "",
    price: 0,
    color: "",
    motorType: "",
    power: 0,
    placeNumber: 0,
    status: "",
    type: "",
  })

  const[inputFile, setInputFile] = useState<File | null >(null)

  const onChangeData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCars((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCars((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCars((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const onSubmitData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const formData = new FormData();
      const data = {...cars, images:inputFile}
      for (const key in data) {
        const value = data[key as keyof typeof data];
        if (value instanceof File) {
            formData.append(key, value, value.name);
        } else {
            formData.append(key, String(value));
        }
    }

      const res = await fetch('http://localhost:8080/cars', {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        throw new Error("Failed to fetch car");
      }
      navigate("/listing")
    } catch (error) {
      console.error(error);
    }
  }

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>)=>{
    const selectedFile = e.target?.files?.[0]
    if (selectedFile) {
      setInputFile(selectedFile)
    }
  }

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <form className="w-5/6 flex flex-col justify-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmitData}>
        <div className='flex flex-row flex-wrap gap-5'>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name" id="name" type="text" placeholder="Name"
              onChange={onChangeData}
              value={cars.name}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="price" id="price" type="number" placeholder="Price"
              onChange={onChangeData}
              value={cars.price}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
              Brand
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="brand" id="brand" type="text" placeholder="Brand"
              onChange={onChangeData}
              value={cars.brand}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="model">
              Model
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="model" id="model" type="text" placeholder="Model"
              onChange={onChangeData}
              value={cars.model}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="color">
              Color
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="color" id="color" type="text" placeholder="Color"
              onChange={onChangeData}
              value={cars.color}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="motorType">
              Motor Type
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="motorType" id="motorType" type="text" placeholder="MotorType"
              onChange={onChangeData}
              value={cars.motorType}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="power">
              Power
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="power" id="power" type="number" placeholder="Power"
              onChange={onChangeData}
              value={cars.power}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="placeNumber">
              Place Number
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="placeNumber" id="placeNumber" type="number" placeholder="PlaceNumber"
              onChange={onChangeData}
              value={cars.placeNumber}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
              Status
            </label>
            <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="status" id="status"
            onChange={onChangeSelect}
            value={cars.status}>
              <option selected>AUCUNE</option>
              <option value="PINNED">PINNED</option>
              <option value="AVAILABLE">AVAILABLE</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
              Type
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="type" id="type" type="text" placeholder="Type"
              onChange={onChangeData}
              value={cars.type}
            />
          </div>
          <div className="mb-4 w-44">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">Choisir le fichier</label>
            <input className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            name="images" id='file' type="file" 
            onChange={onChangeFile}/>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea className="shadow appearance-none border rounded w-full h-52 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" name='description' placeholder="Description"
            onChange={onChangeDescription}
            value={cars.description}
          >
          </textarea>
        </div>
        <button className="w-28 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent rounded">
          Add car
        </button>
      </form>
    </div>
  )
}
