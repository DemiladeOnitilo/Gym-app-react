import React from "react";
import ClassesCard from "./ClassesCard";
import Button from "./Buttons";

function Classes(){
    return(
        <div>
                <div className="classes-heading">
                    <h1>
                        HERE ARE SOME
                        <br />
                        OF
                        <br />
                        THE<span>CLASSES</span> WE OFFER
                    </h1>
                    <p>By some of the <span>best</span> trainers around</p>
                </div>
            <div className="classes-container">
                <div className="classes-card-heading">
                    <h1>OUR <span>CLASSES</span></h1>
                </div>
                <div className="classes-cards-container">
                    <ClassesCard 
                        name={"Aerobics"}
                        img={"https://wexer.com/wp-content/uploads/2019/09/Install-5.jpg"}
                        content={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is"}
                    />
                    <ClassesCard 
                        name={"BodyBuilding"}
                        img={"https://ironbullstrength.com/cdn/shop/articles/bodybuilding-equiupments-you-must-have_520x500_93a9cd44-733a-4355-9b73-0adb7fe0f7aa.webp?v=1690890453"}
                        content={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is"}
                    />
                    <ClassesCard 
                        name={"Cardio"}
                        img={"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2021-12/211208-working-out-stock-mn-1310-55e1c7.jpg"}
                        content={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is"}
                    />
                    <ClassesCard 
                        name={"Swimming"}
                        img={"https://swimgym.nl/uploads/_groot/iStock-638028192.jpg"}
                        content={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is"}
                    />
                    <ClassesCard 
                        name={"Boxing"}
                        img={"https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2020/05/boxer-training-bag.jpg?quality=86&strip=all"}
                        content={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is"}
                    />
                    <ClassesCard 
                        name={"Gymnastics"}
                        img={"https://images.squarespace-cdn.com/content/v1/5fdbd1b97c73e10683974bf1/1610326064047-KUQNAFSJ6KTRN20TKAG2/529E0C85-94C1-4949-8DDD-B81CF1D4811A.jpeg"}
                        content={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is"}
                    />
                    <ClassesCard 
                        name={"Yoga"}
                        img={"https://eosfitness.com/wp-content/uploads/2021/04/bigstock-Diverse-Multiethnic-Men-And-Wo-388413772-1-900x490.jpg"}
                        content={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is"}
                    />
                    <ClassesCard 
                        name={"CrossFit"}
                        img={"https://www.anytimefitness.com/wp-content/uploads/2021/08/RT_20210922_ANYTIMEFITNESS_RT53159-FINAL-scaled.jpg"}
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
            <div className="classes-end">
                <h1>JOIN OUR TRAINERS FOR A <span>CLASS</span></h1>
                <Button 
                    text={"TRAINERS"}
                />
            </div>
        </div>
    )
}

export default Classes;