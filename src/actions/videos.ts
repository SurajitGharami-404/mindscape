"use server";

import { db } from "@/lib/db";
import getErrorMessage from "@/utils/getErrorMessage";
import { Video } from "@prisma/client";

/**
 * Function to get all videos from database
 * @returns
 */

type Props = {
    language: string;
    genre: string;
};

export async function getVideos({
    language,
    genre,
}: Props): Promise<ActionResponse<Video[]>> {
    let response: ActionResponse<Video[]>;
    const languageQuery = language === "all" ? undefined : language.trim();
    const genreQuery = genre === "all" ? undefined : genre.trim();

    try {
        const videos = await db.video.findMany({
            where: {
                AND: [
                    {
                        language: {
                            name: {
                                equals: languageQuery,
                            },
                        },
                        genre: {
                            name: {
                                equals: genreQuery,
                            },
                        },
                    },
                ],
            },
            orderBy: [
                {
                    createdAt: "desc",
                },
            ],
        });
        response = {
            success: true,
            result: videos,
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
 * Function to get video from database using ID
 * @param id
 * @returns {Promise<Video|null>}
 */

export async function getVideoById(id: string): Promise<Video | null> {
    try {
        const video = await db.video.findUnique({ where: { id } });
        return video;
    } catch {
        return null;
    }
}
