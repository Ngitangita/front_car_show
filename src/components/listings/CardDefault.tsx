import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    CardHeader,
} from "@material-tailwind/react";
import { Fragment, useEffect, useState } from "react";
import { Car } from "../../type/type";
import { Link } from "react-router-dom";

type PaginateCar = {
    items: Car[]
}

export function CardDefault() {
    const [cars, setCars] = useState<PaginateCar>()
    const [data, setData] = useState<Car>()

    useEffect(() => {
        const getCars = async () => {
            try {
                const res = await fetch("http://localhost:8080/cars?page=1&perPage=43")
                const data = await res.json();
                console.log(data);

                setCars(data)
            } catch (error) {
                console.error(error);

            }
        }
        getCars()
    }, [])

    const [modal, setModal] = useState(false)

    const toggelModal = (id: number) => {
        const newData = cars?.items.find((car) => car.id == id);
        setData(newData)
        setModal(!modal)
    }


    return (
        <div className="flex flex-row gap-7 flex-wrap justify-center py-10">

            {
                cars?.items?.map((car: Car) => (
                    <Fragment key={car.id}>
                        <Card className="mt-6 w-96" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                            <CardHeader color="blue-gray" className="relative h-56" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                                <img
                                    src={car?.images?.[0]?.url || "https://via.placeholder.com/150"}
                                    alt="card-image"
                                    className="w-full h-full"
                                />
                            </CardHeader>
                            <CardBody placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                                <div>
                                    <Typography variant="h5" color="blue-gray" className="w-auto flex gap-7 mb-2" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                                        {car?.name}
                                        <span>Prix: {car?.price} Ar</span>
                                    </Typography>
                                    <Typography placeholder="" className="mb-2 w-auto flex gap-2" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                                        <span>{car?.brand}</span>
                                        <span>{car?.model}</span>
                                        <span>{car?.color}</span>
                                        <span>{car?.motorType}</span>
                                        <span>{car?.power}</span>
                                    </Typography>
                                    <Typography variant="h5" color="blue-gray" className="mb-2" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                                        {car?.status}
                                    </Typography>
                                    <Typography variant="h5" color="blue-gray" className="mb-2" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                                        {car?.type}
                                    </Typography>
                                </div>
                                <Typography placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                                    {car?.description} Ayant la nombre de place <span>{car?.placeNumber}</span> à l'interieur
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                                <Link to="/listing"><Button placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}
                                    onClick={() => toggelModal(car.id)}>Voir plus</Button></Link>
                            </CardFooter>
                        </Card>
                    </Fragment>
                ))
            }

            {
                modal && (
                    <div className="h-full w-screen fixed top-0 bg-opacity-50 bg-black flex justify-center items-center">
                        <div className=" w-5/6 h-4/6 flex flex-col bg-white items-end pl-5 pr-2 rounded">
                            <button className="h-auto w-16 flex justify-end text-center pr-5 font-bold size hover:bg-red-400 hover:text-white" onClick={() => setModal(!modal)}>X</button>
                            <div className="flex flex-row justify-center items-center  h-5/6 gap-2">
                                <div className="flex flex-col">
                                    <span>{data?.name}</span>
                                    <span>Price: {data?.price} AR</span>
                                    <span>{data?.brand}</span>
                                    <span>{data?.color}</span>
                                    <span>{data?.power}</span>
                                    <span>{data?.type}</span>
                                    <span>{data?.status}</span>
                                    <span>{data?.model}</span>
                                    <span>{data?.motorType}</span>
                                    <span>{data?.description}</span>
                                </div>
                                <div className="w-1/2 h-full">
                                    <img
                                        src={data?.images?.[0]?.url || "https://via.placeholder.com/150"}
                                        alt="card-image"
                                        className=" w-full h-full "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}