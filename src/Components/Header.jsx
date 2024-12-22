import profile from "../../images/profile.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center m-4 p-4 border-b-2">
      <h1 className="text-2xl md:text-4xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="Profile" />
    </header>
  );
};

export default Header;
