import { MigrationInterface, QueryRunner } from "typeorm";

export class fixNullableRg1677900202430 implements MigrationInterface {
    name = 'fixNullableRg1677900202430'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "natural_person" DROP CONSTRAINT "UQ_fcf10207cd468135185188d624f"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "natural_person" ADD CONSTRAINT "UQ_fcf10207cd468135185188d624f" UNIQUE ("rg")`);
    }

}
