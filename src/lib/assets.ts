const logo = '/images/logo/logo.jpg';
const heroBg = '/images/hero/herobg.jpg';
const schoolBuilding = '/images/gallery/schoolbuilding.jpg';
const classroom = '/images/gallery/classroom.jpg';
const sports = '/images/gallery/sports.jpg';
const sports1 = '/images/gallery/sports1.jpg';
const sports2 = '/images/gallery/sports2.jpg';
const school = '/images/gallery/haraiyaschool.jpeg';

const profile1 = '/images/testimonials/profile1.jpg';
const profile2 = '/images/testimonials/profile2.jpg';

/* Teachers */
const deepaSaru = '/images/teachers/deepasaru.jpg';
const dolarajSharma = '/images/teachers/dolarajsharma.jpg';
const prinsuChaudhary = '/images/teachers/prinsuchaudhary2.jpg';
const sunilChhetri = '/images/teachers/sunilchhetri.jpg';
const anilGupta = '/images/teachers/anilkumargupta.jpg';
const balKrishna = '/images/teachers/balkrishnaupadhyaya.jpg';
const bharatSharma = '/images/teachers/bharatsharma.jpg';
const bhimlal = '/images/teachers/bhimlalacharya2.jpg';
const bikashChhetri = '/images/teachers/bikashchhetri.jpg';
const bishnuKC = '/images/teachers/bishnukc.jpg';
const chhabilal = '/images/teachers/chhabilalacharya.jpg';
const dineshSharma = '/images/teachers/dineshsharma.jpg';
const durgaPrasad = '/images/teachers/durgaprasadsharma.jpg';
const gunBahadur = '/images/teachers/gunbahadurpun.jpg';
const kaladharDhakal = '/images/teachers/kaladhardhakal.jpg';
const khadgaBahadur = '/images/teachers/khadgabahadurchhetri.jpg';
const krishnaBahadur = '/images/teachers/krishnabahadurthapa.jpg';
const laxmiAcharya = '/images/teachers/laxmiacharya.jpg';
const lilaMaya = '/images/teachers/lilamayakaucha.jpg';
const liladharPaudel = '/images/teachers/liladharpaudel.jpg';
const mamataRana = '/images/teachers/mamatarana.jpg';
const meghnathSharma = '/images/teachers/meghnathsharma.jpg';
const padamPani = '/images/teachers/padampanigyawali.jpg';
const padmaDevi = '/images/teachers/padmadeviupadhyaya.jpg';
const padmaKumari = '/images/teachers/padmakumari.jpg';
const parsuAdhikari = '/images/teachers/parsuadhikari.jpg';
const parsuPaudel = '/images/teachers/parsurampaudel.jpg';
const prakashAcharya = '/images/teachers/prakashacharya.jpg';
const rajendraDhakal = '/images/teachers/rajendradhakal.jpg';
const ranjanKC = '/images/teachers/ranjankc.jpg';
const saritaAcharya = '/images/teachers/saritaacharya.jpg';
const sumitraChapagain = '/images/teachers/sumitrachapagain.jpg';
const sunitaRajali = '/images/teachers/sunitarajali.jpg';
const topBahadur = '/images/teachers/topbahadurpun.jpg';
const ushaSharma = '/images/teachers/ushasharma.jpg';
const diamondghimire = '/images/teachers/diamond.jpeg';

