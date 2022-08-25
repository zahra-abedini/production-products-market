import React from "react";
import { useForm } from "react-hook-form";
import JCalendar from "reactjs-persian-calendar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { sendEmail, welcomeMessage } from "../../../Services/services";

const Type = (props) => {
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
  const [typeFont, setTypeFont] = React.useState({
    font: "",
  });
  const [typeData, setTypeData] = React.useState([]);
  const [typeSize, setSize] = React.useState([]);
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
  const [basemotion, setBasemotion] = React.useState("");
  const [motionName, setmotionname] = React.useState("");
  const [scttext, setStjText] = React.useState("");
  const [virastar, setVirastar] = React.useState(false);

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

  let up;
  let fiz;
  const uploadmotion = async (e) => {
    setmotionname(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBasemotion(base64);
  };

  let find = typeData.filter((element) => Object.values(element) == "دیجیتال");
  let find2 = typeData.filter((element) => Object.values(element) == "فیزیکی");
  if (find.length != 0) {
    up = (
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
  if (find2.length != 0) {
    fiz = <p>تیم پشتیبانی با شما تماس می گیرند.</p>;
  }

  const fontchange = (e) => {
    setTypeFont({ ...typeFont.font, font: e.target.value });
  };

  const radiochange = (e) => {
    if (e.target.value == "A5") {
      setTypeInput({ ...typeInput, a5: e.target.checked });
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
    } else if (e.target.value == "A4") {
      setTypeInput({ ...typeInput, a4: e.target.checked });
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

  const sctTextchange = (e) => {
    setStjText(e.target.value);
  };

  let link;

  let find1 = typeSize.filter((element) => Object.values(element) == "سایر");
  if (find1.length != 0) {
    link = (
      <input
        dir="rtl"
        type="text"
        name="subject-time-tr"
        style={{ margin: "20px" }}
        value={scttext}
        onChange={sctTextchange}
        placeholder="لینک فایل خود را قرار دهید."
      />
    );
  }

  const virastarchange = (e) => {
    setVirastar(!virastar);
  };

  const subjectchange = (e) => {
    setSubject({ ...subject.subject, subject: e.target.value });
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
      {up}
      {fiz}
      {Object.keys(basemotion).length != 0 ? (
        <p className="save-alert">فایل شما با نام "{motionName}" ذخیره شد.</p>
      ) : null}
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- فونت و سایز مدنظرتون برای تایپ چیست؟</h3>
      <div className="field ">
        <div className="ui left icon input ">
          <textarea
            dir="rtl"
            type="text"
            name="فونت و سایز مدنظرتون برای تایپ چیست؟"
            value={typeFont.font}
            onChange={fontchange}
            placeholder="فونت و سایز مدنظر خود را وارد نمایید."
          />
        </div>
      </div>
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- ابعاد کاغذ مورد نظر خود را انتخاب کنید</h3>
      <div className="ui three columnd doubling grid top-grid" dir="rtl">
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="ابعاد کاغذ مورد نظر خود را انتخاب کنید"
              onChange={radiochange}
              checked={typeInput.a5}
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
              type="checkbox"
              name="ابعاد کاغذ مورد نظر خود را انتخاب کنید"
              onChange={radiochange}
              checked={typeInput.a4}
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
              type="checkbox"
              name="ابعاد کاغذ مورد نظر خود را انتخاب کنید"
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
      <div
        className="equal width fields"
        dir="rtl"
        style={{ alignItems: "center" }}
      >
        <div className="field " style={{ width: "80%" }}>
          <h3>{count + 1}- آیا متن شما نیاز به ویراستاری دارد؟</h3>
        </div>
        <div
          className="field "
          style={{ width: "20%", display: "flex", alignItems: "center" }}
        >
          <FormControlLabel
            value="repair"
            name="آیا متن شما نیاز به ویراستاری دارد؟"
            onChange={virastarchange}
            checked={virastar}
            control={<Switch color="primary" />}
            label=""
          />
          <p style={{ marginRight: "10px" }}>بله دارد</p>
        </div>
      </div>
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
            name="توضیحات مربوط به ارسال فایل"
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

  if (virastar == true) {
    components.splice(
      4,
      0,
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
      if (Object.keys(typeData).length != 0) {
        if (find.length != 0) {
          if (Object.keys(basemotion).length != 0) {
            setCount(count + 1);
            setIsErr(false);
          } else {
            setErr("لطفا فایل خود را آپلود کنید.");
            setIsErr(true);
          }
        }
        if (find2.length != 0) {
          if (find.length != 0) {
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
      } else {
        setErr("لطفا یک گزینه را انتخاب کنید");
        setIsErr(true);
      }
    }
    if (count == 1) {
      if (Object.keys(typeFont.font).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("نیاز است که فونت و سایز مدنظر خود را وارد کنید");
        setIsErr(true);
      }
    }
    if (count == 2) {
      if (Object.keys(typeSize).length != 0) {
        if (find1.length != 0) {
          if (Object.keys(scttext).length != 0) {
            setCount(count + 1);
            setIsErr(false);
          } else {
            setErr("لطفا ابعاد کاغذ مورد نظر خود را وارد نمایید");
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
      setCount(count + 1);
      setIsErr(false);
    }
    if (virastar == true) {
      if (count == 4) {
        if (Object.keys(subject.subject).length != 0) {
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("نیاز است که موضوع متن خود را وارد کنید");
          setIsErr(true);
        }
      }
      if (count == 5) {
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
      if (count == 6) {
        if (Object.keys(baseImage).length != 0) {
          if (find.length != 0) {
            typeData.push({
              ["فایل آپلود شده جهت تایپ"]: basemotion,
            });
          }
          if (find2.length != 0) {
            typeData.push({
              ["نوع فایل شما چیست ؟"]: "فایل فیزیکی",
            });
          }
          typeData.push({
            ["فونت و سایز مدنظرتون برای تایپ چیست؟"]: typeFont.font,
          });
          typeData.push(typeSize);
          if (find1.length != 0) {
            typeData.push({
              ["ابعاد کاغذ مورد نظر خود را انتخاب کنید"]: scttext,
            });
          }
          if (virastar == false) {
            typeData.push({
              ["آیا متن شما نیاز به ویراستاری دارد؟"]: "خیر ندارد",
            });
          } else if (virastar == true) {
            typeData.push({
              ["آیا متن شما نیاز به ویراستاری دارد؟"]: "بله دارد",
            });
            typeData.push({ ["موضوع کلی متن شما چیست؟"]: subject.subject });
          }
          typeData.push({ ["توضیحات آپلود فایل"]: desfile });
          typeData.push({ ["فایل آپلود شده"]: baseImage });
          setCount(count + 1);
          setIsErr(false);
          window.localStorage.setItem(
            "type",
            JSON.stringify({ ["پرسشنامه تایپ"]: typeData })
          );
        } else {
          setErr("لطفا فایل خود را آپلود کنید");
          setIsErr(true);
        }
      }
    } else {
      if (count == 4) {
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
      if (count == 5) {
        if (Object.keys(baseImage).length != 0) {
          if (find.length != 0) {
            typeData.push({
              ["فایل آپلود شده جهت تایپ"]: basemotion,
            });
          }
          if (find2.length != 0) {
            typeData.push({
              ["نوع فایل شما چیست ؟"]: "فایل فیزیکی",
            });
          }
          typeData.push({
            ["فونت و سایز مدنظرتون برای تایپ چیست؟"]: typeFont.font,
          });
          typeData.push(typeSize);
          if (find1.length != 0) {
            typeData.push({
              ["ابعاد کاغذ مورد نظر خود را انتخاب کنید"]: scttext,
            });
          }
          if (virastar == false) {
            typeData.push({
              ["آیا متن شما نیاز به ویراستاری دارد؟"]: "خیر ندارد",
            });
          } else if (virastar == true) {
            typeData.push({
              ["آیا متن شما نیاز به ویراستاری دارد؟"]: "بله دارد",
            });
          }
          typeData.push({ ["موضوع کلی متن شما چیست؟"]: subject.subject });

          typeData.push({ ["توضیحات آپلود فایل"]: desfile });
          typeData.push({ ["فایل آپلود شده"]: baseImage });
          setCount(count + 1);
          setIsErr(false);
          window.localStorage.setItem(
            "type",
            JSON.stringify({ ["پرسشنامه تایپ"]: typeData })
          );
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

export default Type;
