"use client"

import { useState } from "react"

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="w-full bg-black rounded-lg overflow-hidden">
      <div className="relative w-full pt-[56.25%]">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0"
          title="VEX V5 Robotics Competition - Full Broadcast"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
