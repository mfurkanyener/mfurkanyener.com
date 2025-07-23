"use strict";
exports.id = "component---src-pages-contact-js";
exports.ids = ["component---src-pages-contact-js"];
exports.modules = {

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


const NavbarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav.withConfig({
  displayName: "Navbar__NavbarWrapper"
})(["background:rgba(0,0,0,0.7);backdrop-filter:blur(10px);padding:1rem;position:fixed;width:100%;top:0;left:0;z-index:1000;display:flex;justify-content:center;"]);
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
    onClick: () => scrollToSection("projects")
  }, "Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledLink, {
    onClick: () => scrollToSection("contact")
  }, "Contact")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./src/pages/contact.js?export=default":
/*!*********************************************!*\
  !*** ./src/pages/contact.js?export=default ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.js");



const PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "contact__PageContainer"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding-top:80px;background:linear-gradient(to right,#1e3c72,#2a5298);min-height:100vh;color:white;"]);
const Section = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "contact__Section"
})(["width:100%;max-width:900px;margin:50px auto;padding:60px 30px;border-radius:10px;background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);box-shadow:0px 4px 10px rgba(0,0,0,0.2);transition:all 0.3s ease-in-out;&:hover{transform:translateY(-5px);box-shadow:0px 6px 15px rgba(0,0,0,0.3);}"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "contact__Title"
})(["font-size:2.2em;font-family:\"Poppins\",sans-serif;color:#f4a261;margin-bottom:20px;"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "contact__Form"
})(["display:flex;flex-direction:column;max-width:500px;margin:auto;padding:20px;background:rgba(255,255,255,0.2);border-radius:8px;box-shadow:0px 4px 10px rgba(0,0,0,0.2);"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "contact__Input"
})(["padding:12px;margin:10px 0;border:1px solid #ccc;border-radius:5px;font-size:16px;"]);
const TextArea = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].textarea.withConfig({
  displayName: "contact__TextArea"
})(["padding:12px;margin:10px 0;border:1px solid #ccc;border-radius:5px;font-size:16px;min-height:120px;"]);
const SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "contact__SubmitButton"
})(["background:#f4a261;color:white;padding:12px;border:none;border-radius:5px;font-size:1.2rem;font-weight:bold;cursor:pointer;transition:0.3s;&:hover{background:#e76f51;transform:scale(1.05);}"]);
const ContactPage = () => {
  const homeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const aboutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const projectsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const contactRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
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

    // Simüle edilmiş form gönderimi
    setTimeout(() => {
      setFormStatus("Thank you for your message! I will get back to you soon.");
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    }, 2000);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    scrollToSection: scrollToSection
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PageContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    ref: homeRef,
    id: "home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, null, "Welcome to My Portfolio!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "I am a software engineer specializing in React, JavaScript, and Gatsby.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    ref: aboutRef,
    id: "about"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, null, "About Me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Hi, I'm Metahan. I'm passionate about web development and technology.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    ref: projectsRef,
    id: "projects"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, null, "Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\uD83D\uDE80 Project 1 - React Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\uD83D\uDCF1 Project 2 - Mobile App with React Native"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\uD83C\uDF0D Project 3 - Personal Website"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    ref: contactRef,
    id: "contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, null, "Contact Me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "You can reach me at: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "contact@example.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Form, {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Input, {
    type: "text",
    name: "name",
    value: formData.name,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Input, {
    type: "email",
    name: "email",
    value: formData.email,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Message:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TextArea, {
    name: "message",
    value: formData.message,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SubmitButton, {
    type: "submit"
  }, "Send Message"), formStatus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, formStatus)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-contact-js.js.map