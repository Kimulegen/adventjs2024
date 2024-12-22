function createFrame(names: string[]): string {
    const frameChar = '*'
    const longestNameN: number = Math.max(...names.map(n => n.length))
  
    // construct frame
    const frameParts: string[] = []
    frameParts.push('*'.repeat(longestNameN+4));
    for (const name of names) {
        frameParts.push(`* ${name}${" ".repeat(longestNameN-name.length)} *`)
    }
    frameParts.push('*'.repeat(longestNameN+4))
    
    return frameParts.join('\n')
  }