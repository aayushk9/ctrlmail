-- CreateTable
CREATE TABLE "public"."UserWaitlist" (
    "id" SERIAL NOT NULL,
    "mail" TEXT NOT NULL,

    CONSTRAINT "UserWaitlist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserWaitlist_mail_key" ON "public"."UserWaitlist"("mail");
