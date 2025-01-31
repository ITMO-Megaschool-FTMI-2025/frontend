"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CloudUpload, CheckCircle, Loader2, ArrowUpIcon } from "lucide-react"
import type React from "react"
import { Button } from "./ui/button"
import Link from "next/link"

export default function DocumentUpload() {
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [isUploaded, setIsUploaded] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [fileSize, setFileSize] = useState(0)
  const { toast } = useToast()

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    setIsUploading(true)
    simulateUpload()
  }

  const simulateUpload = () => {
    setUploadProgress(0)
    setFileSize(0)
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          setIsUploaded(true)
          toast({
            title: "Документ загружен",
            description: "Ваш документ был успешно загружен.",
            duration: 3000,
          })
          return 100
        }
        return prevProgress + 2 // Около 5 сек
      })
    }, 100)
  }

  useEffect(() => {
    setFileSize(Math.round(uploadProgress * 0.42)) // 42 MB * progress percentage
  }, [uploadProgress])

  const handleCardDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", "dummy-data")
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="space-y-3">
      <div className="flex justify-center items-center h-full mt-10">
      <Image src="/avatar.svg" alt="аватар" width={70} height={70} />
      <h2 className="text-lg text-center ml-4">Иванова Екатерина</h2>
      </div>
      <div className="text-2xl  text-center pt-5 pb-5">Загрузить новый материал</div>
        <div>
          <Label htmlFor="category" className="">Категория</Label>
          <Input id="category" type="text" placeholder="Учебники" className="bg-transparent text-white placeholder-white placeholder-opacity-100 border border-white" />
        </div>
        <div className="pb-10">
          <Label htmlFor="description">Описание</Label>
          <Input id="description" type="text" placeholder="Учебник по физике для 9 класса" className="bg-transparent text-white placeholder-white placeholder-opacity-100 border border-white" />
        </div>

        <div
          className={`border-[2px] border-dashed mt-7 rounded-[20] p-8 text-center bg-[#CDD0D5] bg-opacity-10 cursor-pointer transition-colors ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
            }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center">
            <CloudUpload className="w-12 h-12 mb-2 text-gray-400" />
            <p className="text-sm font-bold mb-1">Перетащите или выберите документы для загрузки</p>
            <p className="text-[12px]">JPEG, PNG, PDF и MP4 форматы, до 50 МБ</p>
          </div>
        </div>
      </div>

      <div className="mx-auto flex flex-col text-[#00D2A0] items-center w-full my-3" >
        <ArrowUpIcon />
        <p className="text-[18px]">Зажмите (2 сек) и перетащите</p>
      </div>

      <div className="w-full">
        <Card
          className="border border-gray-300 w-full rounded-[16] p-4 cursor-move"
          draggable="true"
          onDragStart={handleCardDragStart}
        >
          <div className="flex items-center space-x-4">
            <Image src="/placeholder.svg" alt="Учебник.pdf" width={40} height={40} className="my-auto" />
            <div className="flex-grow">
              <p className="font-semibold">Физика_9_учебник.pdf</p>
              <div className="flex flex-row w-full items-center">
                <p className="text-sm text-gray-500">{isUploading ? `${fileSize} / 42` : "42"} MB</p>
                {isUploaded && <CheckCircle className="w-6 h-6 mx-2 text-green-500" />}
                {isUploading && <Loader2 className="w-6 h-6 mx-2 animate-spin text-blue-500" />}
                {(isUploading || isUploaded) && (
                  <p className="text-sm text-gray-500 ml-2">{isUploading ? "Загрузка..." : "Загружено"}</p>
                )}
              </div>
            </div>
          </div>
          {isUploading && (
            <Progress value={uploadProgress} className="w-full" />
          )}
        </Card>
      </div>
      {isUploaded && (
        <div className="w-full mt-8">
          <Link href="/page2">
            <Button className="bg-[#00D2A0] w-full text-black">
              Продолжить
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}

