import React from "react";
import JCalendar from "reactjs-persian-calendar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useForm } from "react-hook-form";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { ActionMeta, OnChangeValue } from "react-select";

const Poster = () => {
  const [count, setCount] = React.useState(0);
  const [color, setColor] = useColor("hex", "#121212");
  const [typeInput, setTypeInput] = React.useState({
    a3: false,
    a2: false,
    a1: false,
    other: false,
    education: false,
    notices: false,
    publicity: false,
    culture: false,
    science: false,
    othersubject: false,
    children: false,
    teenager: false,
    adults: false,
    otherm: false,
    single: false,
    interview: false,
    roundtable: false,
    hybrid: false,
    othertype: false,
    timeout: false,
  });
  const [typeFont, setTypeFont] = React.useState({
    font: "",
  });
  const [typeData, setTypeData] = React.useState([]);
  const [audience, setAudience] = React.useState([]);
  const [typeSize, setSize] = React.useState({});
  const [desfile, setDesfile] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [baseImage, setBaseImage] = React.useState("");
  const [baseallimage, setAllimage] = React.useState("");
  const [baseSample, setBaseSample] = React.useState([]);
  const [fileName, setFilename] = React.useState("");
  const [baseLogo, setBaseLogo] = React.useState("");
  const [basepodcast, setBasepodcast] = React.useState("");
  const [podName, setPodname] = React.useState("");
  const [allName, setAllname] = React.useState("");
  const [sampleName, setSamplename] = React.useState([]);
  const [effect, setEffect] = React.useState([]);
  const [logoName, setLogoname] = React.useState("");
  const [date, setDate] = React.useState({});
  const [isErr, setIsErr] = React.useState(false);
  const [err, setErr] = React.useState("");
  const [language, setLanguage] = React.useState({});
  const [valueselect, setValueselect] = React.useState([]);
  const [typedel, setTypeDel] = React.useState({});

  const handleChange = (value, event) => {
    setValueselect(value);
  };

  const uploadImage = async (e) => {
    setFilename(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const [basemotion, setBasemotion] = React.useState("");
  const [motionName, setmotionname] = React.useState("");

  const uploadmotion = async (e) => {
    setmotionname(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBasemotion(base64);
  };

  const [motion, setMotion] = React.useState(false);
  let showmotion;
  const scenariochange = (e) => {
    setMotion(!motion);
  };
  if (motion == true) {
    showmotion = (
      <>
        <h3>لوگو خود را آپلود کنید.</h3>
        <div className="field" style={{ width: "100%" }}>
          <label className="file-label">
            <i className="cloud download icon"></i>
            <p>فایل خود را انتخاب کنید</p>
            <div className="upload-btn">آپلود</div>
            <input
              type="file"
              className="form-control"
              name="podcast-file"
              accept=".jpg, .jpeg, .png, .pdf,.doc,.docx, .psd, .zip"
              onChange={(e) => {
                uploadmotion(e);
              }}
            />
          </label>
        </div>
      </>
    );
  }

  const [basetext, setBasetext] = React.useState("");
  const [textName, settextname] = React.useState("");

  const uploadtext = async (e) => {
    settextname(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBasetext(base64);
  };

  const [text, setText] = React.useState(false);
  let showtext;
  const texttochange = (e) => {
    setText(!text);
  };
  if (text == true) {
    showtext = (
      <>
        <h3>متن خود را آپلود کنید.</h3>
        <div className="field" style={{ width: "100%" }}>
          <label className="file-label">
            <i className="cloud download icon"></i>
            <p>فایل خود را انتخاب کنید</p>
            <div className="upload-btn">آپلود</div>
            <input
              type="file"
              className="form-control"
              name="podcast-file"
              accept=".jpg, .jpeg, .png, .pdf,.doc,.docx, .psd, .zip"
              onChange={(e) => {
                uploadtext(e);
              }}
            />
          </label>
        </div>
      </>
    );
  }

  const uploadpodcast = async (e) => {
    setPodname(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBasepodcast(base64);
  };
  const uploadSample = async (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      let name = sampleName.push(e.target.files[i].name);
      const file = e.target.files[i];
      baseSample.push(await convertBase64(file));
      setEffect(name);
    }
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  let showpallet;
  const [pallet, setPallet] = React.useState(false);
  const handlepallet = (e) => {
    setPallet(!pallet);
  };
  if (pallet == true) {
    showpallet = (
      <>
        <h3>رنگ مورد نظر خود را از پالت رنگی انتخاب کنید.</h3>
        <div className="picker-style">
          <ColorPicker
            width={465}
            height={220}
            color={color}
            onChange={setColor}
            alpha
            light
          />
        </div>
      </>
    );
  }

  const animatedComponents = makeAnimated();

  const options = [
    { key: 1, value: "آموزشی", label: "آموزشی" },
    { key: 2, value: "تبلیغات", label: "تبلیغات" },
    { key: 3, value: "فرهنگ سازی", label: "فرهنگ سازی" },
    { key: 4, value: "ترویج علم", label: "ترویج علم" },
    { key: 5, value: "اطلاع رسانی", label: "اطلاع رسانی" },
    { key: 6, value: "سایر", label: "سایر" },
  ];

  let sjt;

  const [scttext, setStjText] = React.useState("");
  const sctTextchange = (e) => {
    setStjText(e.target.value);
  };

  for (let [key, value] of Object.entries(valueselect)) {
    if (value.value == "سایر") {
      sjt = (
        <input
          dir="rtl"
          type="text"
          name="subject-time-tr"
          style={{ marginTop: "20px" }}
          value={scttext}
          onChange={sctTextchange}
          placeholder="موضوع خود را بنویسید ."
        />
      );
    }
  }

  const [lantext, setLanName] = React.useState("");
  const lanTextchange = (e) => {
    setLanName(e.target.value);
  };
  let otherlan;
  if (language == "سایر") {
    otherlan = (
      <input
        dir="rtl"
        type="text"
        name="subject-time-tr"
        style={{ marginTop: "20px" }}
        value={lantext}
        onChange={lanTextchange}
        placeholder="زبان مورد نظر خود را بنویسید"
      />
    );
  }

  const radiochangel = (e) => {
    setLanguage(e.target.value);
  };
  const checkboxchange = (e) => {
    if (e.target.value == "کودکان") {
      setTypeInput({ ...typeInput, children: e.target.checked });
      if (e.target.checked == true) {
        audience.push({ [e.target.name]: e.target.value });
      } else {
        setAudience(
          audience.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    } else if (e.target.value == "نوجوانان") {
      setTypeInput({ ...typeInput, teenager: e.target.checked });
      if (e.target.checked == true) {
        audience.push({ [e.target.name]: e.target.value });
      } else {
        setAudience(
          audience.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    } else if (e.target.value == "بزرگسالان") {
      setTypeInput({ ...typeInput, adults: e.target.checked });
      if (e.target.checked == true) {
        audience.push({ [e.target.name]: e.target.value });
      } else {
        setAudience(
          audience.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    } else if (e.target.value == "سایر") {
      setTypeInput({ ...typeInput, otherm: e.target.checked });
      if (e.target.checked == true) {
        audience.push({ [e.target.name]: e.target.value });
      } else {
        setAudience(
          audience.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    }
  };

  const [textaudience, setTextaudience] = React.useState("");
  const sctTextaudchange = (e) => {
    setTextaudience(e.target.value);
  };

  let linkaudience;

  let find = audience.filter((element) => Object.values(element) == "سایر");
  if (find.length != 0) {
    linkaudience = (
      <input
        dir="rtl"
        type="text"
        name="subject-time-tr"
        style={{ marginTop: "20px" }}
        value={textaudience}
        onChange={sctTextaudchange}
        placeholder="مخاطبان خود را بنویسید."
      />
    );
  }

  const [selectt, setSelectt] = React.useState([]);

  const optionskind = [
    { key: 1, value: "کاغذ تحریر", label: "کاغذ تحریر" },
    { key: 2, value: "کاغذ گلاسه مات و براق", label: "کاغذ گلاسه مات و براق" },
    { key: 3, value: "کاغذ روزنامه", label: "کاغذ روزنامه" },
    { key: 4, value: "کاغذ خودکپی", label: "کاغذ خودکپی" },
    { key: 5, value: "کاغذ کرافت", label: "کاغذ کرافت" },
  ];

  const selecttchange = (value, e) => {
    setSelectt(value);
  };

  const [selecttec, setSelecttec] = React.useState([]);

  const optionstec = [
    { key: 1, value: "چاپ افست", label: "چاپ افست" },
    { key: 2, value: "چاپ سنگی", label: "چاپ سنگی" },
    { key: 3, value: "چاپ جوهرافشان", label: "چاپ جوهرافشان" },
    { key: 4, value: "چاپ لیزری", label: "چاپ لیزری" },
  ];

  const selecttecchange = (value, e) => {
    setSelecttec(value);
  };

  let highlighshow;
  const [highlighttext, setHighlighttext] = React.useState("");

  const handlehighlight = (e) => {
    setHighlighttext(e.target.value);
  };
  const [highlight, setHighlight] = React.useState(false);
  const highlightchange = (e) => {
    setHighlight(!highlight);
  };

  if (highlight == true) {
    highlighshow = (
      <input
        dir="rtl"
        type="text"
        name="subject-time-tr"
        style={{ marginTop: "20px" }}
        value={highlighttext}
        onChange={handlehighlight}
        placeholder="قسمتی را که می خواهید برجسته باشد بنویسید."
      />
    );
  }

  const deliverychange = (e) => {
    setTypeDel(e.target.value);
  };

  const descriptionchange = (e) => {
    setDescription(e.target.value);
  };

  let showtime;
  const [timec, setTimec] = React.useState(false);
  const handleTime = (e) => {
    setTimec(!timec);
  };
  if (timec == true) {
    showtime = (
      <>
        <h3>چه زمانی مدنظرتون هست؟</h3>
        <div className="equal width fields" dir="rtl">
          <div className="field" style={{ width: "70%" }}>
            <textarea
              dir="rtl"
              type="text"
              name="subject-time-tr"
              className="field-style"
              value={description}
              onChange={descriptionchange}
              placeholder="توضیحات خود را اینجا بنویسید"
            />
          </div>
          <div className="field" style={{ width: "35%" }}>
            <JCalendar
              locale={"fa"}
              color={"#2734ff"}
              value={date}
              size={30}
              onClick={setDate}
              itemRender={(key, item, children) => children}
            />
          </div>
        </div>
      </>
    );
  }

  const desfilechange = (e) => {
    setDesfile(e.target.value);
  };
  const components = [
    <div>
      <h3>
        {count + 1} - لوگویی که میخواهید در پوستر استفاده کنید را آپلود کنید یا
        می توانید از وبسایت
        <a href="#">ط</a> سفارش دهید.
      </h3>
      <div className="field" style={{ width: "100%" }}>
        <label className="file-label">
          <i className="cloud download icon"></i>
          <p>فایل خود را انتخاب کنید</p>
          <div className="upload-btn">آپلود</div>
          <input
            type="file"
            className="form-control"
            name="podcast-file"
            accept=".jpg, .jpeg, .png, .pdf,.doc,.docx, .psd"
            onChange={(e) => {
              uploadpodcast(e);
            }}
          />
        </label>
      </div>
      {Object.keys(basepodcast).length != 0 ? (
        <p className="save-alert">فایل شما با نام "{podName}" ذخیره شد.</p>
      ) : null}
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <div
        className="equal width fields"
        dir="rtl"
        style={{ alignItems: "center" }}
      >
        <div className="field " style={{ width: "80%" }}>
          <h3>{count + 1}- رنگ خاصی برای طراحی مدنظرتون هست؟</h3>
        </div>
        <div
          className="field "
          style={{ width: "20%", display: "flex", alignItems: "center" }}
        >
          <FormControlLabel
            value="scenario"
            control={<Switch color="primary" />}
            label=""
            onChange={handlepallet}
            checked={pallet}
          />
          <p style={{ marginRight: "10px" }}>بله دارم</p>
        </div>
      </div>
      {showpallet}
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <div
        className="equal width fields"
        dir="rtl"
        style={{ alignItems: "center" }}
      >
        <div className="field " style={{ width: "80%" }}>
          <h3>
            {count + 1}- آیا تصویر خاصی برای اینفوگرافیک خود در نظر دارید ؟
          </h3>
        </div>
        <div
          className="field "
          style={{ width: "20%", display: "flex", alignItems: "center" }}
        >
          <FormControlLabel
            value="logo"
            control={<Switch color="primary" />}
            label=""
            onChange={scenariochange}
            checked={motion}
          />
          <p style={{ marginRight: "10px" }}>بله داریم</p>
        </div>
      </div>
      {showmotion}
      {Object.keys(basemotion).length != 0 ? (
        <p className="save-alert">فایل شما با نام "{motionName}" ذخیره شد.</p>
      ) : null}
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <div
        className="equal width fields"
        dir="rtl"
        style={{ alignItems: "center" }}
      >
        <div className="field " style={{ width: "80%" }}>
          <h3>{count + 1}- برای اینفوگرافیک خود متنی در نظر دارید ؟</h3>
        </div>
        <div
          className="field "
          style={{ width: "20%", display: "flex", alignItems: "center" }}
        >
          <FormControlLabel
            value="logo"
            control={<Switch color="primary" />}
            label=""
            onChange={texttochange}
            checked={text}
          />
          <p style={{ marginRight: "10px" }}>بله داریم</p>
        </div>
      </div>
      {showtext}
      {Object.keys(basetext).length != 0 ? (
        <p className="save-alert">فایل شما با نام "{textName}" ذخیره شد.</p>
      ) : null}
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- زبان مد نظر خود را برای طراحی انتخاب کنید.</h3>
      <div className="ui three columnd doubling grid top-grid">
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبان مد نظر خود را برای طراحی انتخاب کنید."
              onChange={radiochangel}
              checked={language == "فارسی"}
              value="فارسی"
            />
            <span>فارسی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبان مد نظر خود را برای طراحی انتخاب کنید."
              onChange={radiochangel}
              checked={language == "انگلیسی"}
              value="انگلیسی"
            />
            <span>انگلیسی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبان مد نظر خود را برای طراحی انتخاب کنید."
              onChange={radiochangel}
              checked={language == "فرانسه"}
              value="فرانسه"
            />
            <span>فرانسه</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبان مد نظر خود را برای طراحی انتخاب کنید."
              onChange={radiochangel}
              checked={language == "چینی"}
              value="چینی"
            />
            <span>چینی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبان مد نظر خود را برای طراحی انتخاب کنید."
              onChange={radiochangel}
              checked={language == "ژاپنی"}
              value="ژاپنی"
            />
            <span>ژاپنی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبان مد نظر خود را برای طراحی انتخاب کنید."
              onChange={radiochangel}
              checked={language == "کره ای"}
              value="کره ای"
            />
            <span>کره ای</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبان مد نظر خود را برای طراحی انتخاب کنید."
              onChange={radiochangel}
              checked={language == "ایتالیایی"}
              value="ایتالیایی"
            />
            <span>ایتالیایی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبان مد نظر خود را برای طراحی انتخاب کنید."
              onChange={radiochangel}
              checked={language == "ترکی"}
              value="ترکی"
            />
            <span>ترکی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبان مد نظر خود را برای طراحی انتخاب کنید."
              onChange={radiochangel}
              checked={language == "اسپانیایی"}
              value="اسپانیایی"
            />
            <span>اسپانیایی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبان مد نظر خود را برای طراحی انتخاب کنید."
              onChange={radiochangel}
              checked={language == "آلمانی"}
              value="آلمانی"
            />
            <span>آلمانی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبان مد نظر خود را برای طراحی انتخاب کنید."
              onChange={radiochangel}
              checked={language == "سایر"}
              value="سایر"
            />
            <span>سایر</span>
          </label>
        </div>
      </div>
      {otherlan}
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- موضوع پروژه شما چیست؟</h3>
      <div className="field selected office">
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={options}
          value={valueselect}
          placeholder="موضوع خود را انتخاب کنید"
          onChange={handleChange}
        />
      </div>
      {sjt}
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div dir="rtl">
      <h3>{count + 1}- مخاطبان شما چه کسانی هستند؟</h3>
      <div className="ui three columnd doubling grid top-grid">
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="مخاطبان شما چه کسانی هستند؟"
              value="کودکان"
              onChange={checkboxchange}
              checked={typeInput.children}
            />
            <span>کودکان</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="مخاطبان شما چه کسانی هستند؟"
              value="نوجوانان"
              onChange={checkboxchange}
              checked={typeInput.teenager}
            />
            <span>نوجوانان</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="مخاطبان شما چه کسانی هستند؟"
              value="بزرگسالان"
              onChange={checkboxchange}
              checked={typeInput.adults}
            />
            <span>بزرگسالان</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="مخاطبان شما چه کسانی هستند؟"
              value="سایر"
              onChange={checkboxchange}
              checked={typeInput.otherm}
            />
            <span>سایر</span>
          </label>
        </div>
      </div>
      {linkaudience}
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- نحوه انتشار پروژه شما چه باشد؟</h3>
      <div className="ui three columnd doubling grid top-grid" dir="rtl">
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="نحوه انتشار پروژه شما چه باشد؟"
              value="دیجیتال"
              onChange={deliverychange}
              checked={typedel === "دیجیتال"}
            />
            <span>
              <i className="file alternate outline icon"></i>
              دیجیتال
            </span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="نحوه انتشار پروژه شما چه باشد؟"
              value="چاپی"
              onChange={deliverychange}
              checked={typedel === "چاپی"}
            />
            <span>
              <i className="file alternate outline icon"></i>
              چاپی
            </span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="نحوه انتشار پروژه شما چه باشد؟"
              value="هردو"
              onChange={deliverychange}
              checked={typedel === "هردو"}
            />
            <span>
              <i className="file alternate icon"></i>
              هردو
            </span>
          </label>
        </div>
      </div>
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1} - نمونه های خاصی اگر مدنظرتون هست آپلود کنید.</h3>
      <div className="field" style={{ width: "100%" }}>
        <label className="file-label">
          <i className="cloud download icon"></i>
          <p>فایل خود را انتخاب کنید</p>
          <div className="upload-btn">آپلود</div>
          <input
            type="file"
            className="form-control"
            name="podcast-file"
            accept=".jpg, .jpeg, .png, .pdf,.doc,.docx, .psd, .zip"
            onChange={(e) => {
              uploadSample(e);
            }}
          />
        </label>
      </div>
      {Object.keys(baseSample).length != 0
        ? sampleName.map((logo) => {
            return (
              <p
                style={{
                  marginTop: "5px",
                  color: "#65C466",
                  marginBottom: "5px",
                }}
              >
                فایل شما با نام "{logo}" ذخیره شد.
              </p>
            );
          })
        : null}
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <div
        className="equal width fields top-grid"
        dir="rtl"
        style={{ alignItems: "center" }}
      >
        <div className="field " style={{ width: "80%" }}>
          <h3>{count + 1}- آیا برای تحویل پروژه خود عجله دارید؟</h3>
        </div>
        <div
          className="field "
          style={{ width: "20%", display: "flex", alignItems: "center" }}
        >
          <FormControlLabel
            value="timeout-tr"
            onChange={handleTime}
            checked={timec}
            control={<Switch color="primary" />}
            label=""
          />
          <p style={{ marginRight: "10px" }}>بله دارم</p>
        </div>
      </div>
      {showtime}
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>
        {count + 1} - توضیحات بیشتر یا فایلی اگر دارید اینجا میتوانید اضافه کنید
      </h3>
      <div className="equal width fields top-grid" dir="rtl">
        <div className="field" style={{ width: "60%" }}>
          <textarea
            dir="rtl"
            type="text"
            name="subject-file-tr"
            className="upload-input"
            value={desfile}
            onChange={desfilechange}
            placeholder="توضیحات خود را اینجا بنویسید"
          />
        </div>
        <div className="field" style={{ width: "40%" }}>
          <label className="file-label">
            <i className="cloud download icon"></i>
            <p>فایل خود را انتخاب کنید</p>
            <div className="upload-btn">آپلود</div>
            <input
              type="file"
              className="form-control"
              accept=".jpg, .jpeg, .png, .pdf,.doc,.docx"
              onChange={(e) => {
                uploadImage(e);
              }}
            />
          </label>
        </div>
      </div>
      {Object.keys(baseImage).length != 0 ? (
        <p className="save-alert">فایل شما با نام "{fileName}" ذخیره شد.</p>
      ) : null}
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <div className="last-div">
        <div className="success">
          <i className="check circle icon"></i>
        </div>
        <p>اطلاعات با موفقیت ذخیره شد!</p>
      </div>
    </div>,
  ];

  if (typedel === "چاپی" || typedel === "هردو") {
    components.splice(
      8,
      0,
      <div>
        <h3>{count + 1}- جنس کاغذ خود را انتخاب کنید</h3>
        <div className="field selected office" style={{ width: "100%" }}>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={optionskind}
            value={selectt}
            placeholder="جنس کاغذ خود را انتخاب کنید"
            onChange={selecttchange}
          />
        </div>
        {isErr ? <p className="err-paragraph">{err}</p> : null}
      </div>
    );
    components.splice(
      9,
      0,
      <div>
        <h3>{count + 1}- تکنولوژی چاپ خود را انتخاب کنید .</h3>
        <div className="field selected office" style={{ width: "100%" }}>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={optionstec}
            value={selecttec}
            placeholder="تکنولوژی چاپ خود را انتخاب کنید ."
            onChange={selecttecchange}
          />
        </div>
        {isErr ? <p className="err-paragraph">{err}</p> : null}
      </div>
    );
    components.splice(
      10,
      0,
      <div>
        <div
          className="equal width fields"
          dir="rtl"
          style={{ alignItems: "center" }}
        >
          <div className="field " style={{ width: "80%" }}>
            <h3>{count + 1}- آیا مایلید قسمتی از چاپ برجسته باشد.</h3>
          </div>
          <div
            className="field "
            style={{ width: "20%", display: "flex", alignItems: "center" }}
          >
            <FormControlLabel
              value="highlight"
              control={<Switch color="primary" />}
              label=""
              onChange={highlightchange}
              checked={highlight}
            />
            <p style={{ marginRight: "10px" }}>بله</p>
          </div>
        </div>
        {highlighshow}
        {isErr ? <p className="err-paragraph">{err}</p> : null}
      </div>
    );
  }

  let circles = [];
  for (let x = 0; x < components.length; x++) {
    circles[x] = <div className="circle"></div>;
    if (x == count) {
      circles[x] = <div className="circle active-circle"></div>;
    }
  }

  const preBtn = () => {
    setCount(count - 1);
  };
  const nextBtn = () => {
    if (count == 0) {
      if (Object.keys(basepodcast).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("لطفا لوگوی خود را آپلود کنید.");
        setIsErr(true);
      }
    }
    if (count == 1) {
      if (pallet == false) {
        typeData.push({
          ["رنگ خاصی برای طراحی مدنظرتون هست؟"]: "خیر",
        });
        setCount(count + 1);
        setIsErr(false);
      } else {
        setCount(count + 1);
        setIsErr(false);
        typeData.push({
          ["رنگ خاصی برای طراحی مدنظرتون هست؟"]: "بله",
        });
        typeData.push({
          ["رنگ مورد نظر خود را از پالت نگی انتخاب کنید."]: color,
        });
      }
    }
    if (count == 2) {
      if (motion == true) {
        if (Object.keys(basemotion).length != 0) {
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("لطفا فایل خود را آپلود کنید.");
          setIsErr(true);
        }
      } else {
        setCount(count + 1);
        setIsErr(false);
      }
    }
    if (count == 3) {
      if (text == true) {
        if (Object.keys(basetext).length != 0) {
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("لطفا فایل خود را آپلود کنید.");
          setIsErr(true);
        }
      } else {
        setCount(count + 1);
        setIsErr(false);
      }
    }
    if (count == 4) {
      if (Object.keys(language).length != 0) {
        if (language === "سایر") {
          if (Object.keys(lantext).length != 0) {
            setCount(count + 1);
            setIsErr(false);
          } else {
            setErr("لطفا زبان مورد نظر خود را بنویسید");
            setIsErr(true);
          }
        } else {
          setCount(count + 1);
          setIsErr(false);
        }
      } else {
        setErr("لطفا یک گزینه را انتخاب کنید");
        setIsErr(true);
      }
    }
    if (count == 5) {
      if (Object.keys(valueselect).length != 0) {
        let find = valueselect.filter((element) => element.value == "سایر");
        if (find.length != 0) {
          if (Object.keys(scttext).length != 0) {
            setCount(count + 1);
            setIsErr(false);
          } else {
            setErr("لطفا موضوع مورد نظر خود را بنویسید.");
            setIsErr(true);
          }
        } else {
          setCount(count + 1);
          setIsErr(false);
        }
      } else {
        setErr("لطفا حداقل یک گزینه را انتخاب کنید.");
        setIsErr(true);
      }
    }
    if (count == 6) {
      if (Object.keys(audience).length != 0) {
        if (find.length != 0) {
          if (Object.keys(textaudience).length != 0) {
            setCount(count + 1);
            setIsErr(false);
          } else {
            setErr("لطفا مخاطبان مورد نظر خود را بنویسید");
            setIsErr(true);
          }
        } else {
          setCount(count + 1);
          setIsErr(false);
        }
      } else {
        setErr("لطفا یک گزینه را انتخاب کنید");
        setIsErr(true);
      }
    }
    if (count == 7) {
      if (Object.keys(typedel).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("لطفا یک گزینه را انتخاب کنید");
        setIsErr(true);
      }
    }

    if (typedel === "چاپی" || typedel === "هردو") {
      if (count == 8) {
        if (Object.keys(selectt).length != 0) {
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("لطفا یک گزینه را انتخاب کنید");
          setIsErr(true);
        }
      }
      if (count == 9) {
        if (Object.keys(selecttec).length != 0) {
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("لطفا یک گزینه را انتخاب کنید");
          setIsErr(true);
        }
      }
      if (count == 10) {
        if (highlight == true) {
          if (Object.keys(highlighttext).length != 0) {
            setCount(count + 1);
            setIsErr(false);
          } else {
            setErr("لطفا قسمتی را که می خواهید در چاپ برجسته باشد بنویسید.");
            setIsErr(true);
          }
        } else {
          setCount(count + 1);
          setIsErr(false);
        }
      }
      if (count == 11) {
        setCount(count + 1);
        setIsErr(false);
      }
      if (count == 12) {
        if (timec == false) {
          typeData.push({
            ["آیا برای تحویل پروژه خود عجله دارید؟"]: "خیر",
          });
          setCount(count + 1);
          setIsErr(false);
        } else {
          if (Object.keys(date).length != 0) {
            setCount(count + 1);
            setIsErr(false);
            typeData.push({
              ["آیا برای تحویل پروژه خود عجله دارید؟"]: "بله دارم",
            });
            typeData.push({ ["تاریخ تحویل"]: date });
          } else {
            setErr("نیاز است که یک تاریخ انتخاب کنید");
            setIsErr(true);
          }
        }
      }
      if (count == 13) {
        if (Object.keys(baseImage).length != 0) {
          typeData.push({ ["لوگوی خود را آپلود کنید"]: basepodcast });
          if (motion == false) {
            typeData.push({
              ["آیا لوگو دارید؟"]: "خیر نداریم",
            });
          }
          if (motion == true) {
            if (Object.keys(basemotion).length != 0) {
              typeData.push({
                ["آیا لوگو دارید؟"]: "بله داریم",
              });
              typeData.push({
                ["آیا لوگو دارید؟"]: basemotion,
              });
            }
          }
          if (text == false) {
            typeData.push({
              ["آیا متن دارید؟"]: "خیر نداریم",
            });
          }
          if (text == true) {
            if (Object.keys(basetext).length != 0) {
              typeData.push({
                ["آیا متن دارید ؟"]: "بله داریم",
              });
              typeData.push({
                ["آیا متن دارید ؟"]: basetext,
              });
            }
          }
          for (let [key, value] of Object.entries(valueselect)) {
            typeData.push({ ["موضوع پروژه شما چیست؟"]: value.value });
          }
          valueselect.map((element) => {
            if (element.value == "سایر") {
              typeData.push({ ["موضوع پروژه شما چیست؟"]: scttext });
            }
          });
          typeData.push({ ["زبان مدنظرتون را انتخاب کنید"]: language });
          if (language === "سایر") {
            typeData.push({ ["زبان مدنظرتون را انتخاب کنید"]: lantext });
          }
          for (let [key, value] of Object.entries(selectt)) {
            typeData.push({ ["جنس کاغذ خود را انتخاب کنید ."]: value.value });
          }
          for (let [key, value] of Object.entries(selecttec)) {
            typeData.push({
              ["تکنولوژی چاپ خود را انتخاب کنید ."]: value.value,
            });
          }
          if (highlight == false) {
            typeData.push({
              ["آیا مایلید قسمتی از چاپ برجسته باشد?"]: "خیر",
            });
          }
          if (highlight == true) {
            typeData.push({
              ["آیا مایلید قسمتی از چاپ برجسته باشد?"]: "بله",
            });
            typeData.push({
              ["آیا مایلید قسمتی از چاپ برجسته باشد?"]: highlighttext,
            });
          }
          typeData.push({ ["مخاطبان شما چه کسانی هستند؟"]: audience });
          if (find.length != 0) {
            typeData.push({
              ["مخاطبان شما چه کسانی هستند؟"]: textaudience,
            });
          }
          typeData.push({ ["نحوه انتشار پروژه شما چه باشد؟"]: typedel });
          typeData.push({
            ["نمونه های خاصی اگر مدنظرتون هست آپلود کنید."]: baseSample,
          });
          typeData.push({ ["توضیحات آپلود فایل"]: desfile });
          typeData.push({ ["فایل آپلود شده"]: baseImage });
          setCount(count + 1);
          setIsErr(false);
          window.localStorage.setItem(
            "poster",
            JSON.stringify({ ["پرسشنامه پوستر"]: typeData })
          );
        } else {
          setErr("لطفا فایل خود را آپلود کنید");
          setIsErr(true);
        }
      }
    } else {
      if (count == 8) {
        setCount(count + 1);
        setIsErr(false);
      }
      if (count == 9) {
        if (timec == false) {
          typeData.push({
            ["آیا برای تحویل پروژه خود عجله دارید؟"]: "خیر",
          });
          setCount(count + 1);
          setIsErr(false);
        } else {
          if (Object.keys(date).length != 0) {
            setCount(count + 1);
            setIsErr(false);
            typeData.push({
              ["آیا برای تحویل پروژه خود عجله دارید؟"]: "بله دارم",
            });
            typeData.push({ ["تاریخ تحویل"]: date });
          } else {
            setErr("نیاز است که یک تاریخ انتخاب کنید");
            setIsErr(true);
          }
        }
      }
      if (count == 10) {
        if (Object.keys(baseImage).length != 0) {
          typeData.push({ ["لوگوی خود را آپلود کنید"]: basepodcast });
          typeData.push({ ["نحوه انتشار پروژه شما چه باشد؟"]: typedel });
          if (motion == false) {
            typeData.push({
              ["آیا لوگو دارید؟"]: "خیر نداریم",
            });
          }
          if (motion == true) {
            if (Object.keys(basemotion).length != 0) {
              typeData.push({
                ["آیا لوگو دارید؟"]: "بله داریم",
              });
              typeData.push({
                ["آیا لوگو دارید؟"]: basemotion,
              });
            }
          }
          if (text == false) {
            typeData.push({
              ["آیا متن دارید؟"]: "خیر نداریم",
            });
          }
          if (text == true) {
            if (Object.keys(basetext).length != 0) {
              typeData.push({
                ["آیا متن دارید ؟"]: "بله داریم",
              });
              typeData.push({
                ["آیا متن دارید ؟"]: basetext,
              });
            }
          }
          for (let [key, value] of Object.entries(valueselect)) {
            typeData.push({ ["موضوع پروژه شما چیست؟"]: value.value });
          }
          valueselect.map((element) => {
            if (element.value == "سایر") {
              typeData.push({ ["موضوع پروژه شما چیست؟"]: scttext });
            }
          });
          typeData.push({ ["زبان مدنظرتون را انتخاب کنید"]: language });
          if (language === "سایر") {
            typeData.push({ ["زبان مدنظرتون را انتخاب کنید"]: lantext });
          }
          typeData.push({ ["مخاطبان شما چه کسانی هستند؟"]: audience });
          if (find.length != 0) {
            typeData.push({
              ["مخاطبان شما چه کسانی هستند؟"]: textaudience,
            });
          }
          typeData.push({
            ["نمونه های خاصی اگر مدنظرتون هست آپلود کنید."]: baseSample,
          });
          typeData.push({ ["توضیحات آپلود فایل"]: desfile });
          typeData.push({ ["فایل آپلود شده"]: baseImage });
          setCount(count + 1);
          setIsErr(false);
          window.localStorage.setItem(
            "poster",
            JSON.stringify({ ["پرسشنامه پوستر"]: typeData })
          );
        } else {
          setErr("لطفا فایل خود را آپلود کنید");
          setIsErr(true);
        }
      }
    }
  };
  return (
    <>
      <div>
        {components[count]}
        {count > 0 && (
          <button type="button" onClick={preBtn} className="prev-btn">
            <i className="chevron right icon"></i>
            سوال قبلی
          </button>
        )}
        <div className="circles">{circles}</div>
        {count < components.length - 1 && (
          <button type="button" onClick={nextBtn} className="next-btn">
            سوال بعدی
            <i className="chevron left icon"></i>
          </button>
        )}
      </div>
    </>
  );
};
export default Poster;
