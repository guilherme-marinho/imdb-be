-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL,
    "imdbID" TEXT NOT NULL,
    "starred" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Movie_imdbID_key" ON "Movie"("imdbID");
