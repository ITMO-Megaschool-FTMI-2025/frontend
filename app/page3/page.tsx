"use client";
import { Button } from "@/components/ui/button";
import BottomSheet from "@/components/bottom-sheet";
import Link from "next/link";
import AccordionPickTopic from "@/components/accordion-pick-topic";
import Image from "next/image";

import { useState } from "react";

export default function Page3() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlanVisible, setPlanVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const togglePlanVisibility = () => {
    setPlanVisible(!isPlanVisible);
  };

  return (
    <div className="min-h-screen w-full flex flex-col gap-4 p-2">
      <div className="flex justify-center items-center h-full mt-10 ">
        <Image src="/avatar.svg" alt="аватар" width={70} height={70} />
        <h2 className="text-lg text-center ml-4">Иванова Екатерина</h2>
      </div>
      <div className="text-2xl text-center pt-8 pb-5">
        Мои учебники | Физика | Темы
      </div>
      <div className="w-full bg-[#F9FAFB] rounded-[16px] bg-opacity-10 text-lg text-center pt-5 pb-5">
        Электричество и магнетизм
      </div>
      <AccordionPickTopic />


      <div className="flex flex-col items-start gap-3">
        <Button
          onClick={togglePlanVisibility}
          className="bg-[#00D2A0] text-black text-md w-auto border-2 border-white"
        >
          Подготовить план занятия
        </Button>
        <Button
          onClick={toggleVisibility}
          className="bg-[#00D2A0] text-black text-md  w-auto border-2 border-white"
        >
          Подготовить домашнее задание
        </Button>

        {isPlanVisible && (
          <div className="w-full flex flex-col items-start bg-[#F9FAFB] rounded-[16px] bg-opacity-10 text-lg text-center p-4 border-2 border-neutral-300 mt-4">
            <div className="flex w-full justify-between ">
              <p className="text-[#00D2A0] text-lg">План урока</p>
              <Image src="/ready.svg" alt="готово" width={70} height={70} />
            </div>
            <Button className="bg-[#34413D] text-black text-md text-white w-auto self-start mt-5  rounded-[40px] border-2 border-neutral-300 py-2 cursor-pointer">
              <Image src="/analytics.svg" alt="план" width={20} height={20} />
              <p>Посмотреть</p>
            </Button>
          </div>
        )}

        {isVisible && (
          <div className="w-full flex flex-col items-start bg-[#F9FAFB] rounded-[16px] bg-opacity-10 text-lg text-center p-4 border-2 border-neutral-300 mt-4">
            <div className="flex w-full justify-between ">
              <p className="text-[#00D2A0] text-lg">Домашнее задание</p>
              <Image src="/ready.svg" alt="готово" width={70} height={70} />
            </div>
            <BottomSheet />
          </div>
        )}

        <Link href="/page1" className=" w-full flex justify-center mt-10">
          <Button className="bg-[#00D2A0] text-black text-md w-[80%] border-2 border-white py-2">
            <Image src="/renew.svg" alt="заново" width={15} height={15} />
            <p>Начать заново</p>
          </Button>
        </Link>
      </div>
    </div>
  );
}
