import { MigrationInterface, QueryRunner } from "typeorm";

export class fixRelationsNaturalAndLegalWithPerson1677895193537 implements MigrationInterface {
    name = 'fixRelationsNaturalAndLegalWithPerson1677895193537'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "FK_6351f00d4e99eeca2320747a549"`);
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "FK_355f5bbf3e5203c7ffe6efd0533"`);
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "REL_6351f00d4e99eeca2320747a54"`);
        await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "naturalPersonId"`);
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "REL_355f5bbf3e5203c7ffe6efd053"`);
        await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "legalPersonId"`);
        await queryRunner.query(`ALTER TABLE "legal_person" DROP CONSTRAINT "FK_59615a32273b2cf7d56a5c7e93b"`);
        await queryRunner.query(`ALTER TABLE "legal_person" DROP CONSTRAINT "REL_59615a32273b2cf7d56a5c7e93"`);
        await queryRunner.query(`ALTER TABLE "natural_person" DROP CONSTRAINT "FK_2218f10f17b2f92f1532e690720"`);
        await queryRunner.query(`ALTER TABLE "natural_person" DROP CONSTRAINT "REL_2218f10f17b2f92f1532e69072"`);
        await queryRunner.query(`ALTER TABLE "legal_person" ADD CONSTRAINT "FK_59615a32273b2cf7d56a5c7e93b" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "natural_person" ADD CONSTRAINT "FK_2218f10f17b2f92f1532e690720" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "natural_person" DROP CONSTRAINT "FK_2218f10f17b2f92f1532e690720"`);
        await queryRunner.query(`ALTER TABLE "legal_person" DROP CONSTRAINT "FK_59615a32273b2cf7d56a5c7e93b"`);
        await queryRunner.query(`ALTER TABLE "natural_person" ADD CONSTRAINT "REL_2218f10f17b2f92f1532e69072" UNIQUE ("personId")`);
        await queryRunner.query(`ALTER TABLE "natural_person" ADD CONSTRAINT "FK_2218f10f17b2f92f1532e690720" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "legal_person" ADD CONSTRAINT "REL_59615a32273b2cf7d56a5c7e93" UNIQUE ("personId")`);
        await queryRunner.query(`ALTER TABLE "legal_person" ADD CONSTRAINT "FK_59615a32273b2cf7d56a5c7e93b" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "person" ADD "legalPersonId" uuid`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "REL_355f5bbf3e5203c7ffe6efd053" UNIQUE ("legalPersonId")`);
        await queryRunner.query(`ALTER TABLE "person" ADD "naturalPersonId" uuid`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "REL_6351f00d4e99eeca2320747a54" UNIQUE ("naturalPersonId")`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "FK_355f5bbf3e5203c7ffe6efd0533" FOREIGN KEY ("legalPersonId") REFERENCES "legal_person"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "FK_6351f00d4e99eeca2320747a549" FOREIGN KEY ("naturalPersonId") REFERENCES "natural_person"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
