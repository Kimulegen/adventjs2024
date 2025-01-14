function createXmasTree(height: number, ornament: string): string {
    let tree: string[] = []
    for (let i = 1; i <= height; i++) {
        tree.push('_'.repeat(height - i) + ornament.repeat(2 * i - 1) + "_".repeat(height - i))
    }
    tree.push("_".repeat(height - 1) + "#" + "_".repeat(height - 1))
    tree.push("_".repeat(height - 1) + "#" + "_".repeat(height - 1))
    return tree.join("\n")
}
