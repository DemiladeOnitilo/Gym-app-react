import React from "react";
import ProfileCard from "./ProfileCard";
import Button from "./Buttons";

function Trainers(){
    return(
        <div>
            <div className="trainers-page-heading">
                <h1>
                    MEET 
                    <br />
                    <span>OUR</span>
                    <br />
                    TRAINERS
                </h1>
            </div>
            <div className="trainers-page-card">
                <div className="trainers-page-card-heading">
                <h1>OUR <span>TRAINERS</span></h1>
                </div>
                <div className="trainers-page-card-desc">
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
                    <ProfileCard 
                        name={"Alicia Duncan"}
                        img={"https://t3.ftcdn.net/jpg/07/32/65/04/360_F_732650497_jXQjmlrrB6qT3nZrexd0WrnmeKejmxSc.jpg"}
                        specialty={"Swim Coach"}
                    />
                    <ProfileCard 
                        name={"Dan Wilder"}
                        img={"https://img.freepik.com/premium-photo/workout-gym_987066-253.jpg"}
                        specialty={"Gymnast"}
                    />
                    <ProfileCard 
                        name={"Joan Scott"}
                        img={"https://t4.ftcdn.net/jpg/07/32/63/87/360_F_732638771_9hZ1dUxcMFfMrWciE2kCd6Gao6XiKEDD.jpg"}
                        specialty={"Yoga Expert"}
                    />
                    <ProfileCard 
                        name={"John Doe"}
                        img={"https://img.freepik.com/premium-photo/portrait-handsome-male-fitness-instructor-gym-healthy-lifestyle-sport-concept-background_948175-1778.jpg"}
                        specialty={"Cross Fit Specialist"}
                    />
                </div>
            </div>
            <div className="trainers-body">
                <h1>
                    CHECK OUT THE
                    <br />
                    <span>CLASSES</span> 
                    <br />
                    OUR TRAINERS OFFER
                </h1>
                <Button 
                    text={"CLASSES"}
                />
            </div>
        </div>
    )
}

export default Trainers;