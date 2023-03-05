import { getContext } from "./getContext";

export const clearContext = () => {
  const ctx = getContext();
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};
