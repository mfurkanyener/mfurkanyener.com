exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


const NavbarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav.withConfig({
  displayName: "Navbar__NavbarWrapper"
})(["backdrop-filter:blur(10px);padding:1rem;position:fixed;width:100%;top:0;left:0;z-index:1000;display:flex;justify-content:center;"]);
const NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Navbar__NavLinks"
})(["display:flex;gap:25px;"]);
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Navbar__StyledLink"
})(["color:white;text-decoration:none;font-size:1.2rem;font-weight:bold;cursor:pointer;transition:0.3s;&:hover{color:#f4a261;}"]);
const Navbar = ({
  scrollToSection
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavbarWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavLinks, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledLink, {
    onClick: () => scrollToSection("home")
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledLink, {
    onClick: () => scrollToSection("about")
  }, "About Me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledLink, {
    onClick: () => scrollToSection("skils")
  }, "Skils"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledLink, {
    onClick: () => scrollToSection("projects")
  }, "Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledLink, {
    onClick: () => scrollToSection("contact")
  }, "Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    id: "switch"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "switch"
  }, "Toggle"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./src/image/myPhoto.jpg":
/*!*******************************!*\
  !*** ./src/image/myPhoto.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/myPhoto-413e111115c530490031d5d02a7ba08e.jpg");

/***/ }),

/***/ "./src/pages/index.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/index.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _styles_StyledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/StyledComponents */ "./src/styles/StyledComponents.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _image_myPhoto_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image/myPhoto.jpg */ "./src/image/myPhoto.jpg");





const IndexPage = () => {
  const homeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const aboutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const skilsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const projectsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const contactRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    0: isNightMode,
    1: setIsNightMode
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
  };
  const {
    0: formData,
    1: setFormData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: "",
    email: "",
    message: ""
  });
  const {
    0: formStatus,
    1: setFormStatus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const scrollToSection = section => {
    if (section === "home") homeRef.current.scrollIntoView({
      behavior: "smooth"
    });
    if (section === "about") aboutRef.current.scrollIntoView({
      behavior: "smooth"
    });
    if (section === "projects") projectsRef.current.scrollIntoView({
      behavior: "smooth"
    });
    if (section === "skils") skilsRef.current.scrollIntoView({
      behavior: "smooth"
    });
    if (section === "contact") contactRef.current.scrollIntoView({
      behavior: "smooth"
    });
  };
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setFormStatus("Submitting...");
    setTimeout(() => {
      setFormStatus("Thank you for your message! I will get back to you soon.");
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    }, 2000);
  };

  /*if($("#isAgeSelected").is(':checked'))
      $("#txtAge").show();  // checked
  else
      $("#txtAge").hide();  // unchecked
  */ //DarkThme
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_StyledComponents__WEBPACK_IMPORTED_MODULE_2__.PageContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    scrollToSection: scrollToSection
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "page-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_StyledComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
    ref: homeRef,
    id: "home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "main-intro"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "intro-hello"
  }, "Hello! \uD83D\uDC4B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "intro-text"
  }, "I'm ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Muhammed Furkan Yener, "), "a Computer Engineer specialized in React and JavaScript, and I create innovative web solutions focused on user experience and dynamic technologies."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "img-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _image_myPhoto_jpg__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "My Profile"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "intro-contact"
  }, "Get in touch ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "\uD83D\uDC49"), " m.furkanyener@gmail.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_StyledComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
    ref: aboutRef,
    id: "about"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "About Me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "about"
  }, "I have extensive experience in technology projects and social responsibility. At the \u2018\xD6\u011Frencilerin Sesi\u2019 Platform, I led community-based projects, which helped me develop a strong sense of social responsibility. During my internship at Controlix, I gained comprehensive knowledge in IoT, embedded systems, and commercial satellite projects. I continuously improve myself in innovative fields such as deep learning, blockchain (Web3), and data science. Additionally, I have strengthened my experience in building interactive and dynamic user interfaces using frontend technologies like React and JavaScript. I aim to produce innovative solutions in the digital world by combining my leadership and technical skills. I pursue excellence in every project and strive to offer creative solutions to accelerate digital transformation. And yes, sometimes I escape from code and get lost in nature. But don\u2019t worry, even when I set up my tent, I\u2019m still looking for a Wi-Fi signal! ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_StyledComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
    ref: skilsRef,
    id: "skils"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Skils"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Languages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "JavaScript (ES6)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Typescript"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "HTML"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "CSS/Sass"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "C#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "C++"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Assembly")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Frameworks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "React"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Node.js"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, ".Net"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Wordpress")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Tools"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Bash"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Git & GitHub"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Postman"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "MongoDB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Chrome DevTools")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Industry Knowledge"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "R&D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "IoT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Frontend"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Design"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Sketch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "AutoCAD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "AdobeXD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Figma"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Google Web Designer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Altium Designer"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_StyledComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
    ref: projectsRef,
    id: "projects"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "projects"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "project1"
  }, "Project 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "project2"
  }, "Project 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "project3"
  }, "Project 3"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_StyledComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
    ref: contactRef,
    id: "contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Contact Me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "You can reach me at: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "m.furkanyener@gmail.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_StyledComponents__WEBPACK_IMPORTED_MODULE_2__.Form, {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "name"
  }, "Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_StyledComponents__WEBPACK_IMPORTED_MODULE_2__.Input, {
    type: "text",
    id: "name",
    name: "name",
    value: formData.name,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "email"
  }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_StyledComponents__WEBPACK_IMPORTED_MODULE_2__.Input, {
    type: "email",
    id: "email",
    name: "email",
    value: formData.email,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "message"
  }, "Message:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_StyledComponents__WEBPACK_IMPORTED_MODULE_2__.Textarea, {
    id: "message",
    name: "message",
    value: formData.message,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_StyledComponents__WEBPACK_IMPORTED_MODULE_2__.Button, {
    type: "submit"
  }, "Send Message"), formStatus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, formStatus))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, "Copyright \xA9 2025 - mfurkanyener"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ }),

