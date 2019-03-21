const n = 6;

function staircase(n) {

  const staircase = [];

  for (let i = 0; i < n; i += 1) {
    const c = '#'.repeat(i + 1)
    const sp = ' '.repeat(n - c.length)

    console.log(`${sp}${c}`)
  }

}
staircase(n)