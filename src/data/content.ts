import { images, videos } from './images'

export interface Testimonial {
  /** Paragraphs of the quote; a nested array renders as a bulleted list */
  quote: (string | string[])[]
  name: string
  role?: string
  rating?: number
}

export const testimonials: Testimonial[] = [
  {
    quote: [
      'I had done DMIT for my son. The result was accurate. Moreover, it gives us which field is good and which will not work out. It is an investment for your child.',
    ],
    name: 'Amit J Chhabria',
    role: 'Parent \u2014 DMIT Assessment',
  },
  {
    quote: [
      'I had attended the Campus to Corporate workshop conducted by Mr. Sumeet Bhatia in Feb 2023. The workshop helped me in preparation for my corporate life and thanks to the workshop I was able to get a decent job in an MNC in April.',
      'Thank you Mr. Bhatia & God bless you. Will definitely recommend your workshop to my friends and colleagues.',
    ],
    name: 'Richi',
    role: 'Campus to Corporate Workshop',
  },
  {
    quote: [
      'Recently I attended a 6-day program on Campus to Corporate by Mr. Sumeet Bhatia.',
      'It was a detailed program covering topics like interview skills, resume writing, problem solving and decision making, leadership skills, effective communication and body language skills. I admire the way the content was put in such a concise and easy-to-understand manner. Mr. Bhatia conducted the session really well and it was made simple for us to absorb and retain the knowledge learnt.',
      'Apart from the topics mentioned, there was a lot of additional information shared which was extremely useful for us. The sessions were very informative, knowledgeable and helpful with a lot of learning takeaways.',
      'Thank you so much Sumeet ji.',
    ],
    name: 'Dr. Alpanna',
    role: 'Campus to Corporate Programme',
  },
  {
    quote: [
      'I would like to thank Mr. Sumeet Bhatia for the excellent DMIT test done on my daughter who was confused about what stream of studies suits her.',
      'After the test and excellent consultation done by Mr. Sumeet, she has a clear idea of her career line now.',
      'Thank you Sumeet ji for the wonderful and patient hearing. I recommend all parents having kids above the age of 6 to get the DMIT test which will help us understand the kids\u2019 inclination.',
      'Wish you all the very best!',
    ],
    name: 'Uma Khoday',
    role: 'BNI Samvrudhi, Bangalore Rural',
  },
  {
    quote: [
      'Conducted DMIT and Psychometric Tests for 2 of my nieces \u2014 they are very happy and impressed about the results and the quality of the personal interaction and analysis given by Mr. Sumeet. Appreciate the efforts.',
    ],
    name: 'Manjunath G Vinod',
    role: 'DMIT & Psychometric Assessment',
  },
  {
    quote: [
      'I am extremely grateful for the invaluable guidance and insights provided by Sumeet Bhatia through the Dermatoglyphics Multiple Intelligence Test (DMIT) for my son. Sumeet\u2019s expertise in analyzing my son\u2019s unique fingerprints and correlating them with his innate talents and abilities has been truly enlightening.',
      'Thanks to Sumeet\u2019s thorough assessment, we gained a deeper understanding of my son\u2019s strengths, weaknesses, and learning preferences. This knowledge has not only helped us tailor his education and extracurricular activities to align with his natural inclinations but has also boosted his confidence and motivation.',
      'I am delighted to share that since implementing Sumeet\u2019s recommendations, my son has shown remarkable progress in both academic and personal spheres. His enhanced self-awareness has empowered him to excel in areas where he previously struggled, and he now approaches challenges with renewed enthusiasm and determination.',
      'I wholeheartedly recommend Sumeet Bhatia to any parent seeking to unlock their child\u2019s full potential and nurture their innate talents. His expertise in DMIT is truly transformative, and I am deeply grateful for the positive impact it has had on my son\u2019s development.',
    ],
    name: 'A Client',
    role: 'Parent \u2014 DMIT Assessment',
  },
  {
    quote: [
      'Sumeet was a thorough professional and very prompt on responding to my referral. He has studied my son so well and given a very satisfactory DMIT report. Strongly recommend all to try once to believe!',
    ],
    name: 'Swapna Deepak',
    role: 'Parent \u2014 DMIT Assessment',
  },
  {
    quote: [
      'It was a wonderful experience of Dermatoglyphics Multiple Intelligence Test. It has proved to be an excellent and almost accurate tool that helps in connecting right people around the world for the right role based on the capabilities and inclinations.',
      'The test was done by Sumeet Bhatia Sir and counselling done to my partner director was a perfect pitch for his career and our business.',
      'Thank you Sumeet Bhatia Sir.',
    ],
    name: 'Sujith Shetty',
    role: 'DMIT Assessment & Counselling',
  },
  {
    quote: [
      'For parents worried about their children\u2019s growth (education/work profile) and lifestyle, Fenix Learning Services should be the first step before deciding on which stream the child would be doing well.',
      'As a parent I had a DMIT test on my daughter and was shocked to know the results on her behaviour and interests all almost matched her present behaviour. We were clear to show more interest and support her in the stream which would help to grow her future.',
      'We thank Fenix Learning Services for the clarity given and wish them all the best.',
    ],
    name: 'Praveein Kumar S.',
    role: 'Director, Aarmour Surveillance Pvt Ltd',
  },
  {
    quote: [
      'Thanks for the report and special thanks for the personalized service! I would highly recommend Mr. Sumeet Bhatia\u2019s service. His service actually helps in unravelling the mystery that surrounds many parents with regards to their children\u2019s career choices. This will definitely save our time, energy and money and will help us to be more focused and hence, successful.',
      'The report given for my husband also helped him understand his strengths and work on his hobbies. He also makes sure that the fingerprint data is deleted after the report.',
      'Thanks once again for the personal attention and time!!',
    ],
    name: 'Swetha Hanumanthgari',
    role: 'DMIT Assessment',
  },
  {
    quote: [
      'I\u2019m thrilled to share my exceptional experience with Sumeet Sir\u2019s DMIT (Dermatoglyphic Multiple Intelligence Test) services!',
      'I recently had the test done for my uncle and his son, and the results have been incredibly insightful. The personalized attention and time invested by Sumeet Sir have made a significant impact on both their lives.',
      'DMIT has helped:',
      [
        'Identify their strengths and weaknesses',
        'Uncover hidden talents and potential',
        'Enhance self-awareness and understanding',
        'Inform tailored strategies for personal and professional growth',
      ],
      'Sumeet Sir\u2019s expertise and guidance have been invaluable. His dedication to delivering accurate and actionable results is truly commendable.',
      'Thank you, Sumeet Sir, for your exceptional service and commitment to empowering individuals through DMIT! Highly recommended!',
    ],
    name: 'Syed Mohammed Qasim',
    role: 'DMIT Assessment',
  },
]