/***/ "./src/styles/StyledComponents.js":
/*!****************************************!*\
  !*** ./src/styles/StyledComponents.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   Form: () => (/* binding */ Form),
/* harmony export */   Input: () => (/* binding */ Input),
/* harmony export */   PageContainer: () => (/* binding */ PageContainer),
/* harmony export */   Section: () => (/* binding */ Section),
/* harmony export */   Textarea: () => (/* binding */ Textarea),
/* harmony export */   Title: () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "StyledComponents__PageContainer"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;min-height:100vh;color:white;"]);
const Section = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "StyledComponents__Section"
})(["width:90%;max-width:900px;margin:50px auto;padding:40px 20px;border-radius:10px;backdrop-filter:blur(10px);transition:all 0.3s ease-in-out;@media screen and (max-width:768px){padding:30px;}@media screen and (max-width:480px){padding:20px;}"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1.withConfig({
  displayName: "StyledComponents__Title"
})(["font-size:2em;font-weight:bold;color:#f4a261;margin-bottom:20px;text-align:center;@media screen and (max-width:768px){font-size:1.8em;}@media screen and (max-width:480px){font-size:1.5em;}"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].form.withConfig({
  displayName: "StyledComponents__Form"
})(["display:flex;flex-direction:column;max-width:500px;width:100%;margin:auto;padding:40px;background:rgba(255,255,255,0.2);border-radius:8px;box-shadow:0px 4px 10px rgba(0,0,0,0.2);@media screen and (max-width:768px){padding:30px;}@media screen and (max-width:480px){padding:20px;}"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input.withConfig({
  displayName: "StyledComponents__Input"
})(["padding:12px;margin:10px 0;border:1px solid #ccc;border-radius:5px;font-size:16px;width:100%;"]);
const Textarea = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].textarea.withConfig({
  displayName: "StyledComponents__Textarea"
})(["padding:12px;margin:10px 0;border:1px solid #ccc;border-radius:5px;font-size:16px;width:100%;min-height:120px;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "StyledComponents__Button"
})(["background:#f4a261;color:white;padding:12px;border:none;border-radius:5px;font-size:1.2rem;font-weight:bold;cursor:pointer;transition:0.3s;margin-top:10px;width:100%;&:hover{background:#e76f51;transform:scale(1.05);}"]);

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ (() => {



/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map