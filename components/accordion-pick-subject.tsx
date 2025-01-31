import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FolderClosed } from 'lucide-react';
import Link from 'next/link';


export default function AccordionPickSubject() {
  return (
    <Accordion type="single" collapsible className="w-full bg-[#F9FAFB] rounded-[16px] bg-opacity-10">
      <AccordionItem value="item-1" className='bg-opacity-10'>
        <AccordionTrigger size="md">Физика 9 класс</AccordionTrigger>
        <AccordionContent>
          <div className='flex flex-row items-center gap-3'>
            <div className='w-[40px] h-[40px] bg-[#00D2A0] flex items-center rounded-xl'>
              <FolderClosed className='mx-auto text-black' />
            </div>
            <p className='text-[16px]'>
              <Link href="/page3">
                Механика
              </Link>
            </p>
          </div>
        </AccordionContent>
        <AccordionContent>
          <div className='flex flex-row items-center gap-3'>
            <div className='w-[40px] h-[40px] bg-[#00D2A0] flex items-center rounded-xl'>
              <FolderClosed className='mx-auto text-black' />
            </div>
            <p className='text-[16px]'>
              <Link href="/page3">
                Термодинамика
              </Link>
            </p>
          </div>
        </AccordionContent>
        <AccordionContent>
          <div className='flex flex-row items-center gap-3'>
            <div className='w-[40px] h-[40px] bg-[#00D2A0] flex items-center rounded-xl'>
              <FolderClosed className='mx-auto text-black' />
            </div>
            <p className='text-[16px]'>
              Электричество и магнетизм
            </p>
          </div>
        </AccordionContent>
        <AccordionContent>
          <div className='flex flex-row items-center gap-3'>
            <div className='w-[40px] h-[40px] bg-[#00D2A0] flex items-center rounded-xl'>
              <FolderClosed className='mx-auto text-black' />
            </div>
            <p className='text-[16px]'>
              Оптика
            </p>
          </div>
        </AccordionContent>
        <AccordionContent>
          <div className='flex flex-row items-center gap-3'>
            <div className='w-[40px] h-[40px] bg-[#00D2A0] flex items-center rounded-xl'>
              <FolderClosed className='mx-auto text-black' />
            </div>
            <p className='text-[16px]'>
              Квантовая физика
            </p>
          </div>
        </AccordionContent>
        <AccordionContent>
          <div className='flex flex-row items-center gap-3'>
            <div className='w-[40px] h-[40px] bg-[#00D2A0] flex items-center rounded-xl'>
              <FolderClosed className='mx-auto text-black' />
            </div>
            <p className='text-[16px]'>
              Атомная физика
            </p>
          </div>
        </AccordionContent>
        <AccordionContent>
          <div className='flex flex-row items-center gap-3'>
            <div className='w-[40px] h-[40px] bg-[#00D2A0] flex items-center rounded-xl'>
              <FolderClosed className='mx-auto text-black' />
            </div>
            <p className='text-[16px]'>
              Элементы астрофизики
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
