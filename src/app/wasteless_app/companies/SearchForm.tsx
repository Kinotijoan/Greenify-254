"use client"
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchForm = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter()

    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);

        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
        console.log(params)
    }

    return (
        <div className="flex justify-center mt-2">
            <div className="flex flex-row gap-2 border rounded-md p-2 w-2/3 hover:outline-gray-900">
                <Search className="left-3 text-gray-500" />
                <input
                    className="appearance-none  text-gray-700 focus:outline-none w-full "
                    type="text"
                    placeholder="Search blogs..."
                    onChange={(e) => handleSearch(e.target.value)}
                    defaultValue={searchParams.get('query')?.toString()}
                />
            </div>
        </div>
    )
}

export default SearchForm
