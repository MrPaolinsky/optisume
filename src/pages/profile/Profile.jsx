import { useState } from "react";
import BadgeList from "../../components/common/BadgeList";
import NewWorkExperience from "../../components/common/NewWorkExperience";
import WorkExperienceCard from "../../components/common/ExperienceCard";

export default function Profile() {
    const [workExperiences, setWorkExperiences] = useState([])

    function onAddWorkExperience(experience) {
        workExperiences.push(experience)
        setWorkExperiences(workExperiences.slice(0))
        console.log(workExperiences)
    }

    return (
        <div className="p-5 flex flex-col gap-5">
            <div className="w-full flex flex-col gap-2">
                <h1 className="text-2xl font-bold">Profile</h1>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className="input"
                        value="John Doe"
                        readOnly
                    />
                </div>
                <div>
                    <label htmlFor="profile">Title:</label>
                    <input
                        type="text"
                        id="profile"
                        className="input"
                        value="Fullstack Senior Developer 10x engineer"
                        readOnly
                    />
                </div>
        <div>
            <label htmlFor="bio">Bio:</label>
        <input type="text" id="bio" className="input" />
        </div>
            </div>
            <div className="w-full flex flex-col gap-2">
                <h1 className="text-2xl font-bold">Skills</h1>
                <div className="gap-1 flex flex-col">
                    <label>Major Skills:</label>
                    <BadgeList />
                </div>
                <div className="gap-1 flex flex-col">
                    <label>All Other Skills:</label>
                    <BadgeList />
                </div>
            </div>
            <div className="w-full flex flex-col gap-2">
                <h1 className="text-2xl font-bold w-full">Work Experience</h1>
                <div className="flex flex-wrap gap-y-5 justify-between">
                    {workExperiences.map((el, i) =>
                        <WorkExperienceCard
                            key={i}
                            years={el.years}
                            company={el.company}
                            position={el.position}
                            experience={el.experience}
                        />
                    )}
                    <NewWorkExperience
                        onAddWorkExperience={onAddWorkExperience}
                    />
                </div>
            </div>
        </div>
    );
}
