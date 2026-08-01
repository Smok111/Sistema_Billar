"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.EFMigrationsHistoryScalarFieldEnum = exports.UsuariosScalarFieldEnum = exports.RolesScalarFieldEnum = exports.ReservasScalarFieldEnum = exports.ProductosScalarFieldEnum = exports.MesasScalarFieldEnum = exports.ConsumosScalarFieldEnum = exports.ConsumoDetallesScalarFieldEnum = exports.ClientesScalarFieldEnum = exports.CategoriasProductosScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    CategoriasProductos: 'CategoriasProductos',
    Clientes: 'Clientes',
    ConsumoDetalles: 'ConsumoDetalles',
    Consumos: 'Consumos',
    Mesas: 'Mesas',
    Productos: 'Productos',
    Reservas: 'Reservas',
    Roles: 'Roles',
    Usuarios: 'Usuarios',
    EFMigrationsHistory: 'EFMigrationsHistory'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.CategoriasProductosScalarFieldEnum = {
    IdCategoria: 'IdCategoria',
    Nombre: 'Nombre'
};
exports.ClientesScalarFieldEnum = {
    IdCliente: 'IdCliente',
    Nombre: 'Nombre',
    Telefono: 'Telefono',
    Email: 'Email',
    Direccion: 'Direccion',
    FechaRegistro: 'FechaRegistro'
};
exports.ConsumoDetallesScalarFieldEnum = {
    IdDetalle: 'IdDetalle',
    IdConsumo: 'IdConsumo',
    IdProducto: 'IdProducto',
    Cantidad: 'Cantidad',
    PrecioUnitario: 'PrecioUnitario',
    FechaRegistro: 'FechaRegistro'
};
exports.ConsumosScalarFieldEnum = {
    IdConsumo: 'IdConsumo',
    IdMesa: 'IdMesa',
    IdCliente: 'IdCliente',
    FechaInicio: 'FechaInicio',
    FechaFin: 'FechaFin',
    Estado: 'Estado',
    IdUsuario: 'IdUsuario',
    TipoCobro: 'TipoCobro',
    PrecioHora: 'PrecioHora',
    PrecioMediaHora: 'PrecioMediaHora',
    PrecioLibrePorMinuto: 'PrecioLibrePorMinuto',
    MinutosJugados: 'MinutosJugados',
    CostoMesa: 'CostoMesa',
    TotalProductos: 'TotalProductos',
    Total: 'Total'
};
exports.MesasScalarFieldEnum = {
    IdMesa: 'IdMesa',
    NumeroMesa: 'NumeroMesa',
    Estado: 'Estado'
};
exports.ProductosScalarFieldEnum = {
    IdProducto: 'IdProducto',
    Nombre: 'Nombre',
    Precio: 'Precio',
    IdCategoria: 'IdCategoria',
    ImagenUrl: 'ImagenUrl'
};
exports.ReservasScalarFieldEnum = {
    IdReserva: 'IdReserva',
    FechaReserva: 'FechaReserva',
    HoraInicio: 'HoraInicio',
    HoraFin: 'HoraFin',
    FechaHoraInicioJuego: 'FechaHoraInicioJuego',
    FechaHoraFinJuego: 'FechaHoraFinJuego',
    IdMesa: 'IdMesa',
    IdCliente: 'IdCliente',
    Estado: 'Estado',
    Observaciones: 'Observaciones',
    NumeroPersonas: 'NumeroPersonas'
};
exports.RolesScalarFieldEnum = {
    IdRol: 'IdRol',
    NomRol: 'NomRol',
    DesRol: 'DesRol'
};
exports.UsuariosScalarFieldEnum = {
    IdUsuario: 'IdUsuario',
    NomUsuario: 'NomUsuario',
    ApeUsuario: 'ApeUsuario',
    Correo: 'Correo',
    Password: 'Password',
    IdRol: 'IdRol'
};
exports.EFMigrationsHistoryScalarFieldEnum = {
    MigrationId: 'MigrationId',
    ProductVersion: 'ProductVersion'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map