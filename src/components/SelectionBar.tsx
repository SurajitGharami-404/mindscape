import { getGenres } from "@/actions/genres";
import { SelectItem } from "./ui/select";
import { getLanguages } from "@/actions/languages";
import SelectCard from "./shared/SelectCard";

export default async function SelectionBar() {
    const genreResponse = await getGenres();
    const languageResponse = await getLanguages();

    if (genreResponse?.success === false) throw new Error(genreResponse?.error);
    if (languageResponse?.success === false)
        throw new Error(languageResponse?.error);

    return (
        <div className="my-8">
            <div className="flex items-center justify-end gap-x-4">
                <SelectCard
                    paramName="language"
                    placeholder="languages"
                    label="languages"
                >
                    {languageResponse?.result?.map((language) => (
                        <SelectItem value={language.name} key={language.id}>
                            {language.name}
                        </SelectItem>
                    ))}
                </SelectCard>
                <SelectCard paramName="genre" placeholder="genres" label="genres">
                    {genreResponse?.result?.map((genre) => (
                        <SelectItem value={genre.name} key={genre.id}>
                            {genre.name}
                        </SelectItem>
                    ))}
                </SelectCard>
            </div>
        </div>
    );
}
