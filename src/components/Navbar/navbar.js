import "../Navbar/navbar.scss";
import { useState } from "react";
import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false); //6-10. satırlar arasına yazılan state sayfanın scroll olması halinde navbarın background color ını siyah yapıyor scroll değilse default değeri tutuyor
  //14. satırda className e eğer scroll yapıldıysa navbar scrolled classının özelliklerini getir scroll yapılmadıysa navbar çalıştır dedik

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2060px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://yt3.ggpht.com/yti/APfAmoEnibvIY_iHqlbB-x7mdgZlhwvgtY5dLefRbYW93w=s88-c-k-c0x00ffffff-no-rj-mo"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Log Out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
