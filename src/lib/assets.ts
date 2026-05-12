import logo from '../assets/logo.jpg';
import heroBg from '../assets/hero-bg.jpg';
import schoolBuilding from '../assets/school-building.jpg';
import classroom from '../assets/classroom.jpg';
import sports from '../assets/sports.jpg';
import sports1 from '../assets/sports1.jpg';
import sports2 from '../assets/sports2.jpg';
import school from '../assets/haraiya school.jpeg';

import profile1 from '../assets/profile-1.jpg';
import profile2 from '../assets/profile-2.jpg';

/* Teachers */
import deepaSaru from '../assets/Deepa Saru.jpg';
import dolarajSharma from '../assets/Dolaraj Sharma.jpg';
import prinsuChaudhary from '../assets/PRINSU CHAUDHARY2.jpg';
import sunilChhetri from '../assets/Sunil chhetri.jpg';
import anilGupta from '../assets/anil kumar gupta.jpg';
import balKrishna from '../assets/bal krishna upadhyaya.jpg';
import bharatSharma from '../assets/bharat sharma.jpg';
import bhimlal from '../assets/bhim lal acharya 2.jpg';
import bikashChhetri from '../assets/bikash chhetri.jpg';
import bishnuKC from '../assets/bishnu kc.jpg';
import chhabilal from '../assets/chhabilal acharya.jpg';
import dineshSharma from '../assets/dinesh sharma.jpg';
import durgaPrasad from '../assets/durga prasad sharma.jpg';
import gunBahadur from '../assets/gun bahadur pun.jpg';
import kaladharDhakal from '../assets/kaladhar dhakal.jpg';
import khadgaBahadur from '../assets/khadga bahadur chhetri.jpg';
import krishnaBahadur from '../assets/krishna bahadur thapa.jpg';
import laxmiAcharya from '../assets/laxmi acharya.jpg';
import lilaMaya from '../assets/lila maya kaucha thapa.jpg';
import liladharPaudel from '../assets/liladhar paudel.jpg';
import mamataRana from '../assets/mamata rana.jpg';
import meghnathSharma from '../assets/meghnath sharma.jpg';
import padamPani from '../assets/padam pani gyawali.jpg';
import padmaDevi from '../assets/padma devi upadhyaya.jpg';
import padmaKumari from '../assets/padma kumari.jpg';
import parsuAdhikari from '../assets/parsu adhikari.jpg';
import parsuPaudel from '../assets/parsu ram paudel.jpg';
import prakashAcharya from '../assets/prakash acharya.jpg';
import rajendraDhakal from '../assets/rajendra dhakal.jpg';
import ranjanKC from '../assets/ranjan kc.jpg';
import saritaAcharya from '../assets/sarita acharya.jpg';
import sumitraChapagain from '../assets/sumitra chapagain.jpg';
import sunitaRajali from '../assets/sunita rajali.jpg';
import topBahadur from '../assets/top bahadur pun.jpg';
import ushaSharma from '../assets/usha sharma.jpg';

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
    { name: 'Diamond Ghimire', img: null, role: 'Computer Operator', subject: 'Information Technology', category: 'Staff' },
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
