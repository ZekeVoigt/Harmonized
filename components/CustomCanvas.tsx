// CustomCanvas.tsx
import React, { useRef, useState } from "react";
import { ReactSketchCanvas, type ReactSketchCanvasRef } from "react-sketch-canvas";

export const CustomCanvas = () => {
  const canvasRef = useRef<ReactSketchCanvasRef>(null);
  const [eraseMode, setEraseMode] = useState(false);
  const [strokeWidth, setStrokeWidth] = useState(5);
  const [eraserWidth, setEraserWidth] = useState(10);

  // Handler functions remain the same
  // (handleEraserClick, handlePenClick, handleUndoClick, etc.)

  return (
    <div className="d-flex flex-column gap-2 p-2">
      <h1>Tools</h1>
      <div className="d-flex gap-2 align-items-center">
        <button
          type="button"
          className="btn btn-sm btn-outline-primary"
          disabled={!eraseMode}
          onClick={() => {
            setEraseMode(false);
            canvasRef.current?.eraseMode(false);
          }}
        >
          Pen
        </button>
        <button
          type="button"
          className="btn btn-sm btn-outline-primary"
          disabled={eraseMode}
          onClick={() => {
            setEraseMode(true);
            canvasRef.current?.eraseMode(true);
          }}
        >
          Eraser
        </button>
        <label htmlFor="strokeWidth" className="form-label">
          Stroke width
        </label>
        <input
          disabled={eraseMode}
          type="range"
          className="form-range"
          min="1"
          max="20"
          step="1"
          id="strokeWidth"
          value={strokeWidth}
          onChange={(event) => setStrokeWidth(+event.target.value)}
        />
        <label htmlFor="eraserWidth" className="form-label">
          Eraser width
        </label>
        <input
          disabled={!eraseMode}
          type="range"
          className="form-range"
          min="1"
          max="20"
          step="1"
          id="eraserWidth"
          value={eraserWidth}
          onChange={(event) => setEraserWidth(+event.target.value)}
        />
        <div className="vr" />
        <button
          type="button"
          className="btn btn-sm btn-outline-primary"
          onClick={() => canvasRef.current?.undo()}
        >
          Undo
        </button>
        <button
          type="button"
          className="btn btn-sm btn-outline-primary"
          onClick={() => canvasRef.current?.redo()}
        >
          Redo
        </button>
        <button
          type="button"
          className="btn btn-sm btn-outline-primary"
          onClick={() => canvasRef.current?.clearCanvas()}
        >
          Clear
        </button>
        <button
          type="button"
          className="btn btn-sm btn-outline-primary"
          onClick={() => canvasRef.current?.resetCanvas()}
        >
          Reset
        </button>
      </div>
      <h1>Canvas</h1>
      <ReactSketchCanvas
        ref={canvasRef}
        strokeWidth={strokeWidth}
        eraserWidth={eraserWidth}
      />
    </div>
  );
};

// Block spec
export const CustomCanvasBlock = {
  type: "customCanvas",
  content: "",
  Component: CustomCanvas,
};
