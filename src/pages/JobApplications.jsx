import '../styles/Dashboard.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Spinner from "../modules/Spinner.jsx";
import Table from "../modules/Table.jsx";

function JobApplications() {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [jobApplications, setJobApplications] = useState(
        [
            ['ID', 'Application Time', 'First Name', 'Last Name', 'Date of Birth', 'Email', 'Phone Number', 'Gender', 'Address Street', 'Address District', 'Address District Other', 'Position Applying For', 'Position Applying For Other', 'Position Applying For Specialty', 'High School Name', 'High School System', 'High School System Other', 'High School Graduation Date', 'Institution Name', 'Institution Major', 'Institution Graduation Date', 'Years of Experience', 'Experience Details', 'Skills or Hobbies', 'Other Details', 'Reference Name', 'Reference Position', 'Reference Email', 'Reference Phone Number', 'Personal Photo Link', 'CV Link', 'Cover Letter Link', 'Other Documents Link First', 'Other Documents Link Second', 'Other Documents Link Third'],
            ['18', '2024-08-04', 'Ayman', 'Agamy', '2024-06-07', 'sonichki@gmail.com', '01113619040', 'Male', '12 Al Dahan Street', 'Kamp Cheezar', '', 'Teacher', '', 'ICT', 'Harvest International School', 'IGCSE', '', '2018-06-01', 'University of Manitoba', 'Computer Science', '2025-01-01', '1', '', '', '', 'Hassan Khalil', '0', 'hkibrahim@gmail.com', '0 100 5211165', 'https://harvestschools.com/fileUploads/Ayman Agamy.JPG', 'https://harvestschools.com/fileUploads/AGAMY, Ayman - Resume.pdf', 'https://harvestschools.com/fileUploads/AGAMY, Ayman - Cover Letter.pdf', '', '', ''],
            ['19', '2024-08-04', 'test', 'test', '2024-03-03', 'test@test.test', '222', 'Male', 'test', 'Burj Al Arab', 'test', 'Teacher', 'test', 'Math', 'test', 'IGCSE', 'test', '2024-03-03', 'test', 'test', '2024-03-03', '1', '', '', '', 'test', '0', 'test@test.test', '222', 'https://harvestschools.com/fileUploads/IMG_7263.jpg', 'https://harvestschools.com/fileUploads/covid_consent_form.pdf', "https://harvestschools.com/fileUploads/Ayman's Old Drivers lisence (Egyptian).pdf", '', '', ''],
            ['20', '2024-08-04', 'test 2', 'test 2', '2024-03-03', 'a@a.a', '222', 'Male', 'test 2', 'Burj Al Arab', 'test 2', 'Teacher', 'test 2', 'Math', 'test 2', 'IGCSE', 'test 2', '2024-03-03', 'test 2', 'test 2', '2024-02-03', '1', 'test 2', 'test 2', 'test 2', 'test 2', '0', 'test@test.test', '222', 'https://harvestschools.com/fileUploads/AmericanAcademicsPageMiddle1.jpg', 'https://harvestschools.com/fileUploads/Covid-19_Parent_Guide_(Arabic).pdf', '', '', ''],
            ['21', '2024-08-04', 'Mohamed', 'Hassan', '1990-03-15', 'zizo.mohamed.hassan@gmail.com', '01285591785', 'Male', 'Sidi Bishr', 'Other', '', 'Social Worker', 'Floor Supervisor', '', 'Gamal Abd El-Nasser Secondary School', 'Other', '', '2007-06-30', 'High Institute of Social Work', 'Social Work', '2011-06-30', '5', '', '', '', '', '0', '', '', 'https://harvestschools.com/fileUploads/22426267_10156128959894415_8849810318616445081_o.jpg', 'https://harvestschools.com/fileUploads/01-Mohamed-Hassan-CV.pdf', '', '', ''],
            ['22', '2024-08-04', 'Jana ', 'Daw', '2001-01-16', 'jana.h.daw23@gmail.com', '01007508253', 'Female', 'Omar El Mokhtar', 'Loran', '', 'Teacher', '', 'English', 'El Zahraa Language School ', 'National', '', '2020-07-21', 'Faculty of Arts', 'Phonetics and Linguistics', '2024-06-23', '', 'I am a recent graduate with a strong passion for education and a keen desire to make a positive impact on students\' lives. While I may not have direct teaching experience, my strong communication and interpersonal skills have prepared me to build strong relationships with students. I am a quick learner and eager to apply my knowledge and enthusiasm to a dynamic classroom environment. I believe my strong work ethic, coupled with my ability to adapt to new challenges, make me a valuable asset to your team. I am excited about the opportunity to learn and grow as an educator at your school.', 'My passion for language and literature is evident in my love for reading diverse genres from fantasy to dystopia as it helps me explore different worlds and perspectives that broaden my understanding of human experiences. Furthermore, I\'ve always been fascinated by the beauty and complexity of languages as languages are infinite, there\'s always something new to learn. Also, my volunteer work at SAVE has equipped me with valuable communication and teamwork skills, essential for engaging students in the learning process. Additionally, my college training in speech and language therapy has provided me with a deep understanding of language acquisition and development, which is crucial for effective English language teaching.', 'While I\'m a fresh graduate, I\'m eager to contribute my passion for education and my strong ability to build positive relationships, create a supportive and inclusive environment, and foster a sense of belonging in the classroom where every student feels valued and encouraged. My patience and empathy allow me to connect with students on a deeper level, understanding their unique needs and learning styles. I’m also a lifelong learner, always seeking new approaches to teaching and eager to adapt my plans to meet the evolving needs of my students. Providing constructive and supportive feedback is essential to me as I believe it empowers students to reach their full potential.', '', '0', '', '', 'https://harvestschools.com/fileUploads/JD.JPG', 'https://harvestschools.com/fileUploads/Jana Daw CV.docx', 'https://harvestschools.com/fileUploads/cover letter.pdf', '', '', ''],
            ['23', '2024-08-05', 'Bossayna ', 'Anwar', '2024-07-02', 'anwarbossayna@gmail.com', '01552330964', 'Female', '7 hatem mosque ', 'Smouha', '', 'Teacher', '', 'Math', 'Girard school ', 'Other', '', '2017-07-01', 'University of Alexandria ', 'Faculty of commerce accounting section ', '2021-08-01', '3', 'I worked as an english assistant for 3 years in Alexandria language school for lower junior and I’m seeking for better experience and better performance as a math teacher ', 'Patience Communications Time management Adaptability Team work Classroom management Creativity Active listening Problem solving Excel sheet World document Power point Google classroom ', 'My passion for mathematics and teaching has been the driving force behind my career, and I am excited about the opportunity to bring my expertise to Harvest School as a Math Teacher.', '', '0', '', '', 'https://harvestschools.com/fileUploads/AD328158-544D-440F-B1C4-EDE81631825C.jpeg', 'https://harvestschools.com/fileUploads/Bossayna Anwar CV -2024 (1).pdf', '', '', ''],
            ['24', '2024-08-08', 'Hala', 'Salam', '1974-01-23', 'hala.s.idriss@gmail.com', '90 536 468 52 44', 'Female', 'Istanbul', 'Other', 'Takism', 'Other', 'Admin Assistant - Teacher Assistant', '', 'Philosophy', 'National', '', '1993-06-30', 'Abdul Kader High School', 'Philosopy', '1993-06-30', '10+', '1. Leadership and Management Experience Team Leadership: Experience in leading and managing a team of educators and support staff, fostering a collaborative and supportive work environment. 2. Operational Management: Proficiency in managing the day-to-day operations of a school or educational facility, including budgeting, scheduling, and resource allocation. Crisis Management: Ability to handle emergencies and unexpected situations effectively, ensuring the safety and well-being of students and staff. 3. Communication and Interpersonal Skills Parent and Community Relations: Strong skills in communicating with parents and building positive relationships with the broader school community, including addressing concerns and promoting engagement. Cross-Cultural Communication: Experience working in a multicultural environment, with the ability to communicate effectively with diverse groups of people, including non-native English speakers. 4. Curriculum Development and Implementation Curriculum Planning: Experience in developing and implementing age-appropriate curricula that meet the developmental needs of children and align with international standards. Assessment and Evaluation: Proficiency in assessing student progress and using data to inform teaching practices and curriculum adjustments. 5. Regulatory and Compliance Knowledge Local and International Regulations: Understanding of the regulatory requirements for operating an educational institution, including health and safety standards, child protection policies, and licensing requirements. Accreditation Processes: Familiarity with the process of obtaining and maintaining accreditation from relevant educational bodies or organizations. 6. Problem-Solving and Decision-Making Skills Conflict Resolution: Ability to mediate conflicts between students, staff, or parents, and find solutions that are in the best interest of all parties involved. Strategic Planning: Experience in setting long-term goals for an educational institution and developing actionable plans to achieve them.', 'Technology Integration and Digital Literacy Educational Technology: Proficient in using technology as a tool to enhance the learning experience, including the use of interactive whiteboards, educational software, and online resources. Digital Citizenship: Understanding of the ethical and responsible use of technology, including teaching students about online safety, privacy, and digital literacy. 8. Personal Qualities and Values Passion for Education: A genuine passion for education and a commitment to nurturing the intellectual, social, and emotional development of students. Empathy and Compassion: The ability to connect with students on an emotional level, understanding their needs and providing support when necessary. Integrity and Professionalism: A strong sense of ethics and professionalism, with a commitment to upholding the values and mission of the educational institution.', 'My extensive experience in educational leadership, curriculum development, and team management, coupled with my passion for fostering a positive and inclusive learning environment, make me an ideal candidate for a leadership role at Harvest School.', 'Nermin', 'Admin', 'nerm.salem@gmail.com', '+905395050411', 'https://harvestschools.com/fileUploads/photo.jpg', 'https://harvestschools.com/fileUploads/Hala CV.docx', 'https://harvestschools.com/fileUploads/Hala Cover.pdf', '', '', '']
        ]

    );


    // useEffect(() => {
    //     const checkSession = async () => {
    //         const cookies = document.cookie.split(';').reduce((acc, cookie) => {
    //             const [key, value] = cookie.trim().split('=');
    //             acc[key] = value;
    //             return acc;
    //         }, {});
    //
    //         const sessionId = cookies.harvest_schools_session_id;
    //         const sessionTime = parseInt(cookies.harvest_schools_session_time, 10);
    //
    //         if (!sessionId || !sessionTime || (Date.now() - sessionTime) > 3600000) {
    //             document.cookie = 'harvest_schools_session_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    //             document.cookie = 'harvest_schools_session_time=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    //             navigate('/login');
    //         }
    //
    //         try {
    //             const response = await axios.post('scripts/checkSession.php', {
    //                 session_id: sessionId
    //             }, {
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 }
    //             });
    //
    //             if (!response.data.success) {
    //                 navigate('/login');
    //             }
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //
    //     checkSession();
    // }, []);
    //
    // useEffect(() => {
    //     try {
    //
    //         axios.get('scripts/GetJobApplications.php')
    //             .then((response) => {
    //
    //                 if (!Array.isArray(response.data) || !response.data.length > 0) {
    //                     setJobApplications(null)
    //                 } else {
    //                     setJobApplications(response.data);
    //                 }
    //
    //                 setIsLoading(false);
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //                 setIsLoading(false);
    //                 setJobApplications(null);
    //             });
    //
    //     } catch (error) {
    //         console.log(error);
    //         setIsLoading(false);
    //         setJobApplications(null);
    //     }
    //
    // }, []);

  return (
      <>
          {isLoading && <Spinner/>}
          <div className={"job-applications-page"}>
              {((
                  jobApplications && Array.isArray(jobApplications) && jobApplications.length > 0
              ) ? (
                  <Table tableData={jobApplications} numCols={3} scrollable={true} compact={true}
                         allowHideColumns={true} defaultHiddenColumns={[
                                                                          'Skills or Hobbies',
                                                                          'Experience Details',
                                                                          'Other Details',
                                                                          'Address District Other',
                                                                          'Address Street',
                                                                          'Position Applying For Other',
                                                                          'High School System Other',
                                                                          'Other Documents Link First',
                                                                          'Other Documents Link Second',
                                                                          'Other Documents Link Third'
                                                                        ]} allowExport={true}
                         exportFileName={'job-applications'} sortConfigParam={{column: 1, direction: 'ascending'}}
                                                filterableColumns={[
                                                                     'Date of Birth',
                                                                     'Application Time',
                                                                     'Gender',
                                                                     'Address District',
                                                                     'Position Applying For',
                                                                     'Position Applying For Specialty',
                                                                     'High School System',
                                                                     'High School Graduation Date',
                                                                     'Institution Major',
                                                                     'Institution Graduation Date',
                                                                     'Years of Experience',
                                                ]}
                  />
              ) : (
                  <h1>
                      No job applications found.
                  </h1>
              ))}
          </div>
      </>
  );
}

export default JobApplications;