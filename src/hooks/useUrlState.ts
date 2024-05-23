"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type URLState = {
    paramName: string;
    value: string;
};

export default function useUrlState({ paramName, value }: URLState) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const params = new URLSearchParams(searchParams);

    params.set(paramName, value);
    router.replace(`/${pathname}?${params}`);
}
