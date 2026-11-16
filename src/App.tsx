import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import BookAppointment from "./BookAppointment";
import Contact from "./contact";
import ResourcesPage from "./Resourcepage/Resourcepage";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </main>
    </>
  );
}
