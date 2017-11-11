export function registerCanvas(canvas: HTMLCanvasElement) {
  console.log('[engine] canvas registered', canvas);

  const context = canvas.getContext('2d');

  if (context === null) {
    console.error('canvas has no 2d rendering context available.');
    return;
  }

  context.fillStyle = 'red';
  context.fillRect(0, 0, 1200, 1200);
}
