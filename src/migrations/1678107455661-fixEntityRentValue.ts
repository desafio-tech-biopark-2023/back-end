import { MigrationInterface, QueryRunner } from "typeorm";

export class fixEntityRentValue1678107455661 implements MigrationInterface {
    name = 'fixEntityRentValue1678107455661'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "apartment" ADD "value_rent" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "value_rent"`);
    }

}
