export const fetchIPData = async (query?: string) => {
  const endpoint = query
    ? `https://free.freeipapi.com/api/json/${query}`
    : `https://free.freeipapi.com/api/json`;

  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error("Failed to fetch IP data");
  }

  const data = await response.json();

  return {
    ip: data.ipAddress,
    isp: data.asnOrganization,

    location: {
      city: data.cityName,
      region: data.regionName,
      timezone:
    data.timeZones?.[0]
    ?.replace("/", " / ")
    ?.replace("_", " ") || "N/A",
      lat: data.latitude,
      lng: data.longitude,
    },
  };
};