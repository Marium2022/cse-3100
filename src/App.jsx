import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import ContactUs from './views/ContactUs'; // Import Contact Us page
import AboutUs from './views/AboutUs';   // Import About Us page

function App() {
  return (
    <Routes>
      <Route
        element={
          <BaseLayout>
            <Outlet />
          </BaseLayout>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/available-cats" element={<AvailableCats />} />
        <Route path="/contact-us" element={<ContactUs />} /> {/* Contact Us page */}
        <Route path="/about-us" element={<AboutUs />} />     {/* About Us page */}
      </Route>
    </Routes>
  );
}

export default App;