export const partners = [
  'Amara Jyothi School \u2014 Bangalore',
  'Seshadripuram College of Management \u2014 Bangalore',
  'Star Health Insurance \u2014 Vasai Branch, Mumbai',
  'BNI \u2014 Vasai Virar',
  'BNI \u2014 BGNN Bangalore',
  'VR1 Networking \u2014 Bangalore',
  'MESCO (Maharashtra Ex Servicemen Cooperative Ltd) \u2014 Pune',
]

export const faqs = [
  {
    question: 'I\u2019m not sure what career is right for me. Can Fenix help?',
    answer:
      'Yes. Fenix provides personalised career counselling to help you explore your interests, strengths, preferences and possible career directions. Assessments can be used where appropriate as part of the guidance process.',
  },
  {
    question: 'How do I know which assessment is right for me?',
    answer:
      'You don\u2019t need to choose on your own. Fenix can understand your requirement first and recommend the assessment or combination of services that is appropriate for your situation.',
  },
  {
    question: 'Is DMIT suitable for my child?',
    answer:
      'DMIT can be used to explore areas such as learning styles, personality traits, strengths, multiple intelligences and career-related interests. Fenix can help you understand whether it is appropriate for your child\u2019s particular requirement.',
  },
  {
    question: 'My child and I struggle to understand each other. Can Fenix help?',
    answer:
      'Fenix offers the Growing Mind Assessment, which looks at parent-child perspectives, behavioural patterns and areas of development. It is designed to help identify differences and support better communication.',
  },
  {
    question: 'Can I take career counselling without taking an assessment?',
    answer:
      'Yes. Career counselling can be undertaken independently. Assessment-based insights may be incorporated when they are relevant to your goals and requirements.',
  },
  {
    question: 'Do you work with working professionals as well as students?',
    answer:
      'Yes. Fenix provides professional development, soft skills, leadership, hospitality and other training programmes for professionals and organisations, in addition to student-focused services.',
  },
  {
    question: 'Can Fenix help me prepare for IELTS?',
    answer:
      'Yes. Fenix provides IELTS training covering Listening, Reading, Writing and Speaking, with preparation designed around your learning needs and goals.',
  },
  {
    question: 'Do you provide training for companies and institutions?',
    answer:
      'Yes. Fenix works with organisations and institutions on areas such as soft skills, leadership, campus-to-corporate preparation, hospitality and professional development.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Simply get in touch with Fenix. We can understand your requirement, discuss the available options and help you identify the most suitable next step.',
  },
]

