const NavLinkHeader = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative py-10 px-2 group text-black hover:text-purple-400 transition-all duration-700"
    >
      <span>{text}</span>
      <span className="absolute bottom-0 left-0 block h-1 w-full scale-x-0 group-hover:scale-x-100 group-hover:bg-purple-400 transition-all duration-700"></span>
    </button>
  );
};

export default NavLinkHeader;
