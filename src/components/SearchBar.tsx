import { useState } from "react";
import arrow from "../assets/images/icon-arrow.svg"

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {

  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query.trim()) return;

    onSearch(query);
  };

  return (
   <section className="px-6 py-20 mt-6">
 <div className="mx-auto max-w-[18rem] md:max-w-4xl text-center">

  {/* FORM */}
 <form
      onSubmit={handleSubmit}
     className="flex mt-7">

{/* INPUT */}
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      className="mx-auto w-[500px] h-10 md:h-12 text-[18px] px-10 py-4 font-light md:font-normal text-[16px] md:text-[25px] outline-none bg-white text-gray-900 placeholder:text-gray-400 placeholder:text-sm md:placeholder:text-lg cursor-pointer border-none rounded-l-xl"
      />

{/* BUTTON */}
      <button
      type="submit"
      className="
     bg-black
      w-16
      h-10
      md:h-12
     hover:bg-neutral-800
      transition
      cursor-pointer
      flex
      items-center
      justify-center
      border-none
      rounded-r-xl
      "
      >
        <img
          src={arrow}
          alt="arrow icon"
          className="w-[11px]"
        />
      </button>

    </form>
 </div>
  
   </section>
  );
};

export default SearchBar;