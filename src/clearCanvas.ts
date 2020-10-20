const clearCanvas = (context, canvas) => {
  context.clearRect(
    -canvas.width,
    -canvas.height,
    2 * canvas.width,
    2 * canvas.height
  );
};

export { clearCanvas };
