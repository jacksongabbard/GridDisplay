(() => {
  let globalTickCount = 0;

  function tick() {
    console.log("Tick " + globalTickCount);

    let localTickCount = 0;
    outerLoop: for (let x = 0; x < 20; x++) {
      for (let y = 0; y < 20; y++) {
        window.setPixel(x, y, "green");
        localTickCount++;
        if (localTickCount > globalTickCount) {
          // Set the newest pixel to a light green so
          // that there's a sort of fade transition
          window.setPixel(x, y, "lightgreen");
          break outerLoop;
        }
      }
    }
    globalTickCount++;
  }

  setInterval(tick, 1000 / 30);
})();
