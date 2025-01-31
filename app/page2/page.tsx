import AccordionPickSubject from "@/components/accordion-pick-subject";
import Image from "next/image";

export default function Page2() {
  return (
    <div className="min-h-screen w-full">
      {/* <div className="container"> */}
        <div className="flex justify-center items-center h-full mt-10">
          <Image src="/avatar.svg" alt="аватар" width={70} height={70} />
          <h2 className="text-lg text-center ml-4">Иванова Екатерина</h2>
        </div>
        <div className="text-2xl  text-center pt-8 pb-5">
          Мои учебники | Физика
        </div>
        <AccordionPickSubject />
      {/* </div> */}
    </div>
  );
}