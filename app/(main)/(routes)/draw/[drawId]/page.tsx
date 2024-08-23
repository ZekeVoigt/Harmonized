"use client";

import { ReactSketchCanvas, type ReactSketchCanvasRef } from "react-sketch-canvas";
import { useRef, useState } from "react";

export default function App() {
  const canvasRef = useRef<ReactSketchCanvasRef>(null);
  const [isEraseMode, setIsEraseMode] = useState(false);

  const toggleEraseMode = (erase: boolean) => {
    setIsEraseMode(erase);
    canvasRef.current?.eraseMode(erase);
  };

  const handleUndo = () => canvasRef.current?.undo();
  const handleRedo = () => canvasRef.current?.redo();
  const handleClear = () => canvasRef.current?.clearCanvas();
  const handleReset = () => canvasRef.current?.resetCanvas();

  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg shadow-lg bg-white dark:bg-[#1f1f1f]">
    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Tools</h1>
    <div className="flex gap-4 items-center">
      <button
        type="button"
        className={`px-4 py-2 rounded-lg ${
          !isEraseMode
            ? ' text-black'
            : 'bg-black '
        }`}
        onClick={() => toggleEraseMode(false)}
        disabled={!isEraseMode}
      >
        Pen
      </button>
      <button
        type="button"
        className={`px-4 py-2 rounded-lg ${
          isEraseMode
            ? 'bg-blue-600 text-white'
            : 'bg-white dark:bg-[#1f1f1f] border border-blue-600 text-blue-600'
        }`}
        onClick={() => toggleEraseMode(true)}
        disabled={isEraseMode}
      >
        Eraser
      </button>
      <div className="h-8 border-l border-gray-300 dark:border-gray-600" />
      <button
        type="button"
        className="px-4 py-2 bg-white dark:bg-[#1f1f1f] border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
        onClick={handleUndo}
      >
        Undo
      </button>
      <button
        type="button"
        className="px-4 py-2 bg-white dark:bg-[#1f1f1f] border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
        onClick={handleRedo}
      >
        Redo
      </button>
      <button
        type="button"
        className="px-4 py-2 bg-white dark:bg-[#1f1f1f] border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
        onClick={handleClear}
      >
        Clear
      </button>
      <button
        type="button"
        className="px-4 py-2 bg-white dark:bg-[#1f1f1f] border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Canvas</h1>
    <ReactSketchCanvas
      ref={canvasRef}
      className="rounded-lg shadow-sm border border-gray-300 dark:border-gray-600"
      style={{ 
        height: '600px', 
        backgroundColor: 'white', // Default for light mode
      }}
    />
  </div>
  
  );
}
