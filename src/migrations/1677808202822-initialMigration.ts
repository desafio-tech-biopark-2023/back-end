import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1677808202822 implements MigrationInterface {
    name = 'initialMigration1677808202822'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "public_place" character varying NOT NULL, "number" character varying NOT NULL, "zip_code" character varying NOT NULL, "complement" character varying NOT NULL, "district" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "country" character varying NOT NULL, "personId" uuid, CONSTRAINT "REL_e3d0b5ba0387be88105ad7683b" UNIQUE ("personId"), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "building" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "type" character varying NOT NULL, "floors" character varying NOT NULL, "logo" character varying NOT NULL, "apartments_per_floor" character varying NOT NULL, "apartments_available" character varying NOT NULL, "personId" uuid, CONSTRAINT "UQ_57655499fbc0671a32732e63008" UNIQUE ("name"), CONSTRAINT "PK_bbfaf6c11f141a22d2ab105ee5f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "apartment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying NOT NULL, "monthly_rent_value" character varying NOT NULL, "floor" character varying NOT NULL, "number" character varying NOT NULL, "dorms" character varying NOT NULL, "suites" character varying NOT NULL, "bathrooms" character varying NOT NULL, "vacancies" character varying NOT NULL, "total_area" character varying NOT NULL, "private_area" character varying NOT NULL, "available" character varying NOT NULL, "visible" character varying NOT NULL, "personId" uuid, "buildingId" uuid, CONSTRAINT "PK_c3d874d9924f6f16223162b3d3a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "legal_person" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cnpj" character varying NOT NULL, "fantasy_name" character varying NOT NULL, "registration" character varying NOT NULL, "incorporation_date" character varying NOT NULL, "regime_type" character varying NOT NULL, "personId" uuid, CONSTRAINT "UQ_47e97d1eef3662d4f4f7be246b2" UNIQUE ("cnpj"), CONSTRAINT "REL_59615a32273b2cf7d56a5c7e93" UNIQUE ("personId"), CONSTRAINT "PK_f74fd434bd5c87419aedfd683b7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "natural_person" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "rg" character varying NOT NULL, "cpf" character varying NOT NULL, "birth_date" character varying NOT NULL, "gender" character varying NOT NULL, "ethnicity" character varying NOT NULL, "occupation" character varying NOT NULL, "income" character varying NOT NULL, "marital_status" character varying NOT NULL, "nationality" character varying NOT NULL, "personId" uuid, CONSTRAINT "UQ_fcf10207cd468135185188d624f" UNIQUE ("rg"), CONSTRAINT "UQ_2c88b0b6375eb3a0c180c5b94bd" UNIQUE ("cpf"), CONSTRAINT "REL_2218f10f17b2f92f1532e69072" UNIQUE ("personId"), CONSTRAINT "PK_56362bce1c439832eb92e3d4e11" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "person" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "telephone" character varying NOT NULL, "naturalPerson" boolean NOT NULL, "legalPerson" boolean NOT NULL, "type" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "naturalPersonId" uuid, "legalPersonId" uuid, "addressId" uuid, CONSTRAINT "UQ_d2d717efd90709ebd3cb26b936c" UNIQUE ("email"), CONSTRAINT "REL_6351f00d4e99eeca2320747a54" UNIQUE ("naturalPersonId"), CONSTRAINT "REL_355f5bbf3e5203c7ffe6efd053" UNIQUE ("legalPersonId"), CONSTRAINT "REL_a793ed25458ce9bc1584889cb1" UNIQUE ("addressId"), CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_e3d0b5ba0387be88105ad7683bb" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "building" ADD CONSTRAINT "FK_4057a0105aa9ec09c842d0cca18" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD CONSTRAINT "FK_9c5ae32406f1cf1ab5b11702fa9" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD CONSTRAINT "FK_8a47e407bd9b13b59ec42662b0f" FOREIGN KEY ("buildingId") REFERENCES "building"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "legal_person" ADD CONSTRAINT "FK_59615a32273b2cf7d56a5c7e93b" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "natural_person" ADD CONSTRAINT "FK_2218f10f17b2f92f1532e690720" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "FK_6351f00d4e99eeca2320747a549" FOREIGN KEY ("naturalPersonId") REFERENCES "natural_person"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "FK_355f5bbf3e5203c7ffe6efd0533" FOREIGN KEY ("legalPersonId") REFERENCES "legal_person"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "FK_a793ed25458ce9bc1584889cb13" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "FK_a793ed25458ce9bc1584889cb13"`);
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "FK_355f5bbf3e5203c7ffe6efd0533"`);
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "FK_6351f00d4e99eeca2320747a549"`);
        await queryRunner.query(`ALTER TABLE "natural_person" DROP CONSTRAINT "FK_2218f10f17b2f92f1532e690720"`);
        await queryRunner.query(`ALTER TABLE "legal_person" DROP CONSTRAINT "FK_59615a32273b2cf7d56a5c7e93b"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP CONSTRAINT "FK_8a47e407bd9b13b59ec42662b0f"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP CONSTRAINT "FK_9c5ae32406f1cf1ab5b11702fa9"`);
        await queryRunner.query(`ALTER TABLE "building" DROP CONSTRAINT "FK_4057a0105aa9ec09c842d0cca18"`);
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_e3d0b5ba0387be88105ad7683bb"`);
        await queryRunner.query(`DROP TABLE "person"`);
        await queryRunner.query(`DROP TABLE "natural_person"`);
        await queryRunner.query(`DROP TABLE "legal_person"`);
        await queryRunner.query(`DROP TABLE "apartment"`);
        await queryRunner.query(`DROP TABLE "building"`);
        await queryRunner.query(`DROP TABLE "address"`);
    }

}
