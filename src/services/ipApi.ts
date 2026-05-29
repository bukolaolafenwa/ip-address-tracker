const API_KEY = "at_iYj5QOne7PzpEAZjnyZYjINa3eDil";

export const fetchIPData = async (query = "") => {

  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${query}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch IP data");
  }

  return response.json();
};