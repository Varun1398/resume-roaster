import os
import json
metaFile = "meta/roastMeta.json"

async def saveRoastMeta(roastMeta):
    print(f"roastMeta: {roastMeta}")
    if not os.path.exists(metaFile):
        with open(metaFile, "w") as jsonBuffer:
            json.dump([], jsonBuffer)
    with open(metaFile, "r") as jsonBuffer:
        try:
            data = json.load(jsonBuffer)
        except json.JSONDecodeError:
            data = []
    data.insert(0, roastMeta)
    data = data[:6]
    with open(metaFile, "w") as jsonBuffer:
        json.dump(data, jsonBuffer, indent=2)

async def getRoastMeta():
    if not os.path.exists(metaFile):
        return []
    with open(metaFile, "r") as readJson:
        return json.load(readJson)