// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../Assets/Logo.png";
// import { Dropdown, Container, Row, Col } from "react-bootstrap";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [show, setShow] = useState(false);
//   const [showMobileResources, setShowMobileResources] = useState(false);
//   const [showServices, setShowServices] = useState(false);
//   const [showMobileServices, setShowMobileServices] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen((prevState) => !prevState);
//   };

//   const handleNavClick = (path) => {
//     window.scrollTo(0, 0);
//     closeMenu();
//     closeDropdown();
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   const closeDropdown = () => {
//     setShow(false);
//     closeMenu();
//   };

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-2 d-flex justify-content-between align-items-center">
//         {/* Logo */}
//         <div className="d-flex align-items-center border-0">
//           <Link to="/">
//             <img
//               src={Logo}
//               alt="Logo"
//               className="h-18 w-18 ml-4 object-contain border-0"
//               style={{ height: "70px", width: "99px" }}
//             />
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="d-none d-md-flex gap-7 text-gray-700 font-medium align-items-center">
//           {/* <Link
//             to="/training"
//             onClick={() => handleNavClick("/training")}
//             className="text-gray-800 text-decoration-none hover:text-[#4748ac]"
//           >
//             Training
//           </Link> */}

//           <Link
//             to="/events"
//             onClick={() => handleNavClick("/events")}
//             className="text-gray-800 text-decoration-none hover:text-[#4748ac]"
//           >
//             Events
//           </Link>

//           {/* Services Dropdown */}
//           <Dropdown
//             show={showServices}
//             onToggle={(isOpen) => setShowServices(isOpen)}
//           >
//             <Dropdown.Toggle
//               as="button"
//               className="bg-transparent border-0 text-dark p-0 m-0 shadow-none hover:text-primary"
//             >
//               Training
//             </Dropdown.Toggle>

//             <Dropdown.Menu
//               className="p-2 shadow-lg bg-white rounded border"
//               style={{ minWidth: "180px" }}
//             >
//               <Link
//                 to="/acp"
//                 onClick={() => handleNavClick("/acp")}
//                 className="text-dark text-decoration-none py-2 px-3 rounded hover-bg-light d-block"
//               >
//                 ACP
//               </Link>
//               <Link
//                 to="/pmp"
//                 onClick={() => handleNavClick("/pmp")}
//                 className="text-dark text-decoration-none py-2 px-3 rounded hover-bg-light d-block"
//               >
//                 PMP
//               </Link>
//             </Dropdown.Menu>
//           </Dropdown>

//           <Dropdown show={show} onToggle={(isOpen) => setShow(isOpen)}>
//             <Dropdown.Toggle
//               as="button"
//               className="bg-transparent border-0 text-dark p-0 m-0 shadow-none hover:text-primary"
//             >
//               Resources
//             </Dropdown.Toggle>

//             <Dropdown.Menu
//               className="p-2 shadow-lg bg-white rounded border"
//               style={{ minWidth: "220px" }}
//             >
//               <Container>
//                 <Row>
//                   <Col className="d-flex flex-column">
//                     <Link
//                       to="/docs"
//                       onClick={() => handleNavClick("/docs")}
//                       className="text-dark text-decoration-none py-2 px-3 rounded hover-bg-light"
//                     >
//                       Project Docs
//                     </Link>

//                     <Link
//                       to="/flashcards"
//                       onClick={() => handleNavClick("/flashcards")}
//                       className="text-dark text-decoration-none py-2 px-3 rounded hover-bg-light"
//                     >
//                       Flashcards
//                     </Link>

//                     <Link
//                       to="/career-development"
//                       onClick={() => handleNavClick("/career-development")}
//                       className="text-dark text-decoration-none py-2 px-3 rounded hover-bg-light"
//                     >
//                       Career Development
//                     </Link>

//                     <Link
//                       to="/drag-and-drop"
//                       onClick={() => handleNavClick("/drag-and-drop")}
//                       className="text-dark text-decoration-none py-2 px-3 rounded hover-bg-light"
//                     >
//                       Practice Questions
//                     </Link>
//                   </Col>
//                 </Row>
//               </Container>
//             </Dropdown.Menu>
//           </Dropdown>

//           <Link
//             to="/about"
//             onClick={() => handleNavClick("/about")}
//             className="text-gray-800 text-decoration-none hover:text-[#4748ac]"
//           >
//             About us
//           </Link>

//           <Link
//             to="/contact"
//             onClick={() => handleNavClick("/contact")}
//             className="text-gray-800 text-decoration-none hover:text-[#4748ac]"
//           >
//             Contact us
//           </Link>

//           <a
//             href="https://exams.edzest.org/learn/account/signin"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-3 py-2 rounded text-white text-decoration-none bg-[#4748ac] hover:bg-[#37378c]"
//             style={{ marginTop: "-7px" }}
//           >
//             Log in
//           </a>
//         </nav>

//         {/* Mobile Menu */}
//         <div className="d-md-none">
//           <button onClick={toggleMenu} className="btn text-gray-700">
//             <svg
//               className="h-6 w-6"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Sidebar Menu for Mobile */}
//         {isMenuOpen && (
//           <div
//             className="position-fixed top-0 pt-4 end-0 h-100 bg-light shadow-lg d-md-none"
//             style={{ width: "80%", maxWidth: "300px", zIndex: 1050 }}
//           >
//             <button
//               onClick={closeMenu}
//               className="btn-close position-absolute top-0 end-0 m-3"
//               aria-label="Close"
//             ></button>

//             <nav className="p-4">
//               {/* <Link
//                 to="/training"
//                 onClick={() => handleNavClick("/training")}
//                 className="d-block text-gray-800 text-center py-2 text-decoration-none hover:bg-[#4748ac] hover:text-white"
//               >
//                 Training
//               </Link> */}

//               {/* <Link
//                 to="/mock-exam"
//                 onClick={() => handleNavClick("/mock-exam")}
//                 className="d-block text-gray-700 text-center py-2 text-decoration-none hover:bg-[#4748ac] hover:text-white"
//               >
//                 Mock Exam
//               </Link> */}

//               <Link
//                 to="/events"
//                 onClick={() => handleNavClick("/events")}
//                 className="d-block text-gray-700 text-center py-2 text-decoration-none hover:bg-[#4748ac] hover:text-white"
//               >
//                 Events
//               </Link>

//               {/* Services Mobile Dropdown */}
//               <div className="d-flex flex-column align-items-center">
//                 <button
//                   onClick={() => setShowMobileServices(!showMobileServices)}
//                   className="text-dark bg-transparent border-0 py-2 w-100 text-center"
//                 >
//                   Training ▼
//                 </button>
//                 {showMobileServices && (
//                   <div className="d-flex bg-white flex-column align-items-center w-100">
//                     <Link
//                       to="/acp"
//                       onClick={() => handleNavClick("/acp")}
//                       className="text-gray-800 py-2 text-decoration-none hover:text-white hover:bg-[#4748ac]"
//                     >
//                       ACP
//                     </Link>
//                     <Link
//                       to="/pmp"
//                       onClick={() => handleNavClick("/pmp")}
//                       className="text-gray-700 text-center py-2 text-decoration-none hover:bg-[#4748ac] hover:text-white"
//                     >
//                       PMP
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               <div className="d-flex flex-column align-items-center">
//                 <button
//                   onClick={() => setShowMobileResources(!showMobileResources)}
//                   className="text-dark bg-transparent border-0 py-2 w-100 text-center"
//                 >
//                   Resources ▼
//                 </button>
//                 {showMobileResources && (
//                   <div className="d-flex bg-white flex-column align-items-center w-100">
//                     <Link
//                       to="/docs"
//                       onClick={() => handleNavClick("/docs")}
//                       className="text-gray-800 py-2 text-decoration-none hover:text-white hover:bg-[#4748ac]"
//                     >
//                       Project Docs
//                     </Link>

//                     <Link
//                       to="/flashcards"
//                       onClick={() => handleNavClick("/flashcards")}
//                       className="text-gray-700 text-center py-2 text-decoration-none hover:bg-[#4748ac] hover:text-white"
//                     >
//                       Flashcards
//                     </Link>

//                     <Link
//                       to="/career-development"
//                       onClick={() => handleNavClick("/career-development")}
//                       className="text-gray-700 text-center py-2 text-decoration-none hover:bg-[#4748ac] hover:text-white"
//                     >
//                       Career Development
//                     </Link>

//                     <Link
//                       to="/drag-and-drop"
//                       onClick={() => handleNavClick("/drag-and-drop")}
//                       className="text-gray-700 text-center py-2 text-decoration-none hover:bg-[#4748ac] hover:text-white"
//                     >
//                       Practice Questions
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               <Link
//                 to="/about"
//                 onClick={() => handleNavClick("/about")}
//                 className="d-block text-gray-700 text-center py-2 text-decoration-none hover:bg-[#4748ac] hover:text-white"
//               >
//                 About us
//               </Link>

//               <Link
//                 to="/contact"
//                 onClick={() => handleNavClick("/contact")}
//                 className="d-block text-gray-700 text-center py-2 text-decoration-none hover:bg-[#4748ac] hover:text-white"
//               >
//                 Contact us
//               </Link>

//               <a
//                 href="https://exams.edzest.org/learn/account/signin"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-3 py-2 rounded text-decoration-none text-white text-center bg-[#4748ac] hover:bg-[#37378c] d-block mt-3"
//                 onClick={closeMenu}
//               >
//                 Log in
//               </a>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.png";
import { Dropdown, Container, Row, Col } from "react-bootstrap";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [showMobileResources, setShowMobileResources] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleNavClick = (path) => {
    window.scrollTo(0, 0);
    closeMenu();
    closeDropdown();
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const closeDropdown = () => {
    setShow(false);
    closeMenu();
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div className="d-flex align-items-center border-0">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="h-18 w-18 ml-4 object-contain border-0"
              style={{ height: "70px", width: "99px" }}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="d-none d-md-flex gap-4 text-gray-700 font-medium align-items-center">
          {/* <Link
            to="/events"
            onClick={() => handleNavClick("/events")}
            className="text-gray-800 text-decoration-none hover:text-[#4748ac]"
          >
            Events
          </Link> */}

          <Link
            to="/training"
            onClick={() => handleNavClick("/training")}
            className="text-gray-800 text-decoration-none hover:text-[#4748ac]"
          >
            Training
          </Link>

          {/* ✅ New Mock Exams direct link */}
          <Link
  to="/mock-exam"
  onClick={() => handleNavClick("/mock-exam")}
  className="text-gray-800 text-decoration-none hover:text-[#4748ac]"
>
  Mock Exams
</Link>


          {/* Resources Dropdown */}
          <Dropdown show={show} onToggle={(isOpen) => setShow(isOpen)}>
            <Dropdown.Toggle
              as="button"
              className="bg-transparent border-0 text-dark p-0 m-0 shadow-none hover:text-primary"
            >
              Resources
            </Dropdown.Toggle>

            <Dropdown.Menu
              className="p-2 shadow-lg bg-white rounded border"
              style={{ minWidth: "220px" }}
            >
              <Container>
                <Row>
                  <Col className="d-flex flex-column">
                    <Link
                      to="/docs"
                      onClick={() => handleNavClick("/docs")}
                      className="text-dark text-decoration-none py-2 px-3 rounded hover-bg-light"
                    >
                      Project Docs
                    </Link>

                    <Link
                      to="/flashcards"
                      onClick={() => handleNavClick("/flashcards")}
                      className="text-dark text-decoration-none py-2 px-3 rounded hover-bg-light"
                    >
                      Flashcards
                    </Link>

                    <Link
                      to="/career-development"
                      onClick={() => handleNavClick("/career-development")}
                      className="text-dark text-decoration-none py-2 px-3 rounded hover-bg-light"
                    >
                      Career Development
                    </Link>

                    <Link
                      to="/drag-and-drop"
                      onClick={() => handleNavClick("/drag-and-drop")}
                      className="text-dark text-decoration-none py-2 px-3 rounded hover-bg-light"
                    >
                      Practice Questions
                    </Link>


                     <Link
                      to="/pdf-docs"
                      onClick={() => handleNavClick("/pdf-docs")}
                      className="text-dark text-decoration-none py-2 px-3 rounded hover-bg-light"
                    >
                      Pdf Docs
                    </Link>


                  </Col>
                </Row>
              </Container>
            </Dropdown.Menu>
          </Dropdown>

          <Link
            to="/about"
            onClick={() => handleNavClick("/about")}
            className="text-gray-800 text-decoration-none hover:text-[#4748ac]"
          >
            About us
          </Link>

          <Link
            to="/contact"
            onClick={() => handleNavClick("/contact")}
            className="text-gray-800 text-decoration-none hover:text-[#4748ac]"
          >
            Contact us
          </Link>

          <a
            href="https://exams.edzest.org/learn/account/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded text-white text-decoration-none bg-[#4748ac] hover:bg-[#37378c]"
            style={{ marginTop: "-7px" }}
          >
            Log in
          </a>
        </nav>

        {/* Mobile Menu */}
        <div className="d-md-none">
          <button onClick={toggleMenu} className="btn text-gray-700">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Mobile */}
        {isMenuOpen && (
          <div
            className="position-fixed top-0 pt-4 end-0 h-100 bg-light shadow-lg d-md-none"
            style={{ width: "80%", maxWidth: "300px", zIndex: 1050 }}
          >
            <button
              onClick={closeMenu}
              className="btn-close position-absolute top-0 end-0 m-3"
              aria-label="Close"
            ></button>

            <nav className="p-4">
              {/* <Link
                to="/events"
                onClick={() => handleNavClick("/events")}
                className="d-block text-gray-700 text-center py-1 text-decoration-none hover:bg-[#4748ac] hover:text-white"
              >
                Events
              </Link> */}

              <Link
                to="/training"
                onClick={() => handleNavClick("/training")}
                className="d-block text-gray-700 text-center py-1 text-decoration-none hover:bg-[#4748ac] hover:text-white"
              >
                Training
              </Link>

              {/* ✅ New Mock Exams link for Mobile */}
              <Link
                to="/mock-exam"
                onClick={() => handleNavClick("/mock-exams")}
                className="d-block text-gray-700 text-center py-1 text-decoration-none hover:bg-[#4748ac] hover:text-white"
              >
                Mock Exams
              </Link>

              <div className="d-flex flex-column align-items-center">
                <button
                  onClick={() => setShowMobileResources(!showMobileResources)}
                  className="text-dark bg-transparent border-0 py-1 w-100 text-center"
                >
                  Resources ▼
                </button>
                {showMobileResources && (
                  <div className="d-flex bg-white flex-column align-items-center w-100">
                    <Link
                      to="/docs"
                      onClick={() => handleNavClick("/docs")}
                      className="text-gray-800 py-1 text-decoration-none hover:text-white hover:bg-[#4748ac]"
                    >
                      Project Docs
                    </Link>

                    <Link
                      to="/flashcards"
                      onClick={() => handleNavClick("/flashcards")}
                      className="text-gray-700 text-center py-1 text-decoration-none hover:bg-[#4748ac] hover:text-white"
                    >
                      Flashcards
                    </Link>

                    <Link
                      to="/career-development"
                      onClick={() => handleNavClick("/career-development")}
                      className="text-gray-700 text-center py-1 text-decoration-none hover:bg-[#4748ac] hover:text-white"
                    >
                      Career Development
                    </Link>

                    <Link
                      to="/drag-and-drop"
                      onClick={() => handleNavClick("/drag-and-drop")}
                      className="text-gray-700 text-center py-1 text-decoration-none hover:bg-[#4748ac] hover:text-white"
                    >
                      Practice Questions
                    </Link>

                    <Link
                      to="/pdf-docs"
                      onClick={() => handleNavClick("/pdf-docs")}
                      className="text-dark text-decoration-none py-2 px-3 rounded hover-bg-light"
                    >
                      Pdf Docs
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                onClick={() => handleNavClick("/about")}
                className="d-block text-gray-700 text-center py-1 text-decoration-none hover:bg-[#4748ac] hover:text-white"
              >
                About us
              </Link>

              <Link
                to="/contact"
                onClick={() => handleNavClick("/contact")}
                className="d-block text-gray-700 text-center py-1 text-decoration-none hover:bg-[#4748ac] hover:text-white"
              >
                Contact us
              </Link>

              <a
                href="https://exams.edzest.org/learn/account/signin"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded text-decoration-none text-white text-center bg-[#4748ac] hover:bg-[#37378c] d-block mt-3"
                onClick={closeMenu}
              >
                Log in
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
