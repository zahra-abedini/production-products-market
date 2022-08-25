import React from "react";
import JCalendar from "reactjs-persian-calendar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useForm } from "react-hook-form";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

const Logo = () => {
  const [typeInput, setTypeInput] = React.useState({
    newlogo: false,
    tarahilogo: false,
    logotype: false,
    image: false,
    abstract: false,
    monogram: false,
    solid: false,
    character: false,
    hybrid: false,
    scenario: false,
    timeout: false,
  });
  const [count, setCount] = React.useState(0);
  const [typetime, setTypeTime] = React.useState("");
  const [instatype, setinstatype] = React.useState("");
  const [raghib, setraghib] = React.useState("");
  const [typeData, setTypeData] = React.useState([]);
  const [subject, setSubject] = React.useState({
    subject: "",
  });
  const [isErr, setIsErr] = React.useState(false);
  const [err, setErr] = React.useState("");
  const [color, setColor] = useColor("hex", "#121212");
  const [nelogo, setNelogo] = React.useState([]);
  const [baseImage, setBaseImage] = React.useState("");
  const [baseLogo, setBaseLogo] = React.useState([]);
  const [fileName, setFilename] = React.useState("");
  const [basepodcast, setBasepodcast] = React.useState("");
  const [podName, setPodname] = React.useState("");
  const [logoName, setLogoname] = React.useState([]);
  const [slogan, setSlogan] = React.useState("");
  const [limit, setLimit] = React.useState("");
  const [typePod, setTypePod] = React.useState([]);
  const [description, setDescription] = React.useState("");
  const [typeSize, setSize] = React.useState({});
  const [date, setDate] = React.useState({});
  const [desfile, setDesfile] = React.useState("");
  const [lantext, setLanName] = React.useState("");
  const [effect, setEffect] = React.useState([]);

  const timechange = (e) => {
    setTypeTime(e.target.value);
  };

  const subjectchange = (e) => {
    setSubject({ ...subject, subject: e.target.value });
  };

  const instagramchange = (e) => {
    setinstatype(e.target.value);
  };

  const raghibchange = (e) => {
    setraghib(e.target.value);
  };

  const limitchange = (e) => {
    setLimit(e.target.value);
  };

  const checkboxchange = (e) => {
    if (e.target.value == "لوگو جدید") {
      setTypeInput({ ...typeInput, newlogo: e.target.checked });
      if (e.target.checked == true) {
        nelogo.push({ [e.target.name]: e.target.value });
      } else {
        setTypeData(
          nelogo.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    } else if (e.target.value == "بازطراحی لوگو") {
      setTypeInput({ ...typeInput, tarahilogo: e.target.checked });
      if (e.target.checked == true) {
        nelogo.push({ [e.target.name]: e.target.value });
      } else {
        setTypeData(
          nelogo.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    }
  };

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

  const uploadlogo = async (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      let name = logoName.push(e.target.files[i].name);
      const file = e.target.files[i];
      baseLogo.push(await convertBase64(file));
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

  const sloganchange = (e) => {
    setSlogan(e.target.value);
  };

  const checkboxtypechange = (e) => {
    if (e.target.value == "لوگوتایپ") {
      setTypeInput({ ...typeInput, logotype: e.target.checked });
      if (e.target.checked == true) {
        typePod.push({ [e.target.name]: e.target.value });
      } else {
        setTypePod(
          typePod.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    } else if (e.target.value == "تصویری") {
      setTypeInput({ ...typeInput, image: e.target.checked });
      if (e.target.checked == true) {
        typePod.push({ [e.target.name]: e.target.value });
      } else {
        setTypePod(
          typePod.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    } else if (e.target.value == "انتزاعی") {
      setTypeInput({ ...typeInput, abstract: e.target.checked });
      if (e.target.checked == true) {
        typePod.push({ [e.target.name]: e.target.value });
      } else {
        setTypePod(
          typePod.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    } else if (e.target.value == "مونوگرام") {
      setTypeInput({ ...typeInput, monogram: e.target.checked });
      if (e.target.checked == true) {
        typePod.push({ [e.target.name]: e.target.value });
      } else {
        setTypePod(
          typePod.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    } else if (e.target.value == "سه بعدی") {
      setTypeInput({ ...typeInput, solid: e.target.checked });
      if (e.target.checked == true) {
        typePod.push({ [e.target.name]: e.target.value });
      } else {
        setTypeData(
          typePod.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    } else if (e.target.value == "شخصیت") {
      setTypeInput({ ...typeInput, character: e.target.checked });
      if (e.target.checked == true) {
        typePod.push({ [e.target.name]: e.target.value });
      } else {
        setTypeData(
          typePod.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    } else if (e.target.value == "ترکیبی") {
      setTypeInput({ ...typeInput, hybrid: e.target.checked });
      if (e.target.checked == true) {
        typePod.push({ [e.target.name]: e.target.value });
      } else {
        setTypeData(
          typePod.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    }
  };

  const lanTextchange = (e) => {
    setLanName(e.target.value);
  };
  let otherlan;
  if (typeSize === "سایر") {
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

  const radiochange = (e) => {
    setSize(e.target.value);
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
      <h3>{count + 1}- نام شرکت یا مجموعه خود را بنویسید.</h3>
      <input
        dir="rtl"
        type="text"
        name="نام شرکت یا مجموعه خود را بنویسید."
        value={typetime}
        onChange={timechange}
        placeholder="نام شرکت یا مجموعه خود را بنویسید."
      />
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- معرفی مختصری از شرکت یا مجموعه خود را بنویسید.</h3>
      <div className="field ">
        <div className="ui left icon input ">
          <textarea
            dir="rtl"
            type="text"
            name="معرفی مختصری از شرکت یا مجموعه خود را بنویسید."
            value={subject.subject}
            onChange={subjectchange}
            placeholder="معرفی مختصری از شرکت یا مجموعه خود را بنویسید."
          />
        </div>
      </div>
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- آدرس صفحه اینستاگرام خود را وارد کنید.</h3>
      <input
        dir="rtl"
        type="text"
        name="آدرس صفحه اینستاگرام خود را وارد کنید."
        value={instatype}
        onChange={instagramchange}
        onkeypress="return /[a-z0-9]/i.test(event.key)"
        placeholder="آدرس صفحه اینستاگرام خود را وارد کنید."
      />
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- رنگ مورد نظر خود را از پالت رنگی انتخاب کنید.</h3>
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
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- رقیب خود را نام ببرید.</h3>
      <input
        dir="rtl"
        type="text"
        name="رقیب خود را نام ببرید."
        value={raghib}
        onChange={raghibchange}
        placeholder="رقیب خود را نام ببرید."
      />
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div dir="rtl">
      <h3>{count + 1}- در حال بازطراحی لوگو خود هستید یا طراحی لوگو جدید؟</h3>
      <div className="ui two columnd doubling grid top-grid">
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="در حال بازطراحی لوگو خود هستید یا طراحی لوگو جدید؟"
              value="لوگو جدید"
              onChange={checkboxchange}
              checked={typeInput.newlogo}
            />
            <span>لوگو جدید</span>
          </label>
        </div>

        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="در حال بازطراحی لوگو خود هستید یا طراحی لوگو جدید؟"
              value="بازطراحی لوگو"
              onChange={checkboxchange}
              checked={typeInput.tarahilogo}
            />
            <span>بازطراحی لوگو</span>
          </label>
        </div>
      </div>
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- در صورت داشتن شعار آن را بیان کنید.</h3>
      <input
        dir="rtl"
        type="text"
        name="در صورت داشتن شعار آن را بیان کنید."
        value={slogan}
        onChange={sloganchange}
        placeholder="در صورت داشتن شعار آن را بیان کنید."
      />
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- سه نقطه قوت از مجموعه خود را ذکر کنید.</h3>
      <input
        dir="rtl"
        type="text"
        name="سه نقطه قوت از مجموعه خود را ذکر کنید.."
        value={limit}
        onChange={limitchange}
        placeholder="سه نقطه قوت از مجموعه خود را ذکر کنید."
      />
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div dir="rtl">
      <h3>{count + 1}- نوع لوگو خود را مشخص کنید.</h3>
      <div className="ui three columnd doubling grid top-grid">
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="نوع لوگو خود را مشخص کنید."
              value="لوگوتایپ"
              onChange={checkboxtypechange}
              checked={typeInput.logotype}
            />
            <span>لوگوتایپ (تایپوگرافی)</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="نوع لوگو خود را مشخص کنید."
              value="تصویری"
              onChange={checkboxtypechange}
              checked={typeInput.image}
            />
            <span>تصویری</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="نوع لوگو خود را مشخص کنید."
              value="انتزاعی"
              onChange={checkboxtypechange}
              checked={typeInput.abstract}
            />
            <span>انتزاعی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="نوع لوگو خود را مشخص کنید."
              value="مونوگرام"
              onChange={checkboxtypechange}
              checked={typeInput.monogram}
            />
            <span>مونوگرام (علائم اختصاری)</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="نوع لوگو خود را مشخص کنید."
              value="سه بعدی"
              onChange={checkboxtypechange}
              checked={typeInput.solid}
            />
            <span>سه بعدی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="نوع لوگو خود را مشخص کنید."
              value="شخصیت"
              onChange={checkboxtypechange}
              checked={typeInput.character}
            />
            <span>شخصیت</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="نوع لوگو خود را مشخص کنید."
              value="ترکیبی"
              onChange={checkboxtypechange}
              checked={typeInput.hybrid}
            />
            <span>ترکیبی</span>
          </label>
        </div>
      </div>
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- زبانی که میخواهید در طراحی لوگو به کار رود.</h3>
      <div className="ui three columnd doubling grid top-grid">
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبانی که میخواهید در طراحی لوگو به کار رود."
              onChange={radiochange}
              checked={typeSize === "فارسی"}
              value="فارسی"
            />
            <span>فارسی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبانی که میخواهید در طراحی لوگو به کار رود."
              onChange={radiochange}
              checked={typeSize === "انگلیسی"}
              value="انگلیسی"
            />
            <span>انگلیسی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبانی که میخواهید در طراحی لوگو به کار رود."
              onChange={radiochange}
              checked={typeSize === "فرانسه"}
              value="فرانسه"
            />
            <span>فرانسه</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبانی که میخواهید در طراحی لوگو به کار رود."
              onChange={radiochange}
              checked={typeSize === "چینی"}
              value="چینی"
            />
            <span>چینی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبانی که میخواهید در طراحی لوگو به کار رود."
              onChange={radiochange}
              checked={typeSize === "ژاپنی"}
              value="ژاپنی"
            />
            <span>ژاپنی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبانی که میخواهید در طراحی لوگو به کار رود."
              onChange={radiochange}
              checked={typeSize === "کره ای"}
              value="کره ای"
            />
            <span>کره ای</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبانی که میخواهید در طراحی لوگو به کار رود."
              onChange={radiochange}
              checked={typeSize === "ایتالیایی"}
              value="ایتالیایی"
            />
            <span>ایتالیایی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبانی که میخواهید در طراحی لوگو به کار رود."
              onChange={radiochange}
              checked={typeSize === "ترکی"}
              value="ترکی"
            />
            <span>ترکی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبانی که میخواهید در طراحی لوگو به کار رود."
              onChange={radiochange}
              checked={typeSize === "اسپانیایی"}
              value="اسپانیایی"
            />
            <span>اسپانیایی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبانی که میخواهید در طراحی لوگو به کار رود."
              onChange={radiochange}
              checked={typeSize === "آلمانی"}
              value="آلمانی"
            />
            <span>آلمانی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبانی که میخواهید در طراحی لوگو به کار رود."
              onChange={radiochange}
              checked={typeSize === "سایر"}
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
      <h3>
        {count + 1} - حداقل 3 نمونه از لوگو های مورد نظرتان را بارگذاری کنید.
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

  let logo = nelogo.filter(
    (element) => Object.values(element) == "بازطراحی لوگو"
  );
  if (logo.length != 0) {
    components.splice(
      6,
      0,
      <div>
        <h3>{count + 1} - لوگو فعلی خود آپلود کنید؟</h3>
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
      if (Object.keys(typetime).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("نیاز است نام مجموعه یا شرکت خود را بنویسید.");
        setIsErr(true);
      }
    }
    if (count == 1) {
      if (Object.keys(subject.subject).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("نیاز است که معرفی مختصری از شرکت یا مجموعه خود را بنویسید.");
        setIsErr(true);
      }
    }
    if (count == 2) {
      if (Object.keys(instatype).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr(" نیاز است آدرس صفحه اینستاگرام خود را وارد کنید.");
        setIsErr(true);
      }
    }
    if (count == 3) {
      setCount(count + 1);
      typeData.push({
        ["رنگ مورد نظر خود را از پالت نگی انتخاب کنید."]: color,
      });
    }
    if (count == 4) {
      if (Object.keys(raghib).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr(" نیاز است رقیب خود را نام ببرید..");
        setIsErr(true);
      }
    }
    if (count == 5) {
      if (Object.keys(nelogo).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("لطفا یک گزینه را انتخاب کنید");
        setIsErr(true);
      }
    }
    if (logo.length != 0) {
      if (count == 6) {
        if (Object.keys(basepodcast).length != 0) {
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("لطفا فایل خود را آپلود کنید");
          setIsErr(true);
        }
      }
      if (count == 7) {
        setCount(count + 1);
        setIsErr(false);
      }
      if (count == 8) {
        if (Object.keys(limit).length != 0) {
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("نیاز است سه نقطه قوت از مجموعه خود را ذکر کنید.");
          setIsErr(true);
        }
      }
      if (count == 9) {
        if (Object.keys(typePod).length != 0) {
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("نیاز است نوع لوگو خود را مشخص کنید.");
          setIsErr(true);
        }
      }
      if (count == 10) {
        if (Object.keys(typeSize).length != 0) {
          if (typeSize === "سایر") {
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
      if (count == 11) {
        if (Object.keys(baseLogo).length != 0) {
          setCount(count + 1);
          setIsErr(false);
        } else if (Object.keys(baseLogo).length < 3) {
          setErr("لطفا حداقل سه نمونه از لوگو مورد نظر خود را آپلود کنید");
          setIsErr(true);
        } else {
          setErr("لطفا فایل خود را آپلود کنید");
          setIsErr(true);
        }
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
          typeData.push({ ["نام شرکت یا مجموعه خود را بنویسید."]: typetime });
          typeData.push({
            ["معرفی مختصری از شرکت یا مجموعه خود را بنویسید."]: subject.subject,
          });
          typeData.push({
            ["آدرس صفحه اینستاگرام خود را وارد کنید."]: instatype,
          });
          typeData.push({ ["رقیب خود را نام ببرید."]: raghib });
          typeData.push(nelogo);
          typeData.push({ ["در صورت داشتن شعار آن را بیان کنید."]: slogan });
          typeData.push({
            ["محدودیت های مورد نظر شما که باید در طراحی لحاظ شود چیست؟"]: limit,
          });
          typeData.push(typePod);
          typeData.push(typeSize);
          if (typeSize === "سایر") {
            typeData.push({ ["زبان متن شما چیست؟"]: lantext });
          }
          typeData.push({
            ["حداقل 3 نمونه از لوگو های مورد نظرتان را بارگذاری کنید."]:
              baseLogo,
          });
          typeData.push({ ["توضیحات آپلود فایل"]: desfile });
          typeData.push({ ["فایل آپلود شده"]: baseImage });
          window.localStorage.setItem(
            "logo",
            JSON.stringify({ ["پرسشنامه لوگو"]: typeData })
          );
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("لطفا فایل خود را آپلود کنید");
          setIsErr(true);
        }
      }
    } else {
      if (count == 6) {
        setCount(count + 1);
        setIsErr(false);
      }
      if (count == 7) {
        if (Object.keys(limit).length != 0) {
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("نیاز است سه نقطه قوت از مجموعه خود را ذکر کنید.");
          setIsErr(true);
        }
      }
      if (count == 8) {
        if (Object.keys(typePod).length != 0) {
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("نیاز است نوع لوگو خود را مشخص کنید.");
          setIsErr(true);
        }
      }
      if (count == 9) {
        if (Object.keys(typeSize).length != 0) {
          if (typeSize === "سایر") {
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
      if (count == 10) {
        if (Object.keys(baseLogo).length != 0) {
          setCount(count + 1);
          setIsErr(false);
        } else if (Object.keys(baseLogo).length < 3) {
          setErr("لطفا حداقل سه نمونه از لوگو مورد نظر خود را آپلود کنید");
          setIsErr(true);
        } else {
          setErr("لطفا فایل خود را آپلود کنید");
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
          typeData.push({ ["نام شرکت یا مجموعه خود را بنویسید."]: typetime });
          typeData.push({
            ["معرفی مختصری از شرکت یا مجموعه خود را بنویسید."]: subject.subject,
          });
          typeData.push({
            ["آدرس صفحه اینستاگرام خود را وارد کنید."]: instatype,
          });
          typeData.push({ ["رقیب خود را نام ببرید."]: raghib });
          typeData.push(nelogo);
          typeData.push({ ["در صورت داشتن شعار آن را بیان کنید."]: slogan });
          typeData.push({
            ["محدودیت های مورد نظر شما که باید در طراحی لحاظ شود چیست؟"]: limit,
          });
          typeData.push(typePod);
          typeData.push(typeSize);
          if (typeSize === "سایر") {
            typeData.push({ ["زبان متن شما چیست؟"]: lantext });
          }
          typeData.push({ ["لوگو فعلی خود آپلود کنید؟"]: basepodcast });
          typeData.push({
            ["حداقل 3 نمونه از لوگو های مورد نظرتان را بارگذاری کنید."]:
              baseLogo,
          });
          typeData.push({ ["توضیحات آپلود فایل"]: desfile });
          typeData.push({ ["فایل آپلود شده"]: baseImage });
          window.localStorage.setItem(
            "logo",
            JSON.stringify({ ["پرسشنامه لوگو"]: typeData })
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

export default Logo;
