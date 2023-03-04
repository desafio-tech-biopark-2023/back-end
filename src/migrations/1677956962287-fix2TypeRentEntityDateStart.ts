import { MigrationInterface, QueryRunner } from "typeorm";

export class fix2TypeRentEntityDateStart1677956962287 implements MigrationInterface {
    name = 'fix2TypeRentEntityDateStart1677956962287'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rent" ALTER COLUMN "date_start_rent" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rent" ALTER COLUMN "date_start_rent" DROP DEFAULT`);
    }

}
