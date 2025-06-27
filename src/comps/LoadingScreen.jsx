import { useEffect, useState } from "react";
export const LoadingScreen = ( { onComplete }) => {

    const [text, setText] = useState("")
    const fullText = "print('hello, world! <3')"

    useEffect(() => {
        let idx = 0
        const interval = setInterval(() => {
            setText(fullText.substring(0, idx));
            idx++;
            if (idx > fullText.length) {
                clearInterval(interval)

                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval)
    }, [onComplete]);

    return (<div className = "fixed inset-0 z-50 bg-[#15191E] text-[#F96074] flex flex-col items-center justify-center">
        <div className = "mb-12 text-4xl font-mono font-bold">
            {text}
            <span className = "animate-blink ml-1"> | </span>
        </div>

        <div className = "w-[400px] h-[4px] bg-[#15191E] rounded relative overflow-hidden">
            <div className = "w-[40%] h-full bg-[#766DA7] shadow-[0_0_15px_#3B82F6] animate-loading-bar"> {" "}</div>
        </div>
    </div>
    );
}