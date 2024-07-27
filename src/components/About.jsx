import React from "react";
import Button from "./Buttons";
import SpecialCard from "./SpecialCard";

function About(){
    return(
        <div>
            <div className="about-page-heading">
                <h1>
                    HERE IS SOME
                    <br />
                    INFO <span>ABOUT</span>
                    <br />
                    US
                </h1>
            </div>
            <div className="about-body">
                <h1>WHY <span>CHOOSE US</span></h1>
                <div className="about-main">
                        <div className="about-story"> 
                            <h2>The Story behind our gym</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is</p>
                        </div>
                    <div className="about-main-one">
                        <div className="about-mission">
                            <h2>OUR MISSION</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is</p>
                        </div>
                        <div className="about-values">
                            <h2>OUR VALUES</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-classes-container">
                <div className="about-classes-img"></div>
                <div className="about-classes-desc">
                    <h1>
                        YOU CAN CHECK OUT 
                        <br />
                        <span>TRAINERS</span>
                        <br />
                        AND
                        <br /> 
                        <span>CLASSES</span>
                    </h1>
                    <div className="about-classes-btn">
                    <Button
                        text={"TRAINERS"}
                    />
                    <Button
                        text={"CLASSES"}
                    />
                    </div>
                </div>
            </div>
            <div className="about-container">
                <div className="about-heading">
                    <h2>A LITTLE <span>ABOUT</span> US</h2>
                    <p>Here at Muscle<span>Man</span> gym we are big on four core values:</p>
                </div>
                <div className="about-card-conatiner">
                    <SpecialCard
                        name={"Motivation"}
                        img={"https://images.squarespace-cdn.com/content/v1/60f73c5cb926ff0ff1a38145/486d11bd-6359-449b-8ec6-96f9063efc6e/graham-mansfield-9faBzIlnV14-unsplash.jpg"}
                        content={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is"}
                    />
                    <SpecialCard 
                        name={"Health"}
                        img={"https://i0.wp.com/pune.news/wp-content/uploads/2024/01/Gym-Food.webp?fit=2048%2C1080&ssl=1"}
                        content={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is"}
                    />
                    <SpecialCard 
                        name={"Safety"}
                        img={"https://i.ytimg.com/vi/QzRwqQU3Wyc/maxresdefault.jpg"}
                        content={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is"}
                    />
                    <SpecialCard 
                        name={"Goals"}
                        img={"https://master-gym.neocities.org/img/carousel-1.jpg"}
                        content={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is"}                    
                    />
                </div>
            </div>
            <div className="schedule">
                <div className="schedule-heading">
                    <h1>CLASSES <span>TIMETABLE</span></h1>
                </div>
                <div className="schedule-table">
                    <table>
                        <thead>
                            <tr>
                                <th className="schedule-time"></th>
                                <th>MONDAY</th>
                                <th>TUESDAY</th>
                                <th>WEDNESDAY</th>
                                <th>THURSDAY</th>
                                <th>FRIDAY</th>
                                <th>SATURDAY</th>
                                <th>SUNDAY</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="schedule-time">6:00am - 8:00am</td>
                                <td>
                                    <h4>AEROBICS</h4>
                                    <p>Mary Jane</p>
                                </td>
                                <td>
                                <h4>SWIMMING</h4>
                                <p>Alicia Duncan</p>
                                </td>
                                <td>
                                    <h4>AEROBICS</h4>
                                    <p>Mary Jane</p>
                                </td>
                                <td>
                                <h4>SWIMMING</h4>
                                <p>Alicia Duncan</p>
                                </td>
                                <td>
                                    <h4>AEROBICS</h4>
                                    <p>Mary Jane</p>
                                </td>
                                <td>
                                <h4>AEROBICS</h4>
                                <p>Mary Jane</p>
                                </td>
                                <td>
                                <h4>SWIMMING</h4>
                                <p>Alicia Duncan</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="schedule-time">10:00am - 12:00am</td>
                                <td>
                                <h4>CARDIO</h4>
                                <p>Tim Boulder</p>
                                </td>
                                <td>
                                <h4>BODY BUILDING</h4>
                                <p>Blake Griffin</p>
                                </td>
                                <td>
                                <h4>CARDIO</h4>
                                <p>Tim Boulder</p>
                                </td>
                                <td>
                                <h4>BODY BUILDING</h4>
                                <p>Blake Griffin</p>
                                </td>
                                <td>
                                <h4>BODY BUILDING</h4>
                                <p>Blake Griffin</p>
                                </td>
                                <td>
                                <h4>CARDIO</h4>
                                <p>Tim Boulder</p>
                                </td>
                                <td>
                                <h4>BODY BUILDING</h4>
                                <p>Blake Griffin</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="schedule-time">2:00pm - 4:00pm</td>
                                <td>
                                <h4>BOXING AND UPPERBODY</h4>
                                <p>Femi Olawale</p>
                                </td>
                                <td>
                                <h4>YOGA</h4>
                                <p>Joan Scott</p>
                                </td>
                                <td>
                                <h4>BOXING AND UPPERBODY</h4>
                                <p>Femi Olawale</p>
                                </td>
                                <td>
                                <h4>YOGA</h4>
                                <p>Joan Scott</p>
                                </td>
                                <td>
                                <h4>BOXING AND UPPERBODY</h4>
                                <p>Femi Olawale</p>
                                </td>
                                <td>
                                <h4>BOXING AND UPPERBODY</h4>
                                <p>Femi Olawale</p>
                                </td>
                                <td>
                                <h4>YOGA</h4>
                                <p>Joan Scott</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="schedule-time">6:00pm - 8:00pm</td>
                                <td>
                                <h4>CROSS FIT</h4>
                                <p>John Doe</p>
                                </td>
                                <td>
                                <h4>GYMNASTICS</h4>
                                <p>Dan Wilder</p>
                                </td>
                                <td>
                                <h4>CROSS FIT</h4>
                                <p>John Doe</p>
                                </td>
                                <td>
                                <h4>GYMNASTICS</h4>
                                <p>Dan Wilder</p>
                                </td>
                                <td>
                                <h4>CROSS FIT</h4>
                                <p>John Doe</p>
                                </td>
                                <td>
                                <h4>GYMNASTICS</h4>
                                <p>Dan Wilder</p>
                                </td>
                                <td>
                                <h4>CROSS FIT</h4>
                                <p>John Doe</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default About;