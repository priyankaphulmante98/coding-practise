import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IoFilterSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import Card from "./Card";
import style from "./card.module.css";

function EPage() {
  return (
    <>
      <div id={style.container}>
        {/* select div */}
        <div className={style.container_select}>
          <BsFillCheckCircleFill />

          <div className={style.filter_hide}>Select</div>
        </div>
        {/* filter and sorting */}
        <div className={style.container_filters}>
          <div>
            <IoFilterSharp />

            <div className={style.filter_hide}>Filter</div>
          </div>
          {/* search */}
          <div>
            <FaSearch />
            <div className={style.filter_hide}>Search</div>
          </div>
          {/* edit */}
          <div>
            <MdEdit />

            <div className={style.filter_hide}>Edit</div>
          </div>
          {/* delete */}
          <div>
            <RiDeleteBin6Line />
            <div className={style.filter_hide}>Delete</div>
          </div>
        </div>
        {/* menubars */}
        <div className={style.container_menudiv}>
          <div>
            <IoMdMenu fontSize="1.2rem" />
          </div>
          <div>
            <CgMenuGridR fontSize="1.2rem" />
          </div>
        </div>
      </div>
      <div>
        <Card />
      </div>
    </>
  );
}

export default EPage;
