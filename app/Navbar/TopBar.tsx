
import { Calendar, MapPin, Moon, ShieldCheck, Sparkles, Sun, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export const TopBar = ()=>{
    const [order, setOrder] = useState(true)
    const items = [
        { text: "100% UV-Sanitized Fresh Eggs", Icon: ShieldCheck },
        { text: "Delivery Slot: 8:00 AM - 10:00 AM", Icon: Sun },
        { text: "Delivery Slot: 8:00 AM - 10:00 AM", Icon: Moon },
        { text: "Order on WhatsApp: +91 98765 43210", Icon: FaWhatsapp },
        { text: "New Offers Live Today!", Icon: Sparkles },
        { text: "UV Cleaned", Icon: ShieldCheck },
        { text: "Farm Fresh", Icon: Truck },
        { text: "Date Stamped", Icon: Calendar },
        { text: "Delivering In Satna", Icon: MapPin }
    ];

    const DISPLAY_MS = 5000; 
    const ANIM_MS = 450;   

    const [current, setCurrent] = useState(0);
    const [next, setNext] = useState(1);
    const [phase, setPhase] = useState("show");

    useEffect(() => {
        let intervalId;
        let t1: any, t2: any;

        intervalId = setInterval(() => {
            // 1) exit current (slide DOWN)
            setPhase("exit");

            // 2) after exit animation, switch current to next
            t1 = setTimeout(() => {
                setCurrent(next);
                setNext((next + 1) % items.length);

                // 3) bring new in (from UP to center)
                setPhase("enter");

                // 4) after enter animation, keep it stable
                t2 = setTimeout(() => {
                    setPhase("show");
                }, ANIM_MS);
            }, ANIM_MS);
        }, DISPLAY_MS);

        return () => {
            clearInterval(intervalId);
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, [next, items.length]);

    const CurrentIcon = items[current].Icon;
    const NextIcon = items[next].Icon;
    return (
        <div className="bg-[#3A7D44] text-white py-2 px-4 text-xs md:text-sm font-medium text-center">
                <div className="container mx-auto flex justify-center items-center gap-4">
                    {/* ✅ ticker area */}
                    <span className="flex items-center gap-2 overflow-hidden h-5 md:h-6 relative sm:min-w-[250px] w-full justify-center">
                        {/* CURRENT */}
                        <span
                            className={`absolute left-0 right-0 flex items-center justify-center gap-2 transition-all ease-in-out`}
                            style={{ transitionDuration: `${ANIM_MS}ms` }}
                        >
                            <span
                                className={`flex items-center gap-2 ${phase === "exit"
                                        ? "translate-y-6 opacity-0"
                                        : "translate-y-0 opacity-100"
                                    } transition-all ease-in-out`}
                                style={{ transitionDuration: `${ANIM_MS}ms` }}
                            >
                                <CurrentIcon className="w-4 h-4 text-[#E6B65C]" />
                                <span>{items[current].text}</span>
                            </span>
                        </span>

                        {/* NEXT (only visible while entering) */}
                        {phase === "enter" && (
                            <span
                                className="absolute left-0 right-0 flex items-center justify-center gap-2 translate-y-[-24px] opacity-0 animate-enterFromTop"
                                style={{ animationDuration: `${ANIM_MS}ms` }}
                            >
                                <NextIcon className="w-4 h-4 text-[#E6B65C]" />
                                <span>{items[next].text}</span>
                            </span>
                        )}
                    </span>


                </div>
            </div>
    )
}