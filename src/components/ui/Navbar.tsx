import Image from "next/image";
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <nav
      {...props}
      className="w-2/4 px-3 flex items-center justify-between border-b border-solid border-gray-300"
    >
      <Image
        alt="logo todo"
        src="/images/logotodo.jpg"
        width="70"
        height="70"
      />
      <h2 className="text-gray-700 font-inter font-bold text-xl ">ToDo List</h2>
    </nav>
  );
};

export default Navbar;
