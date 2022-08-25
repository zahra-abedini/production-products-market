import React from "react";
import JCalendar from "reactjs-persian-calendar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useForm } from "react-hook-form";

const Present = () => {
  const [count, setCount] = React.useState(0);
  const [fileName, setFilename] = React.useState("");
  const [isErr, setIsErr] = React.useState(false);
  const [err, setErr] = React.useState("");
  const [typetime, setTypeTime] = React.useState("");
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
  const [target, setTarget] = React.useState("");
  const [audience, setAudience] = React.useState([]);
  const [typeInput, setTypeInput] = React.useState({
    lt1: false,
    lt2: false,
  });
  const [basepodcast, setBasepodcast] = React.useState("");
  const [podName, setPodname] = React.useState("");

  const timechange = (e) => {
    setTypeTime(e.target.value);
  };

  const subjectchange = (e) => {
    setSubject({ ...subject, subject: e.target.value });
  };

  const addresschange = (e) => {
    setSubject({ ...subject, address: e.target.value });
  };

  const [baseLogo, setBaseLogo] = React.useState("");
  const [logoName, setLogoname] = React.useState("");

  const uploadlogo = async (e) => {
    setLogoname(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseLogo(base64);
  };

  const uploadpodcast = async (e) => {
    setPodname(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBasepodcast(base64);
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
        placeholder="موضوع فایل ارائه خود را بنویسید ."
      />
    );
  }

  const subjectchangeone = (e) => {
    setSubject({ ...subject, subjectOne: e.target.value });
  };

  const checkboxchange = (e) => {
    if (e.target.value == "پاورپوینت") {
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
    } else if (e.target.value == "پرزی") {
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
      <h3>{count + 1}- موضوع فایل ارائه خود را بنویسید .</h3>
      <div className="field" style={{ width: "100%" }}>
        <select value={target} onChange={targetchange}>
          <option hidden selected>
            موضوع طراحی کاتالوگ شما چیست؟
          </option>
          <option value="ارائه گزارش">ارائه گزارش</option>
          <option value="پایان نامه">پایان نامه</option>
          <option value="جلسه سرمایه گذار">جلسه سرمایه گذار</option>
          <option value="فایل آموزشی">فایل آموزشی</option>
          <option value="سایر">سایر</option>
        </select>
      </div>
      {sjt}
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>
        {count + 1}- استاندارهای مورد نظر برای طراحی فایل خود را ذکر کنید .
      </h3>
      <div className="field ">
        <div className="ui left icon input ">
          <textarea
            dir="rtl"
            type="text"
            name="استاندارهای مورد نظر برای طراحی فایل خود را ذکر کنید ."
            value={subject.subjectOne}
            onChange={subjectchangeone}
            placeholder="استاندارهای مورد نظر برای طراحی فایل خود را ذکر کنید ."
          />
        </div>
      </div>
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div dir="rtl">
      <h3>{count + 1}- نوع طراحی خود را انتخاب کنید .</h3>
      <div className="ui two columnd doubling grid top-grid">
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="نوع طراحی خود را انتخاب کنید ."
              value="پاورپوینت"
              onChange={checkboxchange}
              checked={typeInput.lt1}
            />
            <span>پاورپوینت</span>
          </label>
        </div>

        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="نوع طراحی خود را انتخاب کنید ."
              value="پرزی"
              onChange={checkboxchange}
              checked={typeInput.lt2}
            />
            <span>پرزی</span>
          </label>
        </div>
      </div>
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1} - محتوای خود را آپلود کنید</h3>
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
      <h3>لوگوی خود را آپلود کنید .</h3>
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

    if (count == 4) {
      if (Object.keys(subject.subjectOne).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("لطفا استاندارهای مورد نظر خود را بنویسید.");
        setIsErr(true);
      }
    }

    if (count == 5) {
      if (Object.keys(audience).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("لطفا یک گزینه را انتخاب کنید");
        setIsErr(true);
      }
    }

    if (count == 6) {
      if (Object.keys(baseLogo).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("لطفا فایل خود را آپلود کنید");
        setIsErr(true);
      }
    }

    if (count == 7) {
      if (Object.keys(basepodcast).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("لطفا لوگوی خود را آپلود کنید.");
        setIsErr(true);
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
      if (Object.keys(baseImage).length != 0) {
        typeData.push({ ["نام شرکت خود را بنویسید."]: typetime });
        typeData.push({
          ["معرفی مختصری از شرکت خود را بنویسید."]: subject.subject,
        });
        typeData.push({
          ["اگر سایت یا صفحه اجتماعی دارید آدرس آن ها را ذکر کنید."]:
            subject.address,
        });
        typeData.push({ ["موضوع فایل ارائه خود را بنویسید ."]: target });
        if (target === "سایر") {
          typeData.push({ ["موضوع فایل ارائه خود را بنویسید ."]: scttext });
        }
        typeData.push({
          ["استاندارهای مورد نظر برای طراحی فایل خود را ذکر کنید ."]:
            subject.subjectOne,
        });
        typeData.push(audience);
        typeData.push({ ["محتوای خود را آپلود کنید"]: baseLogo });
        typeData.push({ ["لوگوی خود را آپلود کنید"]: basepodcast });
        typeData.push({ ["توضیحات آپلود فایل"]: desfile });
        typeData.push({ ["فایل آپلود شده"]: baseImage });
        window.localStorage.setItem(
          "present",
          JSON.stringify({ ["پرسشنامه ارائه"]: typeData })
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

export default Present;
