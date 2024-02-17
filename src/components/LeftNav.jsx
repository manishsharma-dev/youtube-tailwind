import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../context/contextApi";
import { categories } from "../utils/constants";
import LeftNavMenuItem from "./LeftNavMenuItem";

const LeftNav = () => {
  const { selectedCategory, setSelectedCategory } = useContext(Context);
  const navigate = useNavigate();
  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        setSelectedCategory(name);
        break;
      case "home":
        setSelectedCategory(name);
        break;
      default:
        return false;
    }
  }

  return (
    <div className="md:block w-[240px] overflow-y-auto 
    h-full py-4 bg-black absolute md:relative z-10 
    translate-x-[-240px] md:translate-x-0 transition-all">
      <div className="flex px-5 flex-col">
        {categories.length > 0 && categories.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <LeftNavMenuItem text={item.type === 'home' ? 'Home' : item.name}
                icon={item.icon}

                id={item.id}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={item.name === selectedCategory ? 'bg-white/[0.5]' : ""} />
              {item.divider && (
                <hr className="my-5 border-white/[0.2]" />
              )}
            </React.Fragment>
          )
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">
          Clone by  : Manish
        </div>
      </div>
    </div>
  )
}

export default LeftNav
