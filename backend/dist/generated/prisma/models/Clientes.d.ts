import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ClientesModel = runtime.Types.Result.DefaultSelection<Prisma.$ClientesPayload>;
export type AggregateClientes = {
    _count: ClientesCountAggregateOutputType | null;
    _avg: ClientesAvgAggregateOutputType | null;
    _sum: ClientesSumAggregateOutputType | null;
    _min: ClientesMinAggregateOutputType | null;
    _max: ClientesMaxAggregateOutputType | null;
};
export type ClientesAvgAggregateOutputType = {
    IdCliente: number | null;
};
export type ClientesSumAggregateOutputType = {
    IdCliente: number | null;
};
export type ClientesMinAggregateOutputType = {
    IdCliente: number | null;
    Nombre: string | null;
    Telefono: string | null;
    Email: string | null;
    Direccion: string | null;
    FechaRegistro: Date | null;
};
export type ClientesMaxAggregateOutputType = {
    IdCliente: number | null;
    Nombre: string | null;
    Telefono: string | null;
    Email: string | null;
    Direccion: string | null;
    FechaRegistro: Date | null;
};
export type ClientesCountAggregateOutputType = {
    IdCliente: number;
    Nombre: number;
    Telefono: number;
    Email: number;
    Direccion: number;
    FechaRegistro: number;
    _all: number;
};
export type ClientesAvgAggregateInputType = {
    IdCliente?: true;
};
export type ClientesSumAggregateInputType = {
    IdCliente?: true;
};
export type ClientesMinAggregateInputType = {
    IdCliente?: true;
    Nombre?: true;
    Telefono?: true;
    Email?: true;
    Direccion?: true;
    FechaRegistro?: true;
};
export type ClientesMaxAggregateInputType = {
    IdCliente?: true;
    Nombre?: true;
    Telefono?: true;
    Email?: true;
    Direccion?: true;
    FechaRegistro?: true;
};
export type ClientesCountAggregateInputType = {
    IdCliente?: true;
    Nombre?: true;
    Telefono?: true;
    Email?: true;
    Direccion?: true;
    FechaRegistro?: true;
    _all?: true;
};
export type ClientesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientesWhereInput;
    orderBy?: Prisma.ClientesOrderByWithRelationInput | Prisma.ClientesOrderByWithRelationInput[];
    cursor?: Prisma.ClientesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClientesCountAggregateInputType;
    _avg?: ClientesAvgAggregateInputType;
    _sum?: ClientesSumAggregateInputType;
    _min?: ClientesMinAggregateInputType;
    _max?: ClientesMaxAggregateInputType;
};
export type GetClientesAggregateType<T extends ClientesAggregateArgs> = {
    [P in keyof T & keyof AggregateClientes]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClientes[P]> : Prisma.GetScalarType<T[P], AggregateClientes[P]>;
};
export type ClientesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientesWhereInput;
    orderBy?: Prisma.ClientesOrderByWithAggregationInput | Prisma.ClientesOrderByWithAggregationInput[];
    by: Prisma.ClientesScalarFieldEnum[] | Prisma.ClientesScalarFieldEnum;
    having?: Prisma.ClientesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClientesCountAggregateInputType | true;
    _avg?: ClientesAvgAggregateInputType;
    _sum?: ClientesSumAggregateInputType;
    _min?: ClientesMinAggregateInputType;
    _max?: ClientesMaxAggregateInputType;
};
export type ClientesGroupByOutputType = {
    IdCliente: number;
    Nombre: string;
    Telefono: string;
    Email: string | null;
    Direccion: string | null;
    FechaRegistro: Date;
    _count: ClientesCountAggregateOutputType | null;
    _avg: ClientesAvgAggregateOutputType | null;
    _sum: ClientesSumAggregateOutputType | null;
    _min: ClientesMinAggregateOutputType | null;
    _max: ClientesMaxAggregateOutputType | null;
};
export type GetClientesGroupByPayload<T extends ClientesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClientesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClientesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClientesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClientesGroupByOutputType[P]>;
}>>;
export type ClientesWhereInput = {
    AND?: Prisma.ClientesWhereInput | Prisma.ClientesWhereInput[];
    OR?: Prisma.ClientesWhereInput[];
    NOT?: Prisma.ClientesWhereInput | Prisma.ClientesWhereInput[];
    IdCliente?: Prisma.IntFilter<"Clientes"> | number;
    Nombre?: Prisma.StringFilter<"Clientes"> | string;
    Telefono?: Prisma.StringFilter<"Clientes"> | string;
    Email?: Prisma.StringNullableFilter<"Clientes"> | string | null;
    Direccion?: Prisma.StringNullableFilter<"Clientes"> | string | null;
    FechaRegistro?: Prisma.DateTimeFilter<"Clientes"> | Date | string;
    Consumos?: Prisma.ConsumosListRelationFilter;
    Reservas?: Prisma.ReservasListRelationFilter;
};
export type ClientesOrderByWithRelationInput = {
    IdCliente?: Prisma.SortOrder;
    Nombre?: Prisma.SortOrder;
    Telefono?: Prisma.SortOrder;
    Email?: Prisma.SortOrderInput | Prisma.SortOrder;
    Direccion?: Prisma.SortOrderInput | Prisma.SortOrder;
    FechaRegistro?: Prisma.SortOrder;
    Consumos?: Prisma.ConsumosOrderByRelationAggregateInput;
    Reservas?: Prisma.ReservasOrderByRelationAggregateInput;
};
export type ClientesWhereUniqueInput = Prisma.AtLeast<{
    IdCliente?: number;
    AND?: Prisma.ClientesWhereInput | Prisma.ClientesWhereInput[];
    OR?: Prisma.ClientesWhereInput[];
    NOT?: Prisma.ClientesWhereInput | Prisma.ClientesWhereInput[];
    Nombre?: Prisma.StringFilter<"Clientes"> | string;
    Telefono?: Prisma.StringFilter<"Clientes"> | string;
    Email?: Prisma.StringNullableFilter<"Clientes"> | string | null;
    Direccion?: Prisma.StringNullableFilter<"Clientes"> | string | null;
    FechaRegistro?: Prisma.DateTimeFilter<"Clientes"> | Date | string;
    Consumos?: Prisma.ConsumosListRelationFilter;
    Reservas?: Prisma.ReservasListRelationFilter;
}, "IdCliente">;
export type ClientesOrderByWithAggregationInput = {
    IdCliente?: Prisma.SortOrder;
    Nombre?: Prisma.SortOrder;
    Telefono?: Prisma.SortOrder;
    Email?: Prisma.SortOrderInput | Prisma.SortOrder;
    Direccion?: Prisma.SortOrderInput | Prisma.SortOrder;
    FechaRegistro?: Prisma.SortOrder;
    _count?: Prisma.ClientesCountOrderByAggregateInput;
    _avg?: Prisma.ClientesAvgOrderByAggregateInput;
    _max?: Prisma.ClientesMaxOrderByAggregateInput;
    _min?: Prisma.ClientesMinOrderByAggregateInput;
    _sum?: Prisma.ClientesSumOrderByAggregateInput;
};
export type ClientesScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClientesScalarWhereWithAggregatesInput | Prisma.ClientesScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClientesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClientesScalarWhereWithAggregatesInput | Prisma.ClientesScalarWhereWithAggregatesInput[];
    IdCliente?: Prisma.IntWithAggregatesFilter<"Clientes"> | number;
    Nombre?: Prisma.StringWithAggregatesFilter<"Clientes"> | string;
    Telefono?: Prisma.StringWithAggregatesFilter<"Clientes"> | string;
    Email?: Prisma.StringNullableWithAggregatesFilter<"Clientes"> | string | null;
    Direccion?: Prisma.StringNullableWithAggregatesFilter<"Clientes"> | string | null;
    FechaRegistro?: Prisma.DateTimeWithAggregatesFilter<"Clientes"> | Date | string;
};
export type ClientesCreateInput = {
    Nombre: string;
    Telefono: string;
    Email?: string | null;
    Direccion?: string | null;
    FechaRegistro: Date | string;
    Consumos?: Prisma.ConsumosCreateNestedManyWithoutClientesInput;
    Reservas?: Prisma.ReservasCreateNestedManyWithoutClientesInput;
};
export type ClientesUncheckedCreateInput = {
    IdCliente?: number;
    Nombre: string;
    Telefono: string;
    Email?: string | null;
    Direccion?: string | null;
    FechaRegistro: Date | string;
    Consumos?: Prisma.ConsumosUncheckedCreateNestedManyWithoutClientesInput;
    Reservas?: Prisma.ReservasUncheckedCreateNestedManyWithoutClientesInput;
};
export type ClientesUpdateInput = {
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    Telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    Email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    FechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Consumos?: Prisma.ConsumosUpdateManyWithoutClientesNestedInput;
    Reservas?: Prisma.ReservasUpdateManyWithoutClientesNestedInput;
};
export type ClientesUncheckedUpdateInput = {
    IdCliente?: Prisma.IntFieldUpdateOperationsInput | number;
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    Telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    Email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    FechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Consumos?: Prisma.ConsumosUncheckedUpdateManyWithoutClientesNestedInput;
    Reservas?: Prisma.ReservasUncheckedUpdateManyWithoutClientesNestedInput;
};
export type ClientesCreateManyInput = {
    IdCliente?: number;
    Nombre: string;
    Telefono: string;
    Email?: string | null;
    Direccion?: string | null;
    FechaRegistro: Date | string;
};
export type ClientesUpdateManyMutationInput = {
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    Telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    Email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    FechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientesUncheckedUpdateManyInput = {
    IdCliente?: Prisma.IntFieldUpdateOperationsInput | number;
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    Telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    Email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    FechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientesCountOrderByAggregateInput = {
    IdCliente?: Prisma.SortOrder;
    Nombre?: Prisma.SortOrder;
    Telefono?: Prisma.SortOrder;
    Email?: Prisma.SortOrder;
    Direccion?: Prisma.SortOrder;
    FechaRegistro?: Prisma.SortOrder;
};
export type ClientesAvgOrderByAggregateInput = {
    IdCliente?: Prisma.SortOrder;
};
export type ClientesMaxOrderByAggregateInput = {
    IdCliente?: Prisma.SortOrder;
    Nombre?: Prisma.SortOrder;
    Telefono?: Prisma.SortOrder;
    Email?: Prisma.SortOrder;
    Direccion?: Prisma.SortOrder;
    FechaRegistro?: Prisma.SortOrder;
};
export type ClientesMinOrderByAggregateInput = {
    IdCliente?: Prisma.SortOrder;
    Nombre?: Prisma.SortOrder;
    Telefono?: Prisma.SortOrder;
    Email?: Prisma.SortOrder;
    Direccion?: Prisma.SortOrder;
    FechaRegistro?: Prisma.SortOrder;
};
export type ClientesSumOrderByAggregateInput = {
    IdCliente?: Prisma.SortOrder;
};
export type ClientesScalarRelationFilter = {
    is?: Prisma.ClientesWhereInput;
    isNot?: Prisma.ClientesWhereInput;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type ClientesCreateNestedOneWithoutConsumosInput = {
    create?: Prisma.XOR<Prisma.ClientesCreateWithoutConsumosInput, Prisma.ClientesUncheckedCreateWithoutConsumosInput>;
    connectOrCreate?: Prisma.ClientesCreateOrConnectWithoutConsumosInput;
    connect?: Prisma.ClientesWhereUniqueInput;
};
export type ClientesUpdateOneRequiredWithoutConsumosNestedInput = {
    create?: Prisma.XOR<Prisma.ClientesCreateWithoutConsumosInput, Prisma.ClientesUncheckedCreateWithoutConsumosInput>;
    connectOrCreate?: Prisma.ClientesCreateOrConnectWithoutConsumosInput;
    upsert?: Prisma.ClientesUpsertWithoutConsumosInput;
    connect?: Prisma.ClientesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientesUpdateToOneWithWhereWithoutConsumosInput, Prisma.ClientesUpdateWithoutConsumosInput>, Prisma.ClientesUncheckedUpdateWithoutConsumosInput>;
};
export type ClientesCreateNestedOneWithoutReservasInput = {
    create?: Prisma.XOR<Prisma.ClientesCreateWithoutReservasInput, Prisma.ClientesUncheckedCreateWithoutReservasInput>;
    connectOrCreate?: Prisma.ClientesCreateOrConnectWithoutReservasInput;
    connect?: Prisma.ClientesWhereUniqueInput;
};
export type ClientesUpdateOneRequiredWithoutReservasNestedInput = {
    create?: Prisma.XOR<Prisma.ClientesCreateWithoutReservasInput, Prisma.ClientesUncheckedCreateWithoutReservasInput>;
    connectOrCreate?: Prisma.ClientesCreateOrConnectWithoutReservasInput;
    upsert?: Prisma.ClientesUpsertWithoutReservasInput;
    connect?: Prisma.ClientesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientesUpdateToOneWithWhereWithoutReservasInput, Prisma.ClientesUpdateWithoutReservasInput>, Prisma.ClientesUncheckedUpdateWithoutReservasInput>;
};
export type ClientesCreateWithoutConsumosInput = {
    Nombre: string;
    Telefono: string;
    Email?: string | null;
    Direccion?: string | null;
    FechaRegistro: Date | string;
    Reservas?: Prisma.ReservasCreateNestedManyWithoutClientesInput;
};
export type ClientesUncheckedCreateWithoutConsumosInput = {
    IdCliente?: number;
    Nombre: string;
    Telefono: string;
    Email?: string | null;
    Direccion?: string | null;
    FechaRegistro: Date | string;
    Reservas?: Prisma.ReservasUncheckedCreateNestedManyWithoutClientesInput;
};
export type ClientesCreateOrConnectWithoutConsumosInput = {
    where: Prisma.ClientesWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientesCreateWithoutConsumosInput, Prisma.ClientesUncheckedCreateWithoutConsumosInput>;
};
export type ClientesUpsertWithoutConsumosInput = {
    update: Prisma.XOR<Prisma.ClientesUpdateWithoutConsumosInput, Prisma.ClientesUncheckedUpdateWithoutConsumosInput>;
    create: Prisma.XOR<Prisma.ClientesCreateWithoutConsumosInput, Prisma.ClientesUncheckedCreateWithoutConsumosInput>;
    where?: Prisma.ClientesWhereInput;
};
export type ClientesUpdateToOneWithWhereWithoutConsumosInput = {
    where?: Prisma.ClientesWhereInput;
    data: Prisma.XOR<Prisma.ClientesUpdateWithoutConsumosInput, Prisma.ClientesUncheckedUpdateWithoutConsumosInput>;
};
export type ClientesUpdateWithoutConsumosInput = {
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    Telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    Email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    FechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Reservas?: Prisma.ReservasUpdateManyWithoutClientesNestedInput;
};
export type ClientesUncheckedUpdateWithoutConsumosInput = {
    IdCliente?: Prisma.IntFieldUpdateOperationsInput | number;
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    Telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    Email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    FechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Reservas?: Prisma.ReservasUncheckedUpdateManyWithoutClientesNestedInput;
};
export type ClientesCreateWithoutReservasInput = {
    Nombre: string;
    Telefono: string;
    Email?: string | null;
    Direccion?: string | null;
    FechaRegistro: Date | string;
    Consumos?: Prisma.ConsumosCreateNestedManyWithoutClientesInput;
};
export type ClientesUncheckedCreateWithoutReservasInput = {
    IdCliente?: number;
    Nombre: string;
    Telefono: string;
    Email?: string | null;
    Direccion?: string | null;
    FechaRegistro: Date | string;
    Consumos?: Prisma.ConsumosUncheckedCreateNestedManyWithoutClientesInput;
};
export type ClientesCreateOrConnectWithoutReservasInput = {
    where: Prisma.ClientesWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientesCreateWithoutReservasInput, Prisma.ClientesUncheckedCreateWithoutReservasInput>;
};
export type ClientesUpsertWithoutReservasInput = {
    update: Prisma.XOR<Prisma.ClientesUpdateWithoutReservasInput, Prisma.ClientesUncheckedUpdateWithoutReservasInput>;
    create: Prisma.XOR<Prisma.ClientesCreateWithoutReservasInput, Prisma.ClientesUncheckedCreateWithoutReservasInput>;
    where?: Prisma.ClientesWhereInput;
};
export type ClientesUpdateToOneWithWhereWithoutReservasInput = {
    where?: Prisma.ClientesWhereInput;
    data: Prisma.XOR<Prisma.ClientesUpdateWithoutReservasInput, Prisma.ClientesUncheckedUpdateWithoutReservasInput>;
};
export type ClientesUpdateWithoutReservasInput = {
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    Telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    Email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    FechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Consumos?: Prisma.ConsumosUpdateManyWithoutClientesNestedInput;
};
export type ClientesUncheckedUpdateWithoutReservasInput = {
    IdCliente?: Prisma.IntFieldUpdateOperationsInput | number;
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    Telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    Email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    FechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Consumos?: Prisma.ConsumosUncheckedUpdateManyWithoutClientesNestedInput;
};
export type ClientesCountOutputType = {
    Consumos: number;
    Reservas: number;
};
export type ClientesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Consumos?: boolean | ClientesCountOutputTypeCountConsumosArgs;
    Reservas?: boolean | ClientesCountOutputTypeCountReservasArgs;
};
export type ClientesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesCountOutputTypeSelect<ExtArgs> | null;
};
export type ClientesCountOutputTypeCountConsumosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsumosWhereInput;
};
export type ClientesCountOutputTypeCountReservasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReservasWhereInput;
};
export type ClientesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IdCliente?: boolean;
    Nombre?: boolean;
    Telefono?: boolean;
    Email?: boolean;
    Direccion?: boolean;
    FechaRegistro?: boolean;
    Consumos?: boolean | Prisma.Clientes$ConsumosArgs<ExtArgs>;
    Reservas?: boolean | Prisma.Clientes$ReservasArgs<ExtArgs>;
    _count?: boolean | Prisma.ClientesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["clientes"]>;
