-- Track character display names over time for rename history.
CREATE TABLE "CharacterNameSnapshot" (
    "id" SERIAL NOT NULL,
    "characterId" TEXT NOT NULL,
    "serverId" INTEGER NOT NULL,
    "characterName" TEXT NOT NULL,
    "serverName" TEXT,
    "race" INTEGER,
    "className" TEXT,
    "level" INTEGER,
    "firstSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSeenAt" TIMESTAMP(3) NOT NULL,
    "seenCount" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "CharacterNameSnapshot_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "CharacterNameSnapshot_characterId_serverId_characterName_key" ON "CharacterNameSnapshot"("characterId", "serverId", "characterName");
CREATE INDEX "CharacterNameSnapshot_characterId_serverId_idx" ON "CharacterNameSnapshot"("characterId", "serverId");
CREATE INDEX "CharacterNameSnapshot_characterName_idx" ON "CharacterNameSnapshot"("characterName");
CREATE INDEX "CharacterNameSnapshot_lastSeenAt_idx" ON "CharacterNameSnapshot"("lastSeenAt");
