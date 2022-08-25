import React from "react";
import JCalendar from "reactjs-persian-calendar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useForm } from "react-hook-form";

const Editing = () => {
  const [count, setCount] = React.useState(0);
  const [typeInput, setTypeInput] = React.useState({
    digital: false,
    fiziki: false,
    a5: false,
    a4: false,
    other: false,
    virastar: false,
    timeout: false,
  });
  const [typeData, setTypeData] = React.useState([]);
  const [subject, setSubject] = React.useState({
    subject: "",
  });
  const [description, setDescription] = React.useState("");
  const [desfile, setDesfile] = React.useState("");
  const [baseImage, setBaseImage] = React.useState("");
  const [fileName, setFilename] = React.useState("");
  const [date, setDate] = React.useState({});
  const [isErr, setIsErr] = React.useState(false);
  const [err, setErr] = React.useState("");
  const [language, setLanguage] = React.useState({});
  const [baseInfo, setBaseInfo] = React.useState("");
  const [infoName, setInfoname] = React.useState("");
  const [lantext, setLanName] = React.useState("");

  let digi;
  let fiz;
  typeData.filter((element) => {
    if (Object.values(element) == "دیجیتال") {
      digi = (
        <>
          <h3>فایل خود را آپلود کنید.</h3>
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
                  uploadInfo(e);
                }}
              />
            </label>
          </div>
        </>
      );
    } else if (Object.values(element) == "فیزیکی") {
      fiz = (
        <p style={{ marginTop: "20px" }}>
          تیم ما به زودی با شما تماس خواهد گرفت
        </p>
      );
    }
  });

  const checkboxchange = (e) => {
    if (e.target.value == "دیجیتال") {
      setTypeInput({ ...typeInput, digital: e.target.checked });
      if (e.target.checked == true) {
        typeData.push({ [e.target.name]: e.target.value });
      } else {
        setTypeData(
          typeData.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    } else if (e.target.value == "فیزیکی") {
      setTypeInput({ ...typeInput, fiziki: e.target.checked });
      if (e.target.checked == true) {
        typeData.push({ [e.target.name]: e.target.value });
      } else {
        setTypeData(
          typeData.filter((element) => {
            if (Object.values(element) != e.target.value) {
              return true;
            }
            return false;
          })
        );
      }
    }
  };

  const subjectchange = (e) => {
    setSubject({ ...subject.subject, subject: e.target.value });
  };

  const lanTextchange = (e) => {
    setLanName(e.target.value);
  };
  let otherlan;
  if (language === "سایر") {
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

  const uploadImage = async (e) => {
    setFilename(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const uploadInfo = async (e) => {
    setInfoname(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseInfo(base64);
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
    <div dir="rtl">
      <h3>{count + 1}- نوع فایل شما چیست؟</h3>
      <div className="ui two columnd doubling grid top-grid">
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="نوع فایل شما چیست؟"
              onChange={checkboxchange}
              value="دیجیتال"
              checked={typeInput.digital}
              required
            />
            <span>دیجیتال</span>
          </label>
        </div>

        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="نوع فایل شما چیست؟"
              onChange={checkboxchange}
              value="فیزیکی"
              checked={typeInput.fiziki}
              required
            />
            <span>فیزیکی</span>
          </label>
        </div>
      </div>
      {digi}
      {fiz}
      {Object.keys(baseInfo).length != 0 ? (
        <p className="save-alert">فایل شما با نام "{infoName}" ذخیره شد.</p>
      ) : null}
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- موضوع کلی متن شما چیست؟</h3>
      <div className="field ">
        <div className="ui left icon input ">
          <textarea
            dir="rtl"
            type="text"
            name="موضوع کلی متن شما چیست؟"
            value={subject.subject}
            onChange={subjectchange}
            placeholder="موضوع فایل خود را وارد کنید"
          />
        </div>
      </div>
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- زبان متن شما چیست؟</h3>
      <div className="ui three columnd doubling grid top-grid">
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبان متن شما چیست؟"
              onChange={radiochangel}
              value="فارسی"
              checked={language === "فارسی"}
            />
            <span>فارسی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبان متن شما چیست؟"
              onChange={radiochangel}
              value="انگلیسی"
              checked={language === "انگلیسی"}
            />
            <span>انگلیسی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبان متن شما چیست؟"
              onChange={radiochangel}
              value="فرانسه"
              checked={language === "فرانسه"}
            />
            <span>فرانسه</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبان متن شما چیست؟"
              onChange={radiochangel}
              value="چینی"
              checked={language === "چینی"}
            />
            <span>چینی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبان متن شما چیست؟"
              onChange={radiochangel}
              value="ژاپنی"
              checked={language === "ژاپنی"}
            />
            <span>ژاپنی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبان متن شما چیست؟"
              onChange={radiochangel}
              value="کره ای"
              checked={language === "کره ای"}
            />
            <span>کره ای</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبان متن شما چیست؟"
              onChange={radiochangel}
              value="ایتالیایی"
              checked={language === "ایتالیایی"}
            />
            <span>ایتالیایی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبان متن شما چیست؟"
              onChange={radiochangel}
              value="ترکی"
              checked={language === "ترکی"}
            />
            <span>ترکی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبان متن شما چیست؟"
              onChange={radiochangel}
              value="اسپانیایی"
              checked={language === "اسپانیایی"}
            />
            <span>اسپانیایی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبان متن شما چیست؟"
              onChange={radiochangel}
              value="آلمانی"
              checked={language === "آلمانی"}
            />
            <span>آلمانی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبان متن شما چیست؟"
              onChange={radiochangel}
              value="سایر"
              checked={language === "سایر"}
            />
            <span>سایر</span>
          </label>
        </div>
      </div>
      {otherlan}
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
      if (Object.keys(typeData).length != 0) {
        typeData.filter((element) => {
          if (Object.values(element) == "دیجیتال") {
            if (Object.keys(baseInfo).length != 0) {
              setCount(count + 1);
              setIsErr(false);
              typeData.push({
                ["فایل شما به چه صورت است ؟"]: baseInfo,
              });
            } else {
              setErr("نیاز است فایل خود را آپلود کنید.");
              setIsErr(true);
            }
          } else if (Object.values(element) == "فیزیکی") {
            setCount(count + 1);
            setIsErr(false);
          }
        });
      } else {
        setErr("لطفا یک گزینه را انتخاب کنید");
        setIsErr(true);
      }
    }
    if (count == 1) {
      if (Object.keys(subject.subject).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("نیاز است که موضوع متن خود را وارد کنید");
        setIsErr(true);
      }
    }
    if (count == 2) {
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
    if (count == 3) {
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

    if (count == 4) {
      typeData.push({ ["موضوع کلی متن شما چیست؟"]: subject.subject });
      typeData.push({ ["زبان متن شما چیست؟"]: language });
      if (language === "سایر") {
        typeData.push({ ["زبان متن شما چیست؟"]: lantext });
      }
      typeData.push({ ["توضیحات آپلود فایل"]: desfile });
      typeData.push({ ["فایل آپلود شده"]: baseImage });
      setCount(count + 1);
      setIsErr(false);
      window.localStorage.setItem(
        "editing",
        JSON.stringify({ ["پرسشنامه ویراستاری"]: typeData })
      );
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

export default Editing;
