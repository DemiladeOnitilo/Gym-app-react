import React from "react";
import Button from "./Buttons";
import SpecialCard from "./SpecialCard";
import ProfileCard from "./ProfileCard";
import MembershipCard from "./MembershipCard";

function Home(){
    return(
        <div>
            <div className="home-heading">
                <h1>
                WELCOME 
                <br />
                TO
                <br />
                MUSCLE<span>MAN</span> GYM
                </h1>
                <p>Where you can get the <span>best</span> training and workout sessions</p>
                <div className="head-button">
                    <Button 
                    text={"JOIN US"}
                    />
                    <Button 
                    text={"OUR SERVICES"}
                    />
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
            <div className="motto-container">
                <div className="motto-desc">
                    <h2>Our Motto</h2>
                    <h1>
                        NEVER <span>BACK</span> DOWN
                        <br /> 
                        NEVER GIVE UP
                    </h1>
                </div>
                <div className="motto-img"></div>
            </div>
            
            <div className="trainer-container">
                <div className="trainer-heading">
                    <h1>MEET OUR <span>TRAINERS</span></h1>
                    <Button 
                        text={"TRAINERS"}
                    />
                </div>
                <div className="trainer-cards">
                    <ProfileCard 
                        name={"Tim Boulder"}
                        img={"https://basebangkok.com/app/uploads/2021/12/Matt-WP.jpg"}
                        specialty={"Cardio Expert"}
                    />
                    <ProfileCard 
                        name={"Mary Jane"}
                        img={"https://t4.ftcdn.net/jpg/06/43/08/25/360_F_643082522_SK23AzjUc0LkqBUiQox0bqRG204aoI6B.jpg"}
                        specialty={"Aerobics Professional"}
                    />
                    <ProfileCard 
                        name={"Femi Olawale"}
                        img={"https://s3-media0.fl.yelpcdn.com/bphoto/gafehJZFg53pEQeM3rPCOA/1000s.jpg"}
                        specialty={"Boxing and UpperBody"}
                    />
                    <ProfileCard 
                        name={"Blake Griffin"}
                        img={"https://img.freepik.com/premium-photo/mascular-man-gym-trainer_1101236-114.jpg"}
                        specialty={"Body Building"}
                    />
                </div>
            </div>
            <div className="member-container">
                <div className="member-img"></div>
                <div className="member-desc">
                    <h1>
                        BECOME A <span>PREMIUM</span>
                        <br /> 
                        MEMBER TODAY
                    </h1>
                    <Button
                        text={"JOIN US"}
                    />
                </div>
            </div>
            <div className="member-join-container">
                <div className="member-join-heading">
                    <h1>OUR <span>PLANS</span></h1>
                </div>
                <div className="member-join-cards">
                    <MembershipCard 
                        name={"Classic"}
                        price={"$30"}
                        period={"One Month"}
                        btnName={"JOIN WITH CLASSIC"}
                        content1={"Unlimited Equipment"}
                        content2={"Free Water"}
                        content3={"No Wifi Access"}
                        content4={"No Member Card"}
                        content5={"No Complementary Towels"}
                        content6={"No Pool Access"}
                    />
                    <MembershipCard 
                        name={"Standard"}
                        price={"$90"}
                        period={"Six Months"}
                        btnName={"JOIN WITH STANDARD"}
                        content1={"Unlimited Equipment"}
                        content2={"Free Water"}
                        content3={"Wifi Access"}
                        content4={"No Member Card"}
                        content5={"No Complementary Towels"}
                        content6={"No Pool Access"}
                    />
                    <MembershipCard 
                        name={"Premium"}
                        price={"$199"}
                        period={"Twelve Months"}
                        btnName={"JOIN WITH PREMIUM"}
                        content1={"Unlimited Equipment"}
                        content2={"Free Water"}
                        content3={"Wifi Access"}
                        content4={"Member Card"}
                        content5={"Complementary Towels"}
                        content6={"Pool Access"}
                    />
                    
                </div>
            </div>
           
        </div>
    )

    
}

export default Home;