import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Page1() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-4">
      <p>Контент 3 страницы</p>
      <Link href="/page1">
        <Button className="bg-[#00D2A0] w-full text-black">
          Начать сначала
        </Button>
      </Link>
    </div>
  )
}

