"use client"

import { X } from "lucide-react";
import Link from "next/link";

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.hero-form') as HTMLFormElement;
        if (form) form.reset();
    };

    return (
        <button 
            type="reset"
            onClick={reset}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
            <Link href="/" className="">
                <X className="w-4 h-4" />
            </Link>
        </button>
    );
};

export default SearchFormReset;
