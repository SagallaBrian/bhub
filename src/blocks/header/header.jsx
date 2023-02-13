import MiDropdown from "../../helpers/dropdown";
import bhub from "../../assets/bhub.png";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const myLang = [
  { name: "English (United Kingdom)" },
  { name: "English (United States)" },
  { name: "Spanish (Espanol Spain)" },
];

const Header = ({ title }) => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex mb-3 items-center">
          <div className="grow">
            <img src={bhub} alt="" className=" w-16" />
          </div>
          <div className="">
            <MiDropdown mydata={myLang} />
          </div>
        </div>
      </div>
      <div className="bg-bhblue py-3 text-slate-100 text-sm">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex space-x-6">
              <NavLink to="about">
                {({ isActive }) => (
                  <span className={isActive ? "activeClassName" : undefined}>
                    About
                  </span>
                )}
              </NavLink>
              <NavLink to="news">
                {({ isActive }) => (
                  <span className={isActive ? "activeClassName" : undefined}>
                    News
                  </span>
                )}
              </NavLink>
              <NavLink to="about">
                {({ isActive }) => (
                  <span className={isActive ? "activeClassName" : undefined}>
                    Petition
                  </span>
                )}
              </NavLink>
              <NavLink to="organize">
                {({ isActive }) => (
                  <span className={isActive ? "activeClassName" : undefined}>
                    Let's Organize
                  </span>
                )}
              </NavLink>
              <NavLink to="volunteer">
                {({ isActive }) => (
                  <span className={isActive ? "activeClassName" : undefined}>
                    Volunteer
                  </span>
                )}
              </NavLink>
              <NavLink to="blog">
                {({ isActive }) => (
                  <span className={isActive ? "activeClassName" : undefined}>
                    Blog
                  </span>
                )}
              </NavLink>
            </div>
            <div className="flex space-x-6 items-center">
              <FaSearch />

              <NavLink to="about">
                {({ isActive }) => (
                  <span className={isActive ? "activeClassName" : undefined}>
                    Join / Login
                  </span>
                )}
              </NavLink>

              <NavLink to="about">
                {({ isActive }) => (
                  <span className={isActive ? "activeClassName" : undefined}>
                    Start A Petition
                  </span>
                )}
              </NavLink>

              <NavLink to="donate">
                {({ isActive }) => (
                  <span className={isActive ? "activeClassName" : undefined}>
                    Donate
                  </span>
                )}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
