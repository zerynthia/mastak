export const getContext = (): CanvasRenderingContext2D => {
  const canvas = document.querySelector("#canvas-layout") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  return ctx;
};
