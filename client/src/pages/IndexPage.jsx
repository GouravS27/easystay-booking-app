import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Image from "../Image";

export default function IndexPage() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces(response.data);
    });
  }, []);
  return (
    <div>
      <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {places.length > 0 &&
          places.map((place) => (
            <Link to={"/place/" + place._id} key={place._id}>
              <div className="bg-gray-500 mb-2 rounded-2xl flex">
                {place.photos?.[0] && (
                  <Image className="rounded-2xl object-cover aspect-square" src={place.photos?.[0]} alt=""/>
                )}
              </div>
              <h2 className="font-bold text-primary">{place.title}</h2>
              <h3 className="text-sm text-gray-500">{place.address}</h3>
              <div className="mt-1">
                <span className="font-bold">₹{place.price}</span> per night
              </div>
            </Link>
          ))}
      </div>
      <div className="flex bg-primary text-white mt-5 mb-2 p-2 rounded-2xl justify-center">
        <a
          href="https://drive.google.com/drive/folders/1fMWTtvRjpawjrtUrbhspZZpsES-UGoxc?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className="text-xl font-medium  hover:text-black"
        >
          Design By Gaurav Singh
        </a>
      </div>
    </div>
  );
}
