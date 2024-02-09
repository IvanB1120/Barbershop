import React, { useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import '../styles/team.css';
import team1 from '../images/team1.jpg';
import team2 from '../images/team2.jpg';
import team3 from '../images/team3.jpg';
import team4 from '../images/team4.jpg';
import Zoom from 'react-reveal/Zoom';


const Team = () => {

    const [isFlipped, setIsFlipped] = useState([false, false, false, false]);
    const [flipAll, setFlipAll] = useState (false);

    const handleCardClick = (index) => {
        const updatedIsFlipped = [...isFlipped];
        updatedIsFlipped[index] = !updatedIsFlipped[index];
        setIsFlipped(updatedIsFlipped);
    };

    const handleButtonClick = () => {
        setFlipAll(!flipAll);
        setIsFlipped(Array(4).fill(flipAll));
    };

    const TeamData = [
        {
            "id" : "1",
            "name": "Alex Johnson",
            "birth": " June 15, 1985",
            "phone": "(555) 123-4567",
            "email": "alex.johnson@email.com",
            "training": "Advanced Hair Coloring Certification",
            "workHours": "Tuesday to Saturday, 9:00 AM to 6:00 PM",
            "image" : team1
        },
        {
            "id" : "2",
            "name": "Michael Rodriguez",
            "birth": "November 8, 1990",
            "phone": "(555) 987-6543",
            "email": "michael.rodriguez@email.com",
            "training": "Beard Grooming and Shaping Workshop",
            "workHours": "Monday to Friday, 10:00 AM to 7:00 PM",
            "image" : team2
        },
        {
            "id" : "3",
            "name": "Michael Turner",
            "birth": "March 21, 1980",
            "phone": "(555) 555-1212",
            "email": "michael.turner@email.com",
            "training": "Master Barber Certification",
            "workHours": "Wednesday to Sunday, 11:00 AM to 8:00 PM",
            "image" : team3
        },
        {
            "id" : "4",
            "name": "John White",
            "birth": "September 5, 1995",
            "phone": "(555) 789-0123",
            "email": "john.white@email.com",
            "training": "Modern Haircutting Techniques Course",
            "workHours": "Thursday to Saturday, 12:00 PM to 9:00 PM",
            "image" : team4
        }
    ]


return (
    <div id='team-page-container'>
        <h1 className='team-headline'>Our team</h1>
        <div className='team-button-wrapper'>
        <div className='team-container'>
            {TeamData.map((member, index) => (
                <section className='team-section' key={index} onClick={() => handleCardClick(index)}>
                    <Zoom left>
                    <ReactCardFlip isFlipped={isFlipped[index]} flipDirection='horizontal'>
                        <div className='team-image-container-front'>
                            <img src={member.image} alt={`team${index + 1}`} className='team-image' />
                        </div>
                        <div className='team-image-container-back'>
                        <img src={member.image} alt={`team${index + 1}`} className='team-image1' />
                            <div className='team-image-text'>
                                <p className='team-image-headline'>{member.name}</p>
                                <div className='team-info'>
                                    <p> Date of Birth: {member.birth}</p>
                                    <p>  Phone: {member.phone}</p>
                                </div>
                                <p className='team-image-headline'>{member.email}</p>
                                <p className='team-image-headline'>   Specialized Training or Certifications: <br/>{member.training}</p>
                                <p className='team-image-headline'>Regular Working Hours: <br/>{member.workHours}</p>
                            </div>
                        </div>
                    </ReactCardFlip>
                    </Zoom>
                </section>
            ))}
            </div>
            <div className="button-container">
                <button className="team-button" onClick={handleButtonClick}>
                    Show info
                </button>
            </div>
        </div>
    </div>
);
}

export default Team