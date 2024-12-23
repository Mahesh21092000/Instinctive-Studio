-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "student_name" TEXT NOT NULL,
    "cohort" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "date_joined" TIMESTAMP(3) NOT NULL,
    "last_login" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);
