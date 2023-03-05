import { MigrationInterface, QueryRunner } from "typeorm";

export class fixRelationsOnDelete1678027397727 implements MigrationInterface {
    name = 'fixRelationsOnDelete1678027397727'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "building" DROP CONSTRAINT "FK_4057a0105aa9ec09c842d0cca18"`);
        await queryRunner.query(`ALTER TABLE "rent" DROP CONSTRAINT "FK_eb19d37a201c529d65a84985381"`);
        await queryRunner.query(`ALTER TABLE "rent" DROP CONSTRAINT "FK_cbb3aefb902bf092b9c68c163fe"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP CONSTRAINT "FK_86a5b5d8cea75ee95dc339c8928"`);
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "FK_1c54ba1255cd83fcb99fbff0df7"`);
        await queryRunner.query(`ALTER TABLE "building" ADD CONSTRAINT "FK_4057a0105aa9ec09c842d0cca18" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rent" ADD CONSTRAINT "FK_eb19d37a201c529d65a84985381" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rent" ADD CONSTRAINT "FK_cbb3aefb902bf092b9c68c163fe" FOREIGN KEY ("apartmentId") REFERENCES "apartment"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD CONSTRAINT "FK_86a5b5d8cea75ee95dc339c8928" FOREIGN KEY ("rentId") REFERENCES "rent"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "FK_1c54ba1255cd83fcb99fbff0df7" FOREIGN KEY ("rentId") REFERENCES "rent"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "FK_1c54ba1255cd83fcb99fbff0df7"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP CONSTRAINT "FK_86a5b5d8cea75ee95dc339c8928"`);
        await queryRunner.query(`ALTER TABLE "rent" DROP CONSTRAINT "FK_cbb3aefb902bf092b9c68c163fe"`);
        await queryRunner.query(`ALTER TABLE "rent" DROP CONSTRAINT "FK_eb19d37a201c529d65a84985381"`);
        await queryRunner.query(`ALTER TABLE "building" DROP CONSTRAINT "FK_4057a0105aa9ec09c842d0cca18"`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "FK_1c54ba1255cd83fcb99fbff0df7" FOREIGN KEY ("rentId") REFERENCES "rent"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD CONSTRAINT "FK_86a5b5d8cea75ee95dc339c8928" FOREIGN KEY ("rentId") REFERENCES "rent"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rent" ADD CONSTRAINT "FK_cbb3aefb902bf092b9c68c163fe" FOREIGN KEY ("apartmentId") REFERENCES "apartment"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rent" ADD CONSTRAINT "FK_eb19d37a201c529d65a84985381" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "building" ADD CONSTRAINT "FK_4057a0105aa9ec09c842d0cca18" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
