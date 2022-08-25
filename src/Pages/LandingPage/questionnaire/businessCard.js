import React from "react";
import JCalendar from "reactjs-persian-calendar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useForm } from "react-hook-form";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { ActionMeta, OnChangeValue } from "react-select";

const BusinessCard = () => {
  const [count, setCount] = React.useState(0);
  const [color, setColor] = useColor("hex", "#121212");
  const [typeInput, setTypeInput] = React.useState({
    digital: false,
    fiziki: false,
    a2: false,
    a3: false,
    others: false,
    one: false,
    two: false,
    timeout: false,
    highlight: false,
  });
  const [typeData, setTypeData] = React.useState([]);
  const [typeSize, setSize] = React.useState({});
  const [subject, setSubject] = React.useState({
    subjectOne: "",
    subjectTwo: "",
    brand: "",
    phone: "",
    address: "",
    addresstwo: "",
  });
  const [description, setDescription] = React.useState("");
  const [desfile, setDesfile] = React.useState("");
  const [baseImage, setBaseImage] = React.useState("");
  const [fileName, setFilename] = React.useState("");
  const [date, setDate] = React.useState({});
  const [isErr, setIsErr] = React.useState(false);
  const [err, setErr] = React.useState("");
  const [typetime, setTypeTime] = React.useState("");
  const [onetwo, setOneTwo] = React.useState({});
  const [typedel, setTypeDel] = React.useState({});
  const [kind, setKind] = React.useState("");
  const [baseLogo, setBaseLogo] = React.useState("");
  const [logoName, setLogoname] = React.useState("");
  const [basepodcast, setBasepodcast] = React.useState("");
  const [podName, setPodname] = React.useState("");
  const [scttext, setStjText] = React.useState("");
  const [selectt, setSelectt] = React.useState([]);

  const animatedComponents = makeAnimated();

  const options = [
    { key: 1, value: "گلاسه ای با روکش UV", label: "گلاسه ای با روکش UV" },
    { key: 2, value: "سلفون مات", label: "سلفون مات" },
    { key: 3, value: "سلفون براق", label: "سلفون براق" },
    { key: 4, value: "سوسماری", label: "سوسماری" },
    { key: 5, value: "کتان", label: "کتان" },
    { key: 6, value: "چرمی", label: "چرمی" },
    { key: 7, value: "فلزی", label: "فلزی" },
    { key: 8, value: "شیشه ای", label: "شیشه ای" },
    { key: 9, value: "سایر", label: "سایر" },
  ];

  const selecttchange = (value, e) => {
    setSelectt(value);
  };

  const timechange = (e) => {
    setTypeTime(e.target.value);
  };

  const checkboxchange = (e) => {
    if (e.target.value == "شخصی") {
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
    } else if (e.target.value == "مجموعه") {
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
        placeholder="ابعاد کارت ویزیت خود را بنویسید ."
      />
    );
  }

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

  const onetwochange = (e) => {
    setOneTwo(e.target.value);
  };

  const subjectchangeone = (e) => {
    setSubject({ ...subject, subjectOne: e.target.value });
  };

  const subjectchangetwo = (e) => {
    setSubject({ ...subject, subjectTwo: e.target.value });
  };

  const phonechange = (e) => {
    setSubject({ ...subject, phone: e.target.value });
  };
  const addresschange = (e) => {
    setSubject({ ...subject, address: e.target.value });
  };

  const addresstwochange = (e) => {
    setSubject({ ...subject, addresstwo: e.target.value });
  };

  const brandchange = (e) => {
    setSubject({ ...subject, brand: e.target.value });
  };

  let kindshow;

  const kindchange = (e) => {
    setKind(e.target.value);
  };

  for (let [key, value] of Object.entries(selectt)) {
    if (value.value == "سایر") {
      kindshow = (
        <input
          dir="rtl"
          type="text"
          name="subject-time-tr"
          style={{ marginTop: "20px" }}
          value={kind}
          onChange={kindchange}
          placeholder="جنس کارت ویزیت خود را انتخاب کنید ."
        />
      );
    }
  }

  const deliverychange = (e) => {
    setTypeDel(e.target.value);
  };

  let highlighshow;
  const [highlighttext, setHighlighttext] = React.useState("");

  const handlehighlight = (e) => {
    setHighlighttext(e.target.value);
  };
  const [highlight, setHighlight] = React.useState(false);
  const highlightchange = (e) => {
    setHighlight(!highlight);
  };

  if (highlight == true) {
    highlighshow = (
      <input
        dir="rtl"
        type="text"
        name="subject-time-tr"
        style={{ marginTop: "20px" }}
        value={highlighttext}
        onChange={handlehighlight}
        placeholder="قسمتی را که می خواهید برجسته باشد بنویسید."
      />
    );
  }

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
    <div dir="rtl">
      <h3>
        {count + 1}- کارت ویزیت شما برای شخص یا مجموعه می خواهد طراحی شود؟
      </h3>
      <div className="ui two columnd doubling grid top-grid">
        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="کارت ویزیت شما برای شخص یا مجموعه می
              خواهد طراحی شود؟"
              onChange={checkboxchange}
              value="شخصی"
              checked={typeInput.digital}
              required
            />
            <span>شخصی</span>
          </label>
        </div>

        <div className="column selected-label">
          <label>
            <input
              type="checkbox"
              name="کارت ویزیت شما برای شخص یا مجموعه می
              خواهد طراحی شود؟"
              onChange={checkboxchange}
              value="مجموعه"
              checked={typeInput.fiziki}
              required
            />
            <span>مجموعه</span>
          </label>
        </div>
      </div>
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- حوزه فعالیت شما در چه زمینه ای می باشد؟</h3>
      <textarea
        dir="rtl"
        type="text"
        name="حوزه فعالیت شما در چه زمینه ای می باشد؟"
        value={typetime}
        onChange={timechange}
        placeholder="حوزه فعالیت شما در چه زمینه ای می باشد؟"
      />
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- ابعاد کارت ویزیت خود را انتخاب کنید.</h3>
      <div className="ui three columnd doubling grid top-grid" dir="rtl">
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="ابعاد کارت ویزیت خود را انتخاب کنید."
              onChange={radiochange}
              checked={typeSize === "8.5*8.5"}
              value="8.5*8.5"
            />
            <span>
              <i className="file alternate outline icon"></i>
              8.5*8.5
            </span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="ابعاد کارت ویزیت خود را انتخاب کنید."
              onChange={radiochange}
              checked={typeSize === "5.5*4.8"}
              value="5.5*4.8"
            />
            <span>
              <i className="file alternate outline icon"></i>
              5.5*4.8
            </span>
          </label>
        </div>
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="ابعاد کارت ویزیت خود را انتخاب کنید."
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
          <h3>{count + 1}- رنگ خاصی برای طراحی مدنظرتون هست؟</h3>
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
    <div dir="rtl">
      <h3>{count + 1}- کارت ویزیت شما چگونه است؟</h3>
      <div className="ui two columnd doubling grid top-grid">
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="کارت ویزیت شما چگونه است؟"
              onChange={onetwochange}
              value="یک رو"
              checked={onetwo === "یک رو"}
              required
            />
            <span>یک رو</span>
          </label>
        </div>

        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="کارت ویزیت شما چگونه است؟"
              onChange={onetwochange}
              value="دو رو"
              checked={onetwo === "دو رو"}
              required
            />
            <span>دو رو</span>
          </label>
        </div>
      </div>
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- توضیحات روی کارت خود را بنویسید.</h3>
      <div className="field ">
        <div className="ui left icon input ">
          <textarea
            dir="rtl"
            type="text"
            name="توضیحات روی کارت خود را بنویسید."
            value={subject.subjectOne}
            onChange={subjectchangeone}
            placeholder="توضیحات روی کارت خود را بنویسید."
          />
        </div>
      </div>
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- اسم برند یا مجموعه خود را بنویسید.</h3>
      <input
        dir="rtl"
        type="text"
        name="اسم برند یا مجموعه خود را بنویسید."
        value={subject.brand}
        onChange={brandchange}
        placeholder="اسم برند یا مجموعه خود را بنویسید."
      />
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- نحوه انتشار پروژه شما چه باشد؟</h3>
      <div className="ui three columnd doubling grid top-grid" dir="rtl">
        <div className="column selected-label">
          <label>
            <input
              type="radio"
              name="نحوه انتشار پروژه شما چه باشد؟"
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
              name="نحوه انتشار پروژه شما چه باشد؟"
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
              name="نحوه انتشار پروژه شما چه باشد؟"
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
      <h3>
        {count + 1} - اگر عکس یا لوگو خاصی مد نظرتون هست آن را آپلود کنید.
      </h3>
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
    </div>,
    <div>
      <h3>{count + 1}- شماره تماس ثابت و همراه خود را بنویسید.</h3>
      <div className="field ">
        <div className="ui left icon input ">
          <textarea
            dir="rtl"
            type="text"
            name="شماره تماس ثابت و همراه خود را بنویسید."
            value={subject.phone}
            onChange={phonechange}
            placeholder="شماره تماس ثابت و همراه خود را بنویسید."
          />
        </div>
      </div>
      {isErr ? <p className="err-paragraph">{err}</p> : null}
    </div>,
    <div>
      <h3>{count + 1}- اگر مایلید آدرس سایت یا شبکه اجتماعی خود را بنویسید.</h3>
      <div className="field ">
        <div className="ui left icon input ">
          <textarea
            dir="rtl"
            type="text"
            name="اگر مایلید آدرس سایت یا شبکه اجتماعی خود را بنویسید."
            value={subject.address}
            onChange={addresschange}
            placeholder="اگر مایلید آدرس سایت یا شبکه اجتماعی خود را بنویسید."
          />
        </div>
      </div>
    </div>,
    <div>
      <h3>{count + 1}- اگر مایلید آدرس شرکت یا مجموعه خود را بنویسید.</h3>
      <div className="field ">
        <div className="ui left icon input ">
          <textarea
            dir="rtl"
            type="text"
            name="اگر مایلید آدرس شرکت یا مجموعه خود را بنویسید."
            value={subject.addresstwo}
            onChange={addresstwochange}
            placeholder="اگر مایلید آدرس شرکت یا مجموعه خود را بنویسید."
          />
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
        {count + 1} - اگر نمونه یا طرح خاصی از کارت ویزیت مدنظرتون هست آن را
        آپلود کنید.
      </h3>
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

  if (onetwo === "دو رو") {
    components.splice(
      6,
      0,
      <div>
        <h3>{count + 1}- توضیحات پشت کارت خود را بنویسید</h3>
        <div className="field ">
          <div className="ui left icon input ">
            <textarea
              dir="rtl"
              type="text"
              name="توضیحات پشت کارت خود را بنویسید"
              value={subject.subjectTwo}
              onChange={subjectchangetwo}
              placeholder="توضیحات پشت کارت خود را بنویسید"
            />
          </div>
        </div>
        {isErr ? <p className="err-paragraph">{err}</p> : null}
      </div>
    );
  }

  if (typedel === "چاپی" || typedel === "هردو") {
    if (onetwo === "دو رو") {
      components.splice(
        9,
        0,
        <div>
          <h3>{count + 1}- جنس کارت ویزیت خود را انتخاب کنید.</h3>
          <div className="field selected office" style={{ width: "100%" }}>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={options}
              value={selectt}
              placeholder="جنس کارت ویزیت خود را انتخاب کنید"
              onChange={selecttchange}
            />
          </div>
          {kindshow}
          {isErr ? <p className="err-paragraph">{err}</p> : null}
        </div>
      );
      components.splice(
        10,
        0,
        <div>
          <div
            className="equal width fields"
            dir="rtl"
            style={{ alignItems: "center" }}
          >
            <div className="field " style={{ width: "80%" }}>
              <h3>{count + 1}- آیا مایلید قسمتی از چاپ برجسته باشد.</h3>
            </div>
            <div
              className="field "
              style={{ width: "20%", display: "flex", alignItems: "center" }}
            >
              <FormControlLabel
                value="highlight"
                control={<Switch color="primary" />}
                label=""
                onChange={highlightchange}
                checked={highlight}
              />
              <p style={{ marginRight: "10px" }}>بله</p>
            </div>
          </div>
          {highlighshow}
          {isErr ? <p className="err-paragraph">{err}</p> : null}
        </div>
      );
    } else {
      components.splice(
        8,
        0,
        <div>
          <h3>{count + 1}- جنس کارت ویزیت خود را انتخاب کنید.</h3>
          <div className="field selected office" style={{ width: "100%" }}>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={options}
              value={selectt}
              placeholder="جنس کارت ویزیت خود را انتخاب کنید"
              onChange={selecttchange}
            />
          </div>
          {kindshow}
          {isErr ? <p className="err-paragraph">{err}</p> : null}
        </div>
      );
      components.splice(
        9,
        0,
        <div>
          <div
            className="equal width fields"
            dir="rtl"
            style={{ alignItems: "center" }}
          >
            <div className="field " style={{ width: "80%" }}>
              <h3>{count + 1}- آیا مایلید قسمتی از چاپ برجسته باشد.</h3>
            </div>
            <div
              className="field "
              style={{ width: "20%", display: "flex", alignItems: "center" }}
            >
              <FormControlLabel
                value="highlight"
                control={<Switch color="primary" />}
                label=""
                onChange={highlightchange}
                checked={highlight}
              />
              <p style={{ marginRight: "10px" }}>بله</p>
            </div>
          </div>
          {highlighshow}
          {isErr ? <p className="err-paragraph">{err}</p> : null}
        </div>
      );
    }
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
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("لطفا یک گزینه را انتخاب کنید");
        setIsErr(true);
      }
    }
    if (count == 1) {
      if (Object.keys(typetime).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("حوزه فعالیت شما در چه زمینه ای می باشد؟");
        setIsErr(true);
      }
    }
    if (count == 2) {
      if (Object.keys(typeSize).length != 0) {
        if (typeSize === "سایر") {
          if (Object.keys(scttext).length != 0) {
            setCount(count + 1);
            setIsErr(false);
          } else {
            setErr("لطفا ابعاد کارت ویزیت مورد نظر خود را بنویسید");
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
      if (pallet == false) {
        typeData.push({
          ["رنگ خاصی برای طراحی مدنظرتون هست؟"]: "خیر",
        });
        setCount(count + 1);
        setIsErr(false);
      } else {
        setCount(count + 1);
        setIsErr(false);
        typeData.push({
          ["رنگ مورد نظر خود را از پالت نگی انتخاب کنید."]: color,
        });
      }
    }
    if (count == 4) {
      if (Object.keys(onetwo).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("لطفا یک گزینه را انتخاب کنید");
        setIsErr(true);
      }
    }
    if (count == 5) {
      if (Object.keys(subject.subjectOne).length != 0) {
        setCount(count + 1);
        setIsErr(false);
      } else {
        setErr("لطفا توضیحات روی کارت خود را بنویسید.");
        setIsErr(true);
      }
    }
    if (onetwo === "دو رو") {
      if (count == 6) {
        if (Object.keys(subject.subjectTwo).length != 0) {
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("لطفا توضیحات پشت کارت خود را بنویسید.");
          setIsErr(true);
        }
      }
      if (count == 7) {
        if (Object.keys(subject.brand).length != 0) {
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("لطفا اسم برند یا مجموعه خود را بنویسید.");
          setIsErr(true);
        }
      }
      if (count == 8) {
        if (Object.keys(typedel).length != 0) {
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("لطفا یک گزینه را انتخاب کنید");
          setIsErr(true);
        }
      }
      if (typedel === "چاپی" || typedel === "هردو") {
        if (count == 9) {
          if (Object.keys(selectt).length != 0) {
            let find = selectt.filter((element) => element.value == "سایر");
            if (find.length != 0) {
              if (Object.keys(kind).length != 0) {
                setCount(count + 1);
                setIsErr(false);
              } else {
                setErr("لطفا جنس کارت ویزیت مورد نظر خود را بنویسید.");
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
        if (count == 10) {
          if (highlight == true) {
            if (Object.keys(highlighttext).length != 0) {
              setCount(count + 1);
              setIsErr(false);
            } else {
              setErr("لطفا قسمتی را که می خواهید در چاپ برجسته باشد بنویسید.");
              setIsErr(true);
            }
          } else {
            setCount(count + 1);
            setIsErr(false);
          }
        }
        if (count == 11) {
          setCount(count + 1);
          setIsErr(false);
        }
        if (count == 12) {
          if (Object.keys(subject.phone).length != 0) {
            setCount(count + 1);
            setIsErr(false);
          } else {
            setErr("لطفا شماره تماس ثابت و همراه خود را بنویسید.");
            setIsErr(true);
          }
        }
        if (count == 13) {
          setCount(count + 1);
          setIsErr(false);
        }
        if (count == 14) {
          setCount(count + 1);
          setIsErr(false);
        }

        if (count == 15) {
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
        if (count == 16) {
          setCount(count + 1);
          setIsErr(false);
        }

        if (count == 17) {
          if (Object.keys(baseImage).length != 0) {
            typeData.push({
              ["حوزه فعالیت شما در چه زمینه ای می باشد؟"]: typetime,
            });
            typeData.push({
              ["ابعاد کارت ویزیت خود را انتخاب کنید ."]: typeSize,
            });
            if (typeSize === "سایر") {
              typeData.push({
                ["ابعاد کارت ویزیت خود را انتخاب کنید ."]: scttext,
              });
            }
            typeData.push(onetwo);
            typeData.push({
              ["توضیحات روی کارت خود را بنویسید."]: subject.subjectOne,
            });
            typeData.push({
              ["توضیحات پشت کارت خود را بنویسید"]: subject.subjectTwo,
            });
            typeData.push({
              ["اسم برند یا مجموعه خود را بنویسید."]: subject.brand,
            });
            typeData.push(typedel);
            for (let [key, value] of Object.entries(selectt)) {
              typeData.push({
                ["جنس کارت ویزیت خود را انتخاب کنید."]: value.value,
              });
            }
            selectt.map((element) => {
              if (element.value == "سایر") {
                typeData.push({ ["جنس کارت ویزیت خود را انتخاب کنید."]: kind });
              }
            });
            if (highlight == false) {
              typeData.push({
                ["آیا مایلید قسمتی از چاپ برجسته باشد?"]: "خیر",
              });
            }
            if (highlight == true) {
              typeData.push({
                ["آیا مایلید قسمتی از چاپ برجسته باشد?"]: "بله",
              });
              typeData.push({
                ["آیا مایلید قسمتی از چاپ برجسته باشد?"]: highlighttext,
              });
            }
            typeData.push({
              ["اگر عکس یا لوگو خاصی مد نظرتون هست آن را آپلود کنید."]:
                baseLogo,
            });
            typeData.push({
              ["شماره تماس ثابت و همراه خود را بنویسید."]: subject.phone,
            });
            typeData.push({
              ["اگر مایلید آدرس سایت یا شبکه اجتماعی خود را بنویسید."]:
                subject.address,
            });
            typeData.push({
              ["اگر مایلید آدرس شرکت یا مجموعه خود را بنویسید."]:
                subject.addresstwo,
            });
            typeData.push({
              ["اگر نمونه یا طرح خاصی از کارت ویزیت مدنظرتون هست آن را آپلود کنید."]:
                basepodcast,
            });
            typeData.push({ ["توضیحات آپلود فایل"]: desfile });
            typeData.push({ ["فایل آپلود شده"]: baseImage });
            window.localStorage.setItem(
              "businesscard",
              JSON.stringify({ ["پرسشنامه کارت ویزیت"]: typeData })
            );
            setCount(count + 1);
            setIsErr(false);
          } else {
            setErr("لطفا فایل خود را آپلود کنید");
            setIsErr(true);
          }
        }
      } else {
        if (count == 9) {
          setCount(count + 1);
          setIsErr(false);
        }
        if (count == 10) {
          if (Object.keys(subject.phone).length != 0) {
            setCount(count + 1);
            setIsErr(false);
          } else {
            setErr("لطفا شماره تماس ثابت و همراه خود را بنویسید.");
            setIsErr(true);
          }
        }
        if (count == 11) {
          setCount(count + 1);
          setIsErr(false);
        }
        if (count == 12) {
          setCount(count + 1);
          setIsErr(false);
        }

        if (count == 13) {
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
        if (count == 14) {
          setCount(count + 1);
          setIsErr(false);
        }

        if (count == 15) {
          if (Object.keys(baseImage).length != 0) {
            typeData.push({
              ["حوزه فعالیت شما در چه زمینه ای می باشد؟"]: typetime,
            });
            typeData.push({
              ["ابعاد کارت ویزیت خود را انتخاب کنید ."]: typeSize,
            });
            if (typeSize === "سایر") {
              typeData.push({
                ["ابعاد کارت ویزیت خود را انتخاب کنید ."]: scttext,
              });
            }
            typeData.push(onetwo);
            typeData.push({
              ["توضیحات روی کارت خود را بنویسید."]: subject.subjectOne,
            });
            typeData.push({
              ["توضیحات پشت کارت خود را بنویسید"]: subject.subjectTwo,
            });
            typeData.push({
              ["اسم برند یا مجموعه خود را بنویسید."]: subject.brand,
            });
            typeData.push(typedel);
            for (let [key, value] of Object.entries(selectt)) {
              typeData.push({
                ["جنس کارت ویزیت خود را انتخاب کنید."]: value.value,
              });
            }
            if (highlight == false) {
              typeData.push({
                ["آیا مایلید قسمتی از چاپ برجسته باشد?"]: "خیر",
              });
            }
            if (highlight == true) {
              typeData.push({
                ["آیا مایلید قسمتی از چاپ برجسته باشد?"]: "بله",
              });
              typeData.push({
                ["آیا مایلید قسمتی از چاپ برجسته باشد?"]: highlighttext,
              });
            }
            typeData.push({
              ["اگر عکس یا لوگو خاصی مد نظرتون هست آن را آپلود کنید."]:
                baseLogo,
            });
            typeData.push({
              ["شماره تماس ثابت و همراه خود را بنویسید."]: subject.phone,
            });
            typeData.push({
              ["اگر مایلید آدرس سایت یا شبکه اجتماعی خود را بنویسید."]:
                subject.address,
            });
            typeData.push({
              ["اگر مایلید آدرس شرکت یا مجموعه خود را بنویسید."]:
                subject.addresstwo,
            });
            typeData.push({
              ["اگر نمونه یا طرح خاصی از کارت ویزیت مدنظرتون هست آن را آپلود کنید."]:
                basepodcast,
            });
            typeData.push({ ["توضیحات آپلود فایل"]: desfile });
            typeData.push({ ["فایل آپلود شده"]: baseImage });
            window.localStorage.setItem(
              "businesscard",
              JSON.stringify({ ["پرسشنامه کارت ویزیت"]: typeData })
            );
            setCount(count + 1);
            setIsErr(false);
          } else {
            setErr("لطفا فایل خود را آپلود کنید");
            setIsErr(true);
          }
        }
      }
    } else {
      if (count == 6) {
        if (Object.keys(subject.brand).length != 0) {
          setCount(count + 1);
          setIsErr(false);
        } else {
          setErr("لطفا اسم برند یا مجموعه خود را بنویسید.");
          setIsErr(true);
        }
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
      if (typedel === "چاپی" || typedel === "هردو") {
        if (count == 8) {
          if (Object.keys(selectt).length != 0) {
            let find = selectt.filter((element) => element.value == "سایر");
            if (find.length != 0) {
              if (Object.keys(kind).length != 0) {
                setCount(count + 1);
                setIsErr(false);
              } else {
                setErr("لطفا جنس کارت ویزیت مورد نظر خود را بنویسید.");
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
          if (highlight == true) {
            if (Object.keys(highlighttext).length != 0) {
              setCount(count + 1);
              setIsErr(false);
            } else {
              setErr("لطفا قسمتی را که می خواهید در چاپ برجسته باشد بنویسید.");
              setIsErr(true);
            }
          } else {
            setCount(count + 1);
            setIsErr(false);
          }
        }
        if (count == 10) {
          setCount(count + 1);
          setIsErr(false);
        }
        if (count == 11) {
          if (Object.keys(subject.phone).length != 0) {
            setCount(count + 1);
            setIsErr(false);
          } else {
            setErr("لطفا شماره تماس ثابت و همراه خود را بنویسید.");
            setIsErr(true);
          }
        }
        if (count == 12) {
          setCount(count + 1);
          setIsErr(false);
        }
        if (count == 13) {
          setCount(count + 1);
          setIsErr(false);
        }

        if (count == 14) {
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
        if (count == 15) {
          setCount(count + 1);
          setIsErr(false);
        }

        if (count == 16) {
          if (Object.keys(baseImage).length != 0) {
            typeData.push({
              ["حوزه فعالیت شما در چه زمینه ای می باشد؟"]: typetime,
            });
            typeData.push({
              ["ابعاد کارت ویزیت خود را انتخاب کنید ."]: typeSize,
            });
            if (typeSize === "سایر") {
              typeData.push({
                ["ابعاد کارت ویزیت خود را انتخاب کنید ."]: scttext,
              });
            }
            typeData.push(onetwo);
            typeData.push({
              ["توضیحات روی کارت خود را بنویسید."]: subject.subjectOne,
            });
            typeData.push({
              ["توضیحات پشت کارت خود را بنویسید"]: subject.subjectTwo,
            });
            typeData.push({
              ["اسم برند یا مجموعه خود را بنویسید."]: subject.brand,
            });
            typeData.push(typedel);
            for (let [key, value] of Object.entries(selectt)) {
              typeData.push({
                ["جنس کارت ویزیت خود را انتخاب کنید."]: value.value,
              });
            }
            selectt.map((element) => {
              if (element.value == "سایر") {
                typeData.push({ ["جنس کارت ویزیت خود را انتخاب کنید."]: kind });
              }
            });
            if (highlight == false) {
              typeData.push({
                ["آیا مایلید قسمتی از چاپ برجسته باشد?"]: "خیر",
              });
            }
            if (highlight == true) {
              typeData.push({
                ["آیا مایلید قسمتی از چاپ برجسته باشد?"]: "بله",
              });
              typeData.push({
                ["آیا مایلید قسمتی از چاپ برجسته باشد?"]: highlighttext,
              });
            }
            typeData.push({
              ["اگر عکس یا لوگو خاصی مد نظرتون هست آن را آپلود کنید."]:
                baseLogo,
            });
            typeData.push({
              ["شماره تماس ثابت و همراه خود را بنویسید."]: subject.phone,
            });
            typeData.push({
              ["اگر مایلید آدرس سایت یا شبکه اجتماعی خود را بنویسید."]:
                subject.address,
            });
            typeData.push({
              ["اگر مایلید آدرس شرکت یا مجموعه خود را بنویسید."]:
                subject.addresstwo,
            });
            typeData.push({
              ["اگر نمونه یا طرح خاصی از کارت ویزیت مدنظرتون هست آن را آپلود کنید."]:
                basepodcast,
            });
            typeData.push({ ["توضیحات آپلود فایل"]: desfile });
            typeData.push({ ["فایل آپلود شده"]: baseImage });
            window.localStorage.setItem(
              "businesscard",
              JSON.stringify({ ["پرسشنامه کارت ویزیت"]: typeData })
            );
            setCount(count + 1);
            setIsErr(false);
          } else {
            setErr("لطفا فایل خود را آپلود کنید");
            setIsErr(true);
          }
        }
      } else {
        if (count == 8) {
          setCount(count + 1);
          setIsErr(false);
        }
        if (count == 9) {
          if (Object.keys(subject.phone).length != 0) {
            setCount(count + 1);
            setIsErr(false);
          } else {
            setErr("لطفا شماره تماس ثابت و همراه خود را بنویسید.");
            setIsErr(true);
          }
        }
        if (count == 10) {
          setCount(count + 1);
          setIsErr(false);
        }
        if (count == 11) {
          setCount(count + 1);
          setIsErr(false);
        }

        if (count == 12) {
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
        if (count == 13) {
          setCount(count + 1);
          setIsErr(false);
        }

        if (count == 14) {
          if (Object.keys(baseImage).length != 0) {
            typeData.push({
              ["حوزه فعالیت شما در چه زمینه ای می باشد؟"]: typetime,
            });
            typeData.push({
              ["ابعاد کارت ویزیت خود را انتخاب کنید ."]: typeSize,
            });
            if (typeSize === "سایر") {
              typeData.push({
                ["ابعاد کارت ویزیت خود را انتخاب کنید ."]: scttext,
              });
            }
            typeData.push(onetwo);
            typeData.push({
              ["توضیحات روی کارت خود را بنویسید."]: subject.subjectOne,
            });
            typeData.push({
              ["توضیحات پشت کارت خود را بنویسید"]: subject.subjectTwo,
            });
            typeData.push({
              ["اسم برند یا مجموعه خود را بنویسید."]: subject.brand,
            });
            typeData.push(typedel);
            for (let [key, value] of Object.entries(selectt)) {
              typeData.push({
                ["جنس کارت ویزیت خود را انتخاب کنید."]: value.value,
              });
            }
            if (highlight == false) {
              typeData.push({
                ["آیا مایلید قسمتی از چاپ برجسته باشد?"]: "خیر",
              });
            }
            if (highlight == true) {
              typeData.push({
                ["آیا مایلید قسمتی از چاپ برجسته باشد?"]: "بله",
              });
              typeData.push({
                ["آیا مایلید قسمتی از چاپ برجسته باشد?"]: highlighttext,
              });
            }
            typeData.push({
              ["اگر عکس یا لوگو خاصی مد نظرتون هست آن را آپلود کنید."]:
                baseLogo,
            });
            typeData.push({
              ["شماره تماس ثابت و همراه خود را بنویسید."]: subject.phone,
            });
            typeData.push({
              ["اگر مایلید آدرس سایت یا شبکه اجتماعی خود را بنویسید."]:
                subject.address,
            });
            typeData.push({
              ["اگر مایلید آدرس شرکت یا مجموعه خود را بنویسید."]:
                subject.addresstwo,
            });
            typeData.push({
              ["اگر نمونه یا طرح خاصی از کارت ویزیت مدنظرتون هست آن را آپلود کنید."]:
                basepodcast,
            });
            typeData.push({ ["توضیحات آپلود فایل"]: desfile });
            typeData.push({ ["فایل آپلود شده"]: baseImage });
            window.localStorage.setItem(
              "businesscard",
              JSON.stringify({ ["پرسشنامه کارت ویزیت"]: typeData })
            );
            setCount(count + 1);
            setIsErr(false);
          } else {
            setErr("لطفا فایل خود را آپلود کنید");
            setIsErr(true);
          }
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

export default BusinessCard;
