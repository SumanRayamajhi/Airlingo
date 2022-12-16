import Login from "../Login/Login";
import Logo from "./Logo/Vector.svg"
import A from "./Logo/A.svg"
import I from "./Logo/I.svg"
import R from "./Logo/R.svg"
import L from "./Logo/L.svg"
import N from "./Logo/N.svg"
import G from "./Logo/G.svg"
import O from "./Logo/O.svg"

import "./Home.css"

const Home = () => {
  return (
    <section >
      <div className="homepage_container">
          <img className="homepage_logo" src={Logo} />
          <div className="homepage_letters">
              <img src={A} />
              <img src={I} />
              <img src={R} />
              <img src={L} />
              <img src={I} />
              <img src={N} />
              <img src={G} />
              <img src={O} />
          </div>
      </div>
      
      <Login />
    </section>
  );
};

export default Home;
