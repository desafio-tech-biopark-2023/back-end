import { MigrationInterface, QueryRunner } from "typeorm";

export class fixRoutesAndRelations1678027045013 implements MigrationInterface {
    name = 'fixRoutesAndRelations1678027045013'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "building" DROP CONSTRAINT "FK_4057a0105aa9ec09c842d0cca18"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP CONSTRAINT "FK_9c5ae32406f1cf1ab5b11702fa9"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP CONSTRAINT "FK_8a47e407bd9b13b59ec42662b0f"`);
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "FK_1c54ba1255cd83fcb99fbff0df7"`);
        await queryRunner.query(`ALTER TABLE "building" ADD CONSTRAINT "FK_4057a0105aa9ec09c842d0cca18" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD CONSTRAINT "FK_9c5ae32406f1cf1ab5b11702fa9" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD CONSTRAINT "FK_8a47e407bd9b13b59ec42662b0f" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "FK_1c54ba1255cd83fcb99fbff0df7" FOREIGN KEY ("rentId") REFERENCES "rent"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "FK_1c54ba1255cd83fcb99fbff0df7"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP CONSTRAINT "FK_8a47e407bd9b13b59ec42662b0f"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP CONSTRAINT "FK_9c5ae32406f1cf1ab5b11702fa9"`);
        await queryRunner.query(`ALTER TABLE "building" DROP CONSTRAINT "FK_4057a0105aa9ec09c842d0cca18"`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "FK_1c54ba1255cd83fcb99fbff0df7" FOREIGN KEY ("rentId") REFERENCES "rent"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD CONSTRAINT "FK_8a47e407bd9b13b59ec42662b0f" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD CONSTRAINT "FK_9c5ae32406f1cf1ab5b11702fa9" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "building" ADD CONSTRAINT "FK_4057a0105aa9ec09c842d0cca18" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
