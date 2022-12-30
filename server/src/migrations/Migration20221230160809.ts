import { Migration } from '@mikro-orm/migrations';

export class Migration20221230160809 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "person" ("id" serial primary key, "first_name" varchar(255) not null, "last_name" varchar(255) not null);');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "person" cascade;');
  }

}
