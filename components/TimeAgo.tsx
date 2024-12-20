"use client";
import { useEffect, useState } from "react";

import { timeAgo } from "@/helpers/timeAgo";
import { LoaderCircle } from "lucide-react";

export function TimeAgo({ time }: { time: string }) {
  const [localTime, setLocalTime] = useState<string | null>(null);

  useEffect(() => {
    setLocalTime(timeAgo(time));
  }, [time]); // Add 'time' as a dependency here

  return (
    <div className="h-6">
      {!localTime ? (
        <LoaderCircle className="size-5 animate-spin text-teal-500" />
      ) : (
        localTime
      )}
    </div>
  );
}


