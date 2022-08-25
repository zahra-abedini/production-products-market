import React, { useEffect } from "react";
import JCalendar from "reactjs-persian-calendar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useForm } from "react-hook-form";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { ActionMeta, OnChangeValue } from "react-select";
import { colors } from "@mui/material";

const animatedComponents = makeAnimated();

const Header = () => {
  const [count, setCount] = React.useState(0);
  const [basepodcast, setBasepodcast] = React.useState("");
  const [podName, setPodname] = React.useState("");
  const [fileName, setFilename] = React.useState("");
  const [isErr, setIsErr] = React.useState(false);
  const [err, setErr] = React.useState("");
  const [typetime, setTypeTime] = React.useState("");
  const [activity, setActivity] = React.useState("");
  const [typeInput, setTypeInput] = React.useState({
    digital: false,
    fiziki: false,
    a5: false,
    a4: false,
    other: false,
    virastar: false,
    timeout: false,
    highlight: false,
  });
  const [typeSize, setSize] = React.useState([]);
  const [color, setColor] = useColor("hex", "#121212");
  const [typeData, setTypeData] = React.useState([]);
  const [origin, setOrigin] = React.useState({
    persian: false,
    english: false,
    french: false,
    german: false,
    chinese: false,
    japanese: false,
    korean: false,
    italian: false,
    spanish: false,
    turkish: false,
    other: false,
  });
  const [language, setLanguage] = React.useState([]);
  const [typedel, setTypeDel] = React.useState({});
  const [kind, setKind] = React.useState("");
  const [tec, setTec] = React.useState("");
  const [signature, setSignature] = React.useState({
    digital: false,
    print: false,
    both: false,
  });
  const [typesi, setTypesi] = React.useState([]);
  const [baseLogo, setBaseLogo] = React.useState("");
  const [logoName, setLogoname] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [date, setDate] = React.useState({});
  const [desfile, setDesfile] = React.useState("");
  const [baseImage, setBaseImage] = React.useState("");

  const radiochange = (e) => {
    if (e.target.value == "A5") {
      setTypeInput({ ...typeInput, a5: e.target.checked });
      if (e.target.checked == true) {
        typeSize.push({ [e.target.name]: e.target.value });
      } else {
        setSize(
          typeSize.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    } else if (e.target.value == "A4") {
      setTypeInput({ ...typeInput, a4: e.target.checked });
      if (e.target.checked == true) {
        typeSize.push({ [e.target.name]: e.target.value });
      } else {
        setSize(
          typeSize.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    } else if (e.target.value == "سایر") {
      setTypeInput({ ...typeInput, other: e.target.checked });
      if (e.target.checked == true) {
        typeSize.push({ [e.target.name]: e.target.value });
      } else {
        setSize(
          typeSize.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    }
  };

  const [text, setText] = React.useState("");
  const sctTextchange = (e) => {
    setText(e.target.value);
  };

  let link;

  let find1 = typeSize.filter((element) => Object.values(element) == "سایر");
  if (find1.length != 0) {
    link = (
      <input
        dir="rtl"
        type="text"
        name="subject-time-tr"
        style={{ marginTop: "20px" }}
        value={text}
        onChange={sctTextchange}
        placeholder="ابعاد پوستر خود را وارد کنید."
      />
    );
  }

  const radiochangel = (e) => {
    if (e.target.value == "فارسی") {
      setOrigin({ ...origin, persian: e.target.checked });
      if (e.target.checked == true) {
        language.push({ [e.target.name]: e.target.value });
      } else {
        setLanguage(
          language.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    } else if (e.target.value == "انگلیسی") {
      setOrigin({ ...origin, english: e.target.checked });
      if (e.target.checked == true) {
        language.push({ [e.target.name]: e.target.value });
      } else {
        setLanguage(
          language.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    } else if (e.target.value == "فرانسه") {
      setOrigin({ ...origin, french: e.target.checked });
      if (e.target.checked == true) {
        language.push({ [e.target.name]: e.target.value });
      } else {
        setLanguage(
          language.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    } else if (e.target.value == "آلمانی") {
      setOrigin({ ...origin, german: e.target.checked });
      if (e.target.checked == true) {
        language.push({ [e.target.name]: e.target.value });
      } else {
        setLanguage(
          language.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    } else if (e.target.value == "چینی") {
      setOrigin({ ...origin, chinese: e.target.checked });
      if (e.target.checked == true) {
        language.push({ [e.target.name]: e.target.value });
      } else {
        setLanguage(
          language.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    } else if (e.target.value == "ژاپنی") {
      setOrigin({ ...origin, japanese: e.target.checked });
      if (e.target.checked == true) {
        language.push({ [e.target.name]: e.target.value });
      } else {
        setLanguage(
          language.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    } else if (e.target.value == "کره ای") {
      setOrigin({ ...origin, korean: e.target.checked });
      if (e.target.checked == true) {
        language.push({ [e.target.name]: e.target.value });
      } else {
        setLanguage(
          language.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    } else if (e.target.value == "ایتالیایی") {
      setOrigin({ ...origin, italian: e.target.checked });
      if (e.target.checked == true) {
        language.push({ [e.target.name]: e.target.value });
      } else {
        setLanguage(
          language.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    } else if (e.target.value == "اسپانیایی") {
      setOrigin({ ...origin, spanish: e.target.checked });
      if (e.target.checked == true) {
        language.push({ [e.target.name]: e.target.value });
      } else {
        setLanguage(
          language.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    } else if (e.target.value == "ترکی") {
      setOrigin({ ...origin, turkish: e.target.checked });
      if (e.target.checked == true) {
        language.push({ [e.target.name]: e.target.value });
      } else {
        setLanguage(
          language.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    }
  };

  const [showcolor, setShowColor] = React.useState([]);
  const addColorchange = (e) => {
    setShowColor([...showcolor, color.hex]);
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
        <div className="picker-style">
          <button type="button" onClick={addColorchange} className="color-btn">
            اضافه کردن رنگ
          </button>
        </div>
      </>
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

  const timechange = (e) => {
    setTypeTime(e.target.value);
  };

  const activitychange = (e) => {
    setActivity(e.target.value);
  };

  const deliverychange = (e) => {
    setTypeDel(e.target.value);
  };

  const signaturechange = (e) => {
    if (e.target.value == "امضا") {
      setSignature({ ...signature, digital: e.target.checked });
      if (e.target.checked == true) {
        typesi.push({ [e.target.name]: e.target.value });
      } else {
        setTypesi(
          typesi.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    } else if (e.target.value == "علامت برجسته") {
      setSignature({ ...signature, print: e.target.checked });
      if (e.target.checked == true) {
        typesi.push({ [e.target.name]: e.target.value });
      } else {
        setTypesi(
          typesi.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    } else if (e.target.value == "هیچکدام") {
      setSignature({ ...signature, both: e.target.checked });
      if (e.target.checked == true) {
        typesi.push({ [e.target.name]: e.target.value });
      } else {
        setTypesi(
          typesi.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    }
  };

  const [basemotion, setBasemotion] = React.useState("");
  const [motionName, setmotionname] = React.useState("");

  const uploadmotion = async (e) => {
    setmotionname(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBasemotion(base64);
  };

  let linksi;

  let find2 = typesi.filter((element) => Object.values(element) == "امضا");
  if (find2.length != 0) {
    linksi = (
      <>
        <h3>امضا خود را آپلود کنید.</h3>
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

  const uploadImage = async (e) => {
    setFilename(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const uploadpodcast = async (e) => {
    setPodname(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBasepodcast(base64);
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
        {count + 1} - لوگویی که میخواهید در سربرگ استفاده کنید را آپلود کنید یا
        می توانید از وبسایت
        <a href="#"></a> سفارش دهید.
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
      <h3> {count + 1}- نام شرکت شما چیست؟</h3>
      <input
        dir="rtl"
        type="text"
        name="نام شرکت شما چیست؟"
        value={typetime}
        onChange={timechange}
        placeholder="نام شرکت شما چیست؟"
      />
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3> {count + 1}- حوزه فعالیت شما در چه زمینه ای می باشد؟</h3>
      <textarea
        dir="rtl"
        type="text"
        name="حوزه فعالیت شما در چه زمینه ای می باشد؟"
        value={activity}
        onChange={activitychange}
        placeholder="حوزه فعالیت شما در چه زمینه ای می باشد؟"
      />
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3> {count + 1}- ابعاد طراحی خود را انتخاب کنید.</h3>
      <div className="ui three columnd doubling grid top-grid" dir="rtl">
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="ابعاد طراحی خود را انتخاب کنید."
              onChange={radiochange}
              checked={typeInput.a5}
              value="A5"
            />
            <span>
              <i className="file alternate outline icon"></i>
              A5
            </span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="ابعاد طراحی خود را انتخاب کنید."
              onChange={radiochange}
              checked={typeInput.a4}
              value="A4"
            />
            <span>
              <i className="file alternate outline icon"></i>
              A4
            </span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="ابعاد طراحی خود را انتخاب کنید."
              onChange={radiochange}
              checked={typeInput.other}
              value="سایر"
            />
            <span>
              <i className="file alternate outline icon"></i>
              سایر
            </span>
          </label>
        </div>
      </div>
      {link}
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

      <div className="ui four columnd doubling grid top-grid color-all">
        {Object.keys(showcolor).length != 0
          ? showcolor.map((color) => {
              return (
                <div className="color-box">
                  <div
                    className="color-circle"
                    style={{ backgroundColor: `${color}` }}
                  ></div>
                  <p style={{ marginTop: "5px", color: `${color}` }}>{color}</p>
                </div>
              );
            })
          : null}
      </div>
    </div>,
    <div>
      <h3>{count + 1}- زبان مد نظر خود را برای طراحی انتخاب کنید.</h3>
      <div className="ui three columnd doubling grid top-grid">
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="زبان مد نظر خود را برای طراحی انتخاب کنید."
              onChange={radiochangel}
              checked={origin.persian}
              value="فارسی"
            />
            <span>فارسی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="زبان مد نظر خود را برای طراحی انتخاب کنید."
              onChange={radiochangel}
              checked={origin.english}
              value="انگلیسی"
            />
            <span>انگلیسی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="زبان مد نظر خود را برای طراحی انتخاب کنید."
              onChange={radiochangel}
              checked={origin.french}
              value="فرانسه"
            />
            <span>فرانسه</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="زبان مد نظر خود را برای طراحی انتخاب کنید."
              onChange={radiochangel}
              checked={origin.chinese}
              value="چینی"
            />
            <span>چینی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="زبان مد نظر خود را برای طراحی انتخاب کنید."
              onChange={radiochangel}
              checked={origin.japanese}
              value="ژاپنی"
            />
            <span>ژاپنی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="زبان مد نظر خود را برای طراحی انتخاب کنید."
              onChange={radiochangel}
              checked={origin.korean}
              value="کره ای"
            />
            <span>کره ای</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="زبان مد نظر خود را برای طراحی انتخاب کنید."
              onChange={radiochangel}
              checked={origin.italian}
              value="ایتالیایی"
            />
            <span>ایتالیایی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="زبان مد نظر خود را برای طراحی انتخاب کنید."
              onChange={radiochangel}
              checked={origin.turkish}
              value="ترکی"
            />
            <span>ترکی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="زبان مد نظر خود را برای طراحی انتخاب کنید."
              onChange={radiochangel}
              checked={origin.spanish}
              value="اسپانیایی"
            />
            <span>اسپانیایی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="زبان مد نظر خود را برای طراحی انتخاب کنید."
              onChange={radiochangel}
              checked={origin.german}
              value="آلمانی"
            />
            <span>آلمانی</span>
          </label>
        </div>
      </div>
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
      <h3>{count + 1}- برای امنیت سربرگ خود مایل به کدام یک از موارد هستید؟</h3>
      <div className="ui three columnd doubling grid top-grid" dir="rtl">
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="برای امنیت سربرگ خود مایل به کدام یک از موارد هستید؟"
              value="امضا"
              onChange={signaturechange}
              checked={signature.digital}
            />
            <span>
              <i className="file alternate outline icon"></i>
              امضا
            </span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="برای امنیت سربرگ خود مایل به کدام یک از موارد هستید؟"
              value="علامت برجسته"
              onChange={signaturechange}
              checked={signature.print}
            />
            <span>
              <i className="file alternate outline icon"></i>
              علامت برجسته
            </span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="برای امنیت سربرگ خود مایل به کدام یک از موارد هستید؟"
              value="هیچکدام"
              onChange={signaturechange}
              checked={signature.both}
            />
            <span>
              <i className="file alternate icon"></i>
              هیچکدام
            </span>
          </label>
        </div>
      </div>
      {linksi}
      {Object.keys(basemotion).length != 0 ? (
        <p className="save-alert">فایل شما با نام "{motionName}" ذخیره شد.</p>
      ) : null}
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
      7,
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
      8,
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
      9,
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
      if (Object.keys(typetime).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("نیاز است نام شرکت خود را بنویسید.");
        setIsErr(true);
      }
    }
    if (count == 2) {
      if (Object.keys(activity).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("نیاز است حوزه فعالیت شرکت خود را بنویسید.");
        setIsErr(true);
      }
    }
    if (count == 3) {
      if (Object.keys(typeSize).length != 0) {
        if (find1.length != 0) {
          if (Object.keys(text).length != 0) {
            setCount(count + 1);
            setIsErr(false);
          } else {
            setErr("لطفا ابعاد پوستر مورد نظر خود را وارد نمایید");
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
    if (count == 4) {
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
          ["رنگ مورد نظر خود را از پالت نگی انتخاب کنید."]: color,
        });
      }
    }
    if (count == 5) {
      if (Object.keys(language).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("لطفا یک گزینه را انتخاب کنید");
        setIsErr(true);
      }
    }
    if (count == 6) {
      if (Object.keys(typedel).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("لطفا یک گزینه را انتخاب کنید");
        setIsErr(true);
      }
    }
    if (typedel === "چاپی" || typedel === "هردو") {
      if (count == 7) {
        if (Object.keys(selectt).length != 0) {
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("لطفا یک گزینه را انتخاب کنید");
          setIsErr(true);
        }
      }
      if (count == 8) {
        if (Object.keys(selecttec).length != 0) {
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("لطفا یک گزینه را انتخاب کنید");
          setIsErr(true);
        }
      }
      if (count == 9) {
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
      if (count == 10) {
        if (Object.keys(typesi).length != 0) {
          if (find2.length != 0) {
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
        } else {
          setErr("لطفا یک گزینه را انتخاب کنید");
          setIsErr(true);
        }
      }
      if (count == 11) {
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

      if (count == 12) {
        if (Object.keys(baseImage).length != 0) {
          typeData.push({ ["نام شرکت خود را بنویسید."]: typetime });
          typeData.push({ ["حوزه فعالیت شرکت"]: activity });
          typeData.push({ ["لوگوی شرکت"]: basepodcast });
          typeData.push({ ["پوستر خود را در چه ابعادی می خواهید"]: typeSize });
          if (Object.keys(showcolor).length != 0) {
            typeData.push({
              ["رنگ مورد نظر خود را از پالت نگی انتخاب کنید."]: showcolor,
            });
          }
          if (find1.length != 0) {
            typeData.push({
              ["پوستر خود را در چه ابعادی می خواهید"]: text,
            });
          }
          typeData.push({
            ["زبان مد نظر خود را برای طراحی انتخاب کنید"]: language,
          });
          typeData.push({
            ["فایل خود را چگونه مایلید تحویل بگیرید ؟"]: typedel,
          });
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
          typeData.push(typesi);
          if (find2.length != 0) {
            typeData.push({
              ["برای امنیت سربرگ خود مایل به کدام یک از موارد هستید"]:
                basemotion,
            });
          }
          typeData.push({ ["توضیحات آپلود فایل"]: desfile });
          typeData.push({ ["فایل آپلود شده"]: baseImage });
          window.localStorage.setItem(
            "header",
            JSON.stringify({ ["پرسشنامه سربرگ"]: typeData })
          );
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("لطفا فایل خود را آپلود کنید");
          setIsErr(true);
        }
      }
    } else {
      if (count == 7) {
        if (Object.keys(typesi).length != 0) {
          if (find2.length != 0) {
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
        } else {
          setErr("لطفا یک گزینه را انتخاب کنید");
          setIsErr(true);
        }
      }
      if (count == 8) {
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

      if (count == 9) {
        if (Object.keys(baseImage).length != 0) {
          typeData.push({ ["نام شرکت خود را بنویسید."]: typetime });
          typeData.push({ ["حوزه فعالیت شرکت"]: activity });
          typeData.push({ ["لوگوی شرکت"]: basepodcast });
          typeData.push({ ["پوستر خود را در چه ابعادی می خواهید"]: typeSize });
          if (find1.length != 0) {
            typeData.push({
              ["پوستر خود را در چه ابعادی می خواهید"]: text,
            });
          }
          typeData.push({
            ["زبان مد نظر خود را برای طراحی انتخاب کنید"]: language,
          });
          typeData.push({
            ["فایل خود را چگونه مایلید تحویل بگیرید ؟"]: typedel,
          });
          typeData.push(typesi);
          if (find2.length != 0) {
            typeData.push({
              ["برای امنیت سربرگ خود مایل به کدام یک از موارد هستید"]:
                basemotion,
            });
          }
          if (Object.keys(showcolor).length != 0) {
            typeData.push({
              ["رنگ مورد نظر خود را از پالت نگی انتخاب کنید."]: showcolor,
            });
          }
          typeData.push({ ["توضیحات آپلود فایل"]: desfile });
          typeData.push({ ["فایل آپلود شده"]: baseImage });
          window.localStorage.setItem(
            "header",
            JSON.stringify({ ["پرسشنامه سربرگ"]: typeData })
          );
          setCount(count + 1);
          setIsErr(false);
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

export default Header;
