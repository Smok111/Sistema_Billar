import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "categoriasProductos" | "clientes" | "consumoDetalles" | "consumos" | "mesas" | "productos" | "reservas" | "roles" | "usuarios" | "eFMigrationsHistory";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        CategoriasProductos: {
            payload: Prisma.$CategoriasProductosPayload<ExtArgs>;
            fields: Prisma.CategoriasProductosFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CategoriasProductosFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriasProductosPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CategoriasProductosFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriasProductosPayload>;
                };
                findFirst: {
                    args: Prisma.CategoriasProductosFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriasProductosPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CategoriasProductosFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriasProductosPayload>;
                };
                findMany: {
                    args: Prisma.CategoriasProductosFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriasProductosPayload>[];
                };
                create: {
                    args: Prisma.CategoriasProductosCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriasProductosPayload>;
                };
                createMany: {
                    args: Prisma.CategoriasProductosCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CategoriasProductosCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriasProductosPayload>[];
                };
                delete: {
                    args: Prisma.CategoriasProductosDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriasProductosPayload>;
                };
                update: {
                    args: Prisma.CategoriasProductosUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriasProductosPayload>;
                };
                deleteMany: {
                    args: Prisma.CategoriasProductosDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CategoriasProductosUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CategoriasProductosUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriasProductosPayload>[];
                };
                upsert: {
                    args: Prisma.CategoriasProductosUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriasProductosPayload>;
                };
                aggregate: {
                    args: Prisma.CategoriasProductosAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCategoriasProductos>;
                };
                groupBy: {
                    args: Prisma.CategoriasProductosGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoriasProductosGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CategoriasProductosCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoriasProductosCountAggregateOutputType> | number;
                };
            };
        };
        Clientes: {
            payload: Prisma.$ClientesPayload<ExtArgs>;
            fields: Prisma.ClientesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ClientesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ClientesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientesPayload>;
                };
                findFirst: {
                    args: Prisma.ClientesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ClientesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientesPayload>;
                };
                findMany: {
                    args: Prisma.ClientesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientesPayload>[];
                };
                create: {
                    args: Prisma.ClientesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientesPayload>;
                };
                createMany: {
                    args: Prisma.ClientesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ClientesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientesPayload>[];
                };
                delete: {
                    args: Prisma.ClientesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientesPayload>;
                };
                update: {
                    args: Prisma.ClientesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientesPayload>;
                };
                deleteMany: {
                    args: Prisma.ClientesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ClientesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ClientesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientesPayload>[];
                };
                upsert: {
                    args: Prisma.ClientesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientesPayload>;
                };
                aggregate: {
                    args: Prisma.ClientesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateClientes>;
                };
                groupBy: {
                    args: Prisma.ClientesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClientesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ClientesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClientesCountAggregateOutputType> | number;
                };
            };
        };
        ConsumoDetalles: {
            payload: Prisma.$ConsumoDetallesPayload<ExtArgs>;
            fields: Prisma.ConsumoDetallesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ConsumoDetallesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsumoDetallesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ConsumoDetallesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsumoDetallesPayload>;
                };
                findFirst: {
                    args: Prisma.ConsumoDetallesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsumoDetallesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ConsumoDetallesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsumoDetallesPayload>;
                };
                findMany: {
                    args: Prisma.ConsumoDetallesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsumoDetallesPayload>[];
                };
                create: {
                    args: Prisma.ConsumoDetallesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsumoDetallesPayload>;
                };
                createMany: {
                    args: Prisma.ConsumoDetallesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ConsumoDetallesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsumoDetallesPayload>[];
                };
                delete: {
                    args: Prisma.ConsumoDetallesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsumoDetallesPayload>;
                };
                update: {
                    args: Prisma.ConsumoDetallesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsumoDetallesPayload>;
                };
                deleteMany: {
                    args: Prisma.ConsumoDetallesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ConsumoDetallesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ConsumoDetallesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsumoDetallesPayload>[];
                };
                upsert: {
                    args: Prisma.ConsumoDetallesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsumoDetallesPayload>;
                };
                aggregate: {
                    args: Prisma.ConsumoDetallesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConsumoDetalles>;
                };
                groupBy: {
                    args: Prisma.ConsumoDetallesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConsumoDetallesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ConsumoDetallesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConsumoDetallesCountAggregateOutputType> | number;
                };
            };
        };
        Consumos: {
            payload: Prisma.$ConsumosPayload<ExtArgs>;
            fields: Prisma.ConsumosFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ConsumosFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsumosPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ConsumosFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsumosPayload>;
                };
                findFirst: {
                    args: Prisma.ConsumosFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsumosPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ConsumosFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsumosPayload>;
                };
                findMany: {
                    args: Prisma.ConsumosFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsumosPayload>[];
                };
                create: {
                    args: Prisma.ConsumosCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsumosPayload>;
                };
                createMany: {
                    args: Prisma.ConsumosCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ConsumosCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsumosPayload>[];
                };
                delete: {
                    args: Prisma.ConsumosDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsumosPayload>;
                };
                update: {
                    args: Prisma.ConsumosUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsumosPayload>;
                };
                deleteMany: {
                    args: Prisma.ConsumosDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ConsumosUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ConsumosUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsumosPayload>[];
                };
                upsert: {
                    args: Prisma.ConsumosUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsumosPayload>;
                };
                aggregate: {
                    args: Prisma.ConsumosAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConsumos>;
                };
                groupBy: {
                    args: Prisma.ConsumosGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConsumosGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ConsumosCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConsumosCountAggregateOutputType> | number;
                };
            };
        };
        Mesas: {
            payload: Prisma.$MesasPayload<ExtArgs>;
            fields: Prisma.MesasFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MesasFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MesasPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MesasFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MesasPayload>;
                };
                findFirst: {
                    args: Prisma.MesasFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MesasPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MesasFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MesasPayload>;
                };
                findMany: {
                    args: Prisma.MesasFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MesasPayload>[];
                };
                create: {
                    args: Prisma.MesasCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MesasPayload>;
                };
                createMany: {
                    args: Prisma.MesasCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MesasCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MesasPayload>[];
                };
                delete: {
                    args: Prisma.MesasDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MesasPayload>;
                };
                update: {
                    args: Prisma.MesasUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MesasPayload>;
                };
                deleteMany: {
                    args: Prisma.MesasDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MesasUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MesasUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MesasPayload>[];
                };
                upsert: {
                    args: Prisma.MesasUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MesasPayload>;
                };
                aggregate: {
                    args: Prisma.MesasAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMesas>;
                };
                groupBy: {
                    args: Prisma.MesasGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MesasGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MesasCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MesasCountAggregateOutputType> | number;
                };
            };
        };
        Productos: {
            payload: Prisma.$ProductosPayload<ExtArgs>;
            fields: Prisma.ProductosFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductosFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductosPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductosFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductosPayload>;
                };
                findFirst: {
                    args: Prisma.ProductosFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductosPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductosFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductosPayload>;
                };
                findMany: {
                    args: Prisma.ProductosFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductosPayload>[];
                };
                create: {
                    args: Prisma.ProductosCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductosPayload>;
                };
                createMany: {
                    args: Prisma.ProductosCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductosCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductosPayload>[];
                };
                delete: {
                    args: Prisma.ProductosDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductosPayload>;
                };
                update: {
                    args: Prisma.ProductosUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductosPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductosDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductosUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductosUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductosPayload>[];
                };
                upsert: {
                    args: Prisma.ProductosUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductosPayload>;
                };
                aggregate: {
                    args: Prisma.ProductosAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProductos>;
                };
                groupBy: {
                    args: Prisma.ProductosGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductosGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductosCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductosCountAggregateOutputType> | number;
                };
            };
        };
        Reservas: {
            payload: Prisma.$ReservasPayload<ExtArgs>;
            fields: Prisma.ReservasFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReservasFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservasPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReservasFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservasPayload>;
                };
                findFirst: {
                    args: Prisma.ReservasFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservasPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReservasFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservasPayload>;
                };
                findMany: {
                    args: Prisma.ReservasFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservasPayload>[];
                };
                create: {
                    args: Prisma.ReservasCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservasPayload>;
                };
                createMany: {
                    args: Prisma.ReservasCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ReservasCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservasPayload>[];
                };
                delete: {
                    args: Prisma.ReservasDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservasPayload>;
                };
                update: {
                    args: Prisma.ReservasUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservasPayload>;
                };
                deleteMany: {
                    args: Prisma.ReservasDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReservasUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ReservasUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservasPayload>[];
                };
                upsert: {
                    args: Prisma.ReservasUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservasPayload>;
                };
                aggregate: {
                    args: Prisma.ReservasAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReservas>;
                };
                groupBy: {
                    args: Prisma.ReservasGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReservasGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReservasCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReservasCountAggregateOutputType> | number;
                };
            };
        };
        Roles: {
            payload: Prisma.$RolesPayload<ExtArgs>;
            fields: Prisma.RolesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RolesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RolesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>;
                };
                findFirst: {
                    args: Prisma.RolesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RolesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>;
                };
                findMany: {
                    args: Prisma.RolesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>[];
                };
                create: {
                    args: Prisma.RolesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>;
                };
                createMany: {
                    args: Prisma.RolesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RolesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>[];
                };
                delete: {
                    args: Prisma.RolesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>;
                };
                update: {
                    args: Prisma.RolesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>;
                };
                deleteMany: {
                    args: Prisma.RolesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RolesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RolesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>[];
                };
                upsert: {
                    args: Prisma.RolesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>;
                };
                aggregate: {
                    args: Prisma.RolesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRoles>;
                };
                groupBy: {
                    args: Prisma.RolesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RolesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolesCountAggregateOutputType> | number;
                };
            };
        };
        Usuarios: {
            payload: Prisma.$UsuariosPayload<ExtArgs>;
            fields: Prisma.UsuariosFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UsuariosFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuariosPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UsuariosFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuariosPayload>;
                };
                findFirst: {
                    args: Prisma.UsuariosFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuariosPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UsuariosFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuariosPayload>;
                };
                findMany: {
                    args: Prisma.UsuariosFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuariosPayload>[];
                };
                create: {
                    args: Prisma.UsuariosCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuariosPayload>;
                };
                createMany: {
                    args: Prisma.UsuariosCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UsuariosCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuariosPayload>[];
                };
                delete: {
                    args: Prisma.UsuariosDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuariosPayload>;
                };
                update: {
                    args: Prisma.UsuariosUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuariosPayload>;
                };
                deleteMany: {
                    args: Prisma.UsuariosDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UsuariosUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UsuariosUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuariosPayload>[];
                };
                upsert: {
                    args: Prisma.UsuariosUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuariosPayload>;
                };
                aggregate: {
                    args: Prisma.UsuariosAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsuarios>;
                };
                groupBy: {
                    args: Prisma.UsuariosGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuariosGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UsuariosCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuariosCountAggregateOutputType> | number;
                };
            };
        };
        EFMigrationsHistory: {
            payload: Prisma.$EFMigrationsHistoryPayload<ExtArgs>;
            fields: Prisma.EFMigrationsHistoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EFMigrationsHistoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EFMigrationsHistoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>;
                };
                findFirst: {
                    args: Prisma.EFMigrationsHistoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EFMigrationsHistoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>;
                };
                findMany: {
                    args: Prisma.EFMigrationsHistoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>[];
                };
                create: {
                    args: Prisma.EFMigrationsHistoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>;
                };
                createMany: {
                    args: Prisma.EFMigrationsHistoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EFMigrationsHistoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>[];
                };
                delete: {
                    args: Prisma.EFMigrationsHistoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>;
                };
                update: {
                    args: Prisma.EFMigrationsHistoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>;
                };
                deleteMany: {
                    args: Prisma.EFMigrationsHistoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EFMigrationsHistoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EFMigrationsHistoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>[];
                };
                upsert: {
                    args: Prisma.EFMigrationsHistoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>;
                };
                aggregate: {
                    args: Prisma.EFMigrationsHistoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEFMigrationsHistory>;
                };
                groupBy: {
                    args: Prisma.EFMigrationsHistoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EFMigrationsHistoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EFMigrationsHistoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EFMigrationsHistoryCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    categoriasProductos?: Prisma.CategoriasProductosOmit;
    clientes?: Prisma.ClientesOmit;
    consumoDetalles?: Prisma.ConsumoDetallesOmit;
    consumos?: Prisma.ConsumosOmit;
    mesas?: Prisma.MesasOmit;
    productos?: Prisma.ProductosOmit;
    reservas?: Prisma.ReservasOmit;
    roles?: Prisma.RolesOmit;
    usuarios?: Prisma.UsuariosOmit;
    eFMigrationsHistory?: Prisma.EFMigrationsHistoryOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
