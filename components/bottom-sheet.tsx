"use client"

import type React from "react"
import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FolderClosed } from "lucide-react"
import dynamic from "next/dynamic"

const Confetti = dynamic(() => import("react-confetti"), { ssr: false })

interface Item {
  id: number
  name: string
  isChosen: boolean
}

const BottomSheet: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [items, setItems] = useState<Item[]>(
    Array.from({ length: 20 }, (_, index) => ({
      id: index,
      name: `Физика 9${index + 1}A`,
      isChosen: false,
    })),
  )
  const [showConfetti, setShowConfetti] = useState(false)

  const openSheet = () => setIsOpen(true)
  const closeSheet = () => setIsOpen(false)

  const toggleChosen = useCallback((id: number) => {
    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, isChosen: !item.isChosen } : item)))
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000) // Hide confetti after 3 seconds
  }, [])

  return (
    <div className="relative h-screen">
      <Button onClick={openSheet}>Назначить</Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSheet}
            />
            <motion.div
              className="fixed bottom-0 left-0 right-0 bg-[#101214] rounded-t-2xl shadow-lg"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              drag="y"
              dragConstraints={{ top: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.y > 100) {
                  closeSheet()
                }
              }}
            >
              <div className="p-4 h-[80vh] overflow-y-auto w-full">
                <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6" />
                <h2 className="text-[17px] mx-auto font-bold mb-4 text-white">Назначить</h2>
                <div className="w-full flex flex-col space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex flex-row justify-between items-center">
                      <div className="flex flex-row gap-3 items-center">
                        <div className="w-[40px] h-[40px] bg-[#00D2A0] flex items-center rounded-xl">
                          <FolderClosed className="mx-auto text-black" />
                        </div>
                        <p className="text-white">{item.name}</p>
                      </div>
                      <Button onClick={() => toggleChosen(item.id)}>
                        {item.isChosen ? "Выбрано" : "Назначить"}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} numberOfPieces={200} />
      )}
    </div>
  )
}

export default BottomSheet
