import "./listItem.scss";
import { useState } from "react";
import {
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
  Add,
} from "@material-ui/icons";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false); //slider daki videoların üstüne imleç ile gelince büyüyecek imleci çekince default kalacak bu state bunu tutuyor
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis quia quidem, eum ut velit voluptate?
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
