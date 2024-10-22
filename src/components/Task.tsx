import { Button } from "./ui/button";
import iconDelete from "@/assets/delete.svg";

// Define the props type
interface TaskProps {
  task: string;
  deleteTask: () => void;
}

export function Task({ task, deleteTask }: TaskProps) {
    return (
        <div className="flex mt-3 items-center">
            {/* Replace Textarea with a styled div */}
            <div className="w-[85%] bg-yellow-100 text-gray-500 p-3 rounded-md text-sm">
                {task}
            </div>
            <Button className="bg-red-500 hover:bg-red-400 ml-5" onClick={deleteTask}>
                <img src={iconDelete} alt="Delete" className="h-7" /> 
            </Button>
        </div>
    );
}
