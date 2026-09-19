import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { ServiceCategory } from './pages/ServiceCategory'
import { ServiceDetail } from './pages/ServiceDetail'
import { StudentsParents } from './pages/StudentsParents'
import { Corporates } from './pages/Corporates'
import { Insights } from './pages/Insights'
import { InsightArticle } from './pages/InsightArticle'
import { Testimonials } from './pages/Testimonials'
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
        <Route path="insights">
          <Route index element={<Insights />} />
          <Route path=":slug" element={<InsightArticle />} />
        </Route>
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
