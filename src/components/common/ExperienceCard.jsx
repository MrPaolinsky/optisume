export default function WorkExperienceCard({ years, company, position, experience }) {

    return <div className="card border-[1px] border-surface-200-800 w-full max-w-md p-4 text-center">
        <div className="flex flex-col text-start">
            <h4 className="h4">{position}</h4>
            <p className="italic text-sm opacity-50">At {company} for {years} years</p>
            <p className="text-wrap">{experience}</p>
        </div>
    </div>
}
