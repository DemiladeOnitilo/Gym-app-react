import React from "react";
import MembershipCard from "./MembershipCard";
import Button from "./Buttons";

function Membership(){
    return(
        <div>
            <div className="membership-heading">
                <h1>BECOME 
                    <br />
                    A 
                    <br />
                    <span>MEMBER</span>
                    <br /> 
                    TODAY
                </h1>
            </div>
            <div className="membership-body">
                <h1>WHY <span>BECOME</span> A MEMBER</h1>
                <div className="membership-main">
                        <div className="membership-perks"> 
                            <h2>THE PERKS</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is</p>
                        </div>
                    <div className="membership-main-one">
                        <div className="membership-community">
                            <h2>THE COMMUNITY</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is</p>
                        </div>
                        <div className="membership-environ">
                            <h2>THE ENVIRONMENT</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="discount">
               <h1>
                    ENJOY OUR <span>WINTER</span> DISCOUNTS
                    <br />
                    GET <span>35%</span> OFF ON ALL PROGRAMS
                </h1>
                <p>Applys every Winter</p>
                <Button 
                    text={"CHECK IT OUT"}
                />
            </div>
            <div className="membership-cards">
                <div className="membership-cards-heading">
                    <h1>OUR <span>PLANS</span></h1>
                </div>
                <div className="membership-cards-body">
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

export default Membership;