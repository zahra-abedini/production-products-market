import React from "react";
import makeAnimated from "react-select/animated";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Translate from '../questionnaire/translate';
import Type from '../questionnaire/type';
import Podcast from '../questionnaire/podcast';
import Motion from "../questionnaire/motion";
import Infographic from "../questionnaire/infographic";
import OfficeSet from "../questionnaire/officeSet";
import Logo from "../questionnaire/logo";
import Catalog from "../questionnaire/catalog";
import Editing from "../questionnaire/editing";
import Poster from "../questionnaire/poster";
import Voice from "../questionnaire/voice";
import LogoMotion from "../questionnaire/logoMotion";
import BusinessCard from "../questionnaire/businessCard";
import Brochure from "../questionnaire/brochure";
import Header from "../questionnaire/header";
import Post from "../questionnaire/post";
import Insta from "../questionnaire/insta";
import Present from "../questionnaire/present";

const animatedComponents = makeAnimated();

function ServiceOption(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };



  let slider;
  let insta;
  let post;
  if (props.index === 17) {
    slider = (
      <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {props.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Type />
              <div className="footer-blue"></div>
            </Typography>
          </AccordionDetails>
        </Accordion>
    )
  }else if (props.index === 2){
    slider = (
      <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {props.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Translate />
              <div className="footer-blue"></div>
            </Typography>
          </AccordionDetails>
        </Accordion>
    )
  }else if (props.index === 4){
    slider = (
      <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {props.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Podcast />
              <div className="footer-blue"></div>
            </Typography>
          </AccordionDetails>
        </Accordion>
    )
  }else if(props.index === 1) {
    slider = (
      <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {props.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Motion />
              <div className="footer-blue"></div>
            </Typography>
          </AccordionDetails>
        </Accordion>
    )
  }else if(props.index === 7) {
    slider = (
      <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {props.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Infographic />
              <div className="footer-blue"></div>
            </Typography>
          </AccordionDetails>
        </Accordion>
    )
  }else if(props.index === 9) {
    slider = (
      <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {props.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <OfficeSet /> 
              <div className="footer-blue"></div>
            </Typography>
          </AccordionDetails>
        </Accordion>
    )
  }else if(props.index === 10) {
    slider = (
      <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {props.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Logo />
              <div className="footer-blue"></div>
            </Typography>
          </AccordionDetails>
        </Accordion>
    )
  }else if(props.index === 11) {
    slider = (
      <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {props.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Catalog />
              <div className="footer-blue"></div>
            </Typography>
          </AccordionDetails>
        </Accordion>
    )
  }else if(props.index === 12) {
    slider = (
      <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {props.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Editing /> 
              <div className="footer-blue"></div>
            </Typography>
          </AccordionDetails>
        </Accordion>
    )
  }else if(props.index === 13) {
    slider = (
      <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {props.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Poster />
              <div className="footer-blue"></div>
            </Typography>
          </AccordionDetails>
        </Accordion>
    )
  }else if(props.index === 14) {
    slider = (
      <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {props.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Voice />
              <div className="footer-blue"></div>
            </Typography>
          </AccordionDetails>
        </Accordion>
    )
  }else if(props.index === 15) {
    slider = (
      <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {props.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <LogoMotion />
              <div className="footer-blue"></div>
            </Typography>
          </AccordionDetails>
        </Accordion>
    )
  }else if(props.index === 16) {
    slider = (
      <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {props.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <BusinessCard /> 
              <div className="footer-blue"></div>
            </Typography>
          </AccordionDetails>
        </Accordion>
    )
  }else if(props.index === 18) {
    slider = (
      <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {props.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Brochure />
              <div className="footer-blue"></div>
            </Typography>
          </AccordionDetails>
        </Accordion>
    )
  }else if(props.index === 19) {
    slider = (
      <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {props.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <Header />
              <div className="footer-blue"></div>
            </Typography>
          </AccordionDetails>
        </Accordion>
    )
  }else if(props.index === 20) {
    slider = (
      <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {props.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <Present/>
              <div className="footer-blue"></div>
            </Typography>
          </AccordionDetails>
        </Accordion>
    );
  }else if(props.index === 5) {
    post = (
      <Post name={props.name}/>
    )
  }else if(props.index === 6) {
    post = (
      <Insta name={props.name}/>
    );
  }

  

  return (
    <>
      <div className="field selected">
         {slider}
        <div className="column selected-label" style={{width:"100%"}}>
          {post}
        </div>
      </div>
    </>
  );
}

export default ServiceOption;
