import React from "react";
import JCalendar from "reactjs-persian-calendar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useForm } from "react-hook-form";

const Catalog = () => {
  const [count, setCount] = React.useState(0);
  const [fileName, setFilename] = React.useState("");
  const [isErr, setIsErr] = React.useState(false);
  const [err, setErr] = React.useState("");
  const [typetime, setTypeTime] = React.useState("");
  const [typeInput, setTypeInput] = React.useState({
    digital: false,
    fiziki: false,
    a3: false,
    a5: false,
    a4: false,
    other: false,
    lt1: false,
    lt2: false,
    lt3: false,
    lt4: false,
    virastar: false,
    timeout: false,
    highlight: false,
    scenario: false,
    text: false,
  });
  const [typeData, setTypeData] = React.useState([]);
  const [baseLogo, setBaseLogo] = React.useState("");
  const [logoName, setLogoname] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [date, setDate] = React.useState({});
  const [desfile, setDesfile] = React.useState("");
  const [baseImage, setBaseImage] = React.useState("");
  const [subject, setSubject] = React.useState({
    subject: "",
    address: "",
    subjectOne: "",
  });
  const [language, setLanguage] = React.useState({});
  const [baseSample, setBaseSample] = React.useState([]);
  const [sampleName, setSamplename] = React.useState([]);
  const [effect, setEffect] = React.useState([]);
  const [target, setTarget] = React.useState("");

  const timechange = (e) => {
    setTypeTime(e.target.value);
  };

  const subjectchange = (e) => {
    setSubject({ ...subject, subject: e.target.value });
  };

  const addresschange = (e) => {
    setSubject({ ...subject, address: e.target.value });
  };

  const subjectchangeone = (e) => {
    setSubject({ ...subject, subjectOne: e.target.value });
  };

  const targetchange = (e) => {
    setTarget(e.target.value);
  };

  let sjt;
  const [scttext, setStjText] = React.useState("");

  const sctTextchange = (e) => {
    setStjText(e.target.value);
  };

  if (target === "سایر") {
    sjt = (
      <input
        dir="rtl"
        type="text"
        name="subject-time-tr"
        style={{ marginTop: "20px" }}
        value={scttext}
        onChange={sctTextchange}
        placeholder="موضوع طراحی کاتالوگ شما چیست؟"
      />
    );
  }

  const [lantext, setLanName] = React.useState("");
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

  const uploadImage = async (e) => {
    setFilename(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const uploadSample = async (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      let name = sampleName.push(e.target.files[i].name);
      const file = e.target.files[i];
      baseSample.push(await convertBase64(file));
      setEffect(name);
    }
  };

  const uploadlogo = async (e) => {
    setLogoname(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseLogo(base64);
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
      <h3>{count + 1}- نام شرکت شما چیست؟</h3>
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
      <h3>{count + 1}- معرفی مختصری از شرکت خود را بنویسید.</h3>
      <div className="field ">
        <div className="ui left icon input ">
          <textarea
            dir="rtl"
            type="text"
            name="معرفی مختصری از شرکت خود را بنویسید."
            value={subject.subject}
            onChange={subjectchange}
            placeholder="معرفی مختصری از شرکت خود را بنویسید."
          />
        </div>
      </div>
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>
        {count + 1}- اگر سایت یا صفحه اجتماعی دارید آدرس آن ها را ذکر کنید.
      </h3>
      <div className="field ">
        <div className="ui left icon input ">
          <textarea
            dir="rtl"
            type="text"
            name="اگر سایت یا صفحه اجتماعی دارید آدرس آن ها را ذکر کنید."
            value={subject.address}
            onChange={addresschange}
            placeholder="اگر سایت یا صفحه اجتماعی دارید آدرس آن ها را ذکر کنید."
          />
        </div>
      </div>
    </div>,
    <div>
      <div
        className="equal width fields"
        dir="rtl"
        style={{ alignItems: "center" }}
      >
        <div className="field " style={{ width: "80%" }}>
          <h3>{count + 1}- آیا لوگو دارید؟</h3>
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
          <h3>{count + 1}- آیا متن دارید؟</h3>
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
      <h3>{count + 1} - تصاویر موردنظرتان برای درج در کاتالوگ را آپلود کنید</h3>
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

  if (text == false) {
    components.splice(
      5,
      0,
      <div>
        <h3>
          {count + 1}- هدف شما از طراحی کاتالوگ چیست؟ (به عنوان نمونه: ارائه در
          نمایشگاه یا قراردادن در دفتر شرکت برای مطالعه میهمانان)
        </h3>
        <div className="field ">
          <div className="ui left icon input ">
            <textarea
              dir="rtl"
              type="text"
              name="هدف شما از طراحی کاتالوگ چیست؟"
              value={subject.subjectOne}
              onChange={subjectchangeone}
              placeholder="هدف شما از طراحی کاتالوگ چیست؟"
            />
          </div>
        </div>
        {isErr ? <p className="err-paragraph">{err}</p> : null}
      </div>
    );
    components.splice(
      6,
      0,
      <div>
        <h3>{count + 1}- موضوع طراحی کاتالوگ شما چیست؟</h3>
        <div className="field" style={{ width: "100%" }}>
          <select value={target} onChange={targetchange}>
            <option hidden selected>
              موضوع طراحی کاتالوگ شما چیست؟
            </option>
            <option value="آموزشی">آموزشی</option>
            <option value="تبلیغات">تبلیغات</option>
            <option value="فرهنگ سازی">فرهنک سازی</option>
            <option value="ترویج علم">ترویج علم</option>
            <option value="اطلاع رسانی">اطلاع رسانی</option>
            <option value="ارائه">ارائه</option>
            <option value="مذهبی">مذهبی</option>
            <option value="معرفی محصول">معرفی محصول</option>
            <option value="سایر">سایر</option>
          </select>
        </div>
        {sjt}
        {isErr ? <p className="err-paragraph">{err}</p> : null}
      </div>
    );
    components.splice(
      7,
      0,
      <div>
        <h3>{count + 1}- زبان مدنظر شما برای طراحی کاتالوگ چیست؟</h3>
        <div className="ui three columnd doubling grid top-grid">
          <div className="column selected-label">
            <label>
              <input
                type="radio"
                name="زبان محتوای بروشور خود را انتخاب کنید"
                onChange={radiochangel}
                checked={language === "فارسی"}
                value="فارسی"
              />
              <span>فارسی</span>
            </label>
          </div>
          <div className="column selected-label">
            <label>
              <input
                type="radio"
                name="زبان محتوای بروشور خود را انتخاب کنید"
                onChange={radiochangel}
                checked={language === "انگلیسی"}
                value="انگلیسی"
              />
              <span>انگلیسی</span>
            </label>
          </div>
          <div className="column selected-label">
            <label>
              <input
                type="radio"
                name="زبان محتوای بروشور خود را انتخاب کنید"
                onChange={radiochangel}
                checked={language === "فرانسه"}
                value="فرانسه"
              />
              <span>فرانسه</span>
            </label>
          </div>
          <div className="column selected-label">
            <label>
              <input
                type="radio"
                name="زبان محتوای بروشور خود را انتخاب کنید"
                onChange={radiochangel}
                checked={language === "چینی"}
                value="چینی"
              />
              <span>چینی</span>
            </label>
          </div>
          <div className="column selected-label">
            <label>
              <input
                type="radio"
                name="زبان محتوای بروشور خود را انتخاب کنید"
                onChange={radiochangel}
                checked={language === "ژاپنی"}
                value="ژاپنی"
              />
              <span>ژاپنی</span>
            </label>
          </div>
          <div className="column selected-label">
            <label>
              <input
                type="radio"
                name="زبان محتوای بروشور خود را انتخاب کنید"
                onChange={radiochangel}
                checked={language === "کره ای"}
                value="کره ای"
              />
              <span>کره ای</span>
            </label>
          </div>
          <div className="column selected-label">
            <label>
              <input
                type="radio"
                name="زبان محتوای بروشور خود را انتخاب کنید"
                onChange={radiochangel}
                checked={language === "ایتالیایی"}
                value="ایتالیایی"
              />
              <span>ایتالیایی</span>
            </label>
          </div>
          <div className="column selected-label">
            <label>
              <input
                type="radio"
                name="زبان محتوای بروشور خود را انتخاب کنید"
                onChange={radiochangel}
                checked={language === "ترکی"}
                value="ترکی"
              />
              <span>ترکی</span>
            </label>
          </div>
          <div className="column selected-label">
            <label>
              <input
                type="radio"
                name="زبان محتوای بروشور خود را انتخاب کنید"
                onChange={radiochangel}
                checked={language === "اسپانیایی"}
                value="اسپانیایی"
              />
              <span>اسپانیایی</span>
            </label>
          </div>
          <div className="column selected-label">
            <label>
              <input
                type="radio"
                name="زبان محتوای بروشور خود را انتخاب کنید"
                onChange={radiochangel}
                checked={language === "آلمانی"}
                value="آلمانی"
              />
              <span>آلمانی</span>
            </label>
          </div>
          <div className="column selected-label">
            <label>
              <input
                type="radio"
                name="زبان محتوای بروشور خود را انتخاب کنید"
                onChange={radiochangel}
                checked={language === "سایر"}
                value="سایر"
              />
              <span>سایر</span>
            </label>
          </div>
        </div>
        {otherlan}
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
        setErr("نیاز است نام شرکت خود را بنویسید.");
        setIsErr(true);
      }
    }
    if (count == 1) {
      if (Object.keys(subject.subject).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("نیاز است که معرفی مختصری از شرکت خود را بنویسید.");
        setIsErr(true);
      }
    }
    if (count == 2) {
      setCount(count + 1);
      setIsErr(false);
    }
    if (count == 3) {
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
    if (count == 4) {
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
    if (text == false) {
      if (count == 5) {
        if (Object.keys(subject.subjectOne).length != 0) {
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("لطفا هدف خود را از طراحی کاتالوگ را بنویسید.");
          setIsErr(true);
        }
      }

      if (count == 6) {
        if (Object.keys(target).length != 0) {
          if (target === "سایر") {
            if (Object.keys(scttext).length != 0) {
              setCount(count + 1);
              setIsErr(false);
            } else {
              setErr("لطفا موضوع مورد نظر خود را بنویسید");
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

      if (count == 8) {
        if (Object.keys(baseLogo).length != 0) {
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("لطفا فایل خود را آپلود کنید");
          setIsErr(true);
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
          typeData.push({ ["نام شرکت خود را بنویسید."]: typetime });
          typeData.push({
            ["معرفی مختصری از شرکت خود را بنویسید."]: subject.subject,
          });
          typeData.push({
            ["اگر سایت یا صفحه اجتماعی دارید آدرس آن ها را ذکر کنید."]:
              subject.address,
          });
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
          typeData.push({
            ["هدف شما از طراحی کاتالوگ چیست؟"]: subject.subjectOne,
          });
          typeData.push({ ["موضوع طراحی کاتالوگ شما چیست؟"]: target });
          if (target === "سایر") {
            typeData.push({ ["موضوع طراحی کاتالوگ شما چیست؟"]: scttext });
          }
          typeData.push({ ["زبان متن شما چیست؟"]: language });
          if (language === "سایر") {
            typeData.push({ ["زبان متن شما چیست؟"]: lantext });
          }
          typeData.push({
            ["تصاویر موردنظرتان برای درج در کاتالوگ را آپلود کنید"]: baseLogo,
          });
          typeData.push({
            ["نمونه های خاصی اگر مدنظرتون هست آپلود کنید."]: baseSample,
          });

          typeData.push({ ["توضیحات آپلود فایل"]: desfile });
          typeData.push({ ["فایل آپلود شده"]: baseImage });
          window.localStorage.setItem(
            "catalog",
            JSON.stringify({ ["پرسشنامه کاتولوگ"]: typeData })
          );
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("لطفا فایل خود را آپلود کنید");
          setIsErr(true);
        }
      }
    } else {
      if (count == 5) {
        if (Object.keys(baseLogo).length != 0) {
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("لطفا فایل خود را آپلود کنید");
          setIsErr(true);
        }
      }

      if (count == 6) {
        setCount(count + 1);
        setIsErr(false);
      }

      if (count == 7) {
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

      if (count == 8) {
        if (Object.keys(baseImage).length != 0) {
          typeData.push({ ["نام شرکت خود را بنویسید."]: typetime });
          typeData.push({
            ["معرفی مختصری از شرکت خود را بنویسید."]: subject.subject,
          });
          typeData.push({
            ["اگر سایت یا صفحه اجتماعی دارید آدرس آن ها را ذکر کنید."]:
              subject.address,
          });
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
          typeData.push({
            ["تصاویر موردنظرتان برای درج در کاتالوگ را آپلود کنید"]: baseLogo,
          });
          typeData.push({
            ["نمونه های خاصی اگر مدنظرتون هست آپلود کنید."]: baseSample,
          });

          typeData.push({ ["توضیحات آپلود فایل"]: desfile });
          typeData.push({ ["فایل آپلود شده"]: baseImage });
          window.localStorage.setItem(
            "catalog",
            JSON.stringify({ ["پرسشنامه کاتولوگ"]: typeData })
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

export default Catalog;
