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
    const [value, setValue] = useState<string>("");
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const params = useMemo(
        () => new URLSearchParams(searchParams),
        [searchParams]
    );

    const handleInitialLoading = useCallback(
        () =>
            (function () {
                if (!searchParams.get(paramName)) {
                    params.set(paramName, "all");
                    router.replace(`/${pathname}?${params}`);
                    setValue("all");
                } else {
                    setValue(searchParams?.get(paramName)!);
                }
                return;
            })(),
        [paramName, params, pathname, router, searchParams]
    );

    function handleValueChange(value: string) {
        setValue(value);
        params.set(paramName, value);
        router.replace(`/${pathname}?${params}`);
    }
    useEffect(() => {
        handleInitialLoading();
    }, [handleInitialLoading]);

    return (
        <Select onValueChange={handleValueChange} value={value}>
            <SelectTrigger className="w-[180px] capitalize">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="capitalize">
                <SelectGroup>
                    <SelectLabel className="capitalize">{label}</SelectLabel>
                    <ScrollArea className="max-h-40">
                        <SelectItem value="all">All</SelectItem>
                        {children}
                    </ScrollArea>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default SelectCard;
