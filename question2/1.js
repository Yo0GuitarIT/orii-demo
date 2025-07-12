const response = {
  status: "success",
  message: "",
  data: [
    {
      cityId: "4442",
      cityName: "Singapore",
      airports: [
        {
          airportId: "SIN",
          airportName: "Singapore Changi",
          longitude: 103.99,
          latitude: 1.35,
        },
        {
          airportId: "XSP",
          airportName: "Seletar Airport",
          longitude: 103.87,
          latitude: 1.42,
        },
      ],
    },
    {
      cityId: "4869",
      cityName: "Taipei",
      airports: [
        {
          airportId: "TPE",
          airportName: "Taiwan Taoyuan Intl",
          longitude: 121.232822,
          latitude: 25.077731,
        },
      ],
    },
  ],
};

// FP 工具函數
const pipe =
  (...fns) =>
  (value) =>
    fns.reduce((acc, fn) => fn(acc), value);

const validateResponse = (response) => {
  if (!response || response.status !== "success") {
    throw new Error("Invalid response");
  }
  return response.data;
};

const flattenAirports = (cities) =>
  cities.flatMap((city) =>
    city.airports.map((airport) => ({
      ...airport,
      cityName: city.cityName,
    }))
  );

const findAirport = (airportId) => (airports) =>
  airports.find((airport) => airport.airportId === airportId);

const extractCityName = (airport) => airport?.cityName || null;

// 融合查找函數
const getCityNameByAirportId = (response, airportId) => {
  try {
    return (
      pipe(
        validateResponse,
        flattenAirports,
        findAirport(airportId),
        extractCityName
      )(response) || "Not found"
    );
  } catch (e) {
    console.error(e.message);
    return "Not found";
  }
};

console.log(getCityNameByAirportId(response, "TPE"));
