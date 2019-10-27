import { useState } from "react";

export const useInputValue = (initial, schema) => {
    const [value, setValue] = useState(initial);
    const [error, setErr] = useState("");
    const onChange = (e, val) => {
        setValue(e ? e.target.value : val);
        if (schema) {
            if (schema.validate(value).error) {
                setErr(schema.validate(value).error.details[0].message);
            } else {
                setErr(false);
            }
        }
    };
    const onFocus = onChange;
    return { value, onChange, onFocus, error };
};

export const useIsVisible = ({ element, disconnect, cb, on }) => {
    useEffect(() => {
        if (typeof window !== "undefined" && doit) {
            Promise.resolve(
                typeof window.IntersectionObserver !== "undefined"
                    ? window.IntersectionObserver
                    : import("intersection-observer")
            ).then(() => {
                const observer = new window.IntersectionObserver(entries => {
                    const { isIntersecting } = entries[0];
                    cb(false);
                    if (isIntersecting) {
                        cb(true);
                        if (disconnect) {
                            observer.disconnect();
                        }
                    }
                });
                observer.observe(element.current);
            });
        }
    }, [element, typeof window, on]);
};
