"use server";

import { db } from "@/lib/db";
import { Video } from "@prisma/client";

/**
 * Function to get all videos from database
 * @returns {Video[] | null}
 */
export async function getVideos(): Promise<Video[] | null> {
    try {
        const videos = await db.video.findMany();
        return videos;
    } catch (error) {
        return null;
    }
}

/**
 * Function to get video from database using ID
 * @param id
 * @returns {Promise<Video|null>}
 */

export async function getVideoById(id: string):Promise<Video|null> {
    try {
        const video = await db.video.findUnique({ where: { id } });
        return video;
    } catch {
        return null
    }
}
