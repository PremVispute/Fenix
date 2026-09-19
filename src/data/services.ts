import type { LucideIcon } from 'lucide-react'
import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  Compass,
  Eye,
  Fingerprint,
  Globe2,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Languages,
  Leaf,
  MessagesSquare,
  Presentation,
  Sparkles,
  Users,
} from 'lucide-react'

export type ServiceCategorySlug =
  | 'assessments-career'
  | 'child-psychology-parenting'
  | 'training-development'
  | 'language-training'

export interface Service {
  slug: string
  title: string
  category: ServiceCategorySlug
  /** One-line promise shown under the title on cards and hero */
  kicker: string
  /** Card / listing blurb */
  blurb: string
  /** Longer intro for the detail page */
  intro: string
  icon: LucideIcon
  /** Four-up value points on the detail page */
  benefits: { title: string; body: string }[]
  /** Who the service is designed for */
  audience: string[]
  /** What a participant walks away with */
  outcomes: string[]
  /** Short labels rendered as a strip under the detail hero */
  highlights: string[]
  /** Page-specific process steps; falls back to the shared four when absent */
  process?: { title: string; body: string }[]
  /** Page-specific FAQs; falls back to the shared set when absent */
  faqs?: { question: string; answer: string }[]
  /** Scope or safeguarding note shown as a callout on the detail page */
  note?: { title: string; body: string }
}

export interface ServiceCategory {
  slug: ServiceCategorySlug
  title: string
  blurb: string
  icon: LucideIcon
  /** Category-page hero and body copy, where approved copy exists for it */
  page?: {
    heroTitle: string
    heroAccent: string
    heroScript: string
    introEyebrow: string
    introTitle: string
    introAccent: string
    introBody: string
    approach: { title: string; body: string }[]
    audiences?: { title: string; body: string }[]
    pullQuote: string
    faqs?: { question: string; answer: string }[]
    ctaTitle: string
    ctaAccent: string
    ctaBody: string
  }
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'assessments-career',
    title: 'Assessments & Career',
    blurb:
      'Understand yourself better and explore possibilities through assessment-based insights and personalised career guidance.',
    icon: Compass,
    page: {
      heroTitle: 'Understand Yourself.',
      heroAccent: 'Explore Your Possibilities.',
      heroScript: 'Clarity Can\nChange How You\nMove Forward',
      introEyebrow: 'Find the Right Direction',
      introTitle: 'Assess. Understand.',
      introAccent: 'Explore.',
      introBody:
        'Choosing a career, understanding your strengths or supporting your child\u2019s development can bring a lot of questions. Fenix combines assessment-based insights and personalised career counselling to help you explore those questions and identify meaningful next steps. You don\u2019t have to know which assessment is right for you before you get in touch \u2014 tell us what you are trying to understand, and we will help you explore the appropriate option.',
      approach: [
        { title: 'Connect', body: 'Tell us what you are looking for.' },
        { title: 'Understand', body: 'We discuss your needs and identify an appropriate approach.' },
        { title: 'Assess', body: 'Where relevant, complete the selected assessment.' },
        { title: 'Explore', body: 'Understand the insights and discuss possible next steps.' },
      ],
      pullQuote:
        'Your results don\u2019t define you. They can be a starting point for better questions and more informed choices \u2014 your goals, experiences and circumstances matter too.',
      ctaTitle: 'Ready to Find Your',
      ctaAccent: 'Direction?',
      ctaBody:
        'Whether you are a student exploring your future, a parent seeking guidance or a professional considering your next step, Fenix is here to help.',
    },
  },
  {
    slug: 'child-psychology-parenting',
    title: 'Child Psychology & Parenting',
    blurb:
      'Support for children and the adults around them — understanding behaviour, emotions and development at every stage.',
    icon: HeartHandshake,
  },
  {
    slug: 'training-development',
    title: 'Training & Development',
    blurb:
      'Build the communication, confidence, leadership and professional skills needed to perform effectively in today\u2019s workplace.',
    icon: Presentation,
    page: {
      heroTitle: 'Build the Skills.',
      heroAccent: 'Grow With Confidence.',
      heroScript: 'Learn.\nPractise.\nApply.\nGrow.',
      introEyebrow: 'What Would You Like to Develop?',
      introTitle: 'Training That Connects Learning With',
      introAccent: 'Practice',
      introBody:
        'Strong communication, confident leadership and professional behaviour can make a meaningful difference \u2014 whether you are entering the workplace, developing your career or building stronger teams. Fenix offers practical, industry-focused training programmes for students, professionals and organisations, drawing on professional experience across hospitality, travel and education.',
      approach: [
        { title: 'Understand', body: 'We begin with the learning objectives and requirements.' },
        { title: 'Learn', body: 'Explore relevant concepts, techniques and practical tools.' },
        { title: 'Practise', body: 'Apply what you learn through activities, discussions and exercises.' },
        { title: 'Apply', body: 'Take those skills into academic, professional or workplace situations.' },
      ],
      audiences: [
        { title: 'Students & Graduates', body: 'Develop communication, confidence, interview skills and workplace readiness.' },
        { title: 'Professionals', body: 'Strengthen interpersonal, leadership and professional skills.' },
        { title: 'Trainers', body: 'Develop practical training delivery and facilitation capabilities.' },
        { title: 'Organisations', body: 'Create learning programmes around professional skills, leadership and workplace development.' },
      ],
      pullQuote:
        'Fenix\u2019s training approach draws on professional experience across hospitality, travel and education, bringing real-world context into learning and development.',
      faqs: [
        {
          question: 'Can training be customised?',
          answer:
            'Training can be structured around the requirements, audience and learning objectives of the programme.',
        },
        {
          question: 'Do you train individuals or organisations?',
          answer: 'Fenix offers training for individuals as well as corporate and institutional programmes.',
        },
        {
          question: 'Is the training suitable for students?',
          answer:
            'Yes. Programmes such as Campus to Corporate and Soft Skills Training are designed to support students and young professionals preparing for the workplace.',
        },
        {
          question: 'What areas are covered in Soft Skills Training?',
          answer:
            'Training can cover communication, emotional intelligence, confidence, body language, interview skills, presentation, teamwork, conflict management and other professional skills.',
        },
        {
          question: 'Do you offer hospitality-specific training?',
          answer: 'Yes. Fenix offers hospitality-focused training drawing on practical industry experience.',
        },
        {
          question: 'Can organisations discuss a customised programme?',
          answer:
            'Yes. Organisations can contact Fenix to discuss their learning requirements and explore a suitable training programme.',
        },
      ],
      ctaTitle: 'Ready to Develop Your',
      ctaAccent: 'Next Skill?',
      ctaBody:
        'Whether you are preparing for your first workplace, developing professionally or looking for training for your organisation, Fenix can help you build skills with purpose.',
    },
  },
  {
    slug: 'language-training',
    title: 'Language Training',
    blurb:
      'Prepare for IELTS with structured, personalised training across all four areas of the test.',
    icon: Languages,
    page: {
      heroTitle: 'Build Your English.',
      heroAccent: 'Expand Your Possibilities.',
      heroScript: 'Understand.\nExpress.\nConnect.',
      introEyebrow: 'Language Is More Than Speaking',
      introTitle: 'Effective Communication Begins with',
      introAccent: 'Understanding',
      introBody:
        'Whether you are preparing for an international education opportunity, professional growth or an English-language requirement, developing your overall language ability can help you approach your goals with greater confidence. Our training focuses on building skills across Listening, Reading, Writing and Speaking, while developing the language knowledge and test strategies needed for IELTS preparation.',
      approach: [
        { title: 'Understand', body: 'Identify your current strengths, challenges and learning requirements.' },
        { title: 'Learn', body: 'Build your language knowledge and understand the IELTS format and expectations.' },
        { title: 'Practise', body: 'Work consistently across Listening, Reading, Writing and Speaking.' },
        { title: 'Improve', body: 'Review your performance, address areas of difficulty and keep working towards your target.' },
      ],
      audiences: [
        { title: 'Students', body: 'Prepare for IELTS as part of your plans for higher education abroad.' },
        { title: 'Working Professionals', body: 'Develop English proficiency for international academic or professional opportunities.' },
        { title: 'Individuals Planning International Opportunities', body: 'Prepare for English-language requirements relevant to your chosen pathway.' },
        { title: 'Learners Strengthening Their English', body: 'Develop broader language skills alongside IELTS-focused preparation.' },
      ],
      pullQuote:
        'Strong English is more than being able to speak. It is understanding what you hear, interpreting what you read, expressing ideas through writing and communicating clearly through speech.',
      faqs: [
        {
          question: 'What does IELTS Training cover?',
          answer: 'Training covers all four IELTS components: Listening, Reading, Writing and Speaking.',
        },
        {
          question: 'Do you focus only on IELTS preparation?',
          answer:
            'The training is IELTS-focused, while also developing the broader English language skills required to perform effectively across the four sections.',
        },
        {
          question: 'Do you offer both Academic and General IELTS?',
          answer: 'Yes. The service offering includes preparation for IELTS Academic and IELTS General Training.',
        },
        {
          question: 'Can training be focused on a particular band score?',
          answer: 'Yes. Preparation can be structured around your target band and individual areas of development.',
        },
        {
          question: 'Can I improve my English while preparing for IELTS?',
          answer:
            'Yes. IELTS preparation can simultaneously help develop vocabulary, grammar, comprehension, writing and communication skills.',
        },
        {
          question: 'Is a specific band score guaranteed?',
          answer:
            'No. A particular score cannot be guaranteed, as results depend on the learner\u2019s starting level, preparation, practice and test performance.',
        },
      ],
      ctaTitle: 'Ready to Strengthen Your',
      ctaAccent: 'English?',
      ctaBody:
        'Build your language skills, understand the IELTS requirements and prepare with a structured approach across all four areas.',
    },
  },
]

