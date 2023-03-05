import { randomNumber } from './random/randomNumber';
import { getRandomColor } from './random/getRandomColor';

interface ICircleParams {
  x: number;
  y: number;
  radius: number;
  bgColor: string;
}

const Circle = (
  context: CanvasRenderingContext2D,
  defaultParams?: ICircleParams
) => {
  const circleParams = {
    x: defaultParams?.x ?? 100,
    y: defaultParams?.y ?? 100,
    radius: defaultParams?.radius ?? 10,
    bgColor: defaultParams?.bgColor ?? '#424242',
    id: 0,
  };

  const draw = () => {
    const { x, y, radius, bgColor } = circleParams;

    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fillStyle = bgColor;
    context.fill();
    context.closePath();
  };

  const getRandomParams = (hasTransparentBg = true) => {
    const x = randomNumber(30, context.canvas.width - 30);
    const y = randomNumber(30, context.canvas.height - 30);
    const radius = randomNumber(3, 30);
    const bgColor = getRandomColor(hasTransparentBg);

    return {
      x,
      y,
      radius,
      bgColor,
    };
  };

  const changePosition = ({ x, y }: { x: number; y: number }) => {
    circleParams.x =
      x > context.canvas.width ? 0 : x < 0 ? context.canvas.width : x;
    circleParams.y =
      y > context.canvas.height ? 0 : y < 0 ? context.canvas.height : y;
  };

  const createRandom = ({
    hasTransparent = false,
    hasRandomColorBg = true,
    hasRandomRadius = true,
  }) => {
    const { x, y, radius, bgColor } = getRandomParams(hasTransparent);

    changePosition({ x, y });
    circleParams.radius = hasRandomRadius ? radius : circleParams.radius;
    circleParams.bgColor = hasRandomColorBg ? bgColor : circleParams.bgColor;

    draw();
  };

  const move = () => {
    circleParams.id = setInterval(() => {
      const x = circleParams.x + randomNumber(-18, 18);
      const y = circleParams.y + randomNumber(-18, 18);

      changePosition({ x, y });
      draw();
    }, 50);

    return circleParams.id
  };

  return { createRandom, move };
};

export default Circle;
