"use client";
import { useCallback, useEffect, useMemo, useState, type FC } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { ScrollArea } from "../ui/scroll-area";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
    paramName: string;
    placeholder: string;
    label: string;
    children: Readonly<React.ReactNode>;
}

const SelectCard: FC<Props> = ({ placeholder, label, paramName, children }) => {
    const [selected, setSelected] = useState<string>("");
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const params = useMemo(
        () => new URLSearchParams(searchParams),
        [searchParams]
    );

    function handleValueChange(value: string) {
        setSelected(value);
        params.set(paramName, value);
        router.replace(`/${pathname}?${params}`);
    }
    useEffect(() => {
        function initialLoading() {
            if (!searchParams.get(paramName)) {
                params.set(paramName, "all");
                router.replace(`/${pathname}?${params}`);
                setSelected("all");
            } else {
                setSelected(searchParams?.get(paramName)!);
            }
        }
        initialLoading()
    }, [paramName, params, pathname, router, searchParams]);

    return (
        <Select onValueChange={handleValueChange} value={selected}>
            <SelectTrigger className="w-[180px] capitalize">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="capitalize">
                <SelectGroup>
                    <SelectLabel className="capitalize">{label}</SelectLabel>
                    <ScrollArea className="h-40">
                        <SelectItem value="all">All</SelectItem>
                        {children}
                    </ScrollArea>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default SelectCard;