export const services: Service[] = [
  {
    slug: 'dmit-assessment',
    title: 'DMIT Assessment',
    category: 'assessments-career',
    kicker: 'Discover How You Learn',
    blurb:
      'A DMIT-based assessment offered as an exploratory tool for looking at learning styles, strengths and personality-related characteristics.',
    intro:
      'Every individual has a different way of learning, responding and approaching challenges. Fenix offers DMIT-based assessment as an exploratory tool to provide additional perspectives on learning styles, strengths, personality-related characteristics and career-related interests.',
    icon: Fingerprint,
    highlights: ['Learning Styles', 'Multiple Intelligences', 'Personality Insights', 'Career Interests'],
    benefits: [
      { title: 'Learning Styles', body: 'Explore different approaches to learning and information processing.' },
      { title: 'Multiple Intelligences', body: 'Explore different areas of individual strengths and potential.' },
      { title: 'Personality Insights', body: 'Gain additional perspectives on personality characteristics and behavioural tendencies.' },
      { title: 'Leadership Potential', body: 'Explore leadership-related characteristics and preferences.' },
      { title: 'Career-Related Interests', body: 'Use assessment insights as one part of broader career exploration.' },
      { title: 'Strengths & Development Areas', body: 'Identify areas that can be explored further through guidance and personal development.' },
    ],
    audience: [
      'Students \u2014 exploring learning preferences and strengths alongside academic and career choices',
      'Parents \u2014 seeking additional perspectives on a child\u2019s learning and development',
      'Young adults \u2014 exploring personality-related characteristics, interests and possible directions',
      'Professionals \u2014 reflecting on strengths, preferences and areas for development',
    ],
    outcomes: [
      'A report with insights across the areas covered by the assessment',
      'A discussion of what those insights suggest for you',
      'Where relevant, next steps considered alongside career guidance',
    ],
    process: [
      { title: 'Discuss', body: 'We understand what you are looking to explore.' },
      { title: 'Assess', body: 'The DMIT assessment is completed through the relevant assessment process.' },
      { title: 'Understand', body: 'The resulting report provides insights across the areas covered by the assessment.' },
      { title: 'Discuss', body: 'Where applicable, the insights are discussed as part of your broader development or career guidance.' },
    ],
    faqs: [
      {
        question: 'Does DMIT tell me which career I should choose?',
        answer:
          'No assessment should be treated as a definitive answer to your career. DMIT insights can be one input into a broader career exploration process.',
      },
      {
        question: 'Can parents get a DMIT assessment for their child?',
        answer:
          'Yes. Fenix offers DMIT-based assessment for students and children as part of understanding learning preferences, strengths and areas of potential.',
      },
      {
        question: 'Do I need career counselling along with DMIT?',
        answer:
          'Not necessarily. You can take the assessment independently. Counselling can be useful if you want help interpreting the insights in relation to academic or career decisions.',
      },
      {
        question: 'What does the assessment cover?',
        answer:
          'The Fenix DMIT offering covers areas such as learning styles, multiple intelligences, personality-related characteristics, strengths, leadership potential and career-related interests.',
      },
      {
        question: 'How do I get started?',
        answer:
          'Contact Fenix to discuss what you are looking to understand, and we can guide you through the next step.',
      },
    ],
  },

  {
    slug: 'psychometric-assessment',
    title: 'Psychometric / RAISEC Assessment',
    category: 'assessments-career',
    kicker: 'Find What Interests You',
    blurb:
      'Understand your interests and personality-related preferences to explore career possibilities with greater clarity.',
    intro:
      'Choosing a career is not only about marks or qualifications. Understanding what interests you, how you prefer to work and the environments that appeal to you can provide another perspective when exploring your options. The RAISEC framework looks at six broad interest areas.',
    icon: Sparkles,
    highlights: ['Interests', 'Preferences', 'Career Exploration', 'Development Areas'],
    benefits: [
      { title: 'Realistic', body: 'Interest in practical, hands-on activities, tools, equipment and working with things.' },
      { title: 'Artistic', body: 'Interest in creativity, expression, ideas, design and creating something original.' },
      { title: 'Investigative', body: 'Interest in exploring ideas, analysing information, solving problems and understanding how things work.' },
      { title: 'Social', body: 'Interest in helping, supporting, teaching and working with people.' },
      { title: 'Enterprising', body: 'Interest in leadership, persuasion, business, initiative and taking action.' },
      { title: 'Conventional', body: 'Interest in organisation, structure, information, systems and detail-oriented activities.' },
    ],
    audience: [
      'Students \u2014 exploring interests and possible directions while making academic and subject choices',
      'College students and graduates \u2014 weighing higher education, career options or the transition into work',
      'Professionals \u2014 reflecting on interests and preferences when considering a change in direction',
    ],
    outcomes: [
      'A RAISEC profile covering the six interest areas',
      'Additional perspectives on interests, preferences and areas for development',
      'A review of the results and the areas they highlight',
    ],
    process: [
      { title: 'Understand', body: 'We discuss what you are hoping to explore.' },
      { title: 'Assess', body: 'You complete the relevant psychometric assessment.' },
      { title: 'Explore', body: 'We review the results together and understand the areas highlighted.' },
      { title: 'Plan', body: 'The insights become one part of your broader career exploration and decision-making.' },
    ],
    faqs: [
      {
        question: 'Does the assessment tell me which career I should choose?',
        answer:
          'No. It provides additional perspectives on interests and personality-related preferences that can support broader career exploration.',
      },
      {
        question: 'Is RAISEC only for students?',
        answer:
          'No. It can also be useful for graduates and professionals exploring career development or a change in direction.',
      },
      {
        question: 'Can I take the assessment without career counselling?',
        answer:
          'Yes. The assessment can be undertaken independently. Counselling can be added if you would like support connecting the insights with your academic or career plans.',
      },
      {
        question: 'What are the six RAISEC areas?',
        answer: 'Realistic, Artistic, Investigative, Social, Enterprising and Conventional.',
      },
      {
        question: 'What happens after the assessment?',
        answer:
          'The results can be reviewed and understood in context, with relevant next steps explored based on your goals.',
      },
    ],
  },

  {
    slug: 'growing-mind-assessment',
    title: 'Growing Mind Assessment',
    category: 'assessments-career',
    kicker: 'Understand Your Child. Strengthen the Connection.',
    blurb:
      'A structured way to explore parent-child perspectives, behavioural patterns and areas of development.',
    intro:
      'Children and parents can sometimes see the same situation differently. The parent and child complete their respective assessments, allowing the results to highlight areas of similarity, difference and potential communication gaps \u2014 which can then be discussed in the context of the child\u2019s development and the parent-child relationship.',
    icon: Leaf,
    highlights: ['Understanding', 'Communication', 'Behavioural Patterns', 'Connection'],
    benefits: [
      { title: 'Understanding', body: 'Gain additional perspectives on how your child may see and respond to different situations.' },
      { title: 'Communication', body: 'Identify areas where differences in perspectives may be affecting conversations.' },
      { title: 'Behavioural Patterns', body: 'Explore patterns that may be useful to discuss further.' },
      { title: 'Development', body: 'Identify areas that may benefit from greater attention, understanding or support.' },
      { title: 'Connection', body: 'Use the insights as a starting point for more open and meaningful conversations.' },
    ],
    audience: [
      'Parents and children aged 8\u201318',
      'Educators and school counsellors',
      'Parenting professionals',
      'Educational institutions',
    ],
    outcomes: [
      'A view of where parent and child perspectives align and differ',
      'Areas of potential concern identified for further discussion',
      'A discussion of the results and appropriate next steps',
    ],
    process: [
      { title: 'Connect', body: 'We understand your concerns and what you would like to explore.' },
      { title: 'Assess', body: 'The parent and child complete their respective assessment.' },
      { title: 'Understand', body: 'The results are reviewed to identify areas of similarity, difference and potential concern.' },
      { title: 'Discuss', body: 'The insights are discussed to help parents understand the results and consider next steps.' },
    ],
    note: {
      title: 'It is not about finding fault.',
      body: 'Parenting does not come with a universal guide. Every child is different, and every parent-child relationship has its own dynamics. The assessment is not a diagnosis and is not a substitute for professional psychological or clinical care where that is required.',
    },
    faqs: [
      {
        question: 'What age group is the Growing Mind Assessment for?',
        answer: 'The Fenix material describes the assessment for parents and children between 8 and 18 years of age.',
      },
      {
        question: 'Do the parent and child take the same assessment?',
        answer:
          'The assessment involves the parent and child responding separately to the relevant questions, allowing their perspectives to be considered together.',
      },
      {
        question: 'Will the assessment tell me what is wrong with my child?',
        answer:
          'No. The assessment should not be treated as a diagnosis. It provides additional perspectives that can be discussed in the context of the child\u2019s development and your relationship.',
      },
      {
        question: 'What happens after the assessment?',
        answer:
          'The results can be reviewed and discussed with Fenix to understand the areas highlighted and consider appropriate next steps.',
      },
      {
        question: 'Can the assessment replace a psychologist or counsellor?',
        answer:
          'No. It is an assessment-based tool and should not be considered a substitute for professional psychological or clinical care where that is required.',
      },
      {
        question: 'Can I take the assessment if there isn\u2019t a major problem at home?',
        answer:
          'Yes. Parents may use it simply to gain additional perspectives and support better understanding and communication with their child.',
      },
    ],
  },
  {
    slug: 'iris-analysis',
    title: 'IRIS Analysis',
    category: 'assessments-career',
    kicker: 'See Yourself from a Different Perspective',
    blurb:
      'Explore personality-related characteristics, strengths and behavioural patterns through iris-image assessment and AI-assisted interpretation.',
    intro:
      'IRIS Analysis involves capturing images of the iris and using an assessment system to generate insights relating to personality, strengths and behavioural characteristics. At Fenix it is positioned as a tool for self-understanding and personal exploration, rather than as a definitive measure of anyone\u2019s abilities, personality or future.',
    icon: Eye,
    highlights: ['Personality', 'Strengths', 'Behavioural Patterns', 'Personal Development'],
    benefits: [
      { title: 'Personality-Related Characteristics', body: 'Gain additional perspectives on characteristics that may influence how you approach situations and interact with others.' },
      { title: 'Strengths', body: 'Explore areas that may support your personal development and self-awareness.' },
      { title: 'Behavioural Patterns', body: 'Reflect on behavioural tendencies and how they may influence communication and interactions.' },
      { title: 'Personal Development', body: 'Use the insights as a starting point for conversations around self-awareness, growth and development.' },
      { title: 'Career & Educational Exploration', body: 'Where relevant, insights can be discussed alongside broader career or educational considerations.' },
    ],
    audience: [
      'Students \u2014 as an additional perspective during educational or career exploration',
      'Parents \u2014 for another perspective when discussing a child\u2019s strengths and development',
      'Young adults \u2014 for personal reflection during academic and career decisions',
      'Professionals \u2014 for self-awareness and personal-development conversations',
    ],
    outcomes: [
      'An assessment output covering personality, strengths and behavioural characteristics',
      'A discussion to help you understand the perspectives the assessment provides',
      'Insights you can consider alongside your interests, experiences and goals',
    ],
    process: [
      { title: 'Capture', body: 'An image of the iris is taken using the relevant assessment equipment.' },
      { title: 'Analyse', body: 'The image is processed through the assessment system, with AI-assisted analysis generating the output.' },
      { title: 'Understand', body: 'The results are discussed to help you understand the perspectives provided.' },
      { title: 'Explore', body: 'Insights are then considered alongside your interests, experiences, goals and circumstances.' },
    ],
    faqs: [
      {
        question: 'What is used for an IRIS Analysis?',
        answer:
          'The assessment uses images of the iris as the data source, with the relevant assessment system used to generate the output.',
      },
      {
        question: 'What can IRIS Analysis tell me?',
        answer:
          'It is intended to provide perspectives relating to personality, strengths and behavioural characteristics. These insights should be viewed as one input into self-understanding rather than definitive conclusions.',
      },
      {
        question: 'Can IRIS Analysis tell me which career I should choose?',
        answer:
          'No assessment should be treated as determining your \u201cbest\u201d career. Career choices involve multiple factors, including interests, abilities, education, goals and circumstances.',
      },
      {
        question: 'Can children take an IRIS Analysis?',
        answer:
          'The service can be discussed for students where appropriate. Parents should consider the child\u2019s individual circumstances and the purpose of taking the assessment.',
      },
      {
        question: 'Is IRIS Analysis a medical test?',
        answer:
          'No. Fenix does not position IRIS Analysis as a medical diagnostic service. It should not be used to diagnose, treat or rule out a health condition, and it does not replace advice from a qualified medical, psychological or other healthcare professional.',
      },
      {
        question: 'Can I combine IRIS Analysis with career counselling?',
        answer:
          'Yes. Assessment insights can be discussed as part of a broader career exploration or counselling process.',
      },
    ],
  },

  {
    slug: 'career-counselling',
    title: 'Career Counselling',
    category: 'assessments-career',
    kicker: 'Your Future Has Options',
    blurb:
      'Personalised counselling to help you explore your interests, strengths, possibilities and next steps.',
    intro:
      'Choosing subjects, courses or a career path can feel overwhelming \u2014 especially when there are too many options or too little clarity. Fenix Learning Services provides personalised career counselling to help students, young adults and professionals explore their interests, strengths, possibilities and next steps.',
    icon: Briefcase,
    highlights: ['Academic Choices', 'Career Exploration', 'Higher Education', 'Skill Development'],
    benefits: [
      { title: 'Academic & Subject Choices', body: 'Explore possible academic directions based on your interests, strengths and goals.' },
      { title: 'Career Exploration', body: 'Understand different career possibilities and what they may involve.' },
      { title: 'Higher Education', body: 'Think through further study options and how they connect with your longer-term goals.' },
      { title: 'Career Direction', body: 'Gain support when you are unsure about your current path or considering a different direction.' },
      { title: 'Skill Development', body: 'Identify areas where developing new skills could support your academic or professional goals.' },
    ],
    audience: [
      'School students \u2014 beginning to think about subjects, courses and future careers',
      'College students \u2014 exploring career options, higher education or the transition into work',
      'Graduates \u2014 looking for greater clarity around their first career steps',
      'Professionals \u2014 considering career development, a change in direction or their next move',
    ],
    outcomes: [
      'A clearer understanding of your options and what they may involve',
      'Relevant considerations weighed against your own situation',
      'Practical next steps you can take forward',
    ],
    process: [
      { title: 'Understand', body: 'We begin with your goals, interests, background and concerns.' },
      { title: 'Explore', body: 'We look at relevant career, academic or professional possibilities.' },
      { title: 'Assess', body: 'Where appropriate, assessment-based insights can provide additional perspectives.' },
      { title: 'Guide', body: 'We discuss the options and considerations relevant to your situation.' },
      { title: 'Plan', body: 'We identify practical next steps that you can take forward.' },
    ],
    note: {
      title: 'Assessments can be part of the journey \u2014 but they do not define your future.',
      body: 'Where appropriate, Fenix may incorporate assessment-based insights such as DMIT or Psychometric / RAISEC into the broader guidance process. These are considered alongside your academic background, interests, experiences, goals and individual circumstances.',
    },
    faqs: [
      {
        question: 'When should I consider career counselling?',
        answer:
          'You can seek career counselling whenever you need greater clarity around academic choices, career exploration, higher education or professional direction.',
      },
      {
        question: 'Do I need to know what career I want before counselling?',
        answer: 'No. You can come to counselling precisely because you are unsure about your direction.',
      },
      {
        question: 'Do I have to take an assessment?',
        answer:
          'No. Career counselling can be undertaken independently. Assessments may be incorporated where they are relevant to your needs.',
      },
      {
        question: 'Is career counselling only for school students?',
        answer: 'No. Fenix works with school students, college students, graduates and professionals.',
      },
      {
        question: 'Can parents be involved in a student\u2019s career counselling?',
        answer:
          'Yes. Depending on the student\u2019s age and situation, parents can be part of the broader guidance process.',
      },
      {
        question: 'Will you tell me which career I should choose?',
        answer:
          'Career counselling is not about making the decision for you. It is about helping you understand your options and make a more informed decision based on your individual situation.',
      },
    ],
  },
  {
    slug: 'child-psychology',
    title: 'Child Psychology',
    category: 'child-psychology-parenting',
    kicker: 'Understand the Child Behind the Behaviour',
    blurb:
      'A child-focused perspective on behaviour, emotions, development and the parent-child relationship.',
    intro:
      'Children don\u2019t always have the words to explain what they are feeling. Changes in behaviour, withdrawal, anxiety, emotional outbursts, academic pressure or difficulty coping can leave parents wondering what is really going on. Fenix helps parents approach these situations with greater awareness and understanding.',
    icon: HeartHandshake,
    highlights: ['Emotional Development', 'Anxiety', 'Resilience', 'Communication'],
    benefits: [
      { title: 'Emotional Development', body: 'Understand how children recognise, express and manage emotions, and why emotional regulation matters in healthy development.' },
      { title: 'Childhood Anxiety', body: 'Explore how anxiety can present through thoughts, physical symptoms and behaviour, including avoidance and fear of failure.' },
      { title: 'Resilience & Coping', body: 'Explore ways children can develop coping skills, emotional regulation and supportive relationships.' },
      { title: 'Parenting & Communication', body: 'Understand changing parent-child dynamics, communication gaps and the shift from control towards guidance.' },
      { title: 'Social Pressure & Bullying', body: 'Develop awareness of bullying, peer pressure, social influence and potential warning signs.' },
      { title: 'Adolescent Development', body: 'Explore the emotional, social and academic pressures that can affect children and adolescents as they grow.' },
    ],
    audience: [
      'Parents noticing a change in their child\u2019s behaviour or mood',
      'Parents wanting to communicate with their child more effectively',
      'Parents seeking guidance without a diagnosis or formal referral',
      'Caregivers supporting a child through school, social or emotional pressure',
    ],
    outcomes: [
      'A better understanding of what may sit behind a behaviour',
      'Practical ways parents and caregivers can provide appropriate support',
      'Where relevant, a recommendation to seek qualified clinical support',
    ],
    process: [
      { title: 'Observe', body: 'Look beyond the immediate behaviour and understand what may be happening around the child.' },
      { title: 'Understand', body: 'Explore emotions, experiences, relationships and developmental considerations.' },
      { title: 'Communicate', body: 'Create space for children and parents to express concerns and perspectives.' },
      { title: 'Support', body: 'Identify practical ways parents and caregivers can provide appropriate support.' },
      { title: 'Refer', body: 'Where concerns appear to require clinical intervention, recommend referral to a qualified mental-health professional.' },
    ],
    note: {
      title: 'Important: this is guidance, not clinical treatment.',
      body: 'Child Psychology services offered through Fenix are intended for guidance, awareness, parent education and developmental understanding. They are not a substitute for clinical psychological assessment, psychiatric care, medical treatment or emergency mental-health support. Where a child may require clinical assessment or treatment, parents should consult an appropriately qualified mental-health professional.',
    },
    faqs: [
      {
        question: 'Is this therapy or psychological treatment?',
        answer:
          'No. This service is positioned around child psychology-informed guidance, parent education and understanding children\u2019s behaviour and development. It is not presented as clinical therapy or treatment.',
      },
      {
        question: 'Can I approach Fenix if I am concerned about my child\u2019s behaviour?',
        answer:
          'Yes. You can begin with a conversation about your concerns and understand what type of support may be appropriate.',
      },
      {
        question: 'Does my child need to attend?',
        answer: 'This can depend on the nature of the concern and the type of guidance being discussed.',
      },
      {
        question: 'Can parents seek guidance even when the child has not been diagnosed with anything?',
        answer:
          'Yes. You do not need a diagnosis to seek guidance about parenting, communication, emotional development or behavioural concerns.',
      },
      {
        question: 'What if my child needs professional psychological or psychiatric help?',
        answer:
          'Where a concern appears to require clinical intervention, Fenix can recommend seeking support from an appropriately qualified professional.',
      },
    ],
  },
  {
    slug: 'parenting-guidance',
    title: 'Parenting & Child Development Guidance',
    category: 'child-psychology-parenting',
    kicker: 'Confident Parenting',
    blurb:
      'Guidance for parents on development, communication and the everyday decisions that shape a child’s growth.',
    intro:
      'Practical sessions and workshops that help parents understand each stage of development and respond in ways that build trust, confidence and independence.',
    icon: Users,
    highlights: ['Development', 'Communication', 'Discipline', 'Wellbeing'],
    benefits: [
      { title: 'Stage by Stage', body: 'What to expect, and what is worth acting on, at each age.' },
      { title: 'Better Conversations', body: 'Communication approaches that lower conflict at home.' },
      { title: 'Consistent Boundaries', body: 'Structure that supports a child rather than controlling them.' },
      { title: 'Parent Wellbeing', body: 'Support for the person doing the parenting, too.' },
    ],
    audience: ['Parents of children of any age', 'Schools running parent programmes'],
    outcomes: ['Clear developmental expectations', 'Everyday strategies that work', 'An open line for follow-up questions'],
  },
  {
    slug: 'soft-skills-training',
    title: 'Soft Skills Training',
    category: 'training-development',
    kicker: 'Skills That Shape How You Show Up',
    blurb:
      'Build the confidence, communication and interpersonal skills that make a difference at work.',
    intro:
      'Technical knowledge can get you started. The way you communicate, present yourself, work with others and respond to situations can shape how you are experienced in the workplace. Fenix Soft Skills Training focuses on practical skills that support personal effectiveness, professional communication and workplace readiness.',
    icon: MessagesSquare,
    highlights: ['Communication', 'Confidence', 'Presentation', 'Teamwork'],
    benefits: [
      { title: 'Communication Skills', body: 'Develop clearer and more effective verbal and interpersonal communication.' },
      { title: 'Emotional Intelligence', body: 'Build greater awareness of emotions, empathy and interpersonal interactions.' },
      { title: 'Confidence Building', body: 'Develop confidence in professional and social situations.' },
      { title: 'Body Language', body: 'Understand how non-verbal communication contributes to professional interactions.' },
      { title: 'Interview Skills', body: 'Prepare for interviews with greater awareness of communication, presentation and professional behaviour.' },
      { title: 'Presentation & Public Speaking', body: 'Develop the ability to communicate ideas clearly and present with greater confidence.' },
      { title: 'Teamwork & Interpersonal Skills', body: 'Build skills for collaborating, communicating and working effectively with others.' },
      { title: 'Conflict Management', body: 'Explore practical approaches to handling disagreements and workplace interactions.' },
    ],
    audience: [
      'Students \u2014 building communication, confidence and professional skills before entering the workplace',
      'Graduates \u2014 preparing for interviews, professional interactions and the transition into corporate environments',
      'Professionals \u2014 strengthening interpersonal communication, presentation and workplace effectiveness',
      'Organisations \u2014 developing practical soft skills across teams based on workplace learning requirements',
    ],
    outcomes: [
      'Clearer communication and a stronger professional presence',
      'Practical skills for interviews, presentations and workplace interactions',
      'Approaches for teamwork, time management and conflict situations',
    ],
    process: [
      { title: 'Understand', body: 'Learn the principles behind effective communication and professional behaviour.' },
      { title: 'Practise', body: 'Work through activities, discussions and practical situations.' },
      { title: 'Apply', body: 'Use the skills in academic, professional and workplace environments.' },
    ],
    faqs: [
      {
        question: 'Who can take Soft Skills Training?',
        answer: 'Fenix offers soft skills training for students, graduates, professionals and organisations.',
      },
      {
        question: 'What topics are covered?',
        answer:
          'Training can include communication, emotional intelligence, confidence, body language, interview skills, presentation, teamwork, conflict management, time management and professional etiquette.',
      },
      {
        question: 'Can the training be customised?',
        answer: 'Yes. Programmes can be structured around the participants, learning objectives and requirements.',
      },
      {
        question: 'Is this suitable for students preparing for jobs?',
        answer:
          'Yes. Soft skills training can support interview preparation, communication, confidence and workplace readiness.',
      },
      {
        question: 'Do you offer training for companies?',
        answer: 'Yes. Organisations can enquire about professional soft skills programmes for their teams.',
      },
      {
        question: 'Is the training only theoretical?',
        answer:
          'The programme is designed around practical learning, with opportunities to participate, practise and apply relevant skills.',
      },
    ],
  },
  {
    slug: 'leadership-skills-training',
    title: 'Leadership Skills Training',
    category: 'training-development',
    kicker: 'Lead with Clarity. Inspire with Confidence.',
    blurb:
      'Develop the mindset, communication and interpersonal skills needed to lead people, manage responsibilities and create a positive impact.',
    intro:
      'Leadership is more than managing people. It involves understanding yourself, communicating with clarity, making thoughtful decisions and bringing people together towards a common goal. Our training focuses on practical leadership behaviours that can be applied in everyday professional situations.',
    icon: Award,
    highlights: ['Decision Making', 'Communication', 'Collaboration', 'Emotional Intelligence'],
    benefits: [
      { title: 'Leadership & Decision Making', body: 'Build confidence in taking responsibility, evaluating situations and making informed decisions.' },
      { title: 'Communication & Influence', body: 'Communicate ideas clearly, listen effectively and develop the ability to influence and engage others.' },
      { title: 'Confidence & Professional Presence', body: 'Strengthen your confidence, body language and ability to present yourself effectively.' },
      { title: 'Teamwork & Collaboration', body: 'Understand team dynamics and develop stronger interpersonal and collaborative skills.' },
      { title: 'Conflict Management', body: 'Learn practical approaches to handling differences, difficult conversations and workplace situations.' },
      { title: 'Emotional Intelligence', body: 'Develop greater awareness of your own emotions and how they influence communication and relationships.' },
    ],
    audience: [
      'Students \u2014 developing leadership confidence and interpersonal skills before entering the workplace',
      'Young professionals \u2014 building the skills to take greater responsibility and grow',
      'Managers and team leaders \u2014 strengthening communication, decision-making and people management',
      'Organisations \u2014 supporting employees in developing leadership and workplace effectiveness',
    ],
    outcomes: [
      'More effective communication and stronger professional relationships',
      'Greater ownership, responsibility and confidence in handling workplace challenges',
      'Practical decision-making skills to prepare for greater responsibilities',
    ],
    process: [
      { title: 'Understand', body: 'Explore the principles and behaviours that contribute to effective leadership.' },
      { title: 'Practise', body: 'Work through practical situations, communication challenges and leadership scenarios.' },
      { title: 'Apply', body: 'Take those skills into academic, professional and workplace environments.' },
    ],
    faqs: [
      {
        question: 'Who can benefit from Leadership Skills Training?',
        answer:
          'The training can benefit students, graduates, young professionals, managers, team leaders and organisations looking to develop leadership capabilities.',
      },
      {
        question: 'Is leadership training only for managers?',
        answer: 'No. Leadership skills can be developed at any stage of a person\u2019s academic or professional journey.',
      },
      {
        question: 'What topics are covered?',
        answer:
          'Topics can include communication, confidence, emotional intelligence, teamwork, decision-making, conflict management, professional presence and leadership behaviours.',
      },
      {
        question: 'Is the training practical?',
        answer:
          'Yes. The focus is on understanding concepts and applying them through practical situations and workplace-oriented learning.',
      },
      {
        question: 'Can the training be customised for organisations?',
        answer: 'Yes. Training can be structured around the requirements and learning objectives of an organisation or team.',
      },
    ],
  },
  {
    slug: 'train-the-trainer',
    title: 'Train the Trainer',
    category: 'training-development',
    kicker: 'Turn Knowledge Into Impact',
    blurb:
      'Develop the skills to design, deliver and facilitate learning experiences with greater confidence and effectiveness.',
    intro:
      'Being knowledgeable about a subject is only the beginning. An effective trainer needs to communicate clearly, engage participants, understand different learning needs and create an environment where people can participate, practise and learn. Train the Trainer focuses on developing these capabilities.',
    icon: GraduationCap,
    highlights: ['Facilitation', 'Communication', 'Delivery', 'Engagement'],
    benefits: [
      { title: 'Training & Facilitation Skills', body: 'Understand the role of a trainer and develop a structured approach to delivering learning sessions.' },
      { title: 'Communication Skills', body: 'Strengthen verbal and non-verbal communication to explain concepts clearly and connect with participants.' },
      { title: 'Presentation & Delivery', body: 'Build confidence in presenting content and delivering sessions in an engaging manner.' },
      { title: 'Participant Engagement', body: 'Learn approaches to encourage participation, interaction and meaningful learning.' },
      { title: 'Training Structure & Planning', body: 'Develop a more organised approach to preparing and conducting training sessions.' },
      { title: 'Confidence & Professional Presence', body: 'Improve confidence, body language and the presence required to facilitate a learning environment.' },
    ],
    audience: [
      'Aspiring trainers \u2014 developing the skills to enter the training and facilitation space',
      'Teachers and educators \u2014 strengthening communication, presentation and learner-engagement skills',
      'Corporate trainers \u2014 enhancing delivery and participant engagement in professional learning',
      'HR and learning professionals \u2014 developing practical facilitation capabilities',
      'Subject matter experts \u2014 translating expertise into structured, engaging learning experiences',
    ],
    outcomes: [
      'A structured approach to preparing and delivering a training session',
      'Stronger presentation, facilitation and engagement skills',
      'Greater confidence and presence in a learning environment',
    ],
    process: [
      { title: 'Understand', body: 'Explore the principles and responsibilities involved in effective training.' },
      { title: 'Prepare', body: 'Learn how to structure and prepare a session around clear learning objectives.' },
      { title: 'Deliver', body: 'Build confidence in presentation, communication and facilitation.' },
      { title: 'Engage', body: 'Practise techniques for creating participation and interaction.' },
      { title: 'Reflect', body: 'Identify opportunities to improve your training approach and delivery.' },
    ],
    faqs: [
      {
        question: 'Who can take Train the Trainer?',
        answer:
          'The programme can be useful for aspiring trainers, teachers, educators, corporate trainers, HR and learning professionals, and subject matter experts.',
      },
      {
        question: 'Do I need previous training experience?',
        answer:
          'Previous training experience is not necessarily required. The programme can help individuals understand the fundamentals of effective training and facilitation.',
      },
      {
        question: 'What skills are covered?',
        answer:
          'Training can cover communication, presentation, facilitation, participant engagement, training structure, confidence and professional presence.',
      },
      {
        question: 'Is the training practical?',
        answer:
          'Yes. The focus is on developing and applying training and facilitation skills rather than only understanding theoretical concepts.',
      },
      {
        question: 'Can organisations arrange Train the Trainer programmes?',
        answer: 'Yes. Training can be structured around the requirements and learning objectives of an organisation or institution.',
      },
    ],
  },
  {
    slug: 'campus-to-corporate',
    title: 'Campus to Corporate Training',
    category: 'training-development',
    kicker: 'From Classroom to Career',
    blurb:
      'Build the confidence, communication and workplace skills needed to make the transition from campus to the professional world.',
    intro:
      'Moving from college to the workplace brings a new set of expectations. It is not just about what you know \u2014 it is also about how you communicate, present yourself, work with others and respond to professional situations. This training focuses on developing those practical skills and building greater workplace readiness.',
    icon: Building2,
    highlights: ['Communication', 'Interview Skills', 'Workplace Etiquette', 'Confidence'],
    benefits: [
      { title: 'Professional Communication', body: 'Learn to communicate clearly and appropriately in professional environments.' },
      { title: 'Interview Skills', body: 'Build confidence in interviews and understand how to present your skills and experience effectively.' },
      { title: 'Grooming & Professional Presence', body: 'Develop professional grooming, body language and workplace presence.' },
      { title: 'Workplace Etiquette', body: 'Understand professional behaviour, business etiquette and expectations in a corporate environment.' },
      { title: 'Confidence & First Impressions', body: 'Develop the confidence to introduce yourself, interact with others and make a positive professional impression.' },
      { title: 'Teamwork & Interpersonal Skills', body: 'Strengthen collaboration, relationship-building and communication within a professional setting.' },
      { title: 'Presentation Skills', body: 'Develop the ability to present ideas clearly and confidently.' },
      { title: 'Time & Workplace Management', body: 'Build practical skills around managing responsibilities, priorities and professional expectations.' },
    ],
    audience: [
      'College students \u2014 preparing for internships, placements and the transition into professional life',
      'Final-year students \u2014 developing workplace-ready skills before entering the job market',
      'Fresh graduates \u2014 building confidence and professional behaviours for a first role',
      'Educational institutions \u2014 supporting students with structured employability training',
    ],
    outcomes: [
      'Communication, confidence and interpersonal skills for a professional setting',
      'Practice with interviews, presentations and common workplace situations',
      'Greater readiness for the transition from campus to career',
    ],
    process: [
      { title: 'Understand', body: 'Learn about workplace expectations, professional communication and corporate behaviour.' },
      { title: 'Practise', body: 'Work through interviews, presentations and common professional situations.' },
      { title: 'Apply', body: 'Use your skills in real-world academic and professional environments.' },
      { title: 'Grow', body: 'Build the confidence to approach the transition from campus to career with greater readiness.' },
    ],
    faqs: [
      {
        question: 'Who should attend Campus to Corporate Training?',
        answer:
          'The programme is particularly suited to college students, final-year students and fresh graduates preparing to enter the professional world.',
      },
      {
        question: 'What skills are covered?',
        answer:
          'Training can cover professional communication, interview skills, grooming, workplace etiquette, confidence, body language, teamwork, presentations and other workplace-readiness skills.',
      },
      {
        question: 'Is this useful for students preparing for placements?',
        answer:
          'Yes. The training can help students strengthen the communication, confidence and professional skills needed when preparing for interviews and entering the workplace.',
      },
      {
        question: 'Is the programme only about interview preparation?',
        answer:
          'No. Interview preparation can be part of the programme, but the broader focus is on professional readiness and the transition from campus to corporate environments.',
      },
      {
        question: 'Can colleges and institutions arrange this training?',
        answer: 'Yes. Programmes can be structured around the requirements and learning objectives of the institution.',
      },
    ],
  },
  {
    slug: 'hospitality-training',
    title: 'Hospitality Training',
    category: 'training-development',
    kicker: 'Service That Makes an Impression',
    blurb:
      'Build the professional, communication and service skills needed to create confident and meaningful guest experiences.',
    intro:
      'Every interaction shapes a guest\u2019s experience. From the first welcome to the final farewell, hospitality professionals need strong communication, professional presence, service awareness and the ability to respond confidently to different situations. Our training focuses on practical skills that can be applied across hospitality and guest-service environments.',
    icon: Handshake,
    highlights: ['Guest Communication', 'Professional Presence', 'Guest Service', 'Teamwork'],
    benefits: [
      { title: 'Guest Communication', body: 'Develop clear, courteous and confident communication when interacting with guests.' },
      { title: 'Professional Grooming & Presence', body: 'Understand the importance of presentation, grooming and professional conduct in hospitality.' },
      { title: 'Guest Service Skills', body: 'Build an understanding of service expectations and the importance of creating positive guest experiences.' },
      { title: 'Front Office Skills', body: 'Strengthen communication and professional skills relevant to front-office and guest-facing responsibilities.' },
      { title: 'Food & Beverage Service', body: 'Develop service-oriented skills and professional behaviours relevant to food and beverage environments.' },
      { title: 'Sales & Marketing Skills', body: 'Build communication and customer-focused skills relevant to hospitality sales and marketing.' },
      { title: 'Teamwork & Workplace Skills', body: 'Develop collaboration, professional communication and interpersonal skills within hospitality teams.' },
    ],
    audience: [
      'Hospitality students \u2014 building practical skills alongside academic learning',
      'Hospitality professionals \u2014 strengthening communication, service and professional skills',
      'Front office and guest service professionals \u2014 developing stronger guest interaction and presence',
      'Food and beverage professionals \u2014 building service-focused communication and workplace skills',
      'Hotels and hospitality organisations \u2014 supporting employee development through practical training',
    ],
    outcomes: [
      'Greater confidence and professionalism in guest-facing situations',
      'Practical skills you can apply directly in hospitality and guest-service environments',
      'A stronger understanding of service expectations and professional standards',
    ],
    process: [
      { title: 'Understand', body: 'Explore hospitality expectations, professional standards and guest-focused service.' },
      { title: 'Practise', body: 'Work through practical situations involving communication, service and professional interactions.' },
      { title: 'Apply', body: 'Use the skills in real hospitality and guest-service environments.' },
      { title: 'Grow', body: 'Build greater confidence and professionalism throughout your hospitality career.' },
    ],
    faqs: [
      {
        question: 'Who can benefit from Hospitality Training?',
        answer:
          'The training can be useful for hospitality students, professionals and organisations looking to strengthen service and workplace skills.',
      },
      {
        question: 'What areas of hospitality can the training cover?',
        answer:
          'Training can cover communication, grooming, guest service, front office, food and beverage, sales and marketing, teamwork and professional skills.',
      },
      {
        question: 'Is the training practical?',
        answer:
          'Yes. The focus is on understanding concepts and applying them through practical, workplace-oriented learning.',
      },
      {
        question: 'Can the training be customised for hotels or hospitality organisations?',
        answer: 'Yes. Training can be adapted to the needs and learning objectives of a hospitality organisation or team.',
      },
      {
        question: 'Is this training suitable for hospitality students?',
        answer:
          'Yes. It can help students complement their academic learning with practical professional and workplace skills.',
      },
    ],
  },
  {
    slug: 'ielts-training',
    title: 'IELTS Training',
    category: 'language-training',
    kicker: 'Prepare with Purpose. Perform with Confidence.',
    blurb:
      'Structured IELTS Academic and General Training preparation, with focused learning across all four areas of the test.',
    intro:
      'IELTS \u2014 the International English Language Testing System \u2014 assesses your ability to use English across academic, professional and everyday contexts through four components. Each area requires a different approach, which is why effective preparation needs to go beyond simply improving spoken English.',
    icon: Globe2,
    highlights: ['Listening', 'Reading', 'Writing', 'Speaking'],
    benefits: [
      { title: 'Listening', body: 'Develop your ability to understand spoken English, identify key information and respond accurately to different question types.' },
      { title: 'Reading', body: 'Strengthen comprehension, vocabulary and reading strategies while working with different passages and question formats.' },
      { title: 'Writing', body: 'Develop your ability to organise ideas, structure responses, use appropriate vocabulary and communicate clearly in written English.' },
      { title: 'Speaking', body: 'Build fluency, pronunciation, vocabulary and confidence while learning to express and develop ideas effectively.' },
    ],
    audience: [
      'Students \u2014 preparing for higher education opportunities abroad',
      'Working professionals \u2014 developing English proficiency for international academic or professional opportunities',
      'Individuals planning to work or settle abroad \u2014 preparing for the English-language requirements of their pathway',
      'Learners strengthening their English \u2014 developing overall skills while preparing for an internationally recognised test',
    ],
    outcomes: [
      'Familiarity with IELTS question types, test requirements and time management',
      'Section-specific strategies across Listening, Reading, Writing and Speaking',
      'A clear view of your current level and the areas that need attention',
    ],
    process: [
      { title: 'Understand', body: 'Identify your current level, goals and the areas requiring attention.' },
      { title: 'Learn', body: 'Build language skills and understand the IELTS format and expectations.' },
      { title: 'Practise', body: 'Work consistently across Listening, Reading, Writing and Speaking.' },
      { title: 'Improve', body: 'Review your performance, address gaps and refine your approach.' },
    ],
    faqs: [
      {
        question: 'Which IELTS test should I take \u2014 Academic or General Training?',
        answer:
          'It depends on your purpose and the requirements of the institution, organisation or pathway you are applying through. IELTS Academic suits learners preparing for academic environments; IELTS General Training suits certain professional, work or migration-related pathways.',
      },
      {
        question: 'Does IELTS Training cover all four sections?',
        answer: 'Yes. Preparation covers Listening, Reading, Writing and Speaking.',
      },
      {
        question: 'Can I prepare for a specific band score?',
        answer: 'Yes. Training can be aligned with your individual target and areas of development.',
      },
      {
        question: 'Do I need to be fluent in English before starting IELTS preparation?',
        answer:
          'No. Your preparation can begin from your current level, with training focused on the areas where you need development.',
      },
      {
        question: 'Is a specific IELTS band score guaranteed?',
        answer:
          'No. A particular result cannot be guaranteed. Your result depends on your preparation, language ability and performance on test day.',
      },
      {
        question: 'How do I get started?',
        answer: 'Get in touch with Fenix to discuss your IELTS goal and training requirements.',
      },
    ],
  },
  {
    slug: 'ielts-band-score-training',
    title: 'IELTS Band Score Training',
    category: 'language-training',
    kicker: 'Your Goal. Your Starting Point. Your Preparation.',
    blurb:
      'Preparation structured around your target band and the specific skills that need attention to get there.',
    intro:
      'Everyone begins at a different level and may need to focus on different skills. Band Score Training starts from where you currently stand, identifies the areas that require additional practice and works systematically across all four test components towards your required band.',
    icon: BookOpen,
    highlights: ['Current Level', 'Question Types', 'Test Strategies', 'Target Band'],
    benefits: [
      { title: 'Understand Your Level', body: 'Identify your current strengths and the areas that need improvement.' },
      { title: 'Targeted Practice', body: 'Concentrate on the skills that require additional work rather than practising everything equally.' },
      { title: 'Question Familiarity', body: 'Become familiar with IELTS question types and develop section-specific strategies.' },
      { title: 'Accuracy & Timing', body: 'Improve accuracy, structure and time management across all four components.' },
    ],
    audience: [
      'Learners working towards a specific band requirement',
      'Candidates retaking the test after a previous attempt',
      'Anyone whose academic, professional or international pathway sets a required score',
    ],
    outcomes: [
      'A clear view of your current strengths and areas for improvement',
      'Section-specific strategies and consistent practice across all four components',
      'Structured preparation aimed at your required band score',
    ],
    process: [
      { title: 'Understand', body: 'Identify your current strengths, challenges and target requirement.' },
      { title: 'Learn', body: 'Build language knowledge and understand the IELTS format and expectations.' },
      { title: 'Practise', body: 'Work consistently across Listening, Reading, Writing and Speaking.' },
      { title: 'Improve', body: 'Review performance, address areas of difficulty and keep working towards your target.' },
    ],
    faqs: [
      {
        question: 'Can training be focused on a particular band score?',
        answer: 'Yes. Preparation can be structured around your target band and individual areas of development.',
      },
      {
        question: 'What does Band Score Training focus on?',
        answer:
          'Understanding your current level, identifying strengths and areas for improvement, practising IELTS question formats, developing test-taking strategies and improving performance across all four sections.',
      },
      {
        question: 'How is my target band decided?',
        answer:
          'Your target depends on your individual academic, professional or international pathway and its specific requirements.',
      },
      {
        question: 'Is a specific band score guaranteed?',
        answer:
          'No. A particular score cannot be guaranteed, as results depend on your starting level, preparation, practice and test performance.',
      },
    ],
  },
]

export const getService = (slug?: string) => services.find((service) => service.slug === slug)

export const servicesByCategory = (category: ServiceCategorySlug) =>
  services.filter((service) => service.category === category)

/** Homepage "Our Core Services" strip — the seven most-requested offerings. */
export const coreServiceSlugs = [
  'dmit-assessment',
  'psychometric-assessment',
  'career-counselling',
  'soft-skills-training',
  'ielts-training',
  'growing-mind-assessment',
  'campus-to-corporate',
]
