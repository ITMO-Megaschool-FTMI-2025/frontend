'use client';

import { useState } from 'react';

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isNewLesson, setNewLesson] = useState(false);
  const [isNewHomeTask, setNewHomeTask] = useState(false);

  return (
    <div className="flex flex-col items-center min-h-screen h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-4 mt-2 flex flex-col flex-grow">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-lg font-bold">Моя база знаний</h1>
            <div className="w-full max-w-md text-gray-500 text-sm">8 классы физика</div>
          </div>
          <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
        </div>

        <div className="w-full max-w-md text-gray-500 text-sm">Выбранная тема</div>
        <div className="relative w-full mt-1 bg-gray-300 rounded-lg">Теплопроводность</div>

        <div className="bg-gray-300 mt-4 rounded-lg p-4 cursor-pointer" onClick={() => setIsCollapsed(!isCollapsed)}>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Мои материалы по теме</span>
            <span>{isCollapsed ? '<' : '>'}</span>
          </div>
          {isCollapsed && (
            <div className="mt-2 text-gray-600">
              <p>Учебники<br/>Лекции<br/>Самостоятельные работы<br/>Контрольные работы</p>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 mt-4">
          {[ 
            { text: 'Подготовить план занятия', onClick: () => setNewLesson(true) },
            { text: 'Подготовить домашнее задание по теме', onClick: () => setNewHomeTask(true) },
            { text: 'Отсканировать домашнее задание' },
            { text: 'Результаты проверки дз' }
          ].map(({ text, onClick }, index) => (
            <button 
              key={index} 
              onClick={onClick} 
              className="bg-gray-300 py-2 px-4 rounded-md w-fit">
              {text}
            </button>
          ))}
        </div>

        {isNewLesson && <div className="bg-green-300 mt-4 rounded-lg p-4 cursor-pointer">План занятия</div>}
        {isNewHomeTask && <div className="bg-green-300 mt-4 rounded-lg p-4 cursor-pointer">Домашнее задание к уроку</div>}
      </div>
    </div>
  );
}