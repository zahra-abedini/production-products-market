import React from "react";
import JCalendar from "reactjs-persian-calendar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useForm } from "react-hook-form";

const Translate = () => {
  const [count, setCount] = React.useState(0);
  const [typeInput, setTypeInput] = React.useState({
    digital: false,
    link: false,
    fiziki: false,
    a5: false,
    a4: false,
    other: false,
    translation: false,
    secret: false,
    timeout: false,
  });
  const [origin, setOrigin] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [typeData, setTypeData] = React.useState([]);
  const [typeSize, setSize] = React.useState({});
  const [typeDes, setTypeDes] = React.useState({});
  const [typedel, setTypeDel] = React.useState({});
  const [type, setType] = React.useState({});
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
  const [values, setValues] = React.useState([]);
  const [scttext, setStjText] = React.useState("");
  const [basemotion, setBasemotion] = React.useState("");
  const [motionName, setmotionname] = React.useState("");

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
    } else if (e.target.value == "لینک") {
      setTypeInput({ ...typeInput, link: e.target.checked });
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
  let link;
  let fiz;
  const uploadmotion = async (e) => {
    setmotionname(e.target.files[0].name);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBasemotion(base64);
  };
  const sctTextchange = (e) => {
    setStjText(e.target.value);
  };

  let find = typeData.filter((element) => Object.values(element) == "دیجیتال");
  let find1 = typeData.filter((element) => Object.values(element) == "لینک");
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
  if (find2.length != 0) {
    fiz = <p>تیم پشتیبانی با شما تماس می گیرند.</p>;
  }

  const originchange = (e) => {
    setOrigin(e.target.value);
  };
  let otherorigin;
  if (typeSize === "سایر") {
    otherorigin = (
      <input
        dir="rtl"
        type="text"
        name="subject-time-tr"
        style={{ marginTop: "20px" }}
        value={origin}
        onChange={originchange}
        placeholder="زبان مورد نظر خود را بنویسید"
      />
    );
  }
  const radiochange = (e) => {
    setSize(e.target.value);
  };

  const deschange = (e) => {
    setDestination(e.target.value);
  };
  let otherdestination;
  if (typeDes === "سایر") {
    otherdestination = (
      <input
        dir="rtl"
        type="text"
        name="subject-time-tr"
        style={{ marginTop: "20px" }}
        value={destination}
        onChange={deschange}
        placeholder="زبان مورد نظر خود را بنویسید"
      />
    );
  }

  const radiochangetwo = (e) => {
    setTypeDes(e.target.value);
  };

  const subjectchange = (e) => {
    setSubject({ ...subject.subject, subject: e.target.value });
  };

  const translationchange = (e) => {
    setTypeInput({ ...typeInput, translation: e.target.checked });
  };

  const secretchange = (e) => {
    setTypeInput({ ...typeInput, secret: e.target.checked });
  };

  const deliverychange = (e) => {
    setTypeDel(e.target.value);
  };

  const typechange = (e) => {
    setValues(e.target.value);
  };
  let othertype;
  if (type === "سایر") {
    othertype = (
      <input
        dir="rtl"
        type="text"
        name="subject-time-tr"
        style={{ marginTop: "20px" }}
        value={values}
        onChange={typechange}
        placeholder="سایز مورد نظر خود را بنویسید"
      />
    );
  }

  const radiochangetype = (e) => {
    setType(e.target.value);
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
      <div className="ui three columnd doubling grid top-grid">
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              onChange={checkboxchange}
              checked={typeInput.digital}
              name="نوع فایل شما چیست؟"
              value="دیجیتال"
            />
            <span>دیجیتال</span>
          </label>
        </div>

        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              onChange={checkboxchange}
              checked={typeInput.link}
              name="نوع فایل شما چیست؟"
              value="لینک"
            />
            <span>لینک</span>
          </label>
        </div>

        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              onChange={checkboxchange}
              checked={typeInput.fiziki}
              name="نوع فایل شما چیست؟"
              value="فیزیکی"
            />
            <span>فیزیکی</span>
          </label>
        </div>
        {up}
        {link}
        {fiz}
        {Object.keys(basemotion).length != 0 ? (
          <p className="save-alert">فایل شما با نام "{motionName}" ذخیره شد.</p>
        ) : null}
        {isErr ? <p className="err-paragraph">{err}</p> : null}
      </div>
    </div>,
    <div>
      <h3>{count + 1}- زبان مبدا فایل شما چیست؟</h3>
      <div className="ui three columnd doubling grid top-grid">
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="زبان مبدا فایل شما چیست؟"
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
              name="زبان مبدا فایل شما چیست؟"
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
              name="زبان مبدا فایل شما چیست؟"
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
              name="زبان مبدا فایل شما چیست؟"
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
              name="زبان مبدا فایل شما چیست؟"
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
              name="زبان مبدا فایل شما چیست؟"
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
              name="زبان مبدا فایل شما چیست؟"
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
              name="زبان مبدا فایل شما چیست؟"
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
              name="زبان مبدا فایل شما چیست؟"
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
              name="زبان مبدا فایل شما چیست؟"
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
              name="زبان مبدا فایل شما چیست؟"
              onChange={radiochange}
              checked={typeSize === "سایر"}
              value="سایر"
            />
            <span>سایر</span>
          </label>
        </div>
      </div>
      {otherorigin}
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- به چه زبانی می خواهید آن را ترجمه کنید؟</h3>
      <div className="ui three columnd doubling grid top-grid">
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="به چه زبانی می خواهید آن را ترجمه کنید؟"
              onChange={radiochangetwo}
              checked={typeDes === "فارسی"}
              value="فارسی"
            />
            <span>فارسی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="به چه زبانی می خواهید آن را ترجمه کنید؟"
              value="انگلیسی"
              onChange={radiochangetwo}
              checked={typeDes === "انگلیسی"}
            />
            <span>انگلیسی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="به چه زبانی می خواهید آن را ترجمه کنید؟"
              value="فرانسه"
              onChange={radiochangetwo}
              checked={typeDes === "فرانسه"}
            />
            <span>فرانسه</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="به چه زبانی می خواهید آن را ترجمه کنید؟"
              value="چینی"
              onChange={radiochangetwo}
              checked={typeDes === "چینی"}
            />
            <span>چینی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="به چه زبانی می خواهید آن را ترجمه کنید؟"
              value="ژاپنی"
              onChange={radiochangetwo}
              checked={typeDes === "ژاپنی"}
            />
            <span>ژاپنی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="به چه زبانی می خواهید آن را ترجمه کنید؟"
              value="کره ای"
              onChange={radiochangetwo}
              checked={typeDes === "کره ای"}
            />
            <span>کره ای</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="به چه زبانی می خواهید آن را ترجمه کنید؟"
              value="ایتالیایی"
              onChange={radiochangetwo}
              checked={typeDes === "ایتالیایی"}
            />
            <span>ایتالیایی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="به چه زبانی می خواهید آن را ترجمه کنید؟"
              value="ترکی"
              onChange={radiochangetwo}
              checked={typeDes === "ترکی"}
            />
            <span>ترکی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="به چه زبانی می خواهید آن را ترجمه کنید؟"
              value="اسپانیایی"
              onChange={radiochangetwo}
              checked={typeDes === "اسپانیایی"}
            />
            <span>اسپانیایی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="به چه زبانی می خواهید آن را ترجمه کنید؟"
              value="آلمانی"
              onChange={radiochangetwo}
              checked={typeDes === "آلمانی"}
            />
            <span>آلمانی</span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="به چه زبانی می خواهید آن را ترجمه کنید؟"
              value="سایر"
              onChange={radiochangetwo}
              checked={typeDes === "سایر"}
            />
            <span>سایر</span>
          </label>
        </div>
      </div>
      {otherdestination}
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- موضوع فایل شما چیست؟</h3>
      <div className="field ">
        <div className="ui left icon input ">
          <textarea
            dir="rtl"
            type="موضوع فایل شما چیست؟"
            name="subject"
            placeholder="موضوع فایل خود را وارد کنید"
            value={subject.subject}
            onChange={subjectchange}
          />
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
          <h3>{count + 1}- آیا ترجمه رسمی هست و نیاز به دارالترجمه دارد؟</h3>
        </div>
        <div
          className="field "
          style={{ width: "20%", display: "flex", alignItems: "center" }}
        >
          <FormControlLabel
            value="translate"
            onChange={translationchange}
            checked={typeInput.translation}
            control={<Switch color="primary" />}
            label=""
          />
          <p style={{ marginRight: "10px" }}>بله دارد</p>
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
          <h3>{count + 1}- آیا این ترجمه محرمانه است؟</h3>
        </div>
        <div
          className="field "
          style={{ width: "20%", display: "flex", alignItems: "center" }}
        >
          <FormControlLabel
            value="confidential"
            onChange={secretchange}
            checked={typeInput.secret}
            control={<Switch color="primary" />}
            label=""
          />
          <p style={{ marginRight: "10px" }}>بله </p>
        </div>
      </div>
    </div>,
    <div>
      <h3>{count + 1}- پروژه خود را چگونه میخواهید تحویل بگیرید؟</h3>
      <div className="ui three columnd doubling grid top-grid" dir="rtl">
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="پروژه خود را چگونه میخواهید تحویل بگیرید؟"
              value="دیجیتال"
              onChange={deliverychange}
              checked={typedel === "دیجیتال"}
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
              name="پروژه خود را چگونه میخواهید تحویل بگیرید؟"
              value="چاپی"
              onChange={deliverychange}
              checked={typedel === "چاپی"}
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
              name="پروژه خود را چگونه میخواهید تحویل بگیرید؟"
              value="هردو"
              onChange={deliverychange}
              checked={typedel === "هردو"}
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

  if (typedel == "چاپی" || typedel == "هردو") {
    components.splice(
      7,
      0,
      <div>
        <h3>{count + 1}- چه سایزی مدنظرتون هست؟</h3>
        <div className="ui three columnd doubling grid top-grid" dir="rtl">
          <div className="column selected-label">
            <label>
              <input
                type="radio"
                name="چه سایزی مدنظرتون هست؟"
                value="A5"
                onChange={radiochangetype}
                checked={type === "A5"}
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
                name="چه سایزی مدنظرتون هست؟"
                value="A4"
                onChange={radiochangetype}
                checked={type === "A4"}
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
                name="چه سایزی مدنظرتون هست؟"
                value="سایر"
                onChange={radiochangetype}
                checked={type === "سایر"}
              />
              <span>
                <i className="file alternate outline icon"></i>
                سایر
              </span>
            </label>
          </div>
        </div>
        {othertype}
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
        if (find1.length != 0) {
          if (Object.keys(scttext).length != 0) {
            setCount(count + 1);
            setIsErr(false);
          } else {
            setErr("لطفا لینک خود را وارد نمایید");
            setIsErr(true);
          }
        }
        if (find2.length != 0) {
          if (find.length != 0 || find1.length != 0) {
            if (
              Object.keys(basemotion).length != 0 ||
              Object.keys(scttext).length != 0
            ) {
              setCount(count + 1);
              setIsErr(false);
            } else {
              setErr("لطفا موارد خواسته شده را تکمیل نمایید.");
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
      if (Object.keys(typeSize).length != 0) {
        if (typeSize === "سایر") {
          if (Object.keys(origin).length != 0) {
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
    if (count == 2) {
      if (Object.keys(typeDes).length != 0) {
        if (typeDes === "سایر") {
          if (Object.keys(destination).length != 0) {
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
      if (Object.keys(subject.subject).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("نیاز است که موضوع متن خود را وارد کنید");
        setIsErr(true);
      }
    }
    if (count == 4) {
      setCount(count + 1);
      setIsErr(false);
    }
    if (count == 5) {
      setCount(count + 1);
      setIsErr(false);
    }
    if (count == 6) {
      if (Object.keys(typedel).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("لطفا یک گزینه را انتخاب کنید");
        setIsErr(true);
      }
    }
    if (typedel == "چاپی" || typedel == "هردو") {
      if (count == 7) {
        if (Object.keys(type).length != 0) {
          if (type == "سایر") {
            if (Object.keys(values).length != 0) {
              setCount(count + 1);
              setIsErr(false);
            } else {
              setErr("لطفا سایز مورد نظر خود را بنویسید");
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
          if (find.length != 0) {
            typeData.push({
              ["فایل آپلود شده جهت ترجمه"]: basemotion,
            });
          }
          if (find1.length != 0) {
            typeData.push({
              ["لینک فایل جهت ترجمه"]: scttext,
            });
          }
          if (find2.length != 0) {
            typeData.push({
              ["نوع فایل شما چیست ؟"]: "فایل فیزیکی",
            });
          }
          typeData.push({ ["زبان مبدا فایل شما چیست ؟"]: typeSize });
          if (typeSize === "سایر") {
            typeData.push({ ["زبان مبدا فایل شما چیست ؟"]: origin });
          }
          typeData.push({
            ["به چه زبانی می خواهید آن را ترجمه کنید ؟"]: typeDes,
          });
          if (typeDes === "سایر") {
            typeData.push({
              ["به چه زبانی می خواهید آن را ترجمه کنید ؟"]: description,
            });
          }
          typeData.push({
            ["پروژه خود را چگونه میخواهید تحویل بگیرید"]: typedel,
          });
          typeData.push({ ["چه سایزی مدنظرتون هست؟"]: type });
          if (type == "سایر") {
            typeData.push({ ["چه سایزی مدنظرتون هست؟"]: values });
          }
          if (typeInput.translation == false) {
            typeData.push({
              ["آیا ترجمه رسمی هست و نیاز به دارالترجمه دارد؟"]: "خیر ندارد",
            });
          } else if (typeInput.translation == true) {
            typeData.push({
              ["آیا ترجمه رسمی هست و نیاز به دارالترجمه دارد؟"]: "بله دارد",
            });
          }
          if (typeInput.secret == false) {
            typeData.push({
              ["آیا این ترجمه محرمانه است؟"]: "خیر ",
            });
          } else if (typeInput.secret == true) {
            typeData.push({
              ["آیا این ترجمه محرمانه است؟"]: "بله ",
            });
          }
          typeData.push({ ["موضوع کلی متن شما چیست؟"]: subject.subject });
          typeData.push({ ["توضیحات آپلود فایل"]: description.desfile });
          typeData.push({ ["فایل آپلود شده"]: baseImage });
          setCount(count + 1);
          setIsErr(false);
          window.localStorage.setItem(
            "translate",
            JSON.stringify({ ["پرسشنامه ترجمه"]: typeData })
          );
        } else {
          setErr("لطفا فایل خود را آپلود کنید");
          setIsErr(true);
        }
      }
    } else {
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
          if (find.length != 0) {
            typeData.push({
              ["فایل آپلود شده جهت ترجمه"]: basemotion,
            });
          }
          if (find1.length != 0) {
            typeData.push({
              ["لینک فایل جهت ترجمه"]: scttext,
            });
          }
          if (find2.length != 0) {
            typeData.push({
              ["نوع فایل شما چیست ؟"]: "فایل فیزیکی",
            });
          }
          typeData.push({ ["زبان مبدا فایل شما چیست ؟"]: typeSize });
          if (typeSize === "سایر") {
            typeData.push({ ["زبان مبدا فایل شما چیست ؟"]: origin });
          }
          typeData.push({
            ["به چه زبانی می خواهید آن را ترجمه کنید ؟"]: typeDes,
          });
          if (typeDes === "سایر") {
            typeData.push({
              ["به چه زبانی می خواهید آن را ترجمه کنید ؟"]: description,
            });
          }
          typeData.push({
            ["پروژه خود را چگونه میخواهید تحویل بگیرید"]: typedel,
          });
          if (typeInput.translation == false) {
            typeData.push({
              ["آیا ترجمه رسمی هست و نیاز به دارالترجمه دارد؟"]: "خیر ندارد",
            });
          } else if (typeInput.translation == true) {
            typeData.push({
              ["آیا ترجمه رسمی هست و نیاز به دارالترجمه دارد؟"]: "بله دارد",
            });
          }
          if (typeInput.secret == false) {
            typeData.push({
              ["آیا این ترجمه محرمانه است؟"]: "خیر ",
            });
          } else if (typeInput.secret == true) {
            typeData.push({
              ["آیا این ترجمه محرمانه است؟"]: "بله ",
            });
          }
          typeData.push({ ["موضوع کلی متن شما چیست؟"]: subject.subject });
          typeData.push({ ["توضیحات آپلود فایل"]: description.desfile });
          typeData.push({ ["فایل آپلود شده"]: baseImage });
          setCount(count + 1);
          setIsErr(false);
          window.localStorage.setItem(
            "translate",
            JSON.stringify({ ["پرسشنامه ترجمه"]: typeData })
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

export default Translate;
