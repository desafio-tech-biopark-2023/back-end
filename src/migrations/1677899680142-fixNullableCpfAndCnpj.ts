import { MigrationInterface, QueryRunner } from "typeorm";

export class fixNullableCpfAndCnpj1677899680142 implements MigrationInterface {
    name = 'fixNullableCpfAndCnpj1677899680142'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "legal_person" DROP CONSTRAINT "UQ_47e97d1eef3662d4f4f7be246b2"`);
        await queryRunner.query(`ALTER TABLE "natural_person" DROP CONSTRAINT "UQ_2c88b0b6375eb3a0c180c5b94bd"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "natural_person" ADD CONSTRAINT "UQ_2c88b0b6375eb3a0c180c5b94bd" UNIQUE ("cpf")`);
        await queryRunner.query(`ALTER TABLE "legal_person" ADD CONSTRAINT "UQ_47e97d1eef3662d4f4f7be246b2" UNIQUE ("cnpj")`);
    }

}
