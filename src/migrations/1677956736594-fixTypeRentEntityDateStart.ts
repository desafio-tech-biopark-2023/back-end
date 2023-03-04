import { MigrationInterface, QueryRunner } from "typeorm";

export class fixTypeRentEntityDateStart1677956736594 implements MigrationInterface {
    name = 'fixTypeRentEntityDateStart1677956736594'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rent" DROP COLUMN "date_end_rent"`);
        await queryRunner.query(`ALTER TABLE "rent" ADD "date_end_rent" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rent" DROP COLUMN "date_end_rent"`);
        await queryRunner.query(`ALTER TABLE "rent" ADD "date_end_rent" TIMESTAMP NOT NULL`);
    }

}
