/**
 * Site photography and footage, imported so Vite fingerprints and bundles them.
 * Files live in src/assets and are named after the page they belong to.
 */
import homeHero from '../assets/Homepage - crop a bit from top_.jpg'
import homeDmit from '../assets/Homepage - DMIT Feature.jpg'
import aboutHero from '../assets/About.jpg'
import founderPortrait from '../assets/Founder Portrait in about.jpg'
import studentsHero from '../assets/Students and parents page - 1st image_.jpg'
import studentsParentChild from '../assets/students and parents page - 2nd image_.jpg'
import corporatesHero from '../assets/Corporate page  - 1st image_.jpg'
import corporatesWorkshop from '../assets/Corporate page - 2nd Image_.jpg'
import assessmentsHero from '../assets/merrilee-schultz-4E-szxM3fkE-unsplash.jpg'
import dmit from '../assets/DMIT Services Page.jpg'
import psychometric from '../assets/Psychometric _ RIASEC Service Page.jpg'
import irisVideo from '../assets/IRIS page.mp4'
import careerCounselling from '../assets/joao-ferrao-4YzrcDNcRVg-unsplash.jpg'
import growingMind from '../assets/Growing Mind Assesment.jpg'
import childPsychology from '../assets/Child Psychology services page.jpg'
import parenting from '../assets/Parenting and child development services _.jpg'
import softSkills from '../assets/Soft skills training - services page.jpg'
import leadership from '../assets/Leadership Training Page.jpg'
import trainTheTrainer from '../assets/Train The Trainer - Services Page.jpg'
import campusToCorporate from '../assets/campus to corporate services page_.jpg'
import hospitality from '../assets/Hospitality Traiining services page.jpg'
import ielts from '../assets/Both IELTS pages.jpg'
import galleryNetworkingMeet from '../assets/WhatsApp Image 2026-09-19 at 13.37.33 (1).jpeg'
import gallerySchoolSeminar from '../assets/WhatsApp Image 2026-09-19 at 13.37.33 (2).jpeg'
import gallerySchoolIntro from '../assets/WhatsApp Image 2026-09-19 at 13.37.34 (1).jpeg'
import galleryParentSession from '../assets/WhatsApp Image 2026-09-19 at 13.37.34.jpeg'
import galleryParentQa from '../assets/WhatsApp Image 2026-09-19 at 13.37.38.jpeg'
import galleryParentDiscussion from '../assets/WhatsApp Image 2026-09-19 at 13.37.39.jpeg'
import galleryBniWorkshop from '../assets/WhatsApp Image 2026-09-19 at 13.44.09.jpeg'
import galleryBniRoundtable from '../assets/WhatsApp Image 2026-09-19 at 13.44.09 (1).jpeg'
import galleryBniDiscussion from '../assets/WhatsApp Image 2026-09-19 at 13.44.10.jpeg'
import galleryBniActivity from '../assets/WhatsApp Image 2026-09-19 at 13.44.10 (1).jpeg'
import galleryVideo from '../assets/WhatsApp Video 2026-09-19 at 13.42.13.mp4'

export const images = {
  homeHero,
  homeDmit,
  aboutHero,
  founderPortrait,
  studentsHero,
  studentsParentChild,
  corporatesHero,
  corporatesWorkshop,
  assessmentsHero,
  services: {
    dmit,
    psychometric,
    careerCounselling,
    growingMind,
    childPsychology,
    parenting,
    softSkills,
    leadership,
    trainTheTrainer,
    campusToCorporate,
    hospitality,
    ielts,
  },
  gallery: {
    networkingMeet: galleryNetworkingMeet,
    schoolSeminar: gallerySchoolSeminar,
    schoolIntro: gallerySchoolIntro,
    parentSession: galleryParentSession,
    parentQa: galleryParentQa,
    parentDiscussion: galleryParentDiscussion,
    bniWorkshop: galleryBniWorkshop,
    bniRoundtable: galleryBniRoundtable,
    bniDiscussion: galleryBniDiscussion,
    bniActivity: galleryBniActivity,
  },
}

export const videos = {
  iris: irisVideo,
  gallery: galleryVideo,
}
