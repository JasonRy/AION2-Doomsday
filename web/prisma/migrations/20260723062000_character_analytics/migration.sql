-- Character query analytics and historical snapshots.
CREATE TABLE "CharacterQueryLog" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "characterId" TEXT NOT NULL,
    "characterName" TEXT NOT NULL,
    "serverId" INTEGER,
    "serverName" TEXT,
    "race" INTEGER,
    "className" TEXT,
    "level" INTEGER,
    "combatPower" INTEGER,
    "itemLevel" INTEGER,
    "snapshotType" TEXT,
    "querySource" TEXT NOT NULL,
    "queryKeyword" TEXT,
    "clientIpHash" TEXT,
    "userAgentHash" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CharacterQueryLog_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "CharacterSnapshot" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "characterId" TEXT NOT NULL,
    "characterName" TEXT NOT NULL,
    "serverId" INTEGER,
    "serverName" TEXT,
    "race" INTEGER,
    "className" TEXT,
    "level" INTEGER,
    "combatPower" INTEGER,
    "itemLevel" INTEGER,
    "snapshotType" TEXT,
    "profileJson" JSONB,
    "equipmentJson" JSONB,
    "analysisJson" JSONB,
    "detailJson" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CharacterSnapshot_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "CharacterQueryLog_characterId_serverId_idx" ON "CharacterQueryLog"("characterId", "serverId");
CREATE INDEX "CharacterQueryLog_querySource_idx" ON "CharacterQueryLog"("querySource");
CREATE INDEX "CharacterQueryLog_createdAt_idx" ON "CharacterQueryLog"("createdAt");

CREATE INDEX "CharacterSnapshot_characterId_serverId_idx" ON "CharacterSnapshot"("characterId", "serverId");
CREATE INDEX "CharacterSnapshot_snapshotType_idx" ON "CharacterSnapshot"("snapshotType");
CREATE INDEX "CharacterSnapshot_createdAt_idx" ON "CharacterSnapshot"("createdAt");

ALTER TABLE "CharacterQueryLog" ADD CONSTRAINT "CharacterQueryLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "CharacterSnapshot" ADD CONSTRAINT "CharacterSnapshot_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
