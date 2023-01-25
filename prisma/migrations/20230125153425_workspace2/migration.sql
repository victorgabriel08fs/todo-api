-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_workspaces" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "priority" TEXT NOT NULL DEFAULT 'normal',
    "icon" TEXT NOT NULL DEFAULT 'normal',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "userId" TEXT,
    CONSTRAINT "workspaces_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_workspaces" ("created_at", "id", "name", "priority", "updated_at", "userId") SELECT "created_at", "id", "name", "priority", "updated_at", "userId" FROM "workspaces";
DROP TABLE "workspaces";
ALTER TABLE "new_workspaces" RENAME TO "workspaces";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
