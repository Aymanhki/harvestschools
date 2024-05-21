import OptionsGrid from "../../modules/OptionsGrid.jsx";
import '../../styles/Events.css';

function Events() {

    const options = [
        {
            title: "National Calendar",
            image: "/assets/images/EventsPages/Calendar1.png",
            description: "Detailed timeline of the National academic year.",
            link: "/events/national-calendar",
            buttonText: "Select",
            titleInArabic: false,
            descriptionInArabic: false
        },
        {
            title: "British Calendar",
            image: "/assets/images/EventsPages/Calendar1.png",
            description: "Detailed timeline of the British academic year.",
            link: "/events/british-calendar",
            buttonText: "Select",
            titleInArabic: false,
            descriptionInArabic: false
        },
        {
            title: "American Calendar",
            image: "/assets/images/EventsPages/Calendar1.png",
            description: "Detailed timeline of the American academic year.",
            link: "/events/american-calendar",
            buttonText: "Select",
            titleInArabic: false,
            descriptionInArabic: false
        },
        {
            title: "KG Calendar",
            image: "/assets/images/EventsPages/Calendar1.png",
            description: "Detailed timeline of the Kindergarten academic year.",
            link: "/events/kg-calendar",
            buttonText: "Select",
            titleInArabic: false,
            descriptionInArabic: false
        }
    ];

  return (
    <div className={"events-page"}>
        <OptionsGrid title="Events" titleInArabic={false} options={options}/>
    </div>
  );
}

export default Events;