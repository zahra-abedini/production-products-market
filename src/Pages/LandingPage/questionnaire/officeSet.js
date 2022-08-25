import React from "react";
import JCalendar from "reactjs-persian-calendar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useForm } from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { ActionMeta, OnChangeValue } from "react-select";
import { ColorPicker, useColor } from "react-color-palette";

const OfficeSet = () => {
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
    scenario: false,
    virastar: false,
    timeout: false,
  });
  const [typeData, setTypeData] = React.useState([]);
  const [subject, setSubject] = React.useState({
    subject: "",
    address: "",
    subjectOne: "",
  });
  const [description, setDescription] = React.useState("");
  const [desfile, setDesfile] = React.useState("");
  const [baseImage, setBaseImage] = React.useState("");
  const [fileName, setFilename] = React.useState("");
  const [date, setDate] = React.useState({});
  const [isErr, setIsErr] = React.useState(false);
  const [err, setErr] = React.useState("");
  const [typetime, setTypeTime] = React.useState("");
  const [valueselect, setValueselect] = React.useState([]);
  const [color, setColor] = useColor("hex", "#121212");
  const [baseLogo, setBaseLogo] = React.useState([]);
  const [logoName, setLogoname] = React.useState([]);
  const [effect, setEffect] = React.useState([]);

  const handleChange = (value, event) => {
    setValueselect(value);
  };

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

  const animatedComponents = makeAnimated();

  const options = [
    { key: 1, value: "کارت ویزیت", label: "کارت ویزیت" },
    { key: 2, value: "سربرگ A4", label: "سربرگ A4" },
    { key: 3, value: "سربرگ A5", label: "سربرگ A5" },
    { key: 4, value: "کاغذ یادداشت", label: "کاغذ یادداشت" },
    { key: 5, value: "پاکت A4", label: "پاکت A4" },
    { key: 6, value: "پاکت A5", label: "پاکت A5" },
    { key: 7, value: "پاکت ملخی", label: "پاکت ملخی" },
    { key: 8, value: "فولدر", label: "فولدر" },
    { key: 9, value: "فاکتور", label: "فاکتور" },
    { key: 10, value: "پرچم", label: "پرچم" },
    { key: 11, value: "لیبل سی دی", label: "لیبل سی دی" },
    { key: 12, value: "استیکر", label: "استیکر" },
    { key: 13, value: "استیکر لپ تاپ", label: "استیکر لپ تاپ" },
    { key: 14, value: "سایر", label: "سایر" },
  ];

  let sjt;

  const [scttext, setStjText] = React.useState("");
  const sctTextchange = (e) => {
    setStjText(e.target.value);
  };

  for (let [key, value] of Object.entries(valueselect)) {
    if (value.value == "سایر") {
      sjt = (
        <input
          dir="rtl"
          type="text"
          name="subject-time-tr"
          style={{ marginTop: "20px" }}
          value={scttext}
          onChange={sctTextchange}
          placeholder="آیتم های ست اداری خود را بنویسید ."
        />
      );
    }
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
      <h3>{count + 1}- آیتم های ست اداری خود را انتخاب کنید.</h3>
      <div className="field selected office">
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={options}
          value={valueselect}
          placeholder="آیتم های ست اداری خود را انتخاب کنید"
          onChange={handleChange}
        />
      </div>
      {sjt}
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>
        {count + 1}- اطلاعاتی که میخواهید بر روی اقلام ست اداری درج شود را بیان
        کنید.
      </h3>
      <div className="field ">
        <div className="ui left icon input ">
          <textarea
            dir="rtl"
            type="text"
            name="اطلاعاتی که میخواهید بر روی اقلام ست اداری درج شود را بیان کنید."
            value={subject.subjectOne}
            onChange={subjectchangeone}
            placeholder="اطلاعاتی که میخواهید بر روی اقلام ست اداری درج شود را بیان کنید."
          />
        </div>
      </div>
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
      if (Object.keys(valueselect).length != 0) {
        let find = valueselect.filter((element) => element.value == "سایر");
        if (find.length != 0) {
          if (Object.keys(scttext).length != 0) {
            setCount(count + 1);
            setIsErr(false);
          } else {
            setErr("لطفا آیتم های ست اداری مورد نظر خود را بنویسید.");
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

    if (count == 5) {
      if (Object.keys(subject.subjectOne).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr(
          "لطفا اطلاعاتی که میخواهید بر روی اقلام ست اداری درج شود را بیان کنید."
        );
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
      setCount(count + 1);
      setIsErr(false);
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
        typeData.push({
          ["معرفی مختصری از شرکت خود را بنویسید."]: subject.subject,
        });
        typeData.push({
          ["اگر سایت یا صفحه اجتماعی دارید آدرس آن ها را ذکر کنید."]:
            subject.address,
        });
        typeData.push({
          ["اطلاعاتی که میخواهید بر روی اقلام ست اداری درج شود را بیان کنید."]:
            subject.subjectOne,
        });
        for (let [key, value] of Object.entries(valueselect)) {
          typeData.push({
            ["آیتم های ست اداری خود را انتخاب کنید."]: value.value,
          });
        }
        valueselect.map((element) => {
          if (element.value == "سایر") {
            typeData.push({
              ["آیتم های ست اداری خود را انتخاب کنید."]: scttext,
            });
          }
        });
        typeData.push({
          ["نمونه های خاصی اگر مدنظرتون هست آپلود کنید."]: baseLogo,
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
        typeData.push({ ["توضیحات آپلود فایل"]: desfile });
        typeData.push({ ["فایل آپلود شده"]: baseImage });
        window.localStorage.setItem(
          "officeset",
          JSON.stringify({ ["پرسشنامه ست اداری"]: typeData })
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

export default OfficeSet;
