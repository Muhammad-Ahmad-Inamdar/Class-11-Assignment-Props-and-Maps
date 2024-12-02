import CarLayout from "./Carlayouts";

const CarDetails = () => {
  const CarData = [
    {
      CarImg: "/city.jpg",
      CarName: "City",
      CarPrice: "3500000 PKR",
      CarReview: "4.5/5.0",
    },
    {
      CarImg: "/civic.jpg",
      CarName: "Civic",
      CarPrice: "4500000 PKR",
      CarReview: "4.8/5.0",
    },
    {
      CarImg: "/corolla.jpg",
      CarName: "Corolla",
      CarPrice: "5000000 PKR",
      CarReview: "5.0/5.0",
    },
    {
      CarImg: "/suzuki.png",
      CarName: "Suzuki",
      CarPrice: "2200000 PKR",
      CarReview: "4.0/5.0",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl p-6">
      <h1 className="text-center text-white font-bold text-3xl mb-8">
        Car Details
      </h1>
      {/* Parent container with blue border */}
      <div className="border-4 border-blue-500 p-6 rounded-lg">
        {/* Flex container for responsive layout */}
        <div className="flex flex-wrap gap-8 justify-center">
          {CarData.map((car, index) => (
            <div
              key={index}
              className="w-full sm:w-[90%] md:w-[45%] lg:w-[22%] bg-gray-100 rounded-lg"
            >
              <CarLayout
                CarImg={car.CarImg}
                CarName={car.CarName}
                CarPrice={car.CarPrice}
                CarReview={car.CarReview}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
