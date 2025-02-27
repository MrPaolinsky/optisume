import { useState } from "react";

export default function BadgeList() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && inputValue.trim()) {
            // Prevent adding duplicate items
            if (!items.includes(inputValue.trim())) {
                setItems([...items, inputValue.trim()]);
                setInputValue("");
            }
        }
    };

    const removeSkill = (itemToRemove) => {
        setItems(items.filter((item) => item !== itemToRemove));
    };

    return (
        <div className="w-full mx-auto ">
            <div className="p-2 border border-surface-200-800 rounded-md flex flex-wrap gap-2">
                {items.map((item, index) => (
                    <span key={index} className="badge preset-filled">
                        {item}
                        <button onClick={() => removeSkill(item)}>×</button>
                    </span>
                ))}
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    style={{ all: "unset" }}
                    className="flex-1 min-w-[60px] bg-transparent outline-none border-0 focus:border-0 focus:outline-none"
                    placeholder="Press enter"
                />
            </div>
        </div>
    );
}
