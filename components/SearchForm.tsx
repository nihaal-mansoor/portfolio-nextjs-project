import Form from 'next/form';
import SearchFormReset from '@/components/SearchFormReset';
import { Search } from 'lucide-react';

interface SearchFormProps {
    query?: string;
}

const SearchForm = ({ query }: SearchFormProps) => {
    return (
        <Form
            action="/"
            scroll={false}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 hero-form"
        >
            {/* Input wrapper for relative positioning */}
            <div className="relative w-full sm:w-96">
                <input 
                    name="query"
                    defaultValue={query}
                    className="w-full px-4 py-3 pr-10 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Search Something"
                />
                {/* Only show reset button if there's a query */}
                {query && <SearchFormReset />}
            </div>

            {/* Submit button */}
            <button
                type="submit"
                className="px-6 py-3 bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
            >
                <Search className="size-5" />
            </button>
        </Form>
    );
};

export default SearchForm;
