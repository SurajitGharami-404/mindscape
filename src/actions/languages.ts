"use server";

import { db } from "@/lib/db";
import getErrorMessage from "@/utils/getErrorMessage";
import { Language } from "@prisma/client";

/**
 * function to get all languages from database
 * @returns
 */
export async function getLanguages():Promise<ActionResponse<Language[]>> {
    let response: ActionResponse<Language[]>;
    try {
        const languages = await db.language.findMany();
        response = {
            success: true,
            result: languages,
        };
    } catch (error) {
        response = {
            success: false,
            error: getErrorMessage(error),
        };
    }
    return response;
}

/**
 * function to get language from database using ID
 * @param id
 * @returns
 */

export async function getLanguageById(id: string):Promise<ActionResponse<Language|null>> {
    let response: ActionResponse<Language|null>;
    try {
        const language = await db.language.findUniqueOrThrow({where:{id}});
        response = {
            success: true,
            result: language,
        };
    } catch (error) {
        response = {
            success: false,
            error: getErrorMessage(error),
        };
    }
    return response;
}
