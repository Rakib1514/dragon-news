import moment from "moment";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-2 pt-4">
      <div className="logo">
        <img src="https://i.ibb.co.com/4KNCk6b/logo.png" alt="Header log" className="w-[300px]"/>
      </div>
      <h3 className="text-gray-500">Journalism Without Fear or Favour</h3>
      <p>{moment().format('dddd, MMMM Do YYYY')}</p>
    </div>
  );
};

export default Header;