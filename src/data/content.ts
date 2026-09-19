export interface Testimonial {
  quote: string
  name: string
  role: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'The DMIT assessment gave us incredible insight into my daughter’s strengths. For the first time we were talking about her future with facts instead of guesswork.',
    name: 'Ritu Sharma',
    role: 'Parent, Grade 9 Student',
    rating: 5,
  },
  {
    quote:
      'The soft skills training helped me communicate with confidence and present better at work. Highly recommended for any early-career professional.',
    name: 'Arjun Mehta',
    role: 'Working Professional',
    rating: 5,
  },
  {
    quote:
      'A very well-structured and engaging session. Highly recommended for students who are anxious about choosing their career path.',
    name: 'Sneha Iyer',
    role: 'Student, Grade 12',
    rating: 5,
  },
  {
    quote:
      'The career counselling sessions helped me gain clarity and confidence in my next steps. I finally understood why certain subjects came easily to me.',
    name: 'Karthik Rao',
    role: 'Young Professional',
    rating: 5,
  },
  {
    quote:
      'We ran the campus-to-corporate programme across two batches. The difference in how our students carried themselves in interviews was obvious.',
    name: 'Dr. Meera Nair',
    role: 'Placement Head, Partner College',
    rating: 5,
  },
  {
    quote:
      'Structured, patient and genuinely invested in the outcome. My IELTS band moved from 6.5 to 7.5 in seven weeks.',
    name: 'Fatima Sheikh',
    role: 'IELTS Candidate',
    rating: 5,
  },
]

export interface Article {
  slug: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  category: string
  body: string[]
}

export const articles: Article[] = [
  {
    slug: 'choosing-the-right-career-path',
    title: 'How to Choose the Right Career Path for Your Strengths',
    excerpt:
      'Career decisions are rarely made with enough information. Here is a framework for grounding the choice in evidence rather than expectation.',
    date: '2026-09-12',
    readingTime: '6 min read',
    category: 'Career Guidance',
    body: [
      'Most career decisions are made at exactly the moment a student has the least information about themselves. A framework helps.',
      'Start with aptitude, not ambition. Aptitude is the raw material — the things that come more easily to you than they do to other people. Assessments exist to make that visible.',
      'Layer interest on top. Aptitude without interest becomes a competent, joyless career. Interest without aptitude becomes a frustrating one. The overlap is where to look first.',
      'Finally, test the shortlist against reality: what does the day-to-day of this work actually involve, and does that sound like a life you want? Conversations with people doing the job are worth more than any brochure.',
    ],
  },
  {
    slug: 'role-of-assessments-in-student-development',
    title: 'The Role of Assessments in Student Development',
    excerpt:
      'A good assessment does not put a child in a box. It gives the adults around them a shared, specific vocabulary for how that child learns.',
    date: '2026-09-04',
    readingTime: '5 min read',
    category: 'Assessments',
    body: [
      'The objection to assessments is usually the same: they reduce a person to a category. Used badly, that is exactly what happens.',
      'Used well, an assessment does the opposite. It replaces vague judgements — "she is just not a maths person" — with specific, testable observations about how someone processes information.',
      'The value is in the conversation afterwards. A report nobody interprets is a filing exercise. A report discussed with the student, the parent and the teacher becomes a plan.',
    ],
  },
  {
    slug: 'essential-soft-skills-for-professionals',
    title: 'Essential Soft Skills for Today’s Professionals',
    excerpt:
      'Technical ability gets people hired. The skills below are what determine how far they go afterwards.',
    date: '2026-08-21',
    readingTime: '7 min read',
    category: 'Training',
    body: [
      'Every hiring manager has the same complaint about early-career hires, and it is almost never about technical skill.',
      'Clear written communication is the highest-leverage skill in most organisations. It compounds: every email, update and document is either doing work for you or creating more of it.',
      'Then come the harder ones — receiving feedback without defensiveness, disagreeing productively, and knowing when a problem needs escalating rather than absorbing.',
      'None of these are personality traits. They are practised skills, which is good news for anybody who thinks they do not have them.',
    ],
  },
  {
    slug: 'talking-to-your-child-about-their-future',
    title: 'Talking to Your Child About Their Future',
    excerpt:
      'The conversation goes better when it starts earlier, stays curious, and is not held the week before a deadline.',
    date: '2026-08-08',
    readingTime: '4 min read',
    category: 'Parenting',
    body: [
      'The stream selection conversation is usually held under time pressure, which is the worst possible condition for a decision of that size.',
      'Start earlier and keep it light. Curiosity questions — what part of that did you enjoy? — gather more useful information than direct ones.',
      'Separate your anxiety from theirs. Children are remarkably good at detecting which of your questions are really about you.',
    ],
  },
]

export const getArticle = (slug?: string) => articles.find((article) => article.slug === slug)

export const partners = [
  'Seshadripuram College',
  'Star Health Insurance',
  'Sterling Resorts',
  'Amara Jyothi School',
  'Canadian School',
  'Presidency Group',
  'Nirmala Institute',
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
      'Yes. Fenix provides personalised IELTS training covering Listening, Reading, Writing and Speaking, with preparation designed around your learning needs and goals.',
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
