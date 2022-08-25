import React from "react";
import JCalendar from "reactjs-persian-calendar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useForm } from "react-hook-form";

const Voice = () => {
  const [count, setCount] = React.useState(0);
  const [typeInput, setTypeInput] = React.useState({
    scenario: false,
    digital: false,
    fiziki: false,
    sir: false,
    lady: false,
    other: false,
    children: false,
    teenager: false,
    adults: false,
    otherm: false,
    virastar: false,
    timeout: false,
  });
  const [typeData, setTypeData] = React.useState([]);
  const [typeSize, setSize] = React.useState({});
  const [subject, setSubject] = React.useState({
    subject: "",
    address: "",
  });
  const [description, setDescription] = React.useState("");
  const [desfile, setDesfile] = React.useState("");
  const [baseImage, setBaseImage] = React.useState("");
  const [fileName, setFilename] = React.useState("");
  const [date, setDate] = React.useState({});
  const [isErr, setIsErr] = React.useState(false);
  const [err, setErr] = React.useState("");
  const [language, setLanguage] = React.useState({});
  const [lantext, setLanName] = React.useState("");
  const [baseSample, setBaseSample] = React.useState("");
  const [sampleName, setSamplename] = React.useState("");
  const [delivery, setDelivery] = React.useState({
    digital: false,
    print: false,
    both: false,
  });
  const [typedel, setTypeDel] = React.useState({});
  const [typetime, setTypeTime] = React.useState("");
  const [audience, setAudience] = React.useState([]);

  const timechange = (e) => {
    setTypeTime(e.target.value);
  };

  const subjectchange = (e) => {
    setSubject({ ...subject, subject: e.target.value });
  };

  const addresschange = (e) => {
    setSubject({ ...subject, address: e.target.value });
  };

  const uploadSample = async (e) => {
    setSamplename(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseSample(base64);
  };

  const uploadImage = async (e) => {
    setFilename(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
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

  const scenariochange = (e) => {
    setTypeInput({ ...typeInput, scenario: e.target.checked });
  };

  const deliverychange = (e) => {
    setTypeDel(e.target.value);
  }

  const radiochange = (e) => {
    setSize(e.target.value);
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
    } else if (e.target.value == "کهنسالان") {
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
      <h3>{count + 1} - فایل مورد نظر خود را آپلود کنید.</h3>
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
      <h3>{count + 1}- زبانی که میخواهید دوبله صورت بگیرد را انتخاب کنید.</h3>
      <div className="ui three columnd doubling grid top-grid">
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبانی که میخواهید دوبله صورت بگیرد را انتخاب کنید."
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
              name="زبانی که میخواهید دوبله صورت بگیرد را انتخاب کنید."
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
              name="زبانی که میخواهید دوبله صورت بگیرد را انتخاب کنید."
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
              name="زبانی که میخواهید دوبله صورت بگیرد را انتخاب کنید."
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
              name="زبانی که میخواهید دوبله صورت بگیرد را انتخاب کنید."
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
              name="زبانی که میخواهید دوبله صورت بگیرد را انتخاب کنید."
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
              name="زبانی که میخواهید دوبله صورت بگیرد را انتخاب کنید."
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
              name="زبانی که میخواهید دوبله صورت بگیرد را انتخاب کنید."
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
              name="زبانی که میخواهید دوبله صورت بگیرد را انتخاب کنید."
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
              name="زبانی که میخواهید دوبله صورت بگیرد را انتخاب کنید."
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
              name="زبانی که میخواهید دوبله صورت بگیرد را انتخاب کنید."
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
    </div>,
    <div>
      <h3>{count + 1}- دوبله بصورت تک صدایی است یا چند صدایی؟</h3>
      <div className="ui two columnd doubling grid top-grid" dir="rtl">
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="دوبله بصورت تک صدایی است یا چند صدایی؟"
              value="تک صدا"
              onChange={deliverychange}
              checked={typedel == "تک صدا"}
            />
            <span>
              <i className="file audio icon"></i>
              تک صدا
            </span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="دوبله بصورت تک صدایی است یا چند صدایی؟"
              value="چند صدا"
              onChange={deliverychange}
              checked={typedel == "چند صدا"}
            />
            <span>
              <i className="file audio icon"></i>
              چند صدا
            </span>
          </label>
        </div>
      </div>
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <div
        className="equal width fields"
        dir="rtl"
        style={{ alignItems: "center" }}
      >
        <div className="field " style={{ width: "80%" }}>
          <h3>{count + 1}- نیاز به صداگذاری (افکت صوتی) دارید؟</h3>
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
            checked={typeInput.scenario}
          />
          <p style={{ marginRight: "10px" }}>بله داریم</p>
        </div>
      </div>
    </div>,
    <div>
      <h3>{count + 1}- جنسیت مدنظر برای دوبله انتخاب کنید؟</h3>
      <div className="ui three columnd doubling grid top-grid" dir="rtl">
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="جنسیت مدنظر برای دوبله انتخاب کنید؟"
              onChange={radiochange}
              checked={typeSize == "آقا"}
              value="آقا"
            />
            <span>
              <i className="male icon"></i>
              آقا
            </span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="جنسیت مدنظر برای دوبله انتخاب کنید؟"
              onChange={radiochange}
              checked={typeSize == "خانم"}
              value="خانم"
            />
            <span>
              <i className="female icon"></i>
              خانم
            </span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="جنسیت مدنظر برای دوبله انتخاب کنید؟"
              onChange={radiochange}
              checked={typeSize == "هردو"}
              value="هردو"
            />
            <span>
              <i className="users icon"></i>
              هردو
            </span>
          </label>
        </div>
      </div>
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div dir="rtl">
      <h3>{count + 1}- محدوده سنی مدنظر شما برای دوبله چیست؟</h3>
      <div className="ui three columnd doubling grid top-grid">
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="محدوده سنی مدنظر شما برای دوبله چیست؟"
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
              name="محدوده سنی مدنظر شما برای دوبله چیست؟"
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
              name="محدوده سنی مدنظر شما برای دوبله چیست؟"
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
              name="محدوده سنی مدنظر شما برای دوبله چیست؟"
              value="کهنسالان"
              onChange={checkboxchange}
              checked={typeInput.otherm}
            />
            <span>کهنسالان</span>
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
      if (Object.keys(baseSample).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("لطفا فایل خود را آپلود کنید");
        setIsErr(true);
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
      if (Object.keys(typedel).length != 0) {
        setCount(count + 1);
        setIsErr(false);
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
      if (Object.keys(typeSize).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("لطفا یک گزینه را انتخاب کنید");
        setIsErr(true);
      }
    }
    if (count == 8) {
      if (Object.keys(audience).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("لطفا یک گزینه را انتخاب کنید");
        setIsErr(true);
      }
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
        typeData.push({ ["نام شرکت خود را بنویسید."]: typetime });
        typeData.push({
          ["معرفی مختصری از شرکت خود را بنویسید."]: subject.subject,
        });
        typeData.push({
          ["اگر سایت یا صفحه اجتماعی دارید آدرس آن ها را ذکر کنید."]:
            subject.address,
        });
        typeData.push({ ["محتوای خود را آپلود کنید."]: baseSample });
        typeData.push({ ["زبان متن شما چیست؟"]: language });
        if (language === "سایر") {
          typeData.push({ ["زبان متن شما چیست؟"]: lantext });
        }
        typeData.push({["دوبله بصورت تک صدایی است یا چند صدایی؟"]: typedel});
        if (typeInput.scenario == false) {
          typeData.push({
            ["نیاز به صداگذاری (افکت صوتی) دارید؟"]: "خیر نداریم",
          });
        } else if (typeInput.scenario == true) {
          typeData.push({
            ["نیاز به صداگذاری (افکت صوتی) دارید؟"]: "بله داریم",
          });
        }
        typeData.push({["جنسیت مدنظر برای دوبله انتخاب کنید؟"]: typeSize});
        typeData.push(audience);
        typeData.push({ ["توضیحات آپلود فایل"]: desfile });
        typeData.push({ ["فایل آپلود شده"]: baseImage });
        window.localStorage.setItem(
          "voice",
          JSON.stringify({ ["پرسشنامه دوبله"]: typeData })
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

export default Voice;
