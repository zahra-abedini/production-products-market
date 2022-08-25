import React, {useContext} from "react";
import { useToasts } from "react-toast-notifications";
import ServiceItems from "./ServiceItems";
import { useForm } from "react-hook-form";
import { sendEmail, welcomeMessage } from "../../../Services/services";
import icon from "./Icon/brochure.png";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { ActionMeta, OnChangeValue } from 'react-select';
import ServiceOption from './servicesOption';

const NotifMessage =
  "اطلاعات به درستی ارسال شد :)";
const arryIcon = [
  "motion",
  "translate",
  "translate2",
  "podcast",
  "socialmedia",
  "instagramstory",
  "infography",
  "presentation",
  "officeset",
  "logodesign",
  "catalog",
  "editing",
  "poster",
  "dubbing",
  "logomotion",
  "visitcard",
  "type",
  "brochure",
  "header",
  "audiobook",
];
const arryItem = [
  "موشن گرافیک",
  "ترجمه از",
  "ترجمه به",
  "پادکست",
  "تولید پست شبکه های اجتماعی",
  "تولید استوری اینستاگرام",
  "طراحی اینفوگرافیک",
  "تولید فایل ارائه (پرزنت)",
  "طراحی ست اداری",
  "طراحی لوگو",
  "طراحی کاتالوگ",
  "ویراستاری",
  "طراحی پوستر",
  "دوبله",
  "لوگو موشن",
  "طراحی کارت ویزیت",
  "تایپ",
  "طراحی بروشور",
  "طراحی سربرگ",
  "تولید کتاب صوتی",
];

const animatedComponents = makeAnimated();

const options = [
  { key : 1, value: "موشن گرافیک", label:  <div className="lable-img"><img className="icon-select" src={require("./Icon/motion.png")} />موشن گرافیک</div>},
  { key : 2, value: "ترجمه", label: <div className="lable-img"><img className="icon-select" src={require("./Icon/translate.png")} />ترجمه</div> },
  { key : 4, value: "پادکست", label: <div className="lable-img"><img className="icon-select" src={require("./Icon/podcast.png")} />پادکست</div>},
  { key : 5, value: "تولید پست شبکه های اجتماعی", label: <div className="lable-img"><img className="icon-select" src={require("./Icon/socialmedia.png")} />تولید پست شبکه های اجتماعی</div> },
  { key : 6, value: "تولید استوری اینستاگرام", label: <div className="lable-img"><img className="icon-select" src={require("./Icon/instagramstory.png")} />تولید استوری اینستاگرام</div> },
  { key : 7, value: "طراحی اینفوگرافیک", label: <div className="lable-img"><img className="icon-select" src={require("./Icon/infography.png")} />طراحی اینفوگرافیک</div> },
  { key : 9, value: "طراحی ست اداری", label: <div className="lable-img"><img className="icon-select" src={require("./Icon/officeset.png")} />طراحی ست اداری</div> },
  { key : 10, value: "طراحی لوگو", label: <div className="lable-img"><img className="icon-select" src={require("./Icon/logodesign.png")} />طراحی لوگو</div> },
  { key : 11, value: "طراحی کاتالوگ", label: <div className="lable-img"><img className="icon-select" src={require("./Icon/catalog.png")} />طراحی کاتالوگ</div> },
  { key : 12, value: "ویراستاری", label: <div className="lable-img"><img className="icon-select" src={require("./Icon/editing.png")} />ویراستاری</div> },
  { key : 13, value: "طراحی پوستر", label: <div className="lable-img"><img className="icon-select" src={require("./Icon/poster.png")} />طراحی پوستر</div> },
  { key : 14, value: "دوبله", label: <div className="lable-img"><img className="icon-select" src={require("./Icon/dubbing.png")} />دوبله</div> },
  { key : 15, value: "لوگو موشن", label: <div className="lable-img"><img className="icon-select" src={require("./Icon/logomotion.png")} />لوگو موشن</div> },
  { key : 16, value: "طراحی کارت ویزیت", label: <div className="lable-img"><img className="icon-select" src={require("./Icon/visitcard.png")} />طراحی کارت ویزیت</div> },
  { key : 17, value: "تایپ", label: <div className="lable-img"><img className="icon-select" src={require("./Icon/type.png")} />تایپ</div> },
  { key : 18, value: "طراحی بروشور", label: <div className="lable-img"><img className="icon-select" src={require("./Icon/brochure.png")} />طراحی بروشور</div> },
  { key : 19, value: "طراحی سربرگ", label: <div className="lable-img"><img className="icon-select" src={require("./Icon/header.png")} />طراحی سربرگ</div> },
  { key : 20, value: "تولید فایل ارائه (پرزنت)", label: <div className="lable-img"><img className="icon-select" src={require("./Icon/presentation.png")} />تولید فایل ارائه (پرزنت)</div> },
];
//  set api post address
const url = "";

