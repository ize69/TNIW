//filters what people are shown in the people section
//has a dropdown menu to select the role to filter by if the fiter is pressed

import React from "react";
import CrewSection from "./CrewSection";
import CastSection from "./CastSection";
interface FilterProps {
    role: string;
    setRole: React.Dispatch<React.SetStateAction<string>>;
}

//defines the dropdown menu and updates the page when the selectionis changed
function Filter({ role, setRole }: FilterProps) {
    return (
        <div className="filter">
            <label htmlFor="role">Filter by role:</label>
            <select
                name="role"
                id="role"
                value={role}
                onChange={(e) => {
                    setRole(e.target.value);
                    console.log("Filter changed to:", e.target.value);
                }}
            >
                <option value="cast">Cast</option>
                <option value="crew">Crew</option>
            </select>
        </div>
    );
}
//defines the people section that is re rendered when the filter is changed
function PeopleFilter() {
    const [role, setRole] = React.useState("crew");

    React.useEffect(() => {
        console.log("PeopleFilter re-rendered with role:", role);
    }, [role]);

    return (
        <div>
            <Filter role={role} setRole={setRole} />
            {role === "cast" ? <CastSection /> : <CrewSection />}
        </div>
    );
}


export default PeopleFilter;
