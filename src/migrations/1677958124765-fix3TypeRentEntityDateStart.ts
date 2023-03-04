import { MigrationInterface, QueryRunner } from "typeorm";

export class fix3TypeRentEntityDateStart1677958124765 implements MigrationInterface {
    name = 'fix3TypeRentEntityDateStart1677958124765'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rent" DROP COLUMN "date_start_rent"`);
        await queryRunner.query(`ALTER TABLE "rent" ADD "date_start_rent" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rent" DROP COLUMN "date_start_rent"`);
        await queryRunner.query(`ALTER TABLE "rent" ADD "date_start_rent" TIMESTAMP NOT NULL`);
    }

}
