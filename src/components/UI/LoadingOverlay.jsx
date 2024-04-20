import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

export const LoadingOverlay = (props) => {
    const { started, setStarted } = props;
    const { progress, total, loaded, item } = useProgress();

    console.log(`progress: ${progress}, total: ${total}, loaded: ${loaded}, item: ${item}`);

    useEffect(() => {
        if (progress === 100) {
            setTimeout(() => {
                setStarted(true);
            }, 800);
        }
    }, [progress, total, loaded, item]);

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none
  flex items-center justify-center bg-indigo-50 
  ${started ? "opacity-0" : "opacity-100"}`}
        >
            <div className="text-4xl md:text-9xl font-bold text-indigo-900 relative">
                <div
                    className="absolute left-0 top-0 overflow-hidden truncate text-clip transition-all duration-500"
                    style={{
                        width: `${progress}%`,
                    }}
                >
                    Vishal Chaudhari
                </div>
                <div className="opacity-40">Vishal Chaudhari</div>
            </div>
        </div>
    );
};