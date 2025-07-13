// 請寫出一段程式，找出 airportId 為 TPE 的 city，並印出它的 cityName

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

// 模擬一個 API 請求
const queryData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, 500);
  });
};

const pipe =
  (...fns) =>
  (value) =>
    fns.reduce((acc, fn) => fn(acc), value);

const validateResponse = (response) => {
  if (!response) {
    throw new Error("No response received");
  }
  if (response.status !== "success") {
    throw new Error(`API error: ${response.message || "Unknown error"}`);
  }
  if (!Array.isArray(response.data)) {
    throw new Error("Invalid data format");
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

/**
 * 根據機場ID查找對應的城市名稱
 * @param {string} airportId - 機場ID (如: "TPE")
 * @returns {Promise<string>} 城市名稱或 "Not found"
 */
const getCityNameByAirportId = async (airportId) => {
  if (!airportId || typeof airportId !== "string") {
    throw new Error("Airport ID must be a non-empty string");
  }

  try {
    const response = await queryData();
    return (
      pipe(
        validateResponse,
        flattenAirports,
        findAirport(airportId),
        extractCityName
      )(response) || "Not found"
    );
  } catch (error) {
    console.error(
      `Error finding city for airport ${airportId}:`,
      error.message
    );
    return "Not found";
  }
};

const main = async () => {
  const cityName = await getCityNameByAirportId("TPE");
  console.log(cityName);
};

main();
