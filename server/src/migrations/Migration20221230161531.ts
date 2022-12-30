import { Migration } from '@mikro-orm/migrations';

export class Migration20221230161531 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "person" alter column "id" type varchar(255) using ("id"::varchar(255));');
    this.addSql('alter table "person" alter column "id" drop default;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "person" alter column "id" type int using ("id"::int);');
    this.addSql('create sequence if not exists "person_id_seq";');
    this.addSql('select setval(\'person_id_seq\', (select max("id") from "person"));');
    this.addSql('alter table "person" alter column "id" set default nextval(\'person_id_seq\');');
  }

}
