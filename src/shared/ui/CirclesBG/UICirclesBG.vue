<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const MIN_COUNT_CIRCLE = 3;
const MAX_COUNT_CIRCLE = 5;
const MIN_SIZE_CIRCLE = 50;
const MAX_SIZE_CIRCLE = 200;
const SPEED = 0.5;
const COLOR_OPACITY = '.03';

interface Circle {
  x: number;
  y: number;
  radius: number;
  color: string;
  dx: number;
  dy: number;
}

const canvas = ref<HTMLCanvasElement | null>(null);
let circles: Circle[] = [];

const getRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, ${COLOR_OPACITY})`;
}

const createCircle = (): Circle => {
  const radius = getRandomNumber(MIN_SIZE_CIRCLE, MAX_SIZE_CIRCLE);
  const x = Math.random() * (canvas.value!.width - 2 * radius) + radius;
  const y = Math.random() * (canvas.value!.height - 2 * radius) + radius;
  const color = getRandomColor();
  const dx = getRandomNumber(0.1, SPEED);
  const dy = getRandomNumber(0.1, SPEED);

  return { x, y, radius, color, dx, dy };
};

const drawCircle = (ctx: CanvasRenderingContext2D, circle: Circle) => {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
  ctx.fillStyle = circle.color;
  ctx.fill();
};

const animate = () => {
  const ctx = canvas.value!.getContext('2d')!;
  ctx.clearRect(0, 0, canvas.value!.width, canvas.value!.height);

  circles.forEach(circle => {
    drawCircle(ctx, circle);

    if (circle.x + circle.radius > canvas.value!.width || circle.x - circle.radius < 0) {
      circle.dx = -circle.dx;
    }

    if (circle.y + circle.radius > canvas.value!.height || circle.y - circle.radius < 0) {
      circle.dy = -circle.dy;
    }

    circle.x += circle.dx;
    circle.y += circle.dy;
  });

  requestAnimationFrame(animate);
};

const createCircles = () => {
  for (let i = 0; i < Math.floor(getRandomNumber(MIN_COUNT_CIRCLE, MAX_COUNT_CIRCLE)); i++) {
    circles.push(createCircle());
  }
};

const setSizeParams = () => {
  canvas.value!.width = window.innerWidth;
  canvas.value!.height = window.innerHeight;
};

const clearCircles = () => circles = [];

const handleResize = () => {
  setSizeParams();
  clearCircles();
  createCircles();
};

onMounted(() => {
  if (canvas.value) {
    setSizeParams();
    createCircles();
    animate();
    window.addEventListener('resize', handleResize);
  }
});

onBeforeUnmount(() => {
  clearCircles();
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <canvas :class="$style.canvas" ref="canvas" />
</template>

<style lang="scss" module>
.canvas {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: $green_light_2;
}
</style>
