def isNice(input: str) -> bool:
    pairRepeat: bool = False
    validTriplet: bool = False

    start = 0
    end = 2
    while end < len(input):
        currPair: str = input[start:end]
        if currPair in input[end:]:
            pairRepeat = True
            break
        start += 1
        end += 1

    start = 0
    end = 3
    while end <= len(input):
        currTriplet: str = input[start:end]
        if currTriplet[0] == currTriplet[2]:
            validTriplet = True
            break
        start += 1
        end += 1

    return pairRepeat and validTriplet


sum = 0

with open("./input.txt", "r") as f:
    for line in f:
        if isNice(line.strip()):
            sum += 1

print(sum)
