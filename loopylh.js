  for (let x = 100; x < 201; x++) {
    if (0 === x % 3 && 0 === x % 4) {
      console.log("LoopyLightHouse")
    } else if (0 === x % 3) {
      console.log("Loopy")
    } else if (0 === x % 4) {
      console.log("Lighthouse")
    }
    else
      console.log(x)
  }

