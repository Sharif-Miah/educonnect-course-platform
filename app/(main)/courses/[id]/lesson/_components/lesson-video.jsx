"use client";

import ReactPlayer from "react-player/youtube";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PlayCircle, Loader2 } from "lucide-react";

export const LessonVideo = ({ courseId, lesson, module }) => {
  const [hasWindow, setHasWindow] = useState(false);
  const [started, setStarted] = useState(false);
  const [ended, setEnded] = useState(false);
  const [duration, setDuration] = useState(0);

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  useEffect(() => {
    async function updateLessonWatch() {
      try {
        const response = await fetch("/api/lesson-watch", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            courseId: courseId,
            lessonId: lesson.id,
            moduleSlug: module,
            state: "started",
            lastTime: 0,
          }),
        });

        if (response.status === 200) {
          setStarted(false);
        }
      } catch (e) {
        console.error(e);
      }
    }
    if (started && lesson?.id) {
      updateLessonWatch();
    }
  }, [started, courseId, lesson?.id, module]);

  useEffect(() => {
    async function updateLessonWatch() {
      try {
        const response = await fetch("/api/lesson-watch", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            courseId: courseId,
            lessonId: lesson.id,
            moduleSlug: module,
            state: "completed",
            lastTime: duration,
          }),
        });

        if (response.status === 200) {
          setEnded(false);
          router.refresh();
        }
      } catch (e) {
        console.error(e);
      }
    }
    if (ended && lesson?.id) {
      updateLessonWatch();
    }
  }, [ended, courseId, lesson?.id, module, duration, router]);

  function handleOnStart() {
    setStarted(true);
  }

  function handleOnEnded() {
    setEnded(true);
  }

  function handleOnDuration(durationSec) {
    setDuration(durationSec);
  }

  const videoUrl = lesson?.video_url || "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  return (
    <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden rounded-2xl sm:rounded-3xl">
      {hasWindow ? (
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="100%"
          controls={true}
          playing={false}
          onStart={handleOnStart}
          onDuration={handleOnDuration}
          onEnded={handleOnEnded}
          config={{
            youtube: {
              playerVars: { showinfo: 1, autoplay: 0 },
            },
          }}
        />
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 text-slate-400">
          <Loader2 className="w-8 h-8 animate-spin text-[#4A3AFF]" />
          <span className="text-xs font-semibold">Loading Classroom Player...</span>
        </div>
      )}
    </div>
  );
};