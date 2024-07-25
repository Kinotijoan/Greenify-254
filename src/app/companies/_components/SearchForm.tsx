"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchForm = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter()

    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
            
        }else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
        console.log(params)
    }

    return (
        <div>
            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                type="text"
                placeholder="Search companies..."
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get('query')?.toString()}
                />
        </div>
    )
}

export default SearchForm
