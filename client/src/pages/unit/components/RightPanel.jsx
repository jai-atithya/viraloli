import React, { useState, useEffect } from "react";
import SampleLogo from "../../../assets/tamilLogo.png";
import { useAuth } from "../../../context/AuthContext";
import axios from "../../../api/axios";

export const RightPanel = () => {
    const { user, authDataLoading } = useAuth();

    const [userId, setUserId] = useState("");

    const [weekDays, setWeekDays] = useState([]);

    const [currentStreak, setCurrentStreak] = useState(0);
    const [maxStreak, setMaxStreak] = useState(0);

    useEffect(() => {
        if (!authDataLoading && user) {
            setUserId(user._id);
        }
    }, [authDataLoading, user]);

    useEffect(() => {

        if (!userId) return;

        const fetchWeek = async () => {

            try {

                const res = await axios.get(`session/week/${userId}`);
                const data = res.data;
                setCurrentStreak(data.currentStreak);
                setMaxStreak(data.maxStreak);

                const formatted = data.data.map((item) => {

                    const date = new Date(item.sessionDate);

                    return {
                        day: date.toLocaleDateString("en-US", {
                            weekday: "short",
                        }).slice(0, 2),

                        date: date.getDate(),

                        fullDate: date,

                        attended: item.attended,

                        isFuture: item.isFuture,
                    };
                });

                setWeekDays(formatted);

            } catch (err) {
                console.error(err);
            }

        };

        fetchWeek();

    }, [userId]);

    const today = new Date();

    return (
        <div className="h-full w-full border border-slate-200 shadow-lg rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 flex flex-col">

            {/* streak header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-2 sm:pb-3">
                <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-orange-500 text-lg sm:text-xl">🔥</span>
                    <span className="font-bold text-slate-800 text-base sm:text-lg">
                        {currentStreak}
                    </span>
                </div>

                <div className="text-slate-600 text-xs sm:text-sm font-medium">
                    அதிகபட்சம்: {" "}
                    <span className="text-slate-800 font-bold">
                        {maxStreak}
                    </span>
                </div>
            </div>

            {/* calendar */}
            <div className="mt-3">
                <p className="text-slate-700 font-semibold text-xs sm:text-sm mb-2">
                    {today.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                    })}
                </p>

                <div className="grid grid-cols-7 gap-0.5 sm:gap-1 text-center text-[10px] sm:text-xs">

                    {weekDays.map((d) => {

                        const isToday =
                            d.fullDate.getDate() === today.getDate() &&
                            d.fullDate.getMonth() === today.getMonth() &&
                            d.fullDate.getFullYear() === today.getFullYear();

                        let className =
                            "w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center text-[11px] sm:text-[15px] mx-auto";

                        if (d.isFuture) {

                            className += " text-slate-500";

                        } else if (isToday && d.attended) {

                            className +=
                                " bg-green-100 text-green-600 border-2 border-green-600";

                        } else if (isToday) {

                            className +=
                                " bg-blue-500 text-white";

                        } else if (d.attended) {

                            className +=
                                " bg-green-100 text-green-600";

                        } else {

                            className +=
                                " bg-red-100 text-red-500";

                        }

                        return (

                            <div
                                key={d.fullDate.toISOString()}
                                className="flex flex-col items-center gap-1 min-w-0"
                            >
                                <span className="text-slate-400">
                                    {d.day}
                                </span>

                                <div className={className}>

                                    {d.isFuture
                                        ? d.date
                                        : d.attended
                                            ? ":)"
                                            : isToday
                                                ? d.date
                                                : ":("}

                                </div>

                            </div>

                        );

                    })}

                </div>
            </div>

            {/* chat bubble + mascot */}
            <div className="mt-auto pt-4 flex items-end gap-1.5 sm:gap-2">

                <div className="bg-slate-50 border border-slate-200 rounded-lg sm:rounded-[0.5rem] p-2.5 sm:p-3 text-[11px] sm:text-xs text-slate-600 leading-relaxed flex-1 min-w-0">
                    என் நாட்டில் விலையற்ற திரவும் விட்டு வந்தான்.
                </div>

                <img
                    src={SampleLogo}
                    className="w-10 h-10 sm:w-14 sm:h-14 object-contain shrink-0"
                    alt="Mascot"
                />

            </div>

        </div>
    );
};