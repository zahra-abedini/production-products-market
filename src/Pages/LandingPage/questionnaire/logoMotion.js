import React from "react";
import JCalendar from "reactjs-persian-calendar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useForm } from "react-hook-form";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

const LogoMotion = () => {
  const [count, setCount] = React.useState(0);
  const [color, setColor] = useColor("hex", "#121212");
  const [fileName, setFilename] = React.useState("");
  const [isErr, setIsErr] = React.useState(false);
  const [err, setErr] = React.useState("");
  const [typetime, setTypeTime] = React.useState("");
  const [time, setTTime] = React.useState("");
  const [typeInput, setTypeInput] = React.useState({
    digital: false,
    fiziki: false,
    flt: false,
    solid: false,
    vector: false,
    cinematic: false,
    collage: false,
    others: false,
    virastar: false,
    timeout: false,
    highlight: false,
    scenario: false,
    text: false,
  });
  const [typeSize, setSize] = React.useState({});
  const [typeData, setTypeData] = React.useState([]);
  const [description, setDescription] = React.useState("");
  const [date, setDate] = React.useState({});
  const [desfile, setDesfile] = React.useState("");
  const [baseImage, setBaseImage] = React.useState("");
  const [subject, setSubject] = React.useState({
    subject: "",
    address: "",
    subjectOne: "",
  });
  const [baseSample, setBaseSample] = React.useState([]);
  const [sampleName, setSamplename] = React.useState([]);
  const [slogan, setSlogan] = React.useState("");
  const [basemotion, setBasemotion] = React.useState("");
  const [motionName, setmotionname] = React.useState("");
  const [scttext, setStjText] = React.useState("");
  const [effect, setEffect] = React.useState([]);

  const timechange = (e) => {
    setTypeTime(e.target.value);
  };

  const timetchange = (e) => {
    setTTime(e.target.value);
  };

  const subjectchange = (e) => {
    setSubject({ ...subject, subject: e.target.value });
  };

  const addresschange = (e) => {
    setSubject({ ...subject, address: e.target.value });
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
  } else {
    showmotion = (
      <p>
        می توانید از وبسایت
        <a href="#" target="_blank">
          ط
        </a>{" "}
        سفارش دهید.
      </p>
    );
  }

  const sloganchange = (e) => {
    setSlogan(e.target.value);
  };

  const radiochange = (e) => {
    setSize(e.target.value);
  };

  let sjt;

  const sctTextchange = (e) => {
    setStjText(e.target.value);
  };

  if (typeSize === "سایر") {
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

  const uploadSample = async (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      let name = sampleName.push(e.target.files[i].name);
      const file = e.target.files[i];
      baseSample.push(await convertBase64(file));
      setEffect(name);
    }
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
      <h3>{count + 1}- اگر شعار خاصی دارید آن را بنویسید.</h3>
      <input
        dir="rtl"
        type="text"
        name="اگر شعار خاصی دارید آن را بنویسید."
        value={slogan}
        onChange={sloganchange}
        placeholder="اگر شعار خاصی دارید آن را بنویسید."
      />
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- مدت زمان لوگو موشن شما چقدر باشد؟</h3>
      <input
        dir="rtl"
        type="text"
        name="مدت زمان لوگو موشن شما چقدر باشد؟"
        value={time}
        onChange={timetchange}
        placeholder="مدت زمان لوگو موشن شما چقدر باشد؟"
      />
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- نوع لوگو موشن خود را انتخاب کنید.</h3>
      <div className="ui three columnd doubling grid top-grid" dir="rtl">
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="نوع لوگو موشن خود را انتخاب کنید."
              onChange={radiochange}
              checked={typeSize === "فلت"}
              value="فلت"
            />
            <span>
              <i className="file alternate outline icon"></i>
              فلت
            </span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="نوع لوگو موشن خود را انتخاب کنید."
              onChange={radiochange}
              checked={typeSize === "سه بعدی"}
              value="سه بعدی"
            />
            <span>
              <i className="file alternate outline icon"></i>
              سه بعدی
            </span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="نوع لوگو موشن خود را انتخاب کنید."
              onChange={radiochange}
              checked={typeSize === "وکتور"}
              value="وکتور"
            />
            <span>
              <i className="file alternate outline icon"></i>
              وکتور
            </span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="نوع لوگو موشن خود را انتخاب کنید."
              onChange={radiochange}
              checked={typeSize === "سینمایی"}
              value="سینمایی"
            />
            <span>
              <i className="file alternate outline icon"></i>
              سینمایی
            </span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="نوع لوگو موشن خود را انتخاب کنید."
              onChange={radiochange}
              checked={typeSize === "کلاژ"}
              value="کلاژ"
            />
            <span>
              <i className="file alternate outline icon"></i>
              کلاژ
            </span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="نوع لوگو موشن خود را انتخاب کنید."
              onChange={radiochange}
              checked={typeSize === "سایر"}
              value="سایر"
            />
            <span>
              <i className="file alternate outline icon"></i>
              سایر
            </span>
          </label>
        </div>
      </div>
      {sjt}
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <div
        className="equal width fields"
        dir="rtl"
        style={{ alignItems: "center" }}
      >
        <div className="field " style={{ width: "80%" }}>
          <h3>{count + 1}- آیا رنگ خاصی مدنظرتون هست؟</h3>
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

  if (motion == false) {
    components.splice(
      4,
      0,
      <div>
        <div className="last-div">
          <div className="success" style={{ color: "#ccc" }}>
            <i className="chevron circle down icon"></i>
          </div>
          <p style={{ color: "#000" }}>
            می توانید از وبسایت
            <a href="#" target="_blank">
              x
            </a>{" "}
            سفارش دهید.
          </p>
        </div>
      </div>
    );
    components.splice(5, 9);
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

    if (motion == true) {
      if (count == 4) {
        setCount(count + 1);
        setIsErr(false);
      }

      if (count == 5) {
        if (Object.keys(time).length != 0) {
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("نیاز است مدت زمان لوگو موشن خود را بنویسید.");
          setIsErr(true);
        }
      }
      if (count == 6) {
        if (Object.keys(typeSize).length != 0) {
          if (typeSize === "سایر") {
            if (Object.keys(scttext).length != 0) {
              setCount(count + 1);
              setIsErr(false);
            } else {
              setErr("لطفا نوع لوگو موشن مورد نظر خود را بنویسید");
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
        if (pallet == false) {
          typeData.push({
            ["آیا رنگ خاصی مدنظرتون هست؟"]: "خیر",
          });
          setCount(count + 1);
          setIsErr(false);
        } else {
          setCount(count + 1);
          setIsErr(false);
          typeData.push({
            ["آیا رنگ خاصی مدنظرتون هست؟"]: "بله",
          });
          typeData.push({
            ["رنگ مورد نظر خود را از پالت نگی انتخاب کنید."]: color,
          });
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
          typeData.push({ ["اگر شعار خاصی دارید آن را بنویسید."]: slogan });
          typeData.push({ ["مدت زمان لوگو موشن شما چقدر باشد؟"]: time });
          typeData.push({ ["نوع لوگو موشن خود را انتخاب کنید ."]: typeSize });
          if (typeSize === "سایر") {
            typeData.push({ ["نوع لوگو موشن خود را انتخاب کنید ."]: scttext });
          }
          typeData.push({
            ["نمونه های خاصی اگر مدنظرتون هست آپلود کنید."]: baseSample,
          });

          typeData.push({ ["توضیحات آپلود فایل"]: desfile });
          typeData.push({ ["فایل آپلود شده"]: baseImage });
          window.localStorage.setItem(
            "logomotion",
            JSON.stringify({ ["پرسشنامه لوگو موشن"]: typeData })
          );
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("لطفا فایل خود را آپلود کنید");
          setIsErr(true);
        }
      }
    }
    if (motion == false) {
      if (count == 4) {
        setIsErr(false);
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

export default LogoMotion;
