import React from "react";
import HeroImg from "./../../../assets/imgs/heroImg.svg";
import { HashLink } from 'react-router-hash-link';
function Hero() {
    return (
        <div className="hero">
            <div className="ui grid stackable middle aligned">
                <div className="eight wide column">
                    <div className="ui segment basic">
                        <h1 className="ui header "> خدمات محتوایی </h1>
                        <div className="ui mobileShow  ">
                            <img
                                className="ui fluid image "
                                src={HeroImg}
                                alt="img"
                            />
                        </div>
                        <p className="ui text-justify paraph">
                            x در تلاش است تا با ایجاد شبکه ای یکپارچه،
                            خدمات گوناگون محتوایی را به شما ارائه دهد.
                            در این صفحه نیز با رویکرد ساخت سکوی ثبت سفارش (های) محتوایی شما،
                            این امکان را فراهم آوردیم تا بتوانید نیاز(های) محتوایی خود را از لیست زیر به ما اعلام کنید.
                            تیم پشتیبانی x پس از بررسی اولیه،
                            با شما ارتباط برقرار می کند و تا پایان رفع این دغدغه محتوایی کنارتان خواهد بود.
                        </p>
                        <HashLink smooth to="/#formContainer"
                            className="ui animated fade huge button fluid defaul-btn cta"
                        >
                            <div className="visible content">ثبت سفارش
                            </div>
                            <div className="hidden content">
                                <i className="ui arrow left icon"></i>
                            </div>
                        </HashLink>
                    </div>
                </div>
                <div className="one wide column only desktop"></div>
                <div className="seven wide column desktop">
                    <img
                        className="ui fluid image desktopShow"
                        src={HeroImg}
                        alt="img"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