export const ASSETS = {
  logo,

  hero: {
    bg: heroBg,
  },

  about: {
    excellence: schoolBuilding,
    classroom,
    school,
  },

  gallery: [
    {
      img: schoolBuilding,
      title: 'School Building',
      category: 'Campus'
    },
    {
      img: classroom,
      title: 'Classroom',
      category: 'Academics'
    },
    {
      img: sports,
      title: 'Sports Activities',
      category: 'Sports'
    },
    {
      img: sports1,
      title: 'Annual Sports',
      category: 'Events'
    },
    {
      img: sports2,
      title: 'Student Activities',
      category: 'Campus'
    },
    {
      img: school,
      title: 'Haraiya Secondary School',
      category: 'Campus'
    }
  ],

  news: [
    {
      img: sports,
      title: 'Annual Sports Program',
      category: 'Sports'
    },
    {
      img: classroom,
      title: 'New Academic Session Started',
      category: 'Academics'
    }
  ],

  testimonials: [
    {
      name: 'Student',
      role: 'SEE Graduate',
      quote: 'Haraiya Secondary School helped me improve my studies and confidence.',
      img: profile1
    },
    {
      name: 'Parent',
      role: 'Guardian',
      quote: 'The school environment is safe, friendly, and focused on quality education.',
      img: profile2
    }
  ],

  teachers: [
    { name: 'Meghnath Sharma', img: meghnathSharma, role: 'Head Teacher', subject: 'Economics', category: 'Leadership' },
    { name: 'Prakash Acharya', img: prakashAcharya, role: 'Assist. Head Teacher', subject: 'Mathematics', category: 'Leadership' },
    { name: 'Dolaraj Sharma', img: dolarajSharma, role: 'Accountant', subject: 'Administration', category: 'Staff' },
    { name: 'Diamond Ghimire', img: diamondghimire, role: 'Computer Operator', subject: 'Information Technology', category: 'Staff' },
    { name: 'Sunil Chhetri', img: sunilChhetri, role: 'Librarian', subject: 'Library Sciences', category: 'Staff' },
    { name: 'Bal Krishna Upadhyaya', img: balKrishna, role: 'Office Assistant', subject: 'Administration', category: 'Staff' },
    { name: 'Ser Bahadur Saru', img: null, role: 'Office Assistant', subject: 'Administration', category: 'Staff' },
    { name: 'Guma Devi Sharma', img: null, role: 'Office Assistant', subject: 'Administration', category: 'Staff' },
    { name: 'Deepa Saru', img: deepaSaru, role: 'ECD Facilitator', subject: 'All Subjects', category: 'Teacher' },
    { name: 'Prinsu Chaudhary', img: prinsuChaudhary, role: 'Secondary Level', subject: 'Computer Instructor', category: 'Teacher' },
    { name: 'Anil Kumar Gupta', img: anilGupta, role: 'Secondary Level', subject: 'Accounting', category: 'Teacher' },
    { name: 'Bharat Sharma', img: bharatSharma, role: 'Primary Level', subject: 'Social Studies', category: 'Teacher' },
    { name: 'Bhim Lal Acharya', img: bhimlal, role: 'Primary Level', subject: 'English', category: 'Teacher' },
    { name: 'Bikash Chhetri', img: bikashChhetri, role: 'Secondary Level', subject: 'Computer Instructor', category: 'Teacher' },
    { name: 'Bishnu KC', img: bishnuKC, role: 'ECD Facilitator', subject: 'All Subjects', category: 'Teacher' },
    { name: 'Chhabilal', img: chhabilal, role: 'Secondary Level', subject: 'Science; Coordinator (Grades 6–8)', category: 'Teacher' },
    { name: 'Dinesh Sharma', img: dineshSharma, role: 'Lower Secondary Level', subject: 'Assistant Computer Instructor', category: 'Teacher' },
    { name: 'Durga Prasad Sharma', img: durgaPrasad, role: 'Lower Secondary Level', subject: 'Assistant Computer Instructor; Coordinator (Technical Stream, Grades 9–12)', category: 'Teacher' },
    { name: 'Gun Bahadur Pun', img: gunBahadur, role: 'Lower Secondary Level', subject: 'Mathematics', category: 'Teacher' },
    { name: 'Kaladhar Dhakal', img: kaladharDhakal, role: 'Secondary Level', subject: 'Nepali', category: 'Teacher' },
    { name: 'Khadga Bahadur Chhetri', img: khadgaBahadur, role: 'Primary Level', subject: 'Nepali', category: 'Teacher' },
    { name: 'Krishna Bahadur Thapa', img: krishnaBahadur, role: 'Secondary Level', subject: 'Economics', category: 'Teacher' },
    { name: 'Laxmi Acharya', img: laxmiAcharya, role: 'Secondary Level', subject: 'Chemistry', category: 'Teacher' },
    { name: 'Lila Maya Kaucha', img: lilaMaya, role: 'Primary Level', subject: 'Nepali', category: 'Teacher' },
    { name: 'Liladhar Paudel', img: liladharPaudel, role: 'Secondary Level', subject: 'Mathematics; Coordinator (General Stream, Grades 11–12)', category: 'Teacher' },
    { name: 'Mamata Rana', img: mamataRana, role: 'Primary Level', subject: 'English', category: 'Teacher' },
    { name: 'Padam Pani Gyawali', img: padamPani, role: 'Secondary Level', subject: 'Mathematics', category: 'Teacher' },
    { name: 'Padma Devi Upadhyaya', img: padmaDevi, role: 'Primary Level', subject: 'English', category: 'Teacher' },
    { name: 'Padma Kumari', img: padmaKumari, role: 'Primary Level', subject: 'English', category: 'Teacher' },
    { name: 'Parsu Adhikari', img: parsuAdhikari, role: 'Secondary Level', subject: 'Science; Coordinator (Grades 9–10)', category: 'Teacher' },
    { name: 'Parsu Ram Paudel', img: parsuPaudel, role: 'Secondary Level', subject: 'Social Studies', category: 'Teacher' },
    { name: 'Rajendra Dhakal', img: rajendraDhakal, role: 'Lower Secondary Level', subject: 'Mathematics', category: 'Teacher' },
    { name: 'Ranjan KC', img: ranjanKC, role: 'Secondary Level', subject: 'Computer Instructor', category: 'Teacher' },
    { name: 'Sarita Acharya', img: saritaAcharya, role: 'Secondary Level', subject: 'Nepali', category: 'Teacher' },
    { name: 'Sumitra Chapagain', img: sumitraChapagain, role: 'Secondary Level', subject: 'Social Studies', category: 'Teacher' },
    { name: 'Sunita Rajali', img: sunitaRajali, role: 'Secondary Level', subject: 'Social Studies', category: 'Teacher' },
    { name: 'Top Bahadur Pun', img: topBahadur, role: 'Secondary Level', subject: 'Science', category: 'Teacher' },
    { name: 'Usha Sharma', img: ushaSharma, role: 'Secondary Level', subject: 'Education and Development', category: 'Teacher' },
  ]
};
