"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Profile = {
  id: string;
  name: string;
  age: number;
  bio: string;
  image: string;
};

export default function TinderCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<string | null>(null);

  const profiles: Profile[] = [
    {
      id: "1",
      name: "Alex",
      age: 28,
      bio: "Coffee enthusiast. Hiking on weekends.",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "2",
      name: "Jordan",
      age: 26,
      bio: "Foodie and travel lover. Always up for an adventure!",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "3",
      name: "Taylor",
      age: 29,
      bio: "Musician and book lover. Let's talk about your favorite band.",
      image: "/placeholder.svg?height=400&width=300",
    },
  ];

  const handleSwipe = (dir: string) => {
    setDirection(dir);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setDirection(null);
    }, 300);
  };

  if (currentIndex >= profiles.length) {
    return (
      <div className="flex flex-col items-center justify-center h-[500px] w-full max-w-sm mx-auto">
        <h2 className="text-2xl font-bold mb-4">No more profiles</h2>
        <Button onClick={() => setCurrentIndex(0)}>Start Over</Button>
      </div>
    );
  }

  const profile = profiles[currentIndex];

  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto">
      <div className="relative w-full h-[500px]">
        <AnimatePresence>
          {!direction && (
            <motion.div
              key={profile.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{
                x:
                  direction === "right" ? 200 : direction === "left" ? -200 : 0,
                opacity: 0,
                scale: 0.8,
              }}
              transition={{ duration: 0.3 }}
              className="absolute w-full h-full"
            >
              <Card className="w-full h-full overflow-hidden">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
                  <img
                    src={profile.image || "/placeholder.svg"}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 p-4 text-white z-20">
                    <h2 className="text-2xl font-bold">
                      {profile.name}, {profile.age}
                    </h2>
                    <p className="text-sm opacity-90">{profile.bio}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <CardContent className="flex justify-center gap-4 p-4 w-full">
        <Button
          variant="outline"
          size="icon"
          className="h-14 w-14 rounded-full border-2 border-red-500 text-red-500 hover:bg-red-100 hover:text-red-600"
          onClick={() => handleSwipe("left")}
        >
          <X className="h-8 w-8" />
          <span className="sr-only">Reject</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-14 w-14 rounded-full border-2 border-green-500 text-green-500 hover:bg-green-100 hover:text-green-600"
          onClick={() => handleSwipe("right")}
        >
          <Check className="h-8 w-8" />
          <span className="sr-only">Accept</span>
        </Button>
      </CardContent>
    </div>
  );
}
