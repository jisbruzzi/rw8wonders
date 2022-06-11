-- CreateTable
CREATE TABLE "Card" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "colorId" INTEGER NOT NULL,
    "unlocksUnlockIconId" INTEGER,
    "unlockedByUnlockIconId" INTEGER,
    CONSTRAINT "Card_unlocksUnlockIconId_fkey" FOREIGN KEY ("unlocksUnlockIconId") REFERENCES "UnlockIcon" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Card_unlockedByUnlockIconId_fkey" FOREIGN KEY ("unlockedByUnlockIconId") REFERENCES "UnlockIcon" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Card_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "Color" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UnlockIcon" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Color" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CardEffectMap" (
    "cardId" INTEGER NOT NULL,
    "effectId" INTEGER NOT NULL,

    PRIMARY KEY ("cardId", "effectId"),
    CONSTRAINT "CardEffectMap_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CardEffectMap_effectId_fkey" FOREIGN KEY ("effectId") REFERENCES "Effect" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Effect" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateTable
CREATE TABLE "Unit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ProductionEffect" (
    "effectId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "unitId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "ProductionEffect_effectId_fkey" FOREIGN KEY ("effectId") REFERENCES "Effect" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProductionEffect_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProduceOneOfEffect" (
    "effectId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "unitId" INTEGER NOT NULL,
    CONSTRAINT "ProduceOneOfEffect_effectId_fkey" FOREIGN KEY ("effectId") REFERENCES "Effect" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProduceOneOfEffect_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TradeOneEffect" (
    "effectId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    CONSTRAINT "TradeOneEffect_effectId_fkey" FOREIGN KEY ("effectId") REFERENCES "Effect" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UnitTradeOneEffectMap" (
    "tradeOneEffectEffectId" INTEGER NOT NULL,
    "unitId" INTEGER NOT NULL,

    PRIMARY KEY ("tradeOneEffectEffectId", "unitId"),
    CONSTRAINT "UnitTradeOneEffectMap_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UnitTradeOneEffectMap_tradeOneEffectEffectId_fkey" FOREIGN KEY ("tradeOneEffectEffectId") REFERENCES "TradeOneEffect" ("effectId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ComplexEffect" (
    "effectId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "coinsNow" INTEGER NOT NULL,
    "victoryPointsLater" INTEGER NOT NULL,
    "over" TEXT NOT NULL,
    "selectorExtra" TEXT,
    CONSTRAINT "ComplexEffect_effectId_fkey" FOREIGN KEY ("effectId") REFERENCES "Effect" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ComplexEffectColorMap" (
    "complexEffectEffectId" INTEGER NOT NULL,
    "colorId" INTEGER NOT NULL,

    PRIMARY KEY ("complexEffectEffectId", "colorId"),
    CONSTRAINT "ComplexEffectColorMap_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "Color" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ComplexEffectColorMap_complexEffectEffectId_fkey" FOREIGN KEY ("complexEffectEffectId") REFERENCES "ComplexEffect" ("effectId") ON DELETE RESTRICT ON UPDATE CASCADE
);
