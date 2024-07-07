import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/Navbar";
import { cn } from "../../utils/cn.js";
import PropTypes from "prop-types";

export const Navbar = ({ className, onMenuItemClick }) => {
  const [active, setActive] = useState(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 bg-transparent", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home" >
          <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink onClick={() => onMenuItemClick("Home")}>Home</HoveredLink>
            <HoveredLink href="https://github.com/SahilKadge">Git Hub</HoveredLink>
            <HoveredLink href="https://www.linkedin.com/in/sahil-kadge-7100332b8/">LinkedIn</HoveredLink>
            <HoveredLink href="https://drive.google.com/file/d/1CFwwf9kB-WMQ_msKJAaPeAX2ImoaXp2j/view?usp=drive_link">Resume</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects" >
          <div className="text-sm grid grid-cols-2 h-50 w-80 p-4">
          <HoveredLink onClick={() => onMenuItemClick("Projects")}>View All</HoveredLink>
            <ProductItem
              title="Trend X (shopping website)"
              href="https://trendxshopping.netlify.app"
            />
            <ProductItem
              title="ASR For Doctors"
              href="https://github.com/SahilKadge/Fine-tune-whisper-model.git"
            />
            <ProductItem
              title="SkimLit"
              href="https://github.com/SahilKadge/skimlit.git"
            />
            <ProductItem
              title="Food Prediction"
              href="https://github.com/SahilKadge/Food-recognition-using-Tensorflow.git"
            />
            <ProductItem
              title="Basketball shot prediction"
              href="https://github.com/SahilKadge/Basket-ball-shot-prediction.git"
            />
            <ProductItem
              title="Admin Dashboard"
              href="https://admin-dashboard-for-societymanagement.netlify.app/"
            />
            <ProductItem
              title="Ping Pong game using hand gesture"
              href="https://tailwindmasterkit.com"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink onClick={() => onMenuItemClick("Contact")}>Contact</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  onMenuItemClick: PropTypes.func,
};
