import { useEffect, useState } from "react";

const Loader = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1500);
        return (() => clearTimeout(timer))
    }, [])

    return (
        <>
            {loading && (
                <div className="loader">
                    <div className="loader-inner">
                        <div className="circle"></div>
                    </div>
                </div>
            )}
        </>
    );
}
export default Loader;