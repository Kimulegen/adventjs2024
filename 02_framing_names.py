def createFrame(names):
    longestNameN = max(map(lambda n: len(n), names))

    frameParts = []
    frameParts.append("*"*(longestNameN+4))
    for name in names:
        frameParts.append(f"* {name}{" "*(longestNameN - len(name))} *")
    frameParts.append("*"*(longestNameN+4))

    return "\n".join(frameParts)