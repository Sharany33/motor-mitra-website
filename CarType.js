import { useParams } from "react-router-dom";
import BsubCcontent from "./BsubCcontent";
import brands from "./brands.json";

function CarType() {
  const { brandName } = useParams();
  console.log("Brand Name from URL:", brandName); // Debugging step

  const selectedBrand = brands.brands.find(
    (brand) => brand.name.toLowerCase() === brandName.toLowerCase()
  );

  if (!selectedBrand) {
    return <div>Error: Brand '{brandName}' not found</div>;
  }

  return (
    <div >
      
   
        {selectedBrand?.car_types.map((car) => (
          <BsubCcontent
            key={car.title}
            Titles={car.title}
            Image={car.image}
            Next={car.next}
            link={car.link}
            Models={car.models}
          />
        ))}
      </div>
  
  );
}

export default CarType;