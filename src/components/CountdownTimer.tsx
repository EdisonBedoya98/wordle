import { useEffect, useState } from "react";
import { TIMEINTERVALTOUPDATEWORD } from "../constants/contants";

interface CountdownTimerProps {
  targetDate: string; // Target date in ISOString format
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [countdown, setCountdown] = useState<number>(0);

  useEffect(() => {
    startCountdown();
    const intervalId = setInterval(() => {
      startCountdown();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  const startCountdown = () => {
    const currentTime = new Date().getTime();
    const targetTime =
      new Date(targetDate).getTime() + TIMEINTERVALTOUPDATEWORD;
    const remainingTime = Math.max(0, targetTime - currentTime);
    setCountdown(remainingTime);
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / (1000 * 60));
    const seconds = Math.floor((time / 1000) % 60);

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return <span className="font-bold block mb-8">{formatTime(countdown)}</span>;
}
