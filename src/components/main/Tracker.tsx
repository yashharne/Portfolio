"use client";

import { useEffect, useState } from "react";

export default function VisitorTracker() {
    const [stats, setStats] = useState<{
        totalHits: number;
        uniqueVisitors: number;
    } | null>(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch("/api/track");
                const data = await res.json();
                setStats(data);
            } catch (e) {
                console.error("Failed to fetch visitor stats:", e);
            }
        };

        fetchStats();
    }, []);

    return (
        <div className='fixed bottom-4 right-4 text-center text-xs md:text-sm lg:text-base bg-[#3d2470] bg-opacity-30 font-medium rounded-lg p-4 shadow-lg border border-[#2A0E61] transition-transform duration-300 hover:scale-105'>
            {stats ? (
                <>
                    <p>Total Visits: {stats.totalHits}</p>
                    <p>Unique Visitors: {stats.uniqueVisitors}</p>
                </>
            ) : (
                <p>Loading visit stats…</p>
            )}
        </div>
    );
}
