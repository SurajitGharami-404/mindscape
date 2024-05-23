"use server";

import { db } from "@/lib/db";
import getErrorMessage from "@/utils/getErrorMessage";
import { Genre } from "@prisma/client";


/**
 * function to get all genres from database
 * @returns
 */
export async function getGenres(): Promise<ActionResponse<Genre[]>> {
    let response: ActionResponse<Genre[]>;
    try {
        const genres = await db.genre.findMany();
        response = {
            success: true,
            result: genres,
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
 * function to get genre from database using ID
 * @param id
 * @returns Genre
 */

export async function getGenreById(id: string): Promise<ActionResponse<Genre|null>> {
    let response: ActionResponse<Genre|null>;
    try {
        const genre = await db.genre.findUniqueOrThrow({where:{id}});
        response = {
            success: true,
            result: genre,
        };
    } catch (error) {
        response = {
            success: false,
            error: getErrorMessage(error),
        };
    }
    return response;
}
