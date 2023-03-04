import { MigrationInterface, QueryRunner } from "typeorm";

export class entityRentWithApartment1677889546593 implements MigrationInterface {
    name = 'entityRentWithApartment1677889546593'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rent" ADD "apartmentId" uuid`);
        await queryRunner.query(`ALTER TABLE "rent" ADD CONSTRAINT "UQ_cbb3aefb902bf092b9c68c163fe" UNIQUE ("apartmentId")`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "rentId" uuid`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD CONSTRAINT "UQ_86a5b5d8cea75ee95dc339c8928" UNIQUE ("rentId")`);
        await queryRunner.query(`ALTER TABLE "rent" ADD CONSTRAINT "FK_cbb3aefb902bf092b9c68c163fe" FOREIGN KEY ("apartmentId") REFERENCES "apartment"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD CONSTRAINT "FK_86a5b5d8cea75ee95dc339c8928" FOREIGN KEY ("rentId") REFERENCES "rent"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "apartment" DROP CONSTRAINT "FK_86a5b5d8cea75ee95dc339c8928"`);
        await queryRunner.query(`ALTER TABLE "rent" DROP CONSTRAINT "FK_cbb3aefb902bf092b9c68c163fe"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP CONSTRAINT "UQ_86a5b5d8cea75ee95dc339c8928"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "rentId"`);
        await queryRunner.query(`ALTER TABLE "rent" DROP CONSTRAINT "UQ_cbb3aefb902bf092b9c68c163fe"`);
        await queryRunner.query(`ALTER TABLE "rent" DROP COLUMN "apartmentId"`);
    }

}
