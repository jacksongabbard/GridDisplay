(() => {
  let tickCount = 0;

  function tick() {
    console.log("Tick " + tickCount);

    for (let x = 0; x < 20; x++) {
      for (let y = 0; y < 20; y++) {
        if (tickCount % 2) {
          window.setPixel(x, y, "green");
        } else {
          window.setPixel(x, y, "orange");
        }
      }
    }
    tickCount++;
  }

  setInterval(tick, 1000);
})();
