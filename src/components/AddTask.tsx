import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function AddTask() {	
    return (
        <div className="flex mt-2">
            <Input className="w-[85%]" />
            <Button className="ml-5 bg-indigo-500 hover:bg-indigo-400">Add</Button>
        </div>
    )
}