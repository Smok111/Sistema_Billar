import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly CategoriasProductos: "CategoriasProductos";
    readonly Clientes: "Clientes";
    readonly ConsumoDetalles: "ConsumoDetalles";
    readonly Consumos: "Consumos";
    readonly Mesas: "Mesas";
    readonly Productos: "Productos";
    readonly Reservas: "Reservas";
    readonly Roles: "Roles";
    readonly Usuarios: "Usuarios";
    readonly EFMigrationsHistory: "EFMigrationsHistory";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const CategoriasProductosScalarFieldEnum: {
    readonly IdCategoria: "IdCategoria";
    readonly Nombre: "Nombre";
};
export type CategoriasProductosScalarFieldEnum = (typeof CategoriasProductosScalarFieldEnum)[keyof typeof CategoriasProductosScalarFieldEnum];
export declare const ClientesScalarFieldEnum: {
    readonly IdCliente: "IdCliente";
    readonly Nombre: "Nombre";
    readonly Telefono: "Telefono";
    readonly Email: "Email";
    readonly Direccion: "Direccion";
    readonly FechaRegistro: "FechaRegistro";
};
export type ClientesScalarFieldEnum = (typeof ClientesScalarFieldEnum)[keyof typeof ClientesScalarFieldEnum];
export declare const ConsumoDetallesScalarFieldEnum: {
    readonly IdDetalle: "IdDetalle";
    readonly IdConsumo: "IdConsumo";
    readonly IdProducto: "IdProducto";
    readonly Cantidad: "Cantidad";
    readonly PrecioUnitario: "PrecioUnitario";
    readonly FechaRegistro: "FechaRegistro";
};
export type ConsumoDetallesScalarFieldEnum = (typeof ConsumoDetallesScalarFieldEnum)[keyof typeof ConsumoDetallesScalarFieldEnum];
export declare const ConsumosScalarFieldEnum: {
    readonly IdConsumo: "IdConsumo";
    readonly IdMesa: "IdMesa";
    readonly IdCliente: "IdCliente";
    readonly FechaInicio: "FechaInicio";
    readonly FechaFin: "FechaFin";
    readonly Estado: "Estado";
    readonly IdUsuario: "IdUsuario";
    readonly TipoCobro: "TipoCobro";
    readonly PrecioHora: "PrecioHora";
    readonly PrecioMediaHora: "PrecioMediaHora";
    readonly PrecioLibrePorMinuto: "PrecioLibrePorMinuto";
    readonly MinutosJugados: "MinutosJugados";
    readonly CostoMesa: "CostoMesa";
    readonly TotalProductos: "TotalProductos";
    readonly Total: "Total";
};
export type ConsumosScalarFieldEnum = (typeof ConsumosScalarFieldEnum)[keyof typeof ConsumosScalarFieldEnum];
export declare const MesasScalarFieldEnum: {
    readonly IdMesa: "IdMesa";
    readonly NumeroMesa: "NumeroMesa";
    readonly Estado: "Estado";
};
export type MesasScalarFieldEnum = (typeof MesasScalarFieldEnum)[keyof typeof MesasScalarFieldEnum];
export declare const ProductosScalarFieldEnum: {
    readonly IdProducto: "IdProducto";
    readonly Nombre: "Nombre";
    readonly Precio: "Precio";
    readonly IdCategoria: "IdCategoria";
    readonly ImagenUrl: "ImagenUrl";
};
export type ProductosScalarFieldEnum = (typeof ProductosScalarFieldEnum)[keyof typeof ProductosScalarFieldEnum];
export declare const ReservasScalarFieldEnum: {
    readonly IdReserva: "IdReserva";
    readonly FechaReserva: "FechaReserva";
    readonly HoraInicio: "HoraInicio";
    readonly HoraFin: "HoraFin";
    readonly FechaHoraInicioJuego: "FechaHoraInicioJuego";
    readonly FechaHoraFinJuego: "FechaHoraFinJuego";
    readonly IdMesa: "IdMesa";
    readonly IdCliente: "IdCliente";
    readonly Estado: "Estado";
    readonly Observaciones: "Observaciones";
    readonly NumeroPersonas: "NumeroPersonas";
};
export type ReservasScalarFieldEnum = (typeof ReservasScalarFieldEnum)[keyof typeof ReservasScalarFieldEnum];
export declare const RolesScalarFieldEnum: {
    readonly IdRol: "IdRol";
    readonly NomRol: "NomRol";
    readonly DesRol: "DesRol";
};
export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum];
export declare const UsuariosScalarFieldEnum: {
    readonly IdUsuario: "IdUsuario";
    readonly NomUsuario: "NomUsuario";
    readonly ApeUsuario: "ApeUsuario";
    readonly Correo: "Correo";
    readonly Password: "Password";
    readonly IdRol: "IdRol";
};
export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum];
export declare const EFMigrationsHistoryScalarFieldEnum: {
    readonly MigrationId: "MigrationId";
    readonly ProductVersion: "ProductVersion";
};
export type EFMigrationsHistoryScalarFieldEnum = (typeof EFMigrationsHistoryScalarFieldEnum)[keyof typeof EFMigrationsHistoryScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
