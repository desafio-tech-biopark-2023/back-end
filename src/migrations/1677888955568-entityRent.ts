import { MigrationInterface, QueryRunner } from "typeorm";

export class entityRent1677888955568 implements MigrationInterface {
    name = 'entityRent1677888955568'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "rent" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "monthly_rent_value" character varying NOT NULL, "date_start_rent" TIMESTAMP NOT NULL, "date_end_rent" TIMESTAMP NOT NULL, "personId" uuid, CONSTRAINT "REL_eb19d37a201c529d65a8498538" UNIQUE ("personId"), CONSTRAINT "PK_211f726fd8264e82ff7a2b86ce2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "monthly_rent_value"`);
        await queryRunner.query(`ALTER TABLE "person" ADD "rentId" uuid`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "UQ_1c54ba1255cd83fcb99fbff0df7" UNIQUE ("rentId")`);
        await queryRunner.query(`ALTER TABLE "rent" ADD CONSTRAINT "FK_eb19d37a201c529d65a84985381" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "FK_1c54ba1255cd83fcb99fbff0df7" FOREIGN KEY ("rentId") REFERENCES "rent"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "FK_1c54ba1255cd83fcb99fbff0df7"`);
        await queryRunner.query(`ALTER TABLE "rent" DROP CONSTRAINT "FK_eb19d37a201c529d65a84985381"`);
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "UQ_1c54ba1255cd83fcb99fbff0df7"`);
        await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "rentId"`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "monthly_rent_value" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "rent"`);
    }

}
