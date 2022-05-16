import "./Navbar.css"
function Navbar() {
    const list = ['Services', 'Projects', 'About'];
  return (
    <>
      <div className="navbar">
        <div>
          <h5>LOGOBAKERY</h5>
        </div>
        <div className="links">
          <button href="#" className="">
            Services
          </button>
          <button href="#" className="">
            Projects
          </button>
          <button href="#" className="">
            About
          </button>
        </div>

        <button className="btn">Contact</button>
      </div>
    </>
  );
}

export default Navbar;