export type ClientesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IdCliente?: boolean;
    Nombre?: boolean;
    Telefono?: boolean;
    Email?: boolean;
    Direccion?: boolean;
    FechaRegistro?: boolean;
}, ExtArgs["result"]["clientes"]>;
export type ClientesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IdCliente?: boolean;
    Nombre?: boolean;
    Telefono?: boolean;
    Email?: boolean;
    Direccion?: boolean;
    FechaRegistro?: boolean;
}, ExtArgs["result"]["clientes"]>;
export type ClientesSelectScalar = {
    IdCliente?: boolean;
    Nombre?: boolean;
    Telefono?: boolean;
    Email?: boolean;
    Direccion?: boolean;
    FechaRegistro?: boolean;
};
export type ClientesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"IdCliente" | "Nombre" | "Telefono" | "Email" | "Direccion" | "FechaRegistro", ExtArgs["result"]["clientes"]>;
export type ClientesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Consumos?: boolean | Prisma.Clientes$ConsumosArgs<ExtArgs>;
    Reservas?: boolean | Prisma.Clientes$ReservasArgs<ExtArgs>;
    _count?: boolean | Prisma.ClientesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ClientesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ClientesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ClientesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Clientes";
    objects: {
        Consumos: Prisma.$ConsumosPayload<ExtArgs>[];
        Reservas: Prisma.$ReservasPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        IdCliente: number;
        Nombre: string;
        Telefono: string;
        Email: string | null;
        Direccion: string | null;
        FechaRegistro: Date;
    }, ExtArgs["result"]["clientes"]>;
    composites: {};
};
export type ClientesGetPayload<S extends boolean | null | undefined | ClientesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClientesPayload, S>;
export type ClientesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClientesCountAggregateInputType | true;
};
export interface ClientesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Clientes'];
        meta: {
            name: 'Clientes';
        };
    };
    findUnique<T extends ClientesFindUniqueArgs>(args: Prisma.SelectSubset<T, ClientesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClientesClient<runtime.Types.Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ClientesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClientesClient<runtime.Types.Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ClientesFindFirstArgs>(args?: Prisma.SelectSubset<T, ClientesFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClientesClient<runtime.Types.Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ClientesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClientesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClientesClient<runtime.Types.Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ClientesFindManyArgs>(args?: Prisma.SelectSubset<T, ClientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ClientesCreateArgs>(args: Prisma.SelectSubset<T, ClientesCreateArgs<ExtArgs>>): Prisma.Prisma__ClientesClient<runtime.Types.Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ClientesCreateManyArgs>(args?: Prisma.SelectSubset<T, ClientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ClientesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClientesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ClientesDeleteArgs>(args: Prisma.SelectSubset<T, ClientesDeleteArgs<ExtArgs>>): Prisma.Prisma__ClientesClient<runtime.Types.Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ClientesUpdateArgs>(args: Prisma.SelectSubset<T, ClientesUpdateArgs<ExtArgs>>): Prisma.Prisma__ClientesClient<runtime.Types.Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ClientesDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ClientesUpdateManyArgs>(args: Prisma.SelectSubset<T, ClientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ClientesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClientesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ClientesUpsertArgs>(args: Prisma.SelectSubset<T, ClientesUpsertArgs<ExtArgs>>): Prisma.Prisma__ClientesClient<runtime.Types.Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ClientesCountArgs>(args?: Prisma.Subset<T, ClientesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClientesCountAggregateOutputType> : number>;
    aggregate<T extends ClientesAggregateArgs>(args: Prisma.Subset<T, ClientesAggregateArgs>): Prisma.PrismaPromise<GetClientesAggregateType<T>>;
    groupBy<T extends ClientesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClientesGroupByArgs['orderBy'];
    } : {
        orderBy?: ClientesGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ClientesFieldRefs;
}
export interface Prisma__ClientesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Consumos<T extends Prisma.Clientes$ConsumosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Clientes$ConsumosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsumosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    Reservas<T extends Prisma.Clientes$ReservasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Clientes$ReservasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ClientesFieldRefs {
    readonly IdCliente: Prisma.FieldRef<"Clientes", 'Int'>;
    readonly Nombre: Prisma.FieldRef<"Clientes", 'String'>;
    readonly Telefono: Prisma.FieldRef<"Clientes", 'String'>;
    readonly Email: Prisma.FieldRef<"Clientes", 'String'>;
    readonly Direccion: Prisma.FieldRef<"Clientes", 'String'>;
    readonly FechaRegistro: Prisma.FieldRef<"Clientes", 'DateTime'>;
}
export type ClientesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesSelect<ExtArgs> | null;
    omit?: Prisma.ClientesOmit<ExtArgs> | null;
    include?: Prisma.ClientesInclude<ExtArgs> | null;
    where: Prisma.ClientesWhereUniqueInput;
};
export type ClientesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesSelect<ExtArgs> | null;
    omit?: Prisma.ClientesOmit<ExtArgs> | null;
    include?: Prisma.ClientesInclude<ExtArgs> | null;
    where: Prisma.ClientesWhereUniqueInput;
};
export type ClientesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesSelect<ExtArgs> | null;
    omit?: Prisma.ClientesOmit<ExtArgs> | null;
    include?: Prisma.ClientesInclude<ExtArgs> | null;
    where?: Prisma.ClientesWhereInput;
    orderBy?: Prisma.ClientesOrderByWithRelationInput | Prisma.ClientesOrderByWithRelationInput[];
    cursor?: Prisma.ClientesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientesScalarFieldEnum | Prisma.ClientesScalarFieldEnum[];
};
export type ClientesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesSelect<ExtArgs> | null;
    omit?: Prisma.ClientesOmit<ExtArgs> | null;
    include?: Prisma.ClientesInclude<ExtArgs> | null;
    where?: Prisma.ClientesWhereInput;
    orderBy?: Prisma.ClientesOrderByWithRelationInput | Prisma.ClientesOrderByWithRelationInput[];
    cursor?: Prisma.ClientesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientesScalarFieldEnum | Prisma.ClientesScalarFieldEnum[];
};
export type ClientesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesSelect<ExtArgs> | null;
    omit?: Prisma.ClientesOmit<ExtArgs> | null;
    include?: Prisma.ClientesInclude<ExtArgs> | null;
    where?: Prisma.ClientesWhereInput;
    orderBy?: Prisma.ClientesOrderByWithRelationInput | Prisma.ClientesOrderByWithRelationInput[];
    cursor?: Prisma.ClientesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientesScalarFieldEnum | Prisma.ClientesScalarFieldEnum[];
};
export type ClientesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesSelect<ExtArgs> | null;
    omit?: Prisma.ClientesOmit<ExtArgs> | null;
    include?: Prisma.ClientesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientesCreateInput, Prisma.ClientesUncheckedCreateInput>;
};
export type ClientesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ClientesCreateManyInput | Prisma.ClientesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClientesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClientesOmit<ExtArgs> | null;
    data: Prisma.ClientesCreateManyInput | Prisma.ClientesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClientesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesSelect<ExtArgs> | null;
    omit?: Prisma.ClientesOmit<ExtArgs> | null;
    include?: Prisma.ClientesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientesUpdateInput, Prisma.ClientesUncheckedUpdateInput>;
    where: Prisma.ClientesWhereUniqueInput;
};
export type ClientesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ClientesUpdateManyMutationInput, Prisma.ClientesUncheckedUpdateManyInput>;
    where?: Prisma.ClientesWhereInput;
    limit?: number;
};
export type ClientesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClientesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientesUpdateManyMutationInput, Prisma.ClientesUncheckedUpdateManyInput>;
    where?: Prisma.ClientesWhereInput;
    limit?: number;
};
export type ClientesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesSelect<ExtArgs> | null;
    omit?: Prisma.ClientesOmit<ExtArgs> | null;
    include?: Prisma.ClientesInclude<ExtArgs> | null;
    where: Prisma.ClientesWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientesCreateInput, Prisma.ClientesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ClientesUpdateInput, Prisma.ClientesUncheckedUpdateInput>;
};
export type ClientesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesSelect<ExtArgs> | null;
    omit?: Prisma.ClientesOmit<ExtArgs> | null;
    include?: Prisma.ClientesInclude<ExtArgs> | null;
    where: Prisma.ClientesWhereUniqueInput;
};
export type ClientesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientesWhereInput;
    limit?: number;
};
export type Clientes$ConsumosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsumosSelect<ExtArgs> | null;
    omit?: Prisma.ConsumosOmit<ExtArgs> | null;
    include?: Prisma.ConsumosInclude<ExtArgs> | null;
    where?: Prisma.ConsumosWhereInput;
    orderBy?: Prisma.ConsumosOrderByWithRelationInput | Prisma.ConsumosOrderByWithRelationInput[];
    cursor?: Prisma.ConsumosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConsumosScalarFieldEnum | Prisma.ConsumosScalarFieldEnum[];
};
export type Clientes$ReservasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservasSelect<ExtArgs> | null;
    omit?: Prisma.ReservasOmit<ExtArgs> | null;
    include?: Prisma.ReservasInclude<ExtArgs> | null;
    where?: Prisma.ReservasWhereInput;
    orderBy?: Prisma.ReservasOrderByWithRelationInput | Prisma.ReservasOrderByWithRelationInput[];
    cursor?: Prisma.ReservasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReservasScalarFieldEnum | Prisma.ReservasScalarFieldEnum[];
};
export type ClientesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesSelect<ExtArgs> | null;
    omit?: Prisma.ClientesOmit<ExtArgs> | null;
    include?: Prisma.ClientesInclude<ExtArgs> | null;
};
