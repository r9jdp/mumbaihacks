-- CreateEnum
CREATE TYPE "financial_goals" AS ENUM ('Growth', 'Income', 'Balanced');

-- CreateEnum
CREATE TYPE "investment_preferences" AS ENUM ('Stocks', 'Bonds', 'Cryptocurrencies', 'Mutual Funds', 'Real Estate Investment Trusts (REITs)');

-- CreateEnum
CREATE TYPE "investment_time_horizon" AS ENUM ('Short-term', 'Medium-term', 'Long-term');

-- CreateEnum
CREATE TYPE "market_sentiment_sensitivity" AS ENUM ('Not at all', 'Somewhat', 'Strongly');

-- CreateEnum
CREATE TYPE "preferred_sectors" AS ENUM ('Technology', 'Healthcare', 'Energy', 'Finance', 'Consumer Goods', 'Other');

-- CreateEnum
CREATE TYPE "risk_tolerance" AS ENUM ('Conservative', 'Moderate', 'Aggressive');

-- CreateTable
CREATE TABLE "assets" (
    "sr_no" SERIAL NOT NULL,
    "userid" TEXT NOT NULL,
    "account_details" INTEGER DEFAULT 0,
    "stocks" INTEGER DEFAULT 0,
    "bonds" INTEGER DEFAULT 0,
    "mutual_funds" INTEGER DEFAULT 0,
    "real_estate" INTEGER DEFAULT 0,
    "jewellery" INTEGER DEFAULT 0,
    "crypto" INTEGER DEFAULT 0,
    "automobiles" INTEGER DEFAULT 0,

    CONSTRAINT "assets_pkey" PRIMARY KEY ("sr_no")
);

-- CreateTable
CREATE TABLE "family_members" (
    "sr_no" SERIAL NOT NULL,
    "userid" TEXT NOT NULL,
    "family_member_liability" DOUBLE PRECISION,
    "family_member_asset" DOUBLE PRECISION,

    CONSTRAINT "family_members_pkey" PRIMARY KEY ("sr_no")
);

-- CreateTable
CREATE TABLE "futuregoals" (
    "sr_no" SERIAL NOT NULL,
    "userid" TEXT NOT NULL,
    "risk_tolerance" "risk_tolerance",
    "financial_goals" "financial_goals",
    "investment_preferences" "investment_preferences"[],
    "investment_time_horizon" "investment_time_horizon",
    "preferred_sectors" "preferred_sectors"[],
    "initial_investment" DECIMAL,
    "regular_investment" DECIMAL,
    "market_sentiment_sensitivity" "market_sentiment_sensitivity",
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "anything_else" VARCHAR(500),

    CONSTRAINT "futuregoals_pkey" PRIMARY KEY ("sr_no")
);

-- CreateTable
CREATE TABLE "liabilities" (
    "sr_no" SERIAL NOT NULL,
    "userid" TEXT NOT NULL,
    "home_loan" INTEGER DEFAULT 0,
    "car_loan" INTEGER DEFAULT 0,
    "student_loan" INTEGER DEFAULT 0,
    "personal_loan" INTEGER DEFAULT 0,
    "payable_bills" INTEGER DEFAULT 0,
    "credit_card_debt" INTEGER DEFAULT 0,
    "payable_taxes" INTEGER DEFAULT 0,

    CONSTRAINT "liabilities_pkey" PRIMARY KEY ("sr_no")
);

-- CreateTable
CREATE TABLE "other_assets" (
    "sr_no" SERIAL NOT NULL,
    "userid" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(500),

    CONSTRAINT "other_assets_pkey" PRIMARY KEY ("sr_no")
);

-- CreateTable
CREATE TABLE "other_liabilities" (
    "sr_no" SERIAL NOT NULL,
    "userid" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(500),

    CONSTRAINT "other_liabilities_pkey" PRIMARY KEY ("sr_no")
);

-- CreateTable
CREATE TABLE "users" (
    "userid" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "age" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("userid")
);

-- AddForeignKey
ALTER TABLE "assets" ADD CONSTRAINT "assets_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("userid") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "family_members" ADD CONSTRAINT "family_members_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("userid") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "futuregoals" ADD CONSTRAINT "futuregoals_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("userid") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "liabilities" ADD CONSTRAINT "liabilities_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("userid") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "other_assets" ADD CONSTRAINT "other_assets_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("userid") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "other_liabilities" ADD CONSTRAINT "other_liabilities_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("userid") ON DELETE CASCADE ON UPDATE NO ACTION;
