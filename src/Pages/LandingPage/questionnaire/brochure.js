import React from "react";
import JCalendar from "reactjs-persian-calendar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useForm } from "react-hook-form";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

const Brochure = () => {
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
  });
  const [typeSize, setSize] = React.useState({});
  const [color, setColor] = useColor("hex", "#121212");
  const [typeData, setTypeData] = React.useState([]);
  const [typedel, setTypeDel] = React.useState({});
  const [baseLogo, setBaseLogo] = React.useState([]);
  const [logoName, setLogoname] = React.useState([]);
  const [effect, setEffect] = React.useState([]);
  const [description, setDescription] = React.useState("");
  const [date, setDate] = React.useState({});
  const [desfile, setDesfile] = React.useState("");
  const [baseImage, setBaseImage] = React.useState("");
  const [subject, setSubject] = React.useState({
    subject: "",
    address: "",
  });
  const [language, setLanguage] = React.useState({});
  const [baseSample, setBaseSample] = React.useState("");
  const [sampleName, setSamplename] = React.useState("");
  const [audience, setAudience] = React.useState([]);
  const [basemotion, setBasemotion] = React.useState("");
  const [motionName, setmotionname] = React.useState("");
  const [lantext, setLanName] = React.useState("");
  const [sizetext, setSizeName] = React.useState("");

  const timechange = (e) => {
    setTypeTime(e.target.value);
  };

  const subjectchange = (e) => {
    setSubject({ ...subject, subject: e.target.value });
  };

  const addresschange = (e) => {
    setSubject({ ...subject, address: e.target.value });
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

  const uploadImage = async (e) => {
    setFilename(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const uploadSample = async (e) => {
    setSamplename(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseSample(base64);
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

  const deliverychange = (e) => {
    setTypeDel(e.target.value);
  };

  const sizeTextchange = (e) => {
    setSizeName(e.target.value);
  };
  let othersize;
  if (typeSize === "سایر") {
    othersize = (
      <input
        dir="rtl"
        type="text"
        name="subject-time-tr"
        style={{ marginTop: "20px" }}
        value={sizetext}
        onChange={sizeTextchange}
        placeholder="قطع بروشور خود را بنویسید."
      />
    );
  }

  const radiochange = (e) => {
    setSize(e.target.value);
  };

  const checkboxchange = (e) => {
    if (e.target.value == "1لت") {
      setTypeInput({ ...typeInput, lt1: e.target.checked });
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
    } else if (e.target.value == "2لت") {
      setTypeInput({ ...typeInput, lt2: e.target.checked });
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
    } else if (e.target.value == "3لت") {
      setTypeInput({ ...typeInput, lt3: e.target.checked });
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
    } else if (e.target.value == "4لت") {
      setTypeInput({ ...typeInput, lt4: e.target.checked });
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
      <h3>{count + 1}- زبان محتوای بروشور خود را انتخاب کنید</h3>
      <div className="ui three columnd doubling grid top-grid">
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبان محتوای بروشور خود را انتخاب کنید"
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
              name="زبان محتوای بروشور خود را انتخاب کنید"
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
              name="زبان محتوای بروشور خود را انتخاب کنید"
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
              name="زبان محتوای بروشور خود را انتخاب کنید"
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
              name="زبان محتوای بروشور خود را انتخاب کنید"
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
              name="زبان محتوای بروشور خود را انتخاب کنید"
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
              name="زبان محتوای بروشور خود را انتخاب کنید"
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
              name="زبان محتوای بروشور خود را انتخاب کنید"
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
              name="زبان محتوای بروشور خود را انتخاب کنید"
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
              name="زبان محتوای بروشور خود را انتخاب کنید"
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
              name="زبان محتوای بروشور خود را انتخاب کنید"
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
      <h3>{count + 1} - محتوای خود را آپلود کنید.</h3>
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
              uploadSample(e);
            }}
          />
        </label>
      </div>
      {Object.keys(baseSample).length != 0 ? (
        <p className="save-alert">فایل شما با نام "{sampleName}" ذخیره شد.</p>
      ) : null}
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- رنگ مورد نظر خود را انتخاب کنید.</h3>
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
      <h3>{count + 1}- نوع بروشور خود را انتخاب کنید.</h3>
      <div className="ui three columnd doubling grid top-grid" dir="rtl">
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="نوع بروشور خود را انتخاب کنید."
              value="دیجیتال"
              onChange={deliverychange}
              checked={typedel == "دیجیتال"}
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
              name="نوع بروشور خود را انتخاب کنید."
              value="چاپی"
              onChange={deliverychange}
              checked={typedel == "چاپی"}
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
              name="نوع بروشور خود را انتخاب کنید."
              value="هردو"
              onChange={deliverychange}
              checked={typedel == "هردو"}
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
      <h3>{count + 1}- قطع بروشور خود را انتخاب کنید.</h3>
      <div className="ui three columnd doubling grid top-grid" dir="rtl">
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="قطع بروشور خود را انتخاب کنید."
              onChange={radiochange}
              checked={typeSize == "A3"}
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
              type="radio"
              name="قطع بروشور خود را انتخاب کنید."
              onChange={radiochange}
              checked={typeSize == "A5"}
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
              type="radio"
              name="قطع بروشور خود را انتخاب کنید."
              onChange={radiochange}
              checked={typeSize == "A4"}
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
              type="radio"
              name="قطع بروشور خود را انتخاب کنید."
              onChange={radiochange}
              checked={typeSize == "سایر"}
              value="سایر"
            />
            <span>
              <i className="file alternate outline icon"></i>
              سایر
            </span>
          </label>
        </div>
      </div>
      {othersize}
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
              uploadlogo(e);
            }}
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
    <div dir="rtl">
      <h3>{count + 1}- بروشور شما چند لت است؟</h3>
      <div className="ui two columnd doubling grid top-grid">
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="بروشور شما چند لت است؟"
              value="1لت"
              onChange={checkboxchange}
              checked={typeInput.lt1}
            />
            <span>1 لت</span>
          </label>
        </div>

        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="بروشور شما چند لت است؟"
              value="2لت"
              onChange={checkboxchange}
              checked={typeInput.lt2}
            />
            <span>2 لت</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="بروشور شما چند لت است؟"
              value="3لت"
              onChange={checkboxchange}
              checked={typeInput.lt3}
            />
            <span>3 لت</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="بروشور شما چند لت است؟"
              value="4لت"
              onChange={checkboxchange}
              checked={typeInput.lt4}
            />
            <span>4 لت</span>
          </label>
        </div>
      </div>
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
      if (Object.keys(baseSample).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("لطفا فایل خود را آپلود کنید");
        setIsErr(true);
      }
    }
    if (count == 6) {
      setCount(count + 1);
      typeData.push({
        ["رنگ مورد نظر خود را از پالت نگی انتخاب کنید."]: color,
      });
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
    if (count == 8) {
      if (Object.keys(typeSize).length != 0) {
        if (typeSize === "سایر") {
          if (Object.keys(sizetext).length != 0) {
            setCount(count + 1);
            setIsErr(false);
          } else {
            setErr("لطفا قطع بروشور مورد نظر خود را بنویسید");
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
      setCount(count + 1);
      setIsErr(false);
    }
    if (count == 10) {
      if (Object.keys(audience).length != 0) {
        setCount(count + 1);
        setIsErr(false);
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
        typeData.push({
          ["معرفی مختصری از شرکت خود را بنویسید."]: subject.subject,
        });
        typeData.push({
          ["اگر سایت یا صفحه اجتماعی دارید آدرس آن ها را ذکر کنید."]:
            subject.address,
        });
        if (typeInput.scenario == false) {
          typeData.push({
            ["آیا لوگو دارید؟"]: "خیر نداریم",
          });
        } else if (typeInput.scenario == true) {
          typeData.push({
            ["آیا لوگو دارید؟"]: "بله داریم",
          });
        }
        typeData.push({ ["زبان محتوای بروشور خود را انتخاب کنید"]: language });
        if (language === "سایر") {
          typeData.push({ ["زبان محتوای بروشور خود را انتخاب کنید"]: lantext });
        }
        typeData.push({ ["محتوای خود را آپلود کنید."]: baseSample });
        typeData.push({ ["نوع بروشور خود را انتخاب کنید"]: typedel });
        typeData.push({ ["قطع بروشور خود را انتخاب کنید."]: typeSize });
        if (typeSize === "سایر") {
          typeData.push({ ["قطع بروشور خود را انتخاب کنید."]: sizetext });
        }
        typeData.push({
          ["نمونه های خاصی اگر مدنظرتون هست آپلود کنید."]: baseLogo,
        });
        typeData.push(audience);
        typeData.push({ ["توضیحات آپلود فایل"]: desfile });
        typeData.push({ ["فایل آپلود شده"]: baseImage });
        window.localStorage.setItem(
          "brochure",
          JSON.stringify({ ["پرسشنامه بروشور"]: typeData })
        );
        setCount(count + 1);
        setIsErr(false);
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

export default Brochure;