function FormSelf() {
  const { addToast } = useToasts();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      services: {
        type:{},
        translate:{},
        podcast:{},
        insta:{},
        post:{},
        logo:{},
        businesscard:{},
        poster:{},
        header:{},
        motion:{},
        infographic:{},
        brochure:{},
        editing:{},
        voice:{},
        officeset:{},
        catalog:{},
        logomotion:{},
        present:{},
      }
    },
  });

  const [valueselect, setValueselect] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [err, setErr] = React.useState("لطفا پرسشنامه را تکمیل کنید.");
  const [isErr, setIsErr] = React.useState(false);
  
  const handleChange = (value, event) => {
    setValueselect(value);
    const id = event.target.id;
    const values = getValues("services");
    if (values.includes(+id)) {
      setValue(
        "services",
        values.filter((item) => +item !== +id)
      );
    } else {
      let item = arryItem[+id];

      setValue("services", [...values, item]);
    }
  };

  let acc;
  acc = valueselect.map((item, index) => {
    return (
    <ServiceOption
      index = {item.key}
      id={index}
      name = {item.label}
    />
    )
})

  return (
    <>
      <form
        className="ui form"
        id="formServices"
        onSubmit={handleSubmit((data) => {
          if(JSON.parse(window.localStorage.getItem('type')) != null || JSON.parse(window.localStorage.getItem('translate')) != null || JSON.parse(window.localStorage.getItem('podcast')) != null || JSON.parse(window.localStorage.getItem('insta')) != null
          || JSON.parse(window.localStorage.getItem('post')) != null || JSON.parse(window.localStorage.getItem('logo')) != null || JSON.parse(window.localStorage.getItem('businesscard')) != null || JSON.parse(window.localStorage.getItem('poster')) != null
          || JSON.parse(window.localStorage.getItem('header')) != null || JSON.parse(window.localStorage.getItem('motion')) != null || JSON.parse(window.localStorage.getItem('infographic')) != null || JSON.parse(window.localStorage.getItem('brochure')) != null
          || JSON.parse(window.localStorage.getItem('editing')) != null || JSON.parse(window.localStorage.getItem('voice')) != null || JSON.parse(window.localStorage.getItem('officeset')) != null || JSON.parse(window.localStorage.getItem('catalog')) != null
          || JSON.parse(window.localStorage.getItem('logomotion')) != null || JSON.parse(window.localStorage.getItem('present')) != null ){
            console.log("submit form", data);
          setValue("services.type", JSON.parse(window.localStorage.getItem('type')))
          setValue("services.translate", JSON.parse(window.localStorage.getItem('translate')))
          setValue("services.podcast", JSON.parse(window.localStorage.getItem('podcast')))
          setValue("services.insta", JSON.parse(window.localStorage.getItem('insta')))
          setValue("services.post", JSON.parse(window.localStorage.getItem('post')))
          setValue("services.logo", JSON.parse(window.localStorage.getItem('logo')))
          setValue("services.businesscard", JSON.parse(window.localStorage.getItem('businesscard')))
          setValue("services.poster", JSON.parse(window.localStorage.getItem('poster')))
          setValue("services.header", JSON.parse(window.localStorage.getItem('header')))
          setValue("services.motion", JSON.parse(window.localStorage.getItem('motion')))
          setValue("services.infographic", JSON.parse(window.localStorage.getItem('infographic')))
          setValue("services.brochure", JSON.parse(window.localStorage.getItem('brochure')))
          setValue("services.editing", JSON.parse(window.localStorage.getItem('editing')))
          setValue("services.voice", JSON.parse(window.localStorage.getItem('voice')))
          setValue("services.officeset", JSON.parse(window.localStorage.getItem('officeset')))
          setValue("services.catalog", JSON.parse(window.localStorage.getItem('catalog')))
          setValue("services.logomotion", JSON.parse(window.localStorage.getItem('logomotion')))
          setValue("services.present", JSON.parse(window.localStorage.getItem('present')))


          sendEmail(data);
          welcomeMessage({
            phoneNumber: data.phoneNumber,
            message: data.fullName,
          });
          // fetch(`${url}`, {
          //     method: "POST",
          //     headers: {
          //         Accept: "application/json, text/plain, */*",
          //         "Content-Type": "application/json",
          //     },
          //     body: JSON.stringify(data),
          // })
          //     .then((res) => res.json())
          //     .then((res) => console.log(res));

          localStorage.clear()
          setIsErr(false);
          addToast(NotifMessage, {
            appearance: "success",
            autoDismiss: true,
          });
          }else{
            setIsErr(true);
          }
        })}
      >
        <div className="equal width fields">
          <div className="field ">
            <div className="ui left icon input ">
              <i className="user outline icon"></i>
              <input
                type="text"
                name="fullName"
                placeholder="نام کامل خود را وارد کنید ..."
                {...register("fullName", {
                  required: "نیاز است که نام خود را وارد کنید",
                  minLength: {
                    value: 5,
                    message: "نام شما باید بیشتر از 5 کاراکتر باشد",
                  },
                })}
              />
            </div>
            {errors.fullName ? (
              <div className="ui errorStyle right aligned">
                <p> {errors.fullName.message} </p>
              </div>
            ) : null}
          </div>
          <div className="field">
            <div className="ui left icon input">
              <i className="phone icon"></i>
              <input
                className="inputStyle"
                type="number"
                name="phoneNumber"
                placeholder="شماره همراه خود را وارد کنید ..."
                {...register("phoneNumber", {
                  required: "نیاز است شماره همراه خود را وارد کنید",
                  minLength: {
                    value: 11,
                    message: "شماره تماس باید 11 رقم باشد",
                  },
                })}
              />
            </div>
            {errors.phoneNumber ? (
              <div className="ui errorStyle right aligned">
                <p> {errors.phoneNumber.message} </p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="equal width fields">
          <div className="field">
            <div className="ui left icon input">
              <i className="at icon"></i>
              <input
                className="inputStyle"
                type="text"
                name="email"
                placeholder="ایمیل  خود را وارد کنید ..."
                {...register("email", {
                  required: "نیاز است که ایمیل خود را وارد کنید",
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "الگوی ایمیل وارد صحیحی معتبر نیست",
                  },
                })}
              />
            </div>
            {errors.email ? (
              <div className="ui errorStyle right aligned">
                <p> {errors.email.message} </p>
              </div>
            ) : null}
          </div>

          <div className="field">
            <div className="ui left icon input">
              <i className="id-card icon"></i>
              <input
                className="inputStyle"
                type="text"
                name="sellerID"
                placeholder="کد بازاریاب را وارد کنید (اختیاری) ..."
                {...register("sellerID", {})}
              />
            </div>
          </div>
        </div>
        <div className="background-select">
        <div className="equal fields">
          <div className="field selected">
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={options}
                value={valueselect}
                placeholder = "لیست خدمات مورد نظر"
                onChange={handleChange}
              />
          </div>
        </div>
            {acc}
        </div>
        {/* <div className="field">
                    <div className="checkBoxContainer">
                        <div className="headerBox">
                            <span> لیست خدمات مورد نظر </span>
                            <i className="setting  icon"></i>
                        </div>
                        <div className="ui three columnd doubling grid">
                            {arryItem.map((item, index) => (
                                <div className="column" key={index}>
                                    <ServiceItems
                                        key={index}
                                        id={index}
                                        icon={arryIcon[index]}
                                        name="servicecs"
                                        value={item}
                                        handleOnchangeCheckBox={
                                            handleOnchangeCheckBox
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}

        <div className="ui basic degment center align">
        {isErr ? <p className="err-paragraph1">{err}</p> : null}
          <button
            className="ui animated fade button  big submit-btn defaul-btn"
            type="submit"
            form="formServices"
          >
            <div className="visible content">ارسال فرم در خواست</div>
            <div className="hidden content">
              <i className="setting icon"></i>{" "}
            </div>
          </button>
        </div>
      </form>
    </>
  );
}

export default FormSelf;
