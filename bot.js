let input = process.argv[2]
let extractInput = input.match(/[a-z]{1}|[^a-z]+/gi)
let getStr = (i) => extractInput[i].toLowerCase()
let directions = [{ key: 'North', x: 0, y: 1 }, { key: 'East', x: 1, y: 0 }, { key: 'South', x: 0, y: -1 }, { key: 'West', x: -1, y: 0 }]

let i = 0
let directionPos = 0
let current = { x: 0, y: 0 }

while (i < extractInput.length) {
  switch (getStr(i)) {
    case 'w':
      let step = parseInt(getStr(++i))
      current.x += directions[directionPos].x * step
      current.y += directions[directionPos].y * step
      break
    case 'r':
      directionPos = Math.abs(++directionPos % 3)
      break
    case 'l':
      directionPos = Math.abs(--directionPos % 3)
      break
  }
  i++
}
console.log(`X: ${current.x} Y: ${current.y} Direction: ${directions[directionPos].key}`)
