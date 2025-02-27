import { useState } from "react";

export default function NewWorkExperience({onAddWorkExperience}) {
    const [workExperience, setWorkExperience] = useState({
        company: "",
        position: "",
        experience: "",
        years: 0,
    });

    // Handle input changes for basic fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setWorkExperience((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        onAddWorkExperience({
            company: data.get("company"),
            position: data.get("position"),
            experience: data.get("experience"),
            years: data.get("years")
        })
        setWorkExperience({company: '', position: '', experience: '', years: 0})
    };

    return (
        <div className="card border-[1px] border-surface-200-800 w-full max-w-md p-4 text-center preset-filled-surface-100-900">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-5 justify-start">
                    <label className="label w-fit">
                        <span>Years</span>
                        <input
                            type="number"
                            name="years"
                            value={workExperience.years}
                            onChange={handleInputChange}
                            className="input"
                            placeholder="0"
                        />
                    </label>
                    <label className="label">
                        <span>Company</span>
                        <input
                            type="text"
                            name="company"
                            value={workExperience.company}
                            onChange={handleInputChange}
                            className="input"
                            placeholder="Anon inc"
                        />
                    </label>

                    <label className="label">
                        <span>Position</span>
                        <input
                            type="text"
                            name="position"
                            value={workExperience.position}
                            onChange={handleInputChange}
                            className="input"
                            placeholder="Jr Dev"
                        />
                    </label>
                </div>

                <label className="label">
                    <span>Responsibilities And Achievements</span>
                    <textarea
                        name="experience"
                        value={workExperience.experience}
                        onChange={handleInputChange}
                        className="textarea"
                        rows={4}
                        placeholder="Describe your responsibilities and achievements"
                    />
                </label>
                <button
                    type="submit"
                    className="btn preset-filled-primary-400-600 "
                >
                    Add Work Experience
                </button>
            </form>
        </div>
    );
}
