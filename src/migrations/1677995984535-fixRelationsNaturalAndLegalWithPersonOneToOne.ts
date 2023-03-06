import { MigrationInterface, QueryRunner } from "typeorm";

export class fixRelationsNaturalAndLegalWithPersonOneToOne1677995984535 implements MigrationInterface {
    name = 'fixRelationsNaturalAndLegalWithPersonOneToOne1677995984535'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "legal_person" DROP CONSTRAINT "FK_59615a32273b2cf7d56a5c7e93b"`);
        await queryRunner.query(`ALTER TABLE "legal_person" ADD CONSTRAINT "UQ_59615a32273b2cf7d56a5c7e93b" UNIQUE ("personId")`);
        await queryRunner.query(`ALTER TABLE "natural_person" DROP CONSTRAINT "FK_2218f10f17b2f92f1532e690720"`);
        await queryRunner.query(`ALTER TABLE "natural_person" ADD CONSTRAINT "UQ_2218f10f17b2f92f1532e690720" UNIQUE ("personId")`);
        await queryRunner.query(`ALTER TABLE "legal_person" ADD CONSTRAINT "FK_59615a32273b2cf7d56a5c7e93b" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "natural_person" ADD CONSTRAINT "FK_2218f10f17b2f92f1532e690720" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "natural_person" DROP CONSTRAINT "FK_2218f10f17b2f92f1532e690720"`);
        await queryRunner.query(`ALTER TABLE "legal_person" DROP CONSTRAINT "FK_59615a32273b2cf7d56a5c7e93b"`);
        await queryRunner.query(`ALTER TABLE "natural_person" DROP CONSTRAINT "UQ_2218f10f17b2f92f1532e690720"`);
        await queryRunner.query(`ALTER TABLE "natural_person" ADD CONSTRAINT "FK_2218f10f17b2f92f1532e690720" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "legal_person" DROP CONSTRAINT "UQ_59615a32273b2cf7d56a5c7e93b"`);
        await queryRunner.query(`ALTER TABLE "legal_person" ADD CONSTRAINT "FK_59615a32273b2cf7d56a5c7e93b" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