export const processSteps = [
  { title: 'Understand', body: 'We begin by understanding your goals, needs, strengths and challenges.' },
  {
    title: 'Assess',
    body: 'Where appropriate, assessment tools can provide additional perspectives on strengths, preferences and areas of development.',
  },
  { title: 'Guide', body: 'We translate relevant insights into practical guidance and recommendations.' },
  {
    title: 'Develop',
    body: 'Through training and continued development, we help turn learning into practical progress.',
  },
]

export const values = [
  {
    title: 'Integrity',
    body: 'We believe guidance should be honest, responsible and centred on the individual\u2019s needs.',
  },
  {
    title: 'Empathy',
    body: 'We listen, understand different perspectives and approach learning with sensitivity.',
  },
  {
    title: 'Excellence',
    body: 'We value quality, continuous learning and a commitment to meaningful development.',
  },
  {
    title: 'Inclusivity',
    body: 'We believe every individual deserves the opportunity to learn, develop and explore their potential.',
  },
  {
    title: 'Growth',
    body: 'We encourage curiosity, learning and continuous personal and professional development.',
  },
]

/** Professional training and certifications behind the Fenix service offering. */
export const credentials = [
  { area: 'Soft Skills Training', body: 'ICBI \u2014 course accredited by NABET and SQA' },
  { area: 'Train the Trainer', body: 'ICBI' },
  { area: 'Career Counselling', body: 'Mindpriests International' },
  { area: 'DMIT & Psychometric Practice', body: 'Mindpriests International' },
  { area: 'IRIS Analysis', body: 'NextCom Mumbai' },
  { area: 'Growing Mind Assessment', body: 'Ospira Technologies' },
  { area: 'IELTS Trainer Certification', body: 'Inzpira Education Solutions' },
  { area: 'Child Psychology', body: 'Certification programme under Dr. Himanshi Singh / AIIMS Delhi' },
]

/** What sets the practice apart, per the approved About copy. */
export const differentiators = [
  {
    title: 'Founder-Led Approach',
    body: 'Work directly with the founder for a more personal and consistent experience.',
  },
  {
    title: 'Individual-Centred Guidance',
    body: 'Every engagement begins by understanding the person\u2019s specific goals and requirements.',
  },
  {
    title: 'Multiple Perspectives',
    body: 'Where appropriate, assessment-based insights can complement counselling and training.',
  },
  {
    title: 'Industry Experience',
    body: 'Professional experience across hospitality and travel brings a practical workplace perspective to learning.',
  },
  {
    title: 'Learning With Purpose',
    body: 'The focus is not simply on acquiring information, but on developing understanding and skills that can be applied.',
  },
]

export interface GalleryItem {
  type: 'photo' | 'video'
  /** Image path, video file or YouTube link — leave empty to show a placeholder */
  src?: string
  /** Poster frame for self-hosted videos */
  poster?: string
  caption: string
}

const g = images.gallery

export const gallery: GalleryItem[] = [
  { type: 'photo', src: g.parentSession, caption: 'Career guidance session for parents' },
  { type: 'photo', src: g.bniWorkshop, caption: 'BNI business workshop' },
  { type: 'video', src: videos.gallery, caption: 'Workshop highlights' },
  { type: 'photo', src: g.schoolSeminar, caption: 'School seminar' },
  { type: 'photo', src: g.parentQa, caption: 'Interactive Q&A with parents' },
  { type: 'photo', src: g.bniRoundtable, caption: 'Roundtable with entrepreneurs' },
  { type: 'photo', src: g.schoolIntro, caption: 'Introducing Fenix Learning Services' },
  { type: 'photo', src: g.networkingMeet, caption: 'Business networking meet' },
  { type: 'photo', src: g.parentDiscussion, caption: 'One-on-one parent discussion' },
  { type: 'photo', src: g.bniDiscussion, caption: 'Group discussion activity' },
  { type: 'photo', src: g.bniActivity, caption: 'Participants in action' },
]
