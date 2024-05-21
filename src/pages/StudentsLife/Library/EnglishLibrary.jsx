import OptionsGrid from "../../../modules/OptionsGrid.jsx";
import '../../../styles/StudentsLife.css';

function EnglishLibrary() {
    const options = [
        {
            title: "Fairy Tales",
            image: "/assets/images/StudentsLifePages/Tales2.png",
            description: "Read classic fairy tales.",
            link: "/students-life/library/english-fairy-tales",
            buttonText: "Select",
            titleInArabic: false,
            descriptionInArabic: false
        },
        {
            title: "Drama",
            image: "/assets/images/StudentsLifePages/Drama1.png",
            description: "Read drama books.",
            link: "/students-life/library/english-drama",
            buttonText: "Select",
            titleInArabic: false,
            descriptionInArabic: false

        },
        {
            title: "Levels",
            image: "/assets/images/StudentsLifePages/Levels1.png",
            description: "Read books based on your reading level.",
            link: "/students-life/library/english-levels",
            buttonText: "Select",
        },
        {
            title: "General",
            image: "/assets/images/StudentsLifePages/General1.png",
            description: "Read general books.",
            link: "/students-life/library/english-general",
            buttonText: "Select",
            titleInArabic: false,
            descriptionInArabic: false
        }
    ];

  return (
    <div className={"english-library-page"}>
        <OptionsGrid title="Choose A Category" titleInArabic={false} options={options}/>
    </div>
  );
}

export default EnglishLibrary;