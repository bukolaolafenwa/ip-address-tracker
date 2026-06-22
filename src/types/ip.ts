export interface IpData {
  ip: string;
  isp: string;

  location: {
    city: string;
    region: string;
    timezone: string;
    lat: number;
    lng: number;
  };
}