"use client";

import { useEffect, useState } from "react";

type CountdownProps = {
    targetDate: string; // Örn: "2025-08-30T00:00:00"
};

export default function Countdown({ targetDate }: CountdownProps) {
    const [timeLeft, setTimeLeft] = useState<{
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    } | null>(null);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date(targetDate).getTime() - new Date().getTime();
            if (difference <= 0) return null;

            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        };

        setTimeLeft(calculateTimeLeft()); // İlk hesaplama

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (!timeLeft) {
        return <p className="text-lg mt-4">Yayındayız!</p>;
    }

    return (
        <div className="flex gap-4 text-center my-6 animate-fade-in delay-200">
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                    <span className="text-3xl font-bold">{String(value).padStart(2, "0")}</span>
                    <span className="text-xs uppercase">{unit}</span>
                </div>
            ))}
        </div>
    );
}