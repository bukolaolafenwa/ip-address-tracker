import type { IpData } from "../types/ip";

interface InfoCardProps {
  ipData: IpData | null;
}

// const InfoCard = () => {
const InfoCard = ({ ipData }: InfoCardProps) => {
  return (
    <section className='
  absolute
  left-1/2
  -translate-x-1/2
  top-[180px]
  md:top-[190px]
  z-20
  w-[90%]
  max-w-250
  bg-white
  rounded-2xl
  shadow-2xl
  justify-between
  items-stretch
  flex
  flex-col
  md:flex-row
  text-center
  md:text-left
  min-h-[200px]
  md:min-h-[220px]
  content-center
  pt-16 
  pb-16
  gap-6
  overflow-hidden
'
>
  

 {/* IP Address */}
    <div className='w-full md:w-[30%] px-6 pt-0 pb-0 text-center md:justify-center flex flex-col gap-2 mb-4 md:mb-0'>
        <h2 className='text-xs font-bold text-gray-400 tracking-[3px] mb-0 md:mb-4 uppercase'>
          IP Address
          </h2>
        <p className='text-[18px] md:text-[24px] font-bold text-gray-900 leading-tight break-words'>
          {ipData?.ip || "192.168.1.1"}
        </p>
    </div>

     <div className="w-full md:w-[25%] px-6 pt-0 pb-0 md:border-l border-gray-200 text-center justify-center flex flex-col gap-2">
        <h2 className='text-xs font-bold text-gray-400 tracking-[3px] mb-0 md:mb-4 uppercase'>
          location
        </h2>
        <p className='text-[18px] md:text-[24px] font-semibold text-neutral-900 leading-tight break-words'>
          {ipData
  ? `${ipData.location.city}, ${ipData.location.region}`
  : "Brooklyn, NY 10001"}
        </p>
    </div>

     <div className="w-full md:w-[25%] px-6 pt-0 pb-0 md:border-l border-gray-200 text-center justify-center flex flex-col gap-2">
        <h2 className='text-xs font-bold text-gray-400 tracking-[3px] mb-0 md:mb-4 uppercase'>
          timezone
        </h2>
        <p className='text-[18px] md:text-[24px] font-semibold text-gray-900 leading-tight break-words'>
          {ipData
        ? `UTC ${ipData.location.timezone}`
         : "UTC-05:00"}
        </p>
    </div>

     <div className="w-full md:w-[25%] px-6 pt-0 pb-0 md:border-l border-gray-200 text-center justify-center flex flex-col gap-2">
        <h2 className='text-xs font-bold text-gray-400 tracking-[3px] mb-0 md:mb-4'>
          ISP</h2>
        <p className='text-[18px] md:text-[24px]font-bold text-gray-900 leading-tight break-words'>
          {ipData?.isp || "SpaceX Starlink"}
        </p>
    </div>
    </section>
  );
}

export default InfoCard;