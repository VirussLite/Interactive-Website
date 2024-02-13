import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center pt-10 px-14 fixed top-0 w-full bg-transparent z-[99]">
      <h3 className="bg-transparent text-[12px] font-[100] uppercase cursor-pointer relative overflow-hidden">
        Abhisek Jha
      </h3>
      <h3 className="bg-transparent text-[12px] font-[100] uppercase cursor-pointer relative overflow-hidden">
        Playwork
      </h3>
      <div className="flex flex-col gap-2 bg-transparent nav_social relative">
        <h3 className="bg-transparent text-[12px] font-[100] z-[5] uppercase cursor-pointer relative overflow-hidden">
          Socials
        </h3>
        <div className="absolute w-[12vw] nav_drop bg-neutral-950 rounded-[28px]">
          <ul className="uppercase text-[12px] pt-[58px] flex flex-col gap-3 relative">
            <li className="pb-2 px-6 cursor-pointer">Behance</li>
            <li className="pb-2 px-6 cursor-pointer">Twitter</li>
            <li className="pb-2 px-6 cursor-pointer">Instagram</li>
            <li className="pb-6 px-6 cursor-pointer">Dribble</li>
          </ul>
        </div>
      </div>
      <h3 className="bg-transparent text-[12px] font-[100] uppercase cursor-pointer relative overflow-hidden">
        Contact
      </h3>
    </nav>
  );
};

export default Navbar;
