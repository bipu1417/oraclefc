
const Header = () => {
  return (
    <div className="shadow-lg bg-blue-800 justify-between flex bg-opacity-80 sticky top-0">
      <a href="/">
          <img className="w-20 h-14 p-0" alt="logo" src="https://i0.wp.com/centralfloridasoccer.com/wp-content/uploads/2017/05/Oracle-FC-Soccer_Design-01.png?w=492&ssl=1" />      
      </a>
      
      <div className="justify-between px-14 py-5 text-white text-lg">
      <a href="/">
        <span className="px-8">Home</span>
        </a>
        <a href="/tournament"><span className="px-8">Tournament</span></a>
        <span className="px-8">Fixtures</span>
        <span className="pl-8">About</span>
      </div>
      
    </div>
  );
};

export default Header;