import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "./ui/select";

export default function SelectionBar() {
    return (
        <div className="p-4">
            <div className="container max-w-screen-xl mx-auto flex items-center justify-end gap-x-4 px-4">
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Languages" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Languages</SelectLabel>
                            <SelectItem value="apple">English</SelectItem>
                            <SelectItem value="banana">Hindi</SelectItem>
                            <SelectItem value="blueberry">Bengali</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Genres" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Genres</SelectLabel>
                            <SelectItem value="apple">Finance</SelectItem>
                            <SelectItem value="banana">Mystery</SelectItem>
                            <SelectItem value="blueberry">Detective</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
