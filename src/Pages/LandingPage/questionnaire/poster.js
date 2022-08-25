import React from "react";
import JCalendar from "reactjs-persian-calendar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useForm } from "react-hook-form";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

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
  const [typeData, setTypeData] = React.useState([]);
  const [audience, setAudience] = React.useState([]);
  const [typeSize, setSize] = React.useState([]);
  const [desfile, setDesfile] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [baseImage, setBaseImage] = React.useState("");
  const [baseallimage, setAllimage] = React.useState([]);
  const [baseSample, setBaseSample] = React.useState([]);
  const [fileName, setFilename] = React.useState("");
  const [baseLogo, setBaseLogo] = React.useState("");
  const [basepodcast, setBasepodcast] = React.useState("");
  const [podName, setPodname] = React.useState("");
  const [allName, setAllname] = React.useState([]);
  const [sampleName, setSamplename] = React.useState([]);
  const [logoName, setLogoname] = React.useState("");
  const [date, setDate] = React.useState({});
  const [isErr, setIsErr] = React.useState(false);
  const [err, setErr] = React.useState("");
  const [origin, setOrigin] = React.useState("");
  const [language, setLanguage] = React.useState({});
  const [effect, setEffect] = React.useState([]);
  const [effects, setEffects] = React.useState([]);

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

  const uploadallimage = async (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      let name = allName.push(e.target.files[i].name);
      const file = e.target.files[i];
      baseallimage.push(await convertBase64(file));
      setEffect(name);
    }
  };

  const uploadSample = async (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      let name = sampleName.push(e.target.files[i].name);
      const file = e.target.files[i];
      baseSample.push(await convertBase64(file));
      setEffects(name);
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

  const uploadlogo = async (e) => {
    setLogoname(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseLogo(base64);
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

  const radiochange = (e) => {
    if (e.target.value == "A1") {
      setTypeInput({ ...typeInput, a1: e.target.checked });
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
    } else if (e.target.value == "A2") {
      setTypeInput({ ...typeInput, a2: e.target.checked });
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
    } else if (e.target.value == "A3") {
      setTypeInput({ ...typeInput, a3: e.target.checked });
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

  const subjectchange = (e) => {
    setSubject(e.target.value);
  };

  const [texts, setTexts] = React.useState("");
  const sctTextschange = (e) => {
    setTexts(e.target.value);
  };

  let linksubject;

  if (subject == "سایر") {
    linksubject = (
      <input
        dir="rtl"
        type="text"
        name="subject-time-tr"
        style={{ marginTop: "20px" }}
        value={texts}
        onChange={sctTextschange}
        placeholder="موضوع پوستر شما چیست ؟"
      />
    );
  }

  const radiochangel = (e) => {
    setLanguage(e.target.value);
  };

  const [textlan, setTextlan] = React.useState("");
  const sctTextlanchange = (e) => {
    setTextlan(e.target.value);
  };

  let linklanguage;

  if (language == "سایر") {
    linklanguage = (
      <input
        dir="rtl"
        type="text"
        name="subject-time-tr"
        style={{ marginTop: "20px" }}
        value={textlan}
        onChange={sctTextlanchange}
        placeholder="موضوع پوستر شما چیست ؟"
      />
    );
  }

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
      <h3>{count + 1} - متن خود را آپلود کنید.</h3>
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
              uploadlogo(e);
            }}
          />
        </label>
      </div>
      {Object.keys(baseLogo).length != 0 ? (
        <p className="save-alert">فایل شما با نام "{logoName}" ذخیره شد.</p>
      ) : null}
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- پوستر خود را در چه ابعادی می خواهید؟</h3>
      <div className="ui three columnd doubling grid top-grid" dir="rtl">
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="پوستر خود را در چه ابعادی می خواهید؟"
              onChange={radiochange}
              checked={typeInput.a3}
              value="A3"
            />
            <span>
              <i className="file alternate outline icon"></i>
              A3
            </span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="پوستر خود را در چه ابعادی می خواهید؟"
              onChange={radiochange}
              checked={typeInput.a2}
              value="A2"
            />
            <span>
              <i className="file alternate outline icon"></i>
              A2
            </span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="پوستر خود را در چه ابعادی می خواهید؟"
              onChange={radiochange}
              checked={typeInput.a1}
              value="A1"
            />
            <span>
              <i className="file alternate outline icon"></i>
              A1
            </span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="پوستر خود را در چه ابعادی می خواهید؟"
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
      <h3>{count + 1}- موضوع پوستر شما چیست؟</h3>
      <div className="field" style={{ width: "100%" }}>
        <select value={subject} onChange={subjectchange}>
          <option hidden selected>
            موضوع پوستر شما چیست؟
          </option>
          <option value="آموزشی">آموزشی</option>
          <option value="تبلیغات">تبلیغات</option>
          <option value="فرهنگ سازی">فرهنگ سازی</option>
          <option value="ترویج علم">ترویج علم</option>
          <option value="اطلاع رسانی">اطلاع رسانی</option>
          <option value="سایر">سایر</option>
        </select>
      </div>
      {linksubject}
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
      {linklanguage}
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>
        {" "}
        {count + 1}- اگر میخواهید عکس یا تصویر خاصی در پوستر به کار رود آن را
        آپلود کنید.
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
            accept=".jpg, .jpeg, .png, .pdf,.doc,.docx, .psd, .zip"
            onChange={(e) => {
              uploadallimage(e);
            }}
            multiple
          />
        </label>
      </div>
      {Object.keys(baseallimage).length != 0
        ? allName.map((logo) => {
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
            multiple
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
      if (Object.keys(baseLogo).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("لطفا فایل متن خود را آپلود کنید");
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
      if (Object.keys(subject).length != 0) {
        if (subject == "سایر") {
          if (Object.keys(texts).length != 0) {
            setCount(count + 1);
            setIsErr(false);
          } else {
            setErr("لطفا موضوع پوستر خود را بنویسید");
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
      if (Object.keys(language).length != 0) {
        if (language == "سایر") {
          if (Object.keys(textlan).length != 0) {
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
    if (count == 6) {
      setCount(count + 1);
      setIsErr(false);
    }
    if (count == 7) {
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
        typeData.push({ ["متن خود را آپلود کنید."]: baseLogo });
        typeData.push({ ["موضوع پوستر شما چیست؟"]: subject });
        if (subject == "سایر") {
          typeData.push({ ["موضوع پوستر شما چیست؟"]: texts });
        }
        typeData.push({ ["پوستر خود را در چه ابعادی می خواهید"]: typeSize });
        if (find1.length != 0) {
          typeData.push({
            ["پوستر خود را در چه ابعادی می خواهید"]: text,
          });
        }
        typeData.push(subject);
        typeData.push({
          ["زبان مد نظر خود را برای طراحی انتخاب کنید"]: language,
        });
        if (language === "سایر") {
          typeData.push({
            ["زبان مد نظر خود را برای طراحی انتخاب کنید"]: textlan,
          });
        }
        typeData.push({
          ["اگر میخواهید عکس یا تصویر خاصی در پوستر به کار رود آن را آپلود کنید."]:
            baseallimage,
        });
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
