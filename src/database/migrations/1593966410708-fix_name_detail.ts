import {MigrationInterface, QueryRunner} from "typeorm";

export class fixNameDetail1593966410708 implements MigrationInterface {
    name = 'fixNameDetail1593966410708'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_details" ALTER COLUMN "name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_details" ALTER COLUMN "created_at" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_details" ALTER COLUMN "updated_at" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_details" ALTER COLUMN "updated_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_details" ALTER COLUMN "created_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_details" ALTER COLUMN "name" SET NOT NULL`);
    }

}
