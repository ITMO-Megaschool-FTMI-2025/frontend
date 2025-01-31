import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export default function AccordionPickTopic() {
    return (
      <Accordion
        type="single"
        collapsible
        className="w-full bg-[#F9FAFB] rounded-[16px] bg-opacity-10"
      >
        <AccordionItem value="item-1" className="bg-opacity-10">
          <AccordionTrigger  className="text-[#00D2A0] text-center " size="lg">Мои материалы по теме</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-row items-center gap-3 border-t border-gray-500">
              <p className="text-[16px] text-neutral-300 cursor-pointer pl-2 pt-2">
                Лекции
              </p>
            </div>
          </AccordionContent>
          <AccordionContent>
          <div className="flex flex-row items-center gap-3">
              <p className="text-[16px] text-neutral-300 cursor-pointer pl-2">
                Самостоятельные работы
              </p>
            </div>
          </AccordionContent>
          <AccordionContent>
          <div className="flex flex-row items-center gap-3">
              <p className="text-[16px] text-neutral-300 cursor-pointer pl-2">
                Проверочные работы
              </p>
            </div>
          </AccordionContent>
          <AccordionContent>
          <div className="flex flex-row items-center gap-3">
              <p className="text-[16px] text-neutral-300 cursor-pointer pl-2">
                Контрольные работы
              </p>
            </div>
          </AccordionContent>
                  </AccordionItem>
      </Accordion>
    );
  }
  