const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
const dotenv = require('dotenv');

dotenv.config();

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Iniciando Seeder...');

  // 1. Roles
  const adminRol = await prisma.roles.upsert({
    where: { NomRol: 'Administrador' },
    update: {},
    create: { NomRol: 'Administrador', DesRol: 'Acceso total al sistema' },
  });

  const cajeroRol = await prisma.roles.upsert({
    where: { NomRol: 'Cajero' },
    update: {},
    create: { NomRol: 'Cajero', DesRol: 'Gestiona mesas y cobros' },
  });

  // 1.5 Clientes
  const clienteGeneral = await prisma.clientes.upsert({
    where: { IdCliente: 1 },
    update: {},
    create: {
      IdCliente: 1,
      Nombre: 'Cliente General',
      Telefono: '000000000',
      FechaRegistro: new Date()
    }
  });

  // 2. Usuarios
  const adminUser = await prisma.usuarios.upsert({
    where: { Correo: 'admin@billar.com' },
    update: {},
    create: {
      NomUsuario: 'Luis',
      ApeUsuario: 'Herrera',
      Correo: 'admin@billar.com',
      Password: 'admin', // Plain text based on auth.service.ts
      IdRol: adminRol.IdRol,
    },
  });

  // 3. CategoriasProductos
  const catBebidas = await prisma.categoriasProductos.create({
    data: { Nombre: 'Bebidas' }
  });
  
  const catSnacks = await prisma.categoriasProductos.create({
    data: { Nombre: 'Snacks' }
  });

  // 4. Productos
  await prisma.productos.createMany({
    data: [
      { Nombre: 'Coca Cola 500ml', Precio: 4.50, IdCategoria: catBebidas.IdCategoria },
      { Nombre: 'Cerveza Pilsen', Precio: 8.00, IdCategoria: catBebidas.IdCategoria },
      { Nombre: 'Papas Lays', Precio: 3.50, IdCategoria: catSnacks.IdCategoria },
      { Nombre: 'Galletas Oreo', Precio: 2.00, IdCategoria: catSnacks.IdCategoria },
    ]
  });

  // 5. Mesas
  await prisma.mesas.createMany({
    data: [
      { NumeroMesa: 1, Estado: 'Disponible' },
      { NumeroMesa: 2, Estado: 'Disponible' },
      { NumeroMesa: 3, Estado: 'Ocupada' },
      { NumeroMesa: 4, Estado: 'Disponible' },
      { NumeroMesa: 5, Estado: 'Reservada' },
    ]
  });

  console.log('Seeder ejecutado con éxito.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
