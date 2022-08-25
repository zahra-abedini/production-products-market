import React from "react";
const iconPath =  "./Icon/"

function ServiceItems(props) {
    const {value, id, icon, handleOnchangeCheckBox} = props;
    const {innerWidth: width, innerHeight: heiight} = window;
    const logo = require(iconPath + icon + ".png");
    return (
        <label htmlFor={id}>
            <input
                type="checkbox"
                name={props.name}
                id={id}
                value={value}
                onChange={(event) => handleOnchangeCheckBox(event)}
                // {...register('service')}
            />
            <span>

                {/*<i*/}
                          {/*    className={` ${icon} icon ${*/}
                          {/*        width > 600 ? "large" : "big"*/}
                          {/*    } `}*/}
                          {/*></i>*/}
                <img className={"icon-service"} src={logo} />
                {props.value}
            </span>
        </label>
    );
}

export default ServiceItems;
