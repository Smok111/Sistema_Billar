import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    const pool = new Pool({
      host: 'db.qjtrakwqgklelgojelyc.supabase.co',
      port: 5432,
      user: 'postgres',
      password: 'ERMT5!Dkzt.DD6c',
      database: 'postgres',
      ssl: { rejectUnauthorized: false } // Required for Supabase
    });
    const adapter = new PrismaPg(pool);
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
