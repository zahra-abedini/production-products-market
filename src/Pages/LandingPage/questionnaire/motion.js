import React from "react";
import JCalendar from "reactjs-persian-calendar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useForm } from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { ActionMeta, OnChangeValue } from "react-select";

const Motion = () => {
  const [count, setCount] = React.useState(0);
  const [typedialect, setTypeDialect] = React.useState("");
  const [basepodcast, setBasepodcast] = React.useState("");
  const [podName, setPodname] = React.useState("");
  const [isErr, setIsErr] = React.useState(false);
  const [err, setErr] = React.useState("");
  const [typeData, setTypeData] = React.useState([]);
  const [typeInput, setTypeInput] = React.useState({
    children: false,
    teenager: false,
    adults: false,
    otherm: false,
    deaf: false,

    single: false,
    interview: false,
    roundtable: false,
    hybrid: false,
    othertype: false,
    lady: false,
    sir: false,

    scenario: false,
    character: false,
    charactert: false,
    software: false,
    media: false,
    allmedia: false,
    othermotion: false,
    timeout: false,
  });
  const [subject, setSubject] = React.useState({
    subject: "",
  });
  const [delivery, setDelivery] = React.useState([]);
  const [typedel, setTypeDel] = React.useState({});
  const [effect, setEffect] = React.useState([]);
  const [typeef, setTypeEf] = React.useState({});
  const [audience, setAudience] = React.useState([]);
  const [addressed, setAddressed] = React.useState([]);
  const [typetime, setTypeTime] = React.useState("");
  const [baseLogo, setBaseLogo] = React.useState([]);
  const [logoName, setLogoname] = React.useState([]);
  const [description, setDescription] = React.useState("");
  const [typeSize, setSize] = React.useState("");
  const [date, setDate] = React.useState({});
  const [desfile, setDesfile] = React.useState("");
  const [baseImage, setBaseImage] = React.useState("");
  const [fileName, setFilename] = React.useState("");
  const [basemotion, setBasemotion] = React.useState("");
  const [motionName, setmotionname] = React.useState("");
  const [Basecharacter, setBasecharacter] = React.useState("");
  const [characterName, setcharactername] = React.useState("");
  const [baseaudio, setBaseaudio] = React.useState("");
  const [audioName, setaudioname] = React.useState("");
  const [baseeffect, setBaseeffect] = React.useState("");
  const [effectName, seteffectname] = React.useState("");
  const [selectt, setSelectt] = React.useState([]);
  const [scttext, setStjText] = React.useState("");

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

  const sctTextchange = (e) => {
    setStjText(e.target.value);
  };

  for (let [key, value] of Object.entries(selectt)) {
    if (value.value == "سایر") {
      sjt = (
        <input
          dir="rtl"
          type="text"
          name="subject-time-tr"
          style={{ marginTop: "20px" }}
          value={scttext}
          onChange={sctTextchange}
          placeholder="هدف شما از ساخت این موشن چیست؟"
        />
      );
    }
  }

  const selecttchange = (value, e) => {
    setSelectt(value);
  };

  const uploadpodcast = async (e) => {
    setPodname(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBasepodcast(base64);
  };

  const uploadaudio = async (e) => {
    setaudioname(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseaudio(base64);
  };
  let otheraudio;
  if (typedel === "بله") {
    otheraudio = (
      <>
        <h3>افکت صوتی مدنظر خود را آپلود کنید.</h3>
        <div className="field" style={{ width: "100%" }}>
          <label className="file-label">
            <i className="cloud download icon"></i>
            <p>فایل خود را انتخاب کنید</p>
            <div className="upload-btn">آپلود</div>
            <input
              type="file"
              className="form-control"
              name="podcast-file"
              accept="audio/*, video/*"
              onChange={(e) => {
                uploadaudio(e);
              }}
            />
          </label>
        </div>
      </>
    );
  }

  const uploadeffect = async (e) => {
    seteffectname(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseeffect(base64);
  };
  let othereffect;
  if (typeef === "بله") {
    othereffect = (
      <>
        <h3>موسیقی مدنظر خود را آپلود کنید.</h3>
        <div className="field" style={{ width: "100%" }}>
          <label className="file-label">
            <i className="cloud download icon"></i>
            <p>فایل خود را انتخاب کنید</p>
            <div className="upload-btn">آپلود</div>
            <input
              type="file"
              className="form-control"
              name="podcast-file"
              accept="audio/*, video/*"
              onChange={(e) => {
                uploadeffect(e);
              }}
            />
          </label>
        </div>
      </>
    );
  }

  const deliverychange = (e) => {
    setTypeDel(e.target.value);
  };
  const effectchange = (e) => {
    setTypeEf(e.target.value);
  };

  const uploadImage = async (e) => {
    setFilename(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const uploadlogo = async (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      let name = logoName.push(e.target.files[i].name);
      const file = e.target.files[i];
      baseLogo.push(await convertBase64(file));
      setEffect(name);
    }
  };

  const uploadmotion = async (e) => {
    setmotionname(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBasemotion(base64);
  };

  const uploadcharacter = async (e) => {
    setcharactername(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBasecharacter(base64);
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

  const [dialect, setDialect] = React.useState(false);
  let showdialect;
  const handledialect = (e) => {
    setDialect(!dialect);
  };

  const [motion, setMotion] = React.useState(false);
  let showmotion;
  const scenariochange = (e) => {
    setMotion(!motion);
  };
  if (motion == true) {
    showmotion = (
      <>
        <h3>سناریو خود را آپلود کنید.</h3>
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

  const [character, setCharacter] = React.useState(false);
  let showcharacter;
  const charactertchange = (e) => {
    setCharacter(!character);
  };
  if (character == true) {
    showcharacter = (
      <>
        <h3>کاراکتر خود را آپلود کنید.</h3>
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
                uploadcharacter(e);
              }}
            />
          </label>
        </div>
      </>
    );
  }

  const subjectchange = (e) => {
    setSubject({ ...subject, subject: e.target.value });
  };

  const characterchange = (e) => {
    setTypeInput({ ...typeInput, character: e.target.checked });
  };

  if (dialect == true) {
    showdialect = (
      <>
        <h3>
          لوگویی که میخواهید در موشن گرافیک استفاده کنید را آپلود کنید یا می
          توانید از وبسایت
          <a href="#" target="_blank">
            x
          </a>{" "}
          سفارش دهید.
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
      </>
    );
  }

  const motionchange = (e) => {
    if (e.target.value == "نرم افزار،موبایل،دسکتاپ") {
      setTypeInput({ ...typeInput, software: e.target.checked });
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
    } else if (e.target.value == "رسانه های تصویری") {
      setTypeInput({ ...typeInput, media: e.target.checked });
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
    } else if (e.target.value == "رسانه های اجتماعی و وبسایت") {
      setTypeInput({ ...typeInput, allmedia: e.target.checked });
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
      setTypeInput({ ...typeInput, othermotion: e.target.checked });
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

  let otheraud;
  const sizeTextchange = (e) => {
    setSize(e.target.value);
  };

  audience.map((element) => {
    if (Object.values(element) == "سایر") {
      otheraud = (
        <input
          dir="rtl"
          type="text"
          name="subject-time-tr"
          style={{ marginTop: "20px" }}
          value={typeSize}
          onChange={sizeTextchange}
          placeholder="موشن شما قرار است در چه بستری نمایش داده شود ؟"
        />
      );
    }
  });

  const checkboxchange = (e) => {
    if (e.target.value == "کودکان") {
      setTypeInput({ ...typeInput, children: e.target.checked });
      if (e.target.checked == true) {
        addressed.push({ [e.target.name]: e.target.value });
      } else {
        setAddressed(
          addressed.filter((element) => {
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
        addressed.push({ [e.target.name]: e.target.value });
      } else {
        setAddressed(
          addressed.filter((element) => {
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
        addressed.push({ [e.target.name]: e.target.value });
      } else {
        setAddressed(
          addressed.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    } else if (e.target.value == "ناشنوایان یا کم شنوایان") {
      setTypeInput({ ...typeInput, deaf: e.target.checked });
      if (e.target.checked == true) {
        addressed.push({ [e.target.name]: e.target.value });
      } else {
        setAddressed(
          addressed.filter((element) => {
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
        addressed.push({ [e.target.name]: e.target.value });
      } else {
        setAddressed(
          addressed.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    }
  };

  let otherche;
  const dehachange = (e) => {
    setDelivery(e.target.value);
  };

  addressed.map((element) => {
    if (Object.values(element) == "سایر") {
      otherche = (
        <input
          dir="rtl"
          type="text"
          name="subject-time-tr"
          style={{ marginTop: "20px" }}
          value={delivery}
          onChange={dehachange}
          placeholder="مخاطبان شما چه افرادی هستند؟"
        />
      );
    }
  });

  let showgender;
  const [gender, setGender] = React.useState(false);
  const timechange = (e) => {
    setTypeTime(e.target.value);
  };
  const handlegender = (e) => {
    setGender(!gender);
  };
  if (gender == true) {
    showgender = (
      <>
        <h3>چند دقیقه مد نظر شما هست؟</h3>
        <input
          dir="rtl"
          type="text"
          name="چند دقیقه مد نظر شما هست؟"
          value={typetime}
          onChange={timechange}
          placeholder="چند دقیقه مد نظر شما هست؟"
        />
      </>
    );
  }

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
      <div
        className="equal width fields"
        dir="rtl"
        style={{ alignItems: "center" }}
      >
        <div className="field " style={{ width: "80%" }}>
          <h3>
            {count + 1}- آیا می خواهید لوگو خود را در موشن گرافیک قرار دهید؟
          </h3>
        </div>
        <div
          className="field "
          style={{ width: "20%", display: "flex", alignItems: "center" }}
        >
          <FormControlLabel
            value="scenario"
            control={<Switch color="primary" />}
            label=""
            onChange={handledialect}
            checked={dialect}
          />
          <p style={{ marginRight: "10px" }}>بله</p>
        </div>
      </div>
      {showdialect}
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
          <h3>{count + 1}- آیا موشن شما سناریو دارد؟</h3>
        </div>
        <div
          className="field "
          style={{ width: "20%", display: "flex", alignItems: "center" }}
        >
          <FormControlLabel
            value="scenario"
            control={<Switch color="primary" />}
            label=""
            onChange={scenariochange}
            checked={motion}
          />
          <p style={{ marginRight: "10px" }}>بله دارد</p>
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
          <h3>
            {count + 1}- آیا در موشن خود می خواهید از کاراکتر یا شخصیتی استفاده
            کنید؟
          </h3>
        </div>
        <div
          className="field "
          style={{ width: "20%", display: "flex", alignItems: "center" }}
        >
          <FormControlLabel
            value="character"
            control={<Switch color="primary" />}
            label=""
            onChange={characterchange}
            checked={typeInput.character}
          />
          <p style={{ marginRight: "10px" }}>بله </p>
        </div>
      </div>
    </div>,
    <div dir="rtl">
      <h3>{count + 1}- موشن شما قرار است در چه بستری نمایش داده شود؟</h3>
      <div className="ui two columnd doubling grid top-grid">
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="موشن شما قرار است در چه بستری نمایش داده شود؟"
              value="نرم افزار،موبایل،دسکتاپ"
              onChange={motionchange}
              checked={typeInput.software}
            />
            <span>
              <i className="laptop icon"></i>
              نرم افزار،موبایل،دسکتاپ
            </span>
          </label>
        </div>

        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="موشن شما قرار است در چه بستری نمایش داده شود؟"
              value="رسانه های تصویری"
              onChange={motionchange}
              checked={typeInput.media}
            />
            <span>
              <i className="laptop icon"></i>
              رسانه های تصویری
            </span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="موشن شما قرار است در چه بستری نمایش داده شود؟"
              value="رسانه های اجتماعی و وبسایت"
              onChange={motionchange}
              checked={typeInput.allmedia}
            />
            <span style={{ textAlign: "center" }}>
              <i className="laptop icon"></i>
              رسانه های اجتماعی و وبسایت
            </span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="موشن شما قرار است در چه بستری نمایش داده شود؟"
              value="سایر"
              onChange={motionchange}
              checked={typeInput.othermotion}
            />
            <span>
              <i className="laptop icon"></i>
              سایر
            </span>
          </label>
        </div>
      </div>
      {otheraud}
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- هدف شما از ساخت این موشن چیست؟</h3>
      <div className="field selected office" style={{ width: "100%" }}>
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={options}
          value={selectt}
          placeholder="هدف شما از ساخت این موشن چیست؟"
          onChange={selecttchange}
        />
      </div>
      {sjt}
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div dir="rtl">
      <h3>{count + 1}- مخاطبان شما چه افرادی هستند؟</h3>
      <div className="ui three columnd doubling grid top-grid">
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="مخاطبان شما چه افرادی هستند؟"
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
              name="مخاطبان شما چه افرادی هستند؟"
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
              name="مخاطبان شما چه افرادی هستند؟"
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
              name="مخاطبان شما چه افرادی هستند؟"
              value="ناشنوایان یا کم شنوایان"
              onChange={checkboxchange}
              checked={typeInput.deaf}
            />
            <span>ناشنوایان یا کم شنوایان</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="مخاطبان شما چه افرادی هستند؟"
              value="سایر"
              onChange={checkboxchange}
              checked={typeInput.otherm}
            />
            <span>سایر</span>
          </label>
        </div>
      </div>
      {otherche}
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <div
        className="equal width fields"
        dir="rtl"
        style={{ alignItems: "center" }}
      >
        <div className="field " style={{ width: "80%" }}>
          <h3>{count + 1}- مدت زمان خاصی برای موشن در نظر دارید؟</h3>
        </div>
        <div
          className="field "
          style={{ width: "20%", display: "flex", alignItems: "center" }}
        >
          <FormControlLabel
            value="gender"
            control={<Switch color="primary" />}
            label=""
            onChange={handlegender}
            checked={gender}
          />
          <p style={{ marginRight: "10px" }}>بله </p>
        </div>
      </div>
      {showgender}
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
            accept="audio/*, video/*"
            onChange={(e) => {
              uploadlogo(e);
            }}
            multiple
          />
        </label>
      </div>
      {Object.keys(baseLogo).length != 0
        ? logoName.map((logo) => {
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

  if (motion == false) {
    components.splice(
      2,
      0,
      <div>
        <h3>{count + 1}- موضوع کلی مد نظر شما چیست؟</h3>
        <div className="field ">
          <div className="ui left icon input ">
            <textarea
              dir="rtl"
              type="text"
              name="موضوع کلی مد نظر شما چیست؟"
              value={subject.subject}
              onChange={subjectchange}
              placeholder="موضوع کلی مد نظر شما چیست؟"
            />
          </div>
        </div>
        {isErr ? <p className="err-paragraph">{err}</p> : null}
      </div>
    );
  }

  if (typeInput.character == true) {
    if (motion == false) {
      components.splice(
        4,
        0,
        <div>
          <div
            className="equal width fields"
            dir="rtl"
            style={{ alignItems: "center" }}
          >
            <div className="field " style={{ width: "80%" }}>
              <h3>{count + 1}- کاراکتر طراحی شده ای دارید؟</h3>
            </div>
            <div
              className="field "
              style={{ width: "20%", display: "flex", alignItems: "center" }}
            >
              <FormControlLabel
                value="character"
                control={<Switch color="primary" />}
                label=""
                onChange={charactertchange}
                checked={character}
              />
              <p style={{ marginRight: "10px" }}>بله داریم </p>
            </div>
          </div>
          {showcharacter}
          {Object.keys(Basecharacter).length != 0 ? (
            <p className="save-alert">
              فایل شما با نام "{characterName}" ذخیره شد.
            </p>
          ) : null}
          {isErr ? <p className="err-paragraph">{err}</p> : null}
        </div>
      );
    } else {
      components.splice(
        3,
        0,
        <div>
          <div
            className="equal width fields"
            dir="rtl"
            style={{ alignItems: "center" }}
          >
            <div className="field " style={{ width: "80%" }}>
              <h3>{count + 1}- کاراکتر طراحی شده ای دارید؟</h3>
            </div>
            <div
              className="field "
              style={{ width: "20%", display: "flex", alignItems: "center" }}
            >
              <FormControlLabel
                value="character"
                control={<Switch color="primary" />}
                label=""
                onChange={charactertchange}
                checked={character}
              />
              <p style={{ marginRight: "10px" }}>بله داریم </p>
            </div>
          </div>
          {showcharacter}
          {Object.keys(Basecharacter).length != 0 ? (
            <p className="save-alert">
              فایل شما با نام "{characterName}" ذخیره شد.
            </p>
          ) : null}
          {isErr ? <p className="err-paragraph">{err}</p> : null}
        </div>
      );
    }
  }

  if (motion == true) {
    if (typeInput.character == true) {
      components.splice(
        4,
        0,
        <div>
          <h3>{count + 1}- آیا افکت صوتی خاصی مدنظرتون هست؟</h3>
          <div className="ui three columnd doubling grid top-grid" dir="rtl">
            <div className="column selected-label">
              <label>
                <input
                  type="radio"
                  name="آیا افکت صوتی خاصی مدنظرتون هست؟"
                  value="بله"
                  onChange={deliverychange}
                  checked={typedel === "بله"}
                />
                <span>
                  <i className="file alternate outline icon"></i>
                  بله
                </span>
              </label>
            </div>
            <div className="column selected-label">
              <label>
                <input
                  type="radio"
                  name="آیا افکت صوتی خاصی مدنظرتون هست؟"
                  value="خیر"
                  onChange={deliverychange}
                  checked={typedel === "خیر"}
                />
                <span>
                  <i className="file alternate outline icon"></i>
                  خیر
                </span>
              </label>
            </div>
            <div className="column selected-label">
              <label>
                <input
                  type="radio"
                  name="آیا افکت صوتی خاصی مدنظرتون هست؟"
                  value="خیر(می خواهم ساخته شود)"
                  onChange={deliverychange}
                  checked={typedel === "خیر(می خواهم ساخته شود)"}
                />
                <span>
                  <i className="file alternate icon"></i>
                  خیر
                  <p
                    style={{
                      color: "grey",
                      fontSize: "14px",
                      textAlign: "center",
                    }}
                  >
                    می خواهم ساخته شود
                  </p>
                </span>
              </label>
            </div>
          </div>
          {otheraudio}
          {Object.keys(baseaudio).length != 0 ? (
            <p className="save-alert">
              فایل شما با نام "{audioName}" ذخیره شد.
            </p>
          ) : null}
          {isErr ? <p className="err-paragraph">{err}</p> : null}
        </div>
      );

      components.splice(
        5,
        0,
        <div>
          <h3>
            {count + 1}- آیا موسیقی خاصی دارید که بخواهید در موشن به کار ببرید؟
          </h3>
          <div className="ui three columnd doubling grid top-grid" dir="rtl">
            <div className="column selected-label">
              <label>
                <input
                  type="radio"
                  name="آیا موسیقی خاصی دارید که بخواهید در موشن به کار ببرید؟"
                  value="بله"
                  onChange={effectchange}
                  checked={typeef === "بله"}
                />
                <span>
                  <i className="file alternate outline icon"></i>
                  بله
                </span>
              </label>
            </div>
            <div className="column selected-label">
              <label>
                <input
                  type="radio"
                  name="آیا موسیقی خاصی دارید که بخواهید در موشن به کار ببرید؟"
                  value="خیر"
                  onChange={effectchange}
                  checked={typeef === "خیر"}
                />
                <span>
                  <i className="file alternate outline icon"></i>
                  خیر
                </span>
              </label>
            </div>
            <div className="column selected-label">
              <label>
                <input
                  type="radio"
                  name="آیا موسیقی خاصی دارید که بخواهید در موشن به کار ببرید؟"
                  value="خیر(می خواهم ساخته شود)"
                  onChange={effectchange}
                  checked={typeef === "خیر(می خواهم ساخته شود)"}
                />
                <span>
                  <i className="file alternate icon"></i>
                  خیر
                  <p
                    style={{
                      color: "grey",
                      fontSize: "14px",
                      textAlign: "center",
                    }}
                  >
                    می خواهم ساخته شود
                  </p>
                </span>
              </label>
            </div>
          </div>
          {othereffect}
          {Object.keys(baseeffect).length != 0 ? (
            <p className="save-alert">
              فایل شما با نام "{effectName}" ذخیره شد.
            </p>
          ) : null}
          {isErr ? <p className="err-paragraph">{err}</p> : null}
        </div>
      );
    } else {
      components.splice(
        3,
        0,
        <div>
          <h3>{count + 1}- آیا افکت صوتی خاصی مدنظرتون هست؟</h3>
          <div className="ui three columnd doubling grid top-grid" dir="rtl">
            <div className="column selected-label">
              <label>
                <input
                  type="radio"
                  name="آیا افکت صوتی خاصی مدنظرتون هست؟"
                  value="بله"
                  onChange={deliverychange}
                  checked={typedel === "بله"}
                />
                <span>
                  <i className="file alternate outline icon"></i>
                  بله
                </span>
              </label>
            </div>
            <div className="column selected-label">
              <label>
                <input
                  type="radio"
                  name="آیا افکت صوتی خاصی مدنظرتون هست؟"
                  value="خیر"
                  onChange={deliverychange}
                  checked={typedel === "خیر"}
                />
                <span>
                  <i className="file alternate outline icon"></i>
                  خیر
                </span>
              </label>
            </div>
            <div className="column selected-label">
              <label>
                <input
                  type="radio"
                  name="آیا افکت صوتی خاصی مدنظرتون هست؟"
                  value="خیر(می خواهم ساخته شود)"
                  onChange={deliverychange}
                  checked={typedel === "خیر(می خواهم ساخته شود)"}
                />
                <span>
                  <i className="file alternate icon"></i>
                  خیر
                  <p
                    style={{
                      color: "grey",
                      fontSize: "14px",
                      textAlign: "center",
                    }}
                  >
                    می خواهم ساخته شود
                  </p>
                </span>
              </label>
            </div>
          </div>
          {otheraudio}
          {Object.keys(baseaudio).length != 0 ? (
            <p className="save-alert">
              فایل شما با نام "{audioName}" ذخیره شد.
            </p>
          ) : null}
          {isErr ? <p className="err-paragraph">{err}</p> : null}
        </div>
      );

      components.splice(
        4,
        0,
        <div>
          <h3>
            {count + 1}- آیا موسیقی خاصی دارید که بخواهید در موشن به کار ببرید؟
          </h3>
          <div className="ui three columnd doubling grid top-grid" dir="rtl">
            <div className="column selected-label">
              <label>
                <input
                  type="radio"
                  name="آیا موسیقی خاصی دارید که بخواهید در موشن به کار ببرید؟"
                  value="بله"
                  onChange={effectchange}
                  checked={typeef === "بله"}
                />
                <span>
                  <i className="file alternate outline icon"></i>
                  بله
                </span>
              </label>
            </div>
            <div className="column selected-label">
              <label>
                <input
                  type="radio"
                  name="آیا موسیقی خاصی دارید که بخواهید در موشن به کار ببرید؟"
                  value="خیر"
                  onChange={effectchange}
                  checked={typeef === "خیر"}
                />
                <span>
                  <i className="file alternate outline icon"></i>
                  خیر
                </span>
              </label>
            </div>
            <div className="column selected-label">
              <label>
                <input
                  type="radio"
                  name="آیا موسیقی خاصی دارید که بخواهید در موشن به کار ببرید؟"
                  value="خیر(می خواهم ساخته شود)"
                  onChange={effectchange}
                  checked={typeef === "خیر(می خواهم ساخته شود)"}
                />
                <span>
                  <i className="file alternate icon"></i>
                  خیر
                  <p
                    style={{
                      color: "grey",
                      fontSize: "14px",
                      textAlign: "center",
                    }}
                  >
                    می خواهم ساخته شود
                  </p>
                </span>
              </label>
            </div>
          </div>
          {othereffect}
          {Object.keys(baseeffect).length != 0 ? (
            <p className="save-alert">
              فایل شما با نام "{effectName}" ذخیره شد.
            </p>
          ) : null}
          {isErr ? <p className="err-paragraph">{err}</p> : null}
        </div>
      );
    }
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
      if (dialect == false) {
        typeData.push({
          ["آیا می خواهید لوگو خود را در موشن گرافیک قرار دهید؟"]: "خیر",
        });
        setCount(count + 1);
        setIsErr(false);
      } else {
        if (Object.keys(basepodcast).length != 0) {
          setCount(count + 1);
          setIsErr(false);
          typeData.push({
            ["آیا می خواهید لوگو خود را در موشن گرافیک قرار دهید؟"]: "بله",
          });
          typeData.push({
            ["آیا می خواهید لوگو خود را در موشن گرافیک قرار دهید؟ "]:
              basepodcast,
          });
        } else {
          setErr("لطفا فایل خود را آپلود کنید");
          setIsErr(true);
        }
      }
    }
    if (count == 1) {
      if (motion == false) {
        typeData.push({
          ["آیا موشن شما سناریو دارد ؟"]: "خیر",
        });
        setCount(count + 1);
        setIsErr(false);
      } else {
        if (Object.keys(basemotion).length != 0) {
          setCount(count + 1);
          setIsErr(false);
          typeData.push({
            ["آیا موشن شما سناریو دارد ؟"]: "بله",
          });
          typeData.push({
            ["آیا موشن شما سناریو دارد ؟"]: basemotion,
          });
        } else {
          setErr("لطفا فایل خود را آپلود کنید");
          setIsErr(true);
        }
      }
    }
    if (motion == false) {
      if (count == 2) {
        if (Object.keys(subject.subject).length != 0) {
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("نیاز است که موضوع کلی مد نظر خود را انتخاب کنید");
          setIsErr(true);
        }
      }
      if (count == 3) {
        setCount(count + 1);
        setIsErr(false);
      }
      if (typeInput.character == true) {
        if (count == 4) {
          if (character == false) {
            typeData.push({
              ["کاراکتر طراحی شده ای دارید ؟"]: "خیر",
            });
            setCount(count + 1);
            setIsErr(false);
          } else {
            if (Object.keys(Basecharacter).length != 0) {
              setCount(count + 1);
              setIsErr(false);
              typeData.push({
                ["کاراکتر طراحی شده ای دارید ؟"]: "بله",
              });
              typeData.push({
                ["کاراکتر طراحی شده ای دارید ؟"]: Basecharacter,
              });
            } else {
              setErr("لطفا فایل خود را آپلود کنید");
              setIsErr(true);
            }
          }
        }

        if (count == 6) {
          if (Object.keys(audience).length != 0) {
            let find = audience.filter(
              (element) => Object.values(element) == "سایر"
            );
            if (find.length != 0) {
              if (Object.keys(typeSize).length != 0) {
                setCount(count + 1);
                setIsErr(false);
              } else {
                setErr("لطفا بستر نمایش مونشن خود را بنویسید");
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
          if (Object.keys(selectt).length != 0) {
            let find = selectt.filter((element) => element.value == "سایر");
            if (find.length != 0) {
              if (Object.keys(scttext).length != 0) {
                setCount(count + 1);
                setIsErr(false);
              } else {
                setErr("لطفا هدف مورد نظر خود را بنویسید.");
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

        if (count == 8) {
          if (Object.keys(addressed).length != 0) {
            let find = addressed.filter(
              (element) => Object.values(element) == "سایر"
            );
            if (find.length != 0) {
              if (Object.keys(delivery).length != 0) {
                setCount(count + 1);
                setIsErr(false);
              } else {
                setErr("لطفا مخاطبان خود را بنویسید");
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
        if (count == 9) {
          if (gender == false) {
            typeData.push({
              ["چند دقیقه مد نظر شما هست؟"]: "خیر",
            });
            setCount(count + 1);
            setIsErr(false);
          } else {
            if (Object.keys(typetime).length != 0) {
              setCount(count + 1);
              setIsErr(false);
              typeData.push({
                ["چند دقیقه مد نظر شما هست؟"]: "بله",
              });
              typeData.push({
                ["آیا می خواهید لوگو خود را در موشن گرافیک قرار دهید؟ "]:
                  typetime,
              });
            } else {
              setErr("نیاز است که مدت زمان مدنظر خود را وارد کنید");
              setIsErr(true);
            }
          }
        }
        if (count == 10) {
          setCount(count + 1);
          setIsErr(false);
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
            typeData.push({ ["موضوع کلی مد نظر شما چیست؟"]: subject.subject });
            if (typeInput.character == false) {
              typeData.push({
                ["آیا در موشن خود می خواهید از کاراکتر یا شخصیتی استفاده کنید؟"]:
                  "خیر",
              });
            } else if (typeInput.character == true) {
              typeData.push({
                ["آیا در موشن خود می خواهید از کاراکتر یا شخصیتی استفاده کنید؟"]:
                  "بله",
              });
            }
            typeData.push({
              ["آیا موسیقی خاصی دارید که بخواهید در موشن به کار ببرید ؟"]:
                typeef,
            });
            if (typeef === "بله") {
              typeData.push({
                ["آیا موسیقی خاصی دارید که بخواهید در موشن به کار ببرید ؟"]:
                  baseeffect,
              });
            }
            typeData.push(audience);
            audience.map((element) => {
              if (Object.values(element) == "سایر") {
                typeData.push({
                  ["موشن شما قرار است در چه بستری نمایش داده شود ؟"]: typeSize,
                });
              }
            });
            for (let [key, value] of Object.entries(selectt)) {
              typeData.push({
                ["هدف شما از ساخت این موشن چیست؟"]: value.value,
              });
            }
            selectt.map((element) => {
              if (element.value == "سایر") {
                typeData.push({ ["هدف شما از ساخت این موشن چیست؟"]: scttext });
              }
            });

            typeData.push(addressed);
            addressed.map((element) => {
              if (element == "سایر") {
                typeData.push({ ["مخاطبان شما چه افرادی هستند؟"]: delivery });
              }
            });
            typeData.push({
              ["نمونه های خاصی اگر مدنظرتون هست آپلود کنید."]: baseLogo,
            });
            typeData.push({ ["توضیحات آپلود فایل"]: desfile });
            typeData.push({ ["فایل آپلود شده"]: baseImage });
            setCount(count + 1);
            setIsErr(false);
            window.localStorage.setItem(
              "motion",
              JSON.stringify({ ["پرسشنامه موشن گرافیک"]: typeData })
            );
          } else {
            setErr("لطفا فایل خود را آپلود کنید");
            setIsErr(true);
          }
        }
      } else {
        if (count == 4) {
          if (Object.keys(audience).length != 0) {
            let find = audience.filter(
              (element) => Object.values(element) == "سایر"
            );
            if (find.length != 0) {
              if (Object.keys(typeSize).length != 0) {
                setCount(count + 1);
                setIsErr(false);
              } else {
                setErr("لطفا بستر نمایش مونشن خود را بنویسید");
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
          if (Object.keys(selectt).length != 0) {
            let find = selectt.filter((element) => element.value == "سایر");
            if (find.length != 0) {
              if (Object.keys(scttext).length != 0) {
                setCount(count + 1);
                setIsErr(false);
              } else {
                setErr("لطفا هدف مورد نظر خود را بنویسید.");
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
          if (Object.keys(addressed).length != 0) {
            let find = addressed.filter(
              (element) => Object.values(element) == "سایر"
            );
            if (find.length != 0) {
              if (Object.keys(delivery).length != 0) {
                setCount(count + 1);
                setIsErr(false);
              } else {
                setErr("لطفا مخاطبان خود را بنویسید");
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
          if (gender == false) {
            typeData.push({
              ["چند دقیقه مد نظر شما هست؟"]: "خیر",
            });
            setCount(count + 1);
            setIsErr(false);
          } else {
            if (Object.keys(typetime).length != 0) {
              setCount(count + 1);
              setIsErr(false);
              typeData.push({
                ["چند دقیقه مد نظر شما هست؟"]: "بله",
              });
              typeData.push({
                ["آیا می خواهید لوگو خود را در موشن گرافیک قرار دهید؟ "]:
                  typetime,
              });
            } else {
              setErr("نیاز است که مدت زمان مدنظر خود را وارد کنید");
              setIsErr(true);
            }
          }
        }
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
            typeData.push({ ["موضوع کلی مد نظر شما چیست؟"]: subject.subject });
            if (typeInput.character == false) {
              typeData.push({
                ["آیا در موشن خود می خواهید از کاراکتر یا شخصیتی استفاده کنید؟"]:
                  "خیر",
              });
            } else if (typeInput.character == true) {
              typeData.push({
                ["آیا در موشن خود می خواهید از کاراکتر یا شخصیتی استفاده کنید؟"]:
                  "بله",
              });
            }
            typeData.push({
              ["آیا موسیقی خاصی دارید که بخواهید در موشن به کار ببرید ؟"]:
                typeef,
            });
            if (typeef === "بله") {
              typeData.push({
                ["آیا موسیقی خاصی دارید که بخواهید در موشن به کار ببرید ؟"]:
                  baseeffect,
              });
            }
            typeData.push(audience);
            audience.map((element) => {
              if (Object.values(element) == "سایر") {
                typeData.push({
                  ["موشن شما قرار است در چه بستری نمایش داده شود ؟"]: typeSize,
                });
              }
            });
            for (let [key, value] of Object.entries(selectt)) {
              typeData.push({
                ["هدف شما از ساخت این موشن چیست؟"]: value.value,
              });
            }
            selectt.map((element) => {
              if (element.value == "سایر") {
                typeData.push({ ["هدف شما از ساخت این موشن چیست؟"]: scttext });
              }
            });
            typeData.push(addressed);
            addressed.map((element) => {
              if (element == "سایر") {
                typeData.push({ ["مخاطبان شما چه افرادی هستند؟"]: delivery });
              }
            });
            typeData.push({
              ["نمونه های خاصی اگر مدنظرتون هست آپلود کنید."]: baseLogo,
            });

            typeData.push({ ["توضیحات آپلود فایل"]: desfile });
            typeData.push({ ["فایل آپلود شده"]: baseImage });
            setCount(count + 1);
            setIsErr(false);
            window.localStorage.setItem(
              "motion",
              JSON.stringify({ ["پرسشنامه موشن گرافیک"]: typeData })
            );
          } else {
            setErr("لطفا فایل خود را آپلود کنید");
            setIsErr(true);
          }
        }
      }
    } else {
      if (count == 2) {
        setCount(count + 1);
        setIsErr(false);
      }
      if (typeInput.character == true) {
        if (count == 3) {
          if (character == false) {
            typeData.push({
              ["کاراکتر طراحی شده ای دارید ؟"]: "خیر",
            });
            setCount(count + 1);
            setIsErr(false);
          } else {
            if (Object.keys(Basecharacter).length != 0) {
              setCount(count + 1);
              setIsErr(false);
              typeData.push({
                ["کاراکتر طراحی شده ای دارید ؟"]: "بله",
              });
              typeData.push({
                ["کاراکتر طراحی شده ای دارید ؟"]: Basecharacter,
              });
            } else {
              setErr("لطفا فایل خود را آپلود کنید");
              setIsErr(true);
            }
          }
        }
        if (count == 4) {
          if (Object.keys(typedel).length != 0) {
            if (typedel === "بله") {
              if (Object.keys(baseaudio).length != 0) {
                setCount(count + 1);
                setIsErr(false);
              } else {
                setErr("لطفا فایل خود را وارد کنید.");
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
          if (Object.keys(typeef).length != 0) {
            if (typeef === "بله") {
              if (Object.keys(baseeffect).length != 0) {
                setCount(count + 1);
                setIsErr(false);
              } else {
                setErr("لطفا فایل خود را وارد کنید.");
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
        if (count == 6) {
          if (Object.keys(audience).length != 0) {
            let find = audience.filter(
              (element) => Object.values(element) == "سایر"
            );
            if (find.length != 0) {
              if (Object.keys(typeSize).length != 0) {
                setCount(count + 1);
                setIsErr(false);
              } else {
                setErr("لطفا بستر نمایش مونشن خود را بنویسید");
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
          if (Object.keys(selectt).length != 0) {
            let find = selectt.filter((element) => element.value == "سایر");
            if (find.length != 0) {
              if (Object.keys(scttext).length != 0) {
                setCount(count + 1);
                setIsErr(false);
              } else {
                setErr("لطفا هدف مورد نظر خود را بنویسید.");
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

        if (count == 8) {
          if (Object.keys(addressed).length != 0) {
            let find = addressed.filter(
              (element) => Object.values(element) == "سایر"
            );
            if (find.length != 0) {
              if (Object.keys(delivery).length != 0) {
                setCount(count + 1);
                setIsErr(false);
              } else {
                setErr("لطفا مخاطبان خود را بنویسید");
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
        if (count == 9) {
          if (gender == false) {
            typeData.push({
              ["چند دقیقه مد نظر شما هست؟"]: "خیر",
            });
            setCount(count + 1);
            setIsErr(false);
          } else {
            if (Object.keys(typetime).length != 0) {
              setCount(count + 1);
              setIsErr(false);
              typeData.push({
                ["چند دقیقه مد نظر شما هست؟"]: "بله",
              });
              typeData.push({
                ["آیا می خواهید لوگو خود را در موشن گرافیک قرار دهید؟ "]:
                  typetime,
              });
            } else {
              setErr("نیاز است که مدت زمان مدنظر خود را وارد کنید");
              setIsErr(true);
            }
          }
        }
        if (count == 10) {
          setCount(count + 1);
          setIsErr(false);
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
            typeData.push({ ["موضوع کلی مد نظر شما چیست؟"]: subject.subject });
            if (typeInput.character == false) {
              typeData.push({
                ["آیا در موشن خود می خواهید از کاراکتر یا شخصیتی استفاده کنید؟"]:
                  "خیر",
              });
            } else if (typeInput.character == true) {
              typeData.push({
                ["آیا در موشن خود می خواهید از کاراکتر یا شخصیتی استفاده کنید؟"]:
                  "بله",
              });
            }
            typeData.push({ ["آیا افکت صوتی خاصی مدنظرتون هست؟"]: typedel });
            if (typedel === "بله") {
              typeData.push({
                ["آیا افکت صوتی خاصی مدنظرتون هست؟"]: baseaudio,
              });
            }
            typeData.push({
              ["آیا موسیقی خاصی دارید که بخواهید در موشن به کار ببرید ؟"]:
                typeef,
            });
            if (typeef === "بله") {
              typeData.push({
                ["آیا موسیقی خاصی دارید که بخواهید در موشن به کار ببرید ؟"]:
                  baseeffect,
              });
            }
            typeData.push(audience);
            audience.map((element) => {
              if (Object.values(element) == "سایر") {
                typeData.push({
                  ["موشن شما قرار است در چه بستری نمایش داده شود ؟"]: typeSize,
                });
              }
            });
            for (let [key, value] of Object.entries(selectt)) {
              typeData.push({
                ["هدف شما از ساخت این موشن چیست؟"]: value.value,
              });
            }
            selectt.map((element) => {
              if (element.value == "سایر") {
                typeData.push({ ["هدف شما از ساخت این موشن چیست؟"]: scttext });
              }
            });
            typeData.push(addressed);
            addressed.map((element) => {
              if (element == "سایر") {
                typeData.push({ ["مخاطبان شما چه افرادی هستند؟"]: delivery });
              }
            });
            typeData.push({
              ["نمونه های خاصی اگر مدنظرتون هست آپلود کنید."]: baseLogo,
            });

            typeData.push({ ["توضیحات آپلود فایل"]: desfile });
            typeData.push({ ["فایل آپلود شده"]: baseImage });
            setCount(count + 1);
            setIsErr(false);
            window.localStorage.setItem(
              "motion",
              JSON.stringify({ ["پرسشنامه موشن گرافیک"]: typeData })
            );
          } else {
            setErr("لطفا فایل خود را آپلود کنید");
            setIsErr(true);
          }
        }
      } else {
        if (count == 3) {
          if (Object.keys(typedel).length != 0) {
            if (typedel === "بله") {
              if (Object.keys(baseaudio).length != 0) {
                setCount(count + 1);
                setIsErr(false);
              } else {
                setErr("لطفا فایل خود را وارد کنید.");
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
          if (Object.keys(typeef).length != 0) {
            if (typeef === "بله") {
              if (Object.keys(baseeffect).length != 0) {
                setCount(count + 1);
                setIsErr(false);
              } else {
                setErr("لطفا فایل خود را وارد کنید.");
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
          if (Object.keys(audience).length != 0) {
            let find = audience.filter(
              (element) => Object.values(element) == "سایر"
            );
            if (find.length != 0) {
              if (Object.keys(typeSize).length != 0) {
                setCount(count + 1);
                setIsErr(false);
              } else {
                setErr("لطفا بستر نمایش مونشن خود را بنویسید");
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
        if (count == 6) {
          if (Object.keys(selectt).length != 0) {
            let find = selectt.filter((element) => element.value == "سایر");
            if (find.length != 0) {
              if (Object.keys(scttext).length != 0) {
                setCount(count + 1);
                setIsErr(false);
              } else {
                setErr("لطفا هدف مورد نظر خود را بنویسید.");
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

        if (count == 7) {
          if (Object.keys(addressed).length != 0) {
            let find = addressed.filter(
              (element) => Object.values(element) == "سایر"
            );
            if (find.length != 0) {
              if (Object.keys(delivery).length != 0) {
                setCount(count + 1);
                setIsErr(false);
              } else {
                setErr("لطفا مخاطبان خود را بنویسید");
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
          if (gender == false) {
            typeData.push({
              ["چند دقیقه مد نظر شما هست؟"]: "خیر",
            });
            setCount(count + 1);
            setIsErr(false);
          } else {
            if (Object.keys(typetime).length != 0) {
              setCount(count + 1);
              setIsErr(false);
              typeData.push({
                ["چند دقیقه مد نظر شما هست؟"]: "بله",
              });
              typeData.push({
                ["آیا می خواهید لوگو خود را در موشن گرافیک قرار دهید؟ "]:
                  typetime,
              });
            } else {
              setErr("نیاز است که مدت زمان مدنظر خود را وارد کنید");
              setIsErr(true);
            }
          }
        }
        if (count == 9) {
          setCount(count + 1);
          setIsErr(false);
        }
        if (count == 10) {
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

        if (count == 11) {
          if (Object.keys(baseImage).length != 0) {
            typeData.push({ ["موضوع کلی مد نظر شما چیست؟"]: subject.subject });
            if (typeInput.character == false) {
              typeData.push({
                ["آیا در موشن خود می خواهید از کاراکتر یا شخصیتی استفاده کنید؟"]:
                  "خیر",
              });
            } else if (typeInput.character == true) {
              typeData.push({
                ["آیا در موشن خود می خواهید از کاراکتر یا شخصیتی استفاده کنید؟"]:
                  "بله",
              });
            }
            typeData.push({ ["آیا افکت صوتی خاصی مدنظرتون هست؟"]: typedel });
            if (typedel === "بله") {
              typeData.push({
                ["آیا افکت صوتی خاصی مدنظرتون هست؟"]: baseaudio,
              });
            }
            typeData.push({
              ["آیا موسیقی خاصی دارید که بخواهید در موشن به کار ببرید ؟"]:
                typeef,
            });
            if (typeef === "بله") {
              typeData.push({
                ["آیا موسیقی خاصی دارید که بخواهید در موشن به کار ببرید ؟"]:
                  baseeffect,
              });
            }
            typeData.push(audience);
            audience.map((element) => {
              if (Object.values(element) == "سایر") {
                typeData.push({
                  ["موشن شما قرار است در چه بستری نمایش داده شود ؟"]: typeSize,
                });
              }
            });
            for (let [key, value] of Object.entries(selectt)) {
              typeData.push({
                ["هدف شما از ساخت این موشن چیست؟"]: value.value,
              });
            }
            selectt.map((element) => {
              if (element.value == "سایر") {
                typeData.push({ ["هدف شما از ساخت این موشن چیست؟"]: scttext });
              }
            });
            typeData.push(addressed);
            addressed.map((element) => {
              if (element == "سایر") {
                typeData.push({ ["مخاطبان شما چه افرادی هستند؟"]: delivery });
              }
            });
            typeData.push({
              ["نمونه های خاصی اگر مدنظرتون هست آپلود کنید."]: baseLogo,
            });
            typeData.push({ ["توضیحات آپلود فایل"]: desfile });
            typeData.push({ ["فایل آپلود شده"]: baseImage });
            setCount(count + 1);
            setIsErr(false);
            window.localStorage.setItem(
              "motion",
              JSON.stringify({ ["پرسشنامه موشن گرافیک"]: typeData })
            );
          } else {
            setErr("لطفا فایل خود را آپلود کنید");
            setIsErr(true);
          }
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

export default Motion;
