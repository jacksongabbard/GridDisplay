(() => {
  const BUG_WARNING = "This is probably a bug in your code.";

  function checkNumber(num) {
    if (Number(num) !== num) {
      throw new Error(`Value of ${num} isn't a valid number.`);
    }

    if (Number(num) !== num) {
      throw new Error(`Value of ${num} isn't a valid number.`);
    }

    if (!Number.isInteger(num)) {
      throw new Error(`Value of ${num} must be an integer.`);
    }

    if (num < 0) {
      throw new Error(`Value of ${num} must be greater than zero.`);
    }

    if (num > 20) {
      throw new Error(`Value of ${num} must be less than 20.`);
    }
  }

  function checkBounds(x, y) {
    let xError, yError;
    try {
      checkNumber(x);
    } catch (e) {
      xError = e.message;
    }

    try {
      checkNumber(x);
    } catch (e) {
      yError = e.message;
    }

    if (xError && yError) {
      throw new Error(
        "Your coordinates (${x}, ${y}) are invalid:\n" +
          "\t" +
          xError +
          "\n" +
          "\t" +
          yError +
          "\n" +
          BUG_WARNING
      );
    }

    if (xError) {
      throw new Error(
        "Your X coordinate in (${x}, ${y}) is invalid:\n" +
          "\t" +
          xError +
          "\n" +
          BUG_WARNING
      );
    }

    if (yError) {
      throw new Error(
        "Your Y coordinate in (${x}, ${y}) is invalid:\n" +
          "\t" +
          yError +
          "\n" +
          BUG_WARNING
      );
    }
  }

  window.findPixel = function findPixel(x, y) {
    checkBounds(x, y);
    const cell = document.getElementById(`pixel-${x}x${y}`);
    if (!cell) {
      throw new Error(
        `Could not find pixel at (${x}, ${y}). Are the x and y correct?`
      );
    }
    return cell;
  };

  window.setPixel = function setPixel(x, y, color) {
    const cell = window.findPixel(x, y);
    cell.style.background = color;
  };

  window.getPixel = function getPixel(x, y) {
    const cell = window.findPixel(x, y);
    return cell.style.background;
  };

  function makePixel(x, y) {
    const div = document.createElement("div");
    div.className = "pixel";
    div.style.left = x * 4 + "vmin";
    div.style.top = y * 4 + "vmin";
    div.id = `pixel-${x}x${y}`;
    return div;
  }

  function setup() {
    const frag = document.createDocumentFragment();
    for (let x = 0; x < 20; x++) {
      for (let y = 0; y < 20; y++) {
        frag.appendChild(makePixel(x, y));
      }
    }
    document.getElementById("display").appendChild(frag);
  }

  setup();
})();
