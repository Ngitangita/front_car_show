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


    return (
        <div className="flex flex-row gap-7 flex-wrap justify-center py-10">

            {
                cars?.items?.map((car: Car) => (
                    <Fragment key={car.id}>
                        <Card className="mt-6 w-96" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                            <CardHeader color="blue-gray" className="relative h-56" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                                <img
                                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                    alt="card-image"
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
                                <Link to="/listing"><Button placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>Voir plus</Button></Link>
                            </CardFooter>
                        </Card>
                    </Fragment>
                ))
            }

        </div>
    );
}