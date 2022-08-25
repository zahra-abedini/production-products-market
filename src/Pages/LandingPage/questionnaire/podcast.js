import React from "react";
import JCalendar from "reactjs-persian-calendar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useForm } from "react-hook-form";

const Translate = () => {
  const [count, setCount] = React.useState(0);

  const [typeInput, setTypeInput] = React.useState({
    children: false,
    teenager: false,
    adults: false,
    other: false,
    single: false,
    interview: false,
    roundtable: false,
    hybrid: false,
    othertype: false,
    lady: false,
    sir: false,
    scenario: false,
    timeout: false,
  });
  const [typeData, setTypeData] = React.useState([]);
  const [typePod, setTypePod] = React.useState([]);
  const [typegender, setTypeGender] = React.useState({});
  const [typedialect, setTypeDialect] = React.useState("");
  const [typetime, setTypeTime] = React.useState("");
  const [typesponsor, setTypeSponsor] = React.useState("");
  const [desfile, setDesfile] = React.useState("");
  const [subject, setSubject] = React.useState({
    subject: "",
  });
  const [description, setDescription] = React.useState("");
  const [baseImage, setBaseImage] = React.useState("");
  const [fileName, setFilename] = React.useState("");
  const [basepodcast, setBasepodcast] = React.useState("");
  const [podName, setPodname] = React.useState("");
  const [date, setDate] = React.useState({});
  const [isErr, setIsErr] = React.useState(false);
  const [err, setErr] = React.useState("");

  let showgender;
  const [gender, setGender] = React.useState(false);
  const radiochange = (e) => {
    setTypeGender(e.target.value);
  };
  const handlegender = (e) => {
    setGender(!gender);
  };
  if (gender == true) {
    showgender = (
      <>
        <div className="equal width fields" dir="rtl">
          <div className="field " style={{ width: "100%", marginTop: "50px" }}>
            <h3>جنسیت گوینده خود را تعیین کنید؟</h3>
          </div>
        </div>
        <div className="ui two columnd doubling grid top-grid">
          <div className="column selected-label">
            <label>
              <input
                type="radio"
                name="جنسیت گوینده خود را تعیین کنید؟"
                value="خانم"
                onChange={radiochange}
                checked={typegender == "خانم"}
              />
              <span>خانم</span>
            </label>
          </div>
          <div className="column selected-label">
            <label>
              <input
                type="radio"
                name="جنسیت گوینده خود را تعیین کنید؟"
                value="آقا"
                onChange={radiochange}
                checked={typegender == "آقا"}
              />
              <span>آقا</span>
            </label>
          </div>
        </div>
      </>
    );
  }

  const [dialect, setDialect] = React.useState(false);
  let showdialect;
  const handledialect = (e) => {
    setDialect(!dialect);
  };

  const dialectchange = (e) => {
    setTypeDialect(e.target.value);
  };

  if (dialect == true) {
    showdialect = (
      <>
        <div className="equal width fields" dir="rtl">
          <div className="field " style={{ width: "100%", marginTop: "50px" }}>
            <h3>چه نوع گویشی مدنظرتون می باشد؟</h3>
          </div>
        </div>
        <div className="equal width fields" dir="rtl">
          <div className="field " style={{ width: "100%", marginTop: "50px" }}>
            <input
              dir="rtl"
              type="text"
              name="showdialect"
              placeholder="نوع گویش مدنظر خود را بنویسید"
              value={typedialect}
              onChange={dialectchange}
            />
          </div>
        </div>
      </>
    );
  }

  const [checked, setChecked] = React.useState(false);
  let showSponsor;
  const handleCheck = (e) => {
    setChecked(!checked);
  };

  const sponsorchange = (e) => {
    setTypeSponsor(e.target.value);
  };

  if (checked == true) {
    showSponsor = (
      <>
        <div className="equal width fields" dir="rtl">
          <div className="field " style={{ width: "100%", marginTop: "50px" }}>
            <h3>نام اسپانسر خود را بنویسید.</h3>
          </div>
        </div>
        <div className="equal width fields" dir="rtl">
          <div className="field " style={{ width: "100%", marginTop: "50px" }}>
            <input
              dir="rtl"
              type="text"
              name="نام اسپانسر خود را بنویسید."
              value={typesponsor}
              onChange={sponsorchange}
              placeholder="نام اسپانسر خود را بنویسید."
            />
          </div>
        </div>
      </>
    );
  }

  const scenariochange = (e) => {
    setTypeInput({ ...typeInput, scenario: e.target.checked });
  };

  const checkboxchange = (e) => {
    if (e.target.value == "کودکان") {
      setTypeInput({ ...typeInput, children: e.target.checked });
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
    } else if (e.target.value == "نوجوانان") {
      setTypeInput({ ...typeInput, teenager: e.target.checked });
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
    } else if (e.target.value == "بزرگسالان") {
      setTypeInput({ ...typeInput, adults: e.target.checked });
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
    } else if (e.target.value == "سایر") {
      setTypeInput({ ...typeInput, other: e.target.checked });
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

  const [scttext, setStjText] = React.useState("");
  const sctTextchange = (e) => {
    setStjText(e.target.value);
  };
  let link;
  let find1 = typeData.filter((element) => Object.values(element) == "سایر");
  if (find1.length != 0) {
    link = (
      <input
        dir="rtl"
        type="text"
        name="subject-time-tr"
        style={{ marginTop: "20px" }}
        value={scttext}
        onChange={sctTextchange}
        placeholder="مخاطبان خود را بنویسید."
      />
    );
  }

  const subjectchange = (e) => {
    setSubject({ ...subject.subject, subject: e.target.value });
  };

  const checkboxtypechange = (e) => {
    setTypePod(e.target.value);
  };

  const [podtext, setPodtext] = React.useState("");
  const podtextchange = (e) => {
    setPodtext(e.target.value);
  };
  let linkpod;
  if (typePod == "سایر") {
    linkpod = (
      <input
        dir="rtl"
        type="text"
        name="subject-time-tr"
        style={{ marginTop: "20px" }}
        value={podtext}
        onChange={podtextchange}
        placeholder="نوع پادکست خود را بنویسید."
      />
    );
  }

  const timechange = (e) => {
    setTypeTime(e.target.value);
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

  const components = [
    <div>
      <div
        className="equal width fields"
        dir="rtl"
        style={{ alignItems: "center" }}
      >
        <div className="field " style={{ width: "80%" }}>
          <h3>{count + 1}- سناریو برای پادکست خود دارید؟</h3>
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
            checked={typeInput.scenario}
          />
          <p style={{ marginRight: "10px" }}>بله دارم</p>
        </div>
      </div>
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
              name="audience"
              value="سایر"
              onChange={checkboxchange}
              checked={typeInput.other}
            />
            <span>سایر</span>
          </label>
        </div>
      </div>
      {link}
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- موضوع پادکست شما چیست؟</h3>
      <div className="field ">
        <div className="ui left icon input ">
          <textarea
            dir="rtl"
            type="text"
            name="موضوع پادکست شما چیست؟"
            value={subject.subject}
            onChange={subjectchange}
            placeholder="موضوع فایل خود را وارد کنید"
          />
        </div>
      </div>
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div dir="rtl">
      <h3>{count + 1}- پادکست شما چه نوعی دارد؟</h3>
      <div className="ui three columnd doubling grid top-grid">
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="پادکست شما چه نوعی دارد؟"
              value="پادکست تک نفره"
              onChange={checkboxtypechange}
              checked={typePod == "پادکست تک نفره"}
            />
            <span>پادکست تک نفره</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="پادکست شما چه نوعی دارد؟"
              value="پادکست مصاحبه ای"
              onChange={checkboxtypechange}
              checked={typePod == "پادکست مصاحبه ای"}
            />
            <span>پادکست مصاحبه ای</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="پادکست شما چه نوعی دارد؟"
              value="پادکست میز گرد"
              onChange={checkboxtypechange}
              checked={typePod == "پادکست میز گرد"}
            />
            <span>پادکست میز گرد</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="پادکست شما چه نوعی دارد؟"
              value="پادکست ترکیبی"
              onChange={checkboxtypechange}
              checked={typePod == "پادکست ترکیبی"}
            />
            <span>پادکست ترکیبی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="پادکست شما چه نوعی دارد؟"
              value="سایر"
              onChange={checkboxtypechange}
              checked={typePod == "سایر"}
            />
            <span>سایر</span>
          </label>
        </div>
      </div>
      {linkpod}
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,

    <div>
      <h3>{count + 1}- مدت زمان پادکست شما چقدر می باشد؟</h3>
      <input
        dir="rtl"
        type="text"
        name="مدت زمان پادکست شما چقدر می باشد؟"
        value={typetime}
        onChange={timechange}
        placeholder="مدت زمان پادکست خود را وارد کنید"
      />
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <div
        className="equal width fields"
        dir="rtl"
        style={{ alignItems: "center" }}
      >
        <div className="field " style={{ width: "80%" }}>
          <h3>{count + 1}- آیا جنسیت گوینده برای شما فرقی می کند؟</h3>
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
      <div
        className="equal width fields"
        dir="rtl"
        style={{ alignItems: "center" }}
      >
        <div className="field " style={{ width: "80%" }}>
          <h3>{count + 1}- گویش خاصی مد نظر شما می باشد؟</h3>
        </div>
        <div
          className="field "
          style={{ width: "20%", display: "flex", alignItems: "center" }}
        >
          <FormControlLabel
            value="dialect"
            control={<Switch color="primary" />}
            label=""
            onChange={handledialect}
            checked={dialect}
          />
          <p style={{ marginRight: "10px" }}>بله </p>
        </div>
      </div>
      {showdialect}
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <div
        className="equal width fields"
        dir="rtl"
        style={{ alignItems: "center" }}
      >
        <div className="field " style={{ width: "80%" }}>
          <h3>{count + 1}- آیا اسپانسر دارید؟</h3>
        </div>
        <div
          className="field "
          style={{ width: "20%", display: "flex", alignItems: "center" }}
        >
          <FormControlLabel
            value="sponsor"
            control={<Switch color="primary" />}
            label=""
            onChange={handleCheck}
            checked={checked}
          />
          <p style={{ marginRight: "10px" }}>بله </p>
        </div>
      </div>
      {showSponsor}
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
        {count + 1} - اگر نمونه خاصی از پادکست مدنظرتون هست آن را آپلود کنید.
      </h3>
      <div className="equal width fields top-grid" dir="rtl">
        <div className="field" style={{ width: "100%" }}>
          <label className="file-label">
            <i className="cloud download icon"></i>
            <p>فایل خود را انتخاب کنید</p>
            <div className="upload-btn">آپلود</div>
            <input
              type="file"
              className="form-control"
              name="podcast-file"
              accept="audio/*, video/*, .zip"
              onChange={(e) => {
                uploadpodcast(e);
              }}
            />
          </label>
        </div>
      </div>
      {Object.keys(basepodcast).length != 0 ? (
        <p className="save-alert">فایل شما با نام "{podName}" ذخیره شد.</p>
      ) : null}
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
            name="توضیحات آپلود فایل"
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
      setCount(count + 1);
      setIsErr(false);
    }
    if (count == 1) {
      if (Object.keys(typeData).length != 0) {
        if (find1.length != 0) {
          if (Object.keys(scttext).length != 0) {
            setCount(count + 1);
            setIsErr(false);
          } else {
            setErr("لطفا مخاطبان خود را بنویسید.");
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
    if (count == 2) {
      if (Object.keys(subject.subject).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("نیاز است که موضوع پادکست خود را وارد کنید");
        setIsErr(true);
      }
    }
    if (count == 3) {
      if (Object.keys(typePod).length != 0) {
        if (typePod == "سایر") {
          if (Object.keys(podtext).length != 0) {
            setCount(count + 1);
            setIsErr(false);
          } else {
            setErr("لطفا نوع پادکست خود را بنویسید.");
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
      if (Object.keys(typetime).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("نیاز است که زمان پادکست خود را وارد کنید");
        setIsErr(true);
      }
    }
    if (count == 5) {
      if (gender == false) {
        typeData.push({
          ["آیا جنسیت گوینده برای شما فرقی می کند؟"]: "خیر ندارد",
        });
        setCount(count + 1);
        setIsErr(false);
      } else {
        if (Object.keys(typegender).length != 0) {
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("لطفا یک گزینه را انتخاب کنید");
          setIsErr(true);
        }
      }
    }
    if (count == 6) {
      if (dialect == false) {
        typeData.push({
          ["گویش خاصی مد نظر شما می باشد؟"]: "خیر",
        });
        setCount(count + 1);
        setIsErr(false);
      } else {
        if (Object.keys(typedialect).length != 0) {
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("لطفا گویش مورد نظر خود را بنویسید.");
          setIsErr(true);
        }
      }
    }
    if (count == 7) {
      if (checked == false) {
        typeData.push({
          ["آیا اسپانسر دارید؟"]: "خیر",
        });
        setCount(count + 1);
        setIsErr(false);
      } else {
        if (Object.keys(typesponsor).length != 0) {
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("لطفا نام اسپانسر خود را وارد کنید");
          setIsErr(true);
        }
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
      setCount(count + 1);
      setIsErr(false);
    }
    if (count == 10) {
      if (Object.keys(baseImage).length != 0) {
        if (find1.length != 0) {
          typeData.push({
            ["مخاطبان شما چه کسانی هستند؟"]: scttext,
          });
        }
        if (typeInput.scenario == false) {
          typeData.push({
            ["سناریو برای پادکست خود دارید؟"]: "خیر نداریم",
          });
        } else if (typeInput.scenario == true) {
          typeData.push({
            ["سناریو برای پادکست خود دارید؟"]: "بله داریم",
          });
        }
        typeData.push({ ["موضوع کلی متن شما چیست؟"]: subject.subject });
        typeData.push({ ["پادکست شما چه نوعی دارد"]: typePod });
        if (typePod == "سایر") {
          typeData.push({ ["پادکست شما چه نوعی دارد"]: podtext });
        }
        typeData.push({ ["مدت زمان پادکست شما چقدر می باشد؟"]: typetime });
        typeData.push({["جنسیت گوینده خود را تعیین کنید؟"]: typegender});
        typeData.push({ ["چه نوع گویشی مدنظرتون می باشد؟"]: typedialect });
        typeData.push({ ["نام اسپانسر خود را بنویسید."]: typesponsor });
        typeData.push({ ["نمونه پادکست آپلود شده"]: basepodcast });
        typeData.push({ ["توضیحات آپلود فایل"]: desfile });
        typeData.push({ ["فایل آپلود شده"]: baseImage });
        setCount(count + 1);
        setIsErr(false);
        window.localStorage.setItem(
          "podcast",
          JSON.stringify({ ["پرسشنامه پادکست"]: typeData })
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

export default Translate;
