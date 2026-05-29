import type { IpData } from "../types/ip";

interface MapViewProps {
  ipData: IpData | null;
}

import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// addition
const RecenterMap = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {

  const map = useMap();

  map.setView([latitude, longitude], 13);

  return null;
};

// const MapView = () => {
const MapView = ({ ipData }: MapViewProps) => {
  const latitude = ipData?.location.lat || 51.505;
  const longitude = ipData?.location.lng || -0.09;
  return (
    <MapContainer
      // center={[51.505, -0.09]}
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={true}
      className="h-[calc(100vh-300px)] w-full z-0"
    >
{/* another addition - above tile layer */}
<RecenterMap
  latitude={latitude}
  longitude={longitude}
/>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* <Marker position={[51.505, -0.09]} /> */}
      <Marker position={[latitude, longitude]} />

    </MapContainer>
  );
};

export default MapView;