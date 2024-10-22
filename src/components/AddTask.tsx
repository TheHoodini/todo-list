import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

// Define the props type
interface AddTaskProps {
  addTask: (taskText: string) => void; // Type for the addTask function
}

export function AddTask({ addTask }: AddTaskProps) {
    const [taskText, setTaskText] = useState<string>(""); // Type the state as a string

    const handleAddTask = () => {
        if (taskText.trim()) {
            addTask(taskText);
            setTaskText(""); // Clear input after adding
        }
    };

    return (
        <div className="flex mt-2 mb-7">
            <Input 
                className="w-[85%]" 
                value={taskText} 
                onChange={(e) => setTaskText(e.target.value)} // e.target.value is typed as string
                placeholder="Enter a task"
            />
            <Button 
                className="ml-5 bg-indigo-500 hover:bg-indigo-400" 
                onClick={handleAddTask}
            >
                Add
            </Button>
        </div>
    );
}
