"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fullTime = new Intl.DateTimeFormat("pt-BR", {
    timeStyle: "medium",
    hour12: false,
  }).format(currentTime);

  const hour = currentTime.getHours();
  let greeting = "";
  let expr = "";

  if (hour >= 0 && hour < 12) {
    greeting = "Good Morning 🌥️";
    expr = "🤠";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Good Afternoon 🌞";
    expr = "😎";
  } else if (hour >= 18 && hour < 19) {
    greeting = "Good Evening 🌒";
    expr = "😬";
  } else if (hour >= 19 && hour < 24) {
    greeting = "Good Night 🌙";
    expr = "😴";
  }

  return (
    <main>
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 text-white">
        <div className="mb-2 text-5xl font-bold md:mb-5 md:text-7xl">
          {isClient ? fullTime : "--:--:--"}
        </div>
        {isClient && (
          <>
            <div className="text-xl md:text-2xl">Greetings, Bruno! {expr}</div>
            <div className="text-lg md:text-lg">{greeting}</div>
          </>
        )}
      </div>
    </main>
  );
}
