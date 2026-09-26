import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { ServiceCategory } from './pages/ServiceCategory'
import { ServiceDetail } from './pages/ServiceDetail'
import { StudentsParents } from './pages/StudentsParents'
import { Corporates } from './pages/Corporates'
import { Blogs } from './pages/Blogs'
import { Gallery } from './pages/Gallery'
import { Testimonials } from './pages/Testimonials'
import { Reviews } from './pages/Reviews'
import { Contact } from './pages/Contact'
import { Privacy } from './pages/Privacy'
import { NotFound } from './pages/NotFound'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services">
          <Route index element={<Services />} />
          <Route path=":category" element={<ServiceCategory />} />
          <Route path=":category/:slug" element={<ServiceDetail />} />
        </Route>
        <Route path="students-parents" element={<StudentsParents />} />
        <Route path="corporates" element={<Corporates />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
