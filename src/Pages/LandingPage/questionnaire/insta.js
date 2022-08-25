import React from "react";
import JCalendar from "reactjs-persian-calendar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useForm } from "react-hook-form";

const Insta = (props) => {

  return (
    <>
       <label>
            <input
                type="checkbox"
                name={props.name}
                value="تولید استوری اینستاگرام"
                onChange={ window.localStorage.setItem("post", JSON.stringify("تولید استوری اینستاگرام"))}
                checked
            />
            <span>
                {props.name}
            </span>
        </label>
    </>
  );
};

export default Insta;
