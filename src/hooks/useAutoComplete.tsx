import { useEffect, useRef, useState } from "react";
import { useMapLoader } from "./useMapLoader";
import { completeOptions } from "@/libs/map";

const useAutoComplete = (isLoaded: boolean) => {
    // Hooks
    const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    // Inicializa o autocomplete
    useEffect(() => {
        if (inputRef.current && isLoaded) {
            const autocompleteInstance = new google.maps.places.Autocomplete(inputRef.current, completeOptions);
            setAutocomplete(autocompleteInstance);
        }
    }, [isLoaded]);

    return {
        inputRef,
        autocomplete
      };
}

export {useAutoComplete};