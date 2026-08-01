import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MesasModel = runtime.Types.Result.DefaultSelection<Prisma.$MesasPayload>;
export type AggregateMesas = {
    _count: MesasCountAggregateOutputType | null;
    _avg: MesasAvgAggregateOutputType | null;
    _sum: MesasSumAggregateOutputType | null;
    _min: MesasMinAggregateOutputType | null;
    _max: MesasMaxAggregateOutputType | null;
};
export type MesasAvgAggregateOutputType = {
    IdMesa: number | null;
    NumeroMesa: number | null;
};
export type MesasSumAggregateOutputType = {
    IdMesa: number | null;
    NumeroMesa: number | null;
};
export type MesasMinAggregateOutputType = {
    IdMesa: number | null;
    NumeroMesa: number | null;
    Estado: string | null;
};
export type MesasMaxAggregateOutputType = {
    IdMesa: number | null;
    NumeroMesa: number | null;
    Estado: string | null;
};
export type MesasCountAggregateOutputType = {
    IdMesa: number;
    NumeroMesa: number;
    Estado: number;
    _all: number;
};
export type MesasAvgAggregateInputType = {
    IdMesa?: true;
    NumeroMesa?: true;
};
export type MesasSumAggregateInputType = {
    IdMesa?: true;
    NumeroMesa?: true;
};
export type MesasMinAggregateInputType = {
    IdMesa?: true;
    NumeroMesa?: true;
    Estado?: true;
};
export type MesasMaxAggregateInputType = {
    IdMesa?: true;
    NumeroMesa?: true;
    Estado?: true;
};
export type MesasCountAggregateInputType = {
    IdMesa?: true;
    NumeroMesa?: true;
    Estado?: true;
    _all?: true;
};
export type MesasAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MesasWhereInput;
    orderBy?: Prisma.MesasOrderByWithRelationInput | Prisma.MesasOrderByWithRelationInput[];
    cursor?: Prisma.MesasWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MesasCountAggregateInputType;
    _avg?: MesasAvgAggregateInputType;
    _sum?: MesasSumAggregateInputType;
    _min?: MesasMinAggregateInputType;
    _max?: MesasMaxAggregateInputType;
};
export type GetMesasAggregateType<T extends MesasAggregateArgs> = {
    [P in keyof T & keyof AggregateMesas]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMesas[P]> : Prisma.GetScalarType<T[P], AggregateMesas[P]>;
};
export type MesasGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MesasWhereInput;
    orderBy?: Prisma.MesasOrderByWithAggregationInput | Prisma.MesasOrderByWithAggregationInput[];
    by: Prisma.MesasScalarFieldEnum[] | Prisma.MesasScalarFieldEnum;
    having?: Prisma.MesasScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MesasCountAggregateInputType | true;
    _avg?: MesasAvgAggregateInputType;
    _sum?: MesasSumAggregateInputType;
    _min?: MesasMinAggregateInputType;
    _max?: MesasMaxAggregateInputType;
};
export type MesasGroupByOutputType = {
    IdMesa: number;
    NumeroMesa: number;
    Estado: string;
    _count: MesasCountAggregateOutputType | null;
    _avg: MesasAvgAggregateOutputType | null;
    _sum: MesasSumAggregateOutputType | null;
    _min: MesasMinAggregateOutputType | null;
    _max: MesasMaxAggregateOutputType | null;
};
export type GetMesasGroupByPayload<T extends MesasGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MesasGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MesasGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MesasGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MesasGroupByOutputType[P]>;
}>>;
export type MesasWhereInput = {
    AND?: Prisma.MesasWhereInput | Prisma.MesasWhereInput[];
    OR?: Prisma.MesasWhereInput[];
    NOT?: Prisma.MesasWhereInput | Prisma.MesasWhereInput[];
    IdMesa?: Prisma.IntFilter<"Mesas"> | number;
    NumeroMesa?: Prisma.IntFilter<"Mesas"> | number;
    Estado?: Prisma.StringFilter<"Mesas"> | string;
    Consumos?: Prisma.ConsumosListRelationFilter;
    Reservas?: Prisma.ReservasListRelationFilter;
};
export type MesasOrderByWithRelationInput = {
    IdMesa?: Prisma.SortOrder;
    NumeroMesa?: Prisma.SortOrder;
    Estado?: Prisma.SortOrder;
    Consumos?: Prisma.ConsumosOrderByRelationAggregateInput;
    Reservas?: Prisma.ReservasOrderByRelationAggregateInput;
};
export type MesasWhereUniqueInput = Prisma.AtLeast<{
    IdMesa?: number;
    NumeroMesa?: number;
    AND?: Prisma.MesasWhereInput | Prisma.MesasWhereInput[];
    OR?: Prisma.MesasWhereInput[];
    NOT?: Prisma.MesasWhereInput | Prisma.MesasWhereInput[];
    Estado?: Prisma.StringFilter<"Mesas"> | string;
    Consumos?: Prisma.ConsumosListRelationFilter;
    Reservas?: Prisma.ReservasListRelationFilter;
}, "IdMesa" | "NumeroMesa">;
export type MesasOrderByWithAggregationInput = {
    IdMesa?: Prisma.SortOrder;
    NumeroMesa?: Prisma.SortOrder;
    Estado?: Prisma.SortOrder;
    _count?: Prisma.MesasCountOrderByAggregateInput;
    _avg?: Prisma.MesasAvgOrderByAggregateInput;
    _max?: Prisma.MesasMaxOrderByAggregateInput;
    _min?: Prisma.MesasMinOrderByAggregateInput;
    _sum?: Prisma.MesasSumOrderByAggregateInput;
};
export type MesasScalarWhereWithAggregatesInput = {
    AND?: Prisma.MesasScalarWhereWithAggregatesInput | Prisma.MesasScalarWhereWithAggregatesInput[];
    OR?: Prisma.MesasScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MesasScalarWhereWithAggregatesInput | Prisma.MesasScalarWhereWithAggregatesInput[];
    IdMesa?: Prisma.IntWithAggregatesFilter<"Mesas"> | number;
    NumeroMesa?: Prisma.IntWithAggregatesFilter<"Mesas"> | number;
    Estado?: Prisma.StringWithAggregatesFilter<"Mesas"> | string;
};
export type MesasCreateInput = {
    NumeroMesa: number;
    Estado: string;
    Consumos?: Prisma.ConsumosCreateNestedManyWithoutMesasInput;
    Reservas?: Prisma.ReservasCreateNestedManyWithoutMesasInput;
};
export type MesasUncheckedCreateInput = {
    IdMesa?: number;
    NumeroMesa: number;
    Estado: string;
    Consumos?: Prisma.ConsumosUncheckedCreateNestedManyWithoutMesasInput;
    Reservas?: Prisma.ReservasUncheckedCreateNestedManyWithoutMesasInput;
};
export type MesasUpdateInput = {
    NumeroMesa?: Prisma.IntFieldUpdateOperationsInput | number;
    Estado?: Prisma.StringFieldUpdateOperationsInput | string;
    Consumos?: Prisma.ConsumosUpdateManyWithoutMesasNestedInput;
    Reservas?: Prisma.ReservasUpdateManyWithoutMesasNestedInput;
};
export type MesasUncheckedUpdateInput = {
    IdMesa?: Prisma.IntFieldUpdateOperationsInput | number;
    NumeroMesa?: Prisma.IntFieldUpdateOperationsInput | number;
    Estado?: Prisma.StringFieldUpdateOperationsInput | string;
    Consumos?: Prisma.ConsumosUncheckedUpdateManyWithoutMesasNestedInput;
    Reservas?: Prisma.ReservasUncheckedUpdateManyWithoutMesasNestedInput;
};
export type MesasCreateManyInput = {
    IdMesa?: number;
    NumeroMesa: number;
    Estado: string;
};
export type MesasUpdateManyMutationInput = {
    NumeroMesa?: Prisma.IntFieldUpdateOperationsInput | number;
    Estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MesasUncheckedUpdateManyInput = {
    IdMesa?: Prisma.IntFieldUpdateOperationsInput | number;
    NumeroMesa?: Prisma.IntFieldUpdateOperationsInput | number;
    Estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MesasScalarRelationFilter = {
    is?: Prisma.MesasWhereInput;
    isNot?: Prisma.MesasWhereInput;
};
export type MesasCountOrderByAggregateInput = {
    IdMesa?: Prisma.SortOrder;
    NumeroMesa?: Prisma.SortOrder;
    Estado?: Prisma.SortOrder;
};
export type MesasAvgOrderByAggregateInput = {
    IdMesa?: Prisma.SortOrder;
    NumeroMesa?: Prisma.SortOrder;
};
export type MesasMaxOrderByAggregateInput = {
    IdMesa?: Prisma.SortOrder;
    NumeroMesa?: Prisma.SortOrder;
    Estado?: Prisma.SortOrder;
};
export type MesasMinOrderByAggregateInput = {
    IdMesa?: Prisma.SortOrder;
    NumeroMesa?: Prisma.SortOrder;
    Estado?: Prisma.SortOrder;
};
export type MesasSumOrderByAggregateInput = {
    IdMesa?: Prisma.SortOrder;
    NumeroMesa?: Prisma.SortOrder;
};
export type MesasCreateNestedOneWithoutConsumosInput = {
    create?: Prisma.XOR<Prisma.MesasCreateWithoutConsumosInput, Prisma.MesasUncheckedCreateWithoutConsumosInput>;
    connectOrCreate?: Prisma.MesasCreateOrConnectWithoutConsumosInput;
    connect?: Prisma.MesasWhereUniqueInput;
};
export type MesasUpdateOneRequiredWithoutConsumosNestedInput = {
    create?: Prisma.XOR<Prisma.MesasCreateWithoutConsumosInput, Prisma.MesasUncheckedCreateWithoutConsumosInput>;
    connectOrCreate?: Prisma.MesasCreateOrConnectWithoutConsumosInput;
    upsert?: Prisma.MesasUpsertWithoutConsumosInput;
    connect?: Prisma.MesasWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MesasUpdateToOneWithWhereWithoutConsumosInput, Prisma.MesasUpdateWithoutConsumosInput>, Prisma.MesasUncheckedUpdateWithoutConsumosInput>;
};
export type MesasCreateNestedOneWithoutReservasInput = {
    create?: Prisma.XOR<Prisma.MesasCreateWithoutReservasInput, Prisma.MesasUncheckedCreateWithoutReservasInput>;
    connectOrCreate?: Prisma.MesasCreateOrConnectWithoutReservasInput;
    connect?: Prisma.MesasWhereUniqueInput;
};
export type MesasUpdateOneRequiredWithoutReservasNestedInput = {
    create?: Prisma.XOR<Prisma.MesasCreateWithoutReservasInput, Prisma.MesasUncheckedCreateWithoutReservasInput>;
    connectOrCreate?: Prisma.MesasCreateOrConnectWithoutReservasInput;
    upsert?: Prisma.MesasUpsertWithoutReservasInput;
    connect?: Prisma.MesasWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MesasUpdateToOneWithWhereWithoutReservasInput, Prisma.MesasUpdateWithoutReservasInput>, Prisma.MesasUncheckedUpdateWithoutReservasInput>;
};
export type MesasCreateWithoutConsumosInput = {
    NumeroMesa: number;
    Estado: string;
    Reservas?: Prisma.ReservasCreateNestedManyWithoutMesasInput;
};
export type MesasUncheckedCreateWithoutConsumosInput = {
    IdMesa?: number;
    NumeroMesa: number;
    Estado: string;
    Reservas?: Prisma.ReservasUncheckedCreateNestedManyWithoutMesasInput;
};
export type MesasCreateOrConnectWithoutConsumosInput = {
    where: Prisma.MesasWhereUniqueInput;
    create: Prisma.XOR<Prisma.MesasCreateWithoutConsumosInput, Prisma.MesasUncheckedCreateWithoutConsumosInput>;
};
export type MesasUpsertWithoutConsumosInput = {
    update: Prisma.XOR<Prisma.MesasUpdateWithoutConsumosInput, Prisma.MesasUncheckedUpdateWithoutConsumosInput>;
    create: Prisma.XOR<Prisma.MesasCreateWithoutConsumosInput, Prisma.MesasUncheckedCreateWithoutConsumosInput>;
    where?: Prisma.MesasWhereInput;
};
export type MesasUpdateToOneWithWhereWithoutConsumosInput = {
    where?: Prisma.MesasWhereInput;
    data: Prisma.XOR<Prisma.MesasUpdateWithoutConsumosInput, Prisma.MesasUncheckedUpdateWithoutConsumosInput>;
};
export type MesasUpdateWithoutConsumosInput = {
    NumeroMesa?: Prisma.IntFieldUpdateOperationsInput | number;
    Estado?: Prisma.StringFieldUpdateOperationsInput | string;
    Reservas?: Prisma.ReservasUpdateManyWithoutMesasNestedInput;
};
export type MesasUncheckedUpdateWithoutConsumosInput = {
    IdMesa?: Prisma.IntFieldUpdateOperationsInput | number;
    NumeroMesa?: Prisma.IntFieldUpdateOperationsInput | number;
    Estado?: Prisma.StringFieldUpdateOperationsInput | string;
    Reservas?: Prisma.ReservasUncheckedUpdateManyWithoutMesasNestedInput;
};
export type MesasCreateWithoutReservasInput = {
    NumeroMesa: number;
    Estado: string;
    Consumos?: Prisma.ConsumosCreateNestedManyWithoutMesasInput;
};
export type MesasUncheckedCreateWithoutReservasInput = {
    IdMesa?: number;
    NumeroMesa: number;
    Estado: string;
    Consumos?: Prisma.ConsumosUncheckedCreateNestedManyWithoutMesasInput;
};
export type MesasCreateOrConnectWithoutReservasInput = {
    where: Prisma.MesasWhereUniqueInput;
    create: Prisma.XOR<Prisma.MesasCreateWithoutReservasInput, Prisma.MesasUncheckedCreateWithoutReservasInput>;
};
export type MesasUpsertWithoutReservasInput = {
    update: Prisma.XOR<Prisma.MesasUpdateWithoutReservasInput, Prisma.MesasUncheckedUpdateWithoutReservasInput>;
    create: Prisma.XOR<Prisma.MesasCreateWithoutReservasInput, Prisma.MesasUncheckedCreateWithoutReservasInput>;
    where?: Prisma.MesasWhereInput;
};
export type MesasUpdateToOneWithWhereWithoutReservasInput = {
    where?: Prisma.MesasWhereInput;
    data: Prisma.XOR<Prisma.MesasUpdateWithoutReservasInput, Prisma.MesasUncheckedUpdateWithoutReservasInput>;
};
export type MesasUpdateWithoutReservasInput = {
    NumeroMesa?: Prisma.IntFieldUpdateOperationsInput | number;
    Estado?: Prisma.StringFieldUpdateOperationsInput | string;
    Consumos?: Prisma.ConsumosUpdateManyWithoutMesasNestedInput;
};
export type MesasUncheckedUpdateWithoutReservasInput = {
    IdMesa?: Prisma.IntFieldUpdateOperationsInput | number;
    NumeroMesa?: Prisma.IntFieldUpdateOperationsInput | number;
    Estado?: Prisma.StringFieldUpdateOperationsInput | string;
    Consumos?: Prisma.ConsumosUncheckedUpdateManyWithoutMesasNestedInput;
};
export type MesasCountOutputType = {
    Consumos: number;
    Reservas: number;
};
export type MesasCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Consumos?: boolean | MesasCountOutputTypeCountConsumosArgs;
    Reservas?: boolean | MesasCountOutputTypeCountReservasArgs;
};
export type MesasCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MesasCountOutputTypeSelect<ExtArgs> | null;
};
export type MesasCountOutputTypeCountConsumosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsumosWhereInput;
};
export type MesasCountOutputTypeCountReservasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReservasWhereInput;
};
export type MesasSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IdMesa?: boolean;
    NumeroMesa?: boolean;
    Estado?: boolean;
    Consumos?: boolean | Prisma.Mesas$ConsumosArgs<ExtArgs>;
    Reservas?: boolean | Prisma.Mesas$ReservasArgs<ExtArgs>;
    _count?: boolean | Prisma.MesasCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mesas"]>;
export type MesasSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IdMesa?: boolean;
    NumeroMesa?: boolean;
    Estado?: boolean;
}, ExtArgs["result"]["mesas"]>;
export type MesasSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IdMesa?: boolean;
    NumeroMesa?: boolean;
    Estado?: boolean;
}, ExtArgs["result"]["mesas"]>;
export type MesasSelectScalar = {
    IdMesa?: boolean;
    NumeroMesa?: boolean;
    Estado?: boolean;
};
export type MesasOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"IdMesa" | "NumeroMesa" | "Estado", ExtArgs["result"]["mesas"]>;
export type MesasInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Consumos?: boolean | Prisma.Mesas$ConsumosArgs<ExtArgs>;
    Reservas?: boolean | Prisma.Mesas$ReservasArgs<ExtArgs>;
    _count?: boolean | Prisma.MesasCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MesasIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type MesasIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $MesasPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Mesas";
    objects: {
        Consumos: Prisma.$ConsumosPayload<ExtArgs>[];
        Reservas: Prisma.$ReservasPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        IdMesa: number;
        NumeroMesa: number;
        Estado: string;
    }, ExtArgs["result"]["mesas"]>;
    composites: {};
};
export type MesasGetPayload<S extends boolean | null | undefined | MesasDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MesasPayload, S>;
export type MesasCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MesasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MesasCountAggregateInputType | true;
};
export interface MesasDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Mesas'];
        meta: {
            name: 'Mesas';
        };
    };
    findUnique<T extends MesasFindUniqueArgs>(args: Prisma.SelectSubset<T, MesasFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MesasClient<runtime.Types.Result.GetResult<Prisma.$MesasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MesasFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MesasFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MesasClient<runtime.Types.Result.GetResult<Prisma.$MesasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MesasFindFirstArgs>(args?: Prisma.SelectSubset<T, MesasFindFirstArgs<ExtArgs>>): Prisma.Prisma__MesasClient<runtime.Types.Result.GetResult<Prisma.$MesasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MesasFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MesasFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MesasClient<runtime.Types.Result.GetResult<Prisma.$MesasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MesasFindManyArgs>(args?: Prisma.SelectSubset<T, MesasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MesasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MesasCreateArgs>(args: Prisma.SelectSubset<T, MesasCreateArgs<ExtArgs>>): Prisma.Prisma__MesasClient<runtime.Types.Result.GetResult<Prisma.$MesasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MesasCreateManyArgs>(args?: Prisma.SelectSubset<T, MesasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MesasCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MesasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MesasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MesasDeleteArgs>(args: Prisma.SelectSubset<T, MesasDeleteArgs<ExtArgs>>): Prisma.Prisma__MesasClient<runtime.Types.Result.GetResult<Prisma.$MesasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MesasUpdateArgs>(args: Prisma.SelectSubset<T, MesasUpdateArgs<ExtArgs>>): Prisma.Prisma__MesasClient<runtime.Types.Result.GetResult<Prisma.$MesasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MesasDeleteManyArgs>(args?: Prisma.SelectSubset<T, MesasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MesasUpdateManyArgs>(args: Prisma.SelectSubset<T, MesasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MesasUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MesasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MesasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MesasUpsertArgs>(args: Prisma.SelectSubset<T, MesasUpsertArgs<ExtArgs>>): Prisma.Prisma__MesasClient<runtime.Types.Result.GetResult<Prisma.$MesasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MesasCountArgs>(args?: Prisma.Subset<T, MesasCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MesasCountAggregateOutputType> : number>;
    aggregate<T extends MesasAggregateArgs>(args: Prisma.Subset<T, MesasAggregateArgs>): Prisma.PrismaPromise<GetMesasAggregateType<T>>;
    groupBy<T extends MesasGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MesasGroupByArgs['orderBy'];
    } : {
        orderBy?: MesasGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MesasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMesasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MesasFieldRefs;
}
export interface Prisma__MesasClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Consumos<T extends Prisma.Mesas$ConsumosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Mesas$ConsumosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsumosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    Reservas<T extends Prisma.Mesas$ReservasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Mesas$ReservasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MesasFieldRefs {
    readonly IdMesa: Prisma.FieldRef<"Mesas", 'Int'>;
    readonly NumeroMesa: Prisma.FieldRef<"Mesas", 'Int'>;
    readonly Estado: Prisma.FieldRef<"Mesas", 'String'>;
}
export type MesasFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MesasSelect<ExtArgs> | null;
    omit?: Prisma.MesasOmit<ExtArgs> | null;
    include?: Prisma.MesasInclude<ExtArgs> | null;
    where: Prisma.MesasWhereUniqueInput;
};
export type MesasFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MesasSelect<ExtArgs> | null;
    omit?: Prisma.MesasOmit<ExtArgs> | null;
    include?: Prisma.MesasInclude<ExtArgs> | null;
    where: Prisma.MesasWhereUniqueInput;
};
export type MesasFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MesasSelect<ExtArgs> | null;
    omit?: Prisma.MesasOmit<ExtArgs> | null;
    include?: Prisma.MesasInclude<ExtArgs> | null;
    where?: Prisma.MesasWhereInput;
    orderBy?: Prisma.MesasOrderByWithRelationInput | Prisma.MesasOrderByWithRelationInput[];
    cursor?: Prisma.MesasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MesasScalarFieldEnum | Prisma.MesasScalarFieldEnum[];
};
export type MesasFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MesasSelect<ExtArgs> | null;
    omit?: Prisma.MesasOmit<ExtArgs> | null;
    include?: Prisma.MesasInclude<ExtArgs> | null;
    where?: Prisma.MesasWhereInput;
    orderBy?: Prisma.MesasOrderByWithRelationInput | Prisma.MesasOrderByWithRelationInput[];
    cursor?: Prisma.MesasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MesasScalarFieldEnum | Prisma.MesasScalarFieldEnum[];
};
export type MesasFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MesasSelect<ExtArgs> | null;
    omit?: Prisma.MesasOmit<ExtArgs> | null;
    include?: Prisma.MesasInclude<ExtArgs> | null;
    where?: Prisma.MesasWhereInput;
    orderBy?: Prisma.MesasOrderByWithRelationInput | Prisma.MesasOrderByWithRelationInput[];
    cursor?: Prisma.MesasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MesasScalarFieldEnum | Prisma.MesasScalarFieldEnum[];
};
export type MesasCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MesasSelect<ExtArgs> | null;
    omit?: Prisma.MesasOmit<ExtArgs> | null;
    include?: Prisma.MesasInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MesasCreateInput, Prisma.MesasUncheckedCreateInput>;
};
export type MesasCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MesasCreateManyInput | Prisma.MesasCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MesasCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MesasSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MesasOmit<ExtArgs> | null;
    data: Prisma.MesasCreateManyInput | Prisma.MesasCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MesasUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MesasSelect<ExtArgs> | null;
    omit?: Prisma.MesasOmit<ExtArgs> | null;
    include?: Prisma.MesasInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MesasUpdateInput, Prisma.MesasUncheckedUpdateInput>;
    where: Prisma.MesasWhereUniqueInput;
};
export type MesasUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MesasUpdateManyMutationInput, Prisma.MesasUncheckedUpdateManyInput>;
    where?: Prisma.MesasWhereInput;
    limit?: number;
};
export type MesasUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MesasSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MesasOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MesasUpdateManyMutationInput, Prisma.MesasUncheckedUpdateManyInput>;
    where?: Prisma.MesasWhereInput;
    limit?: number;
};
export type MesasUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MesasSelect<ExtArgs> | null;
    omit?: Prisma.MesasOmit<ExtArgs> | null;
    include?: Prisma.MesasInclude<ExtArgs> | null;
    where: Prisma.MesasWhereUniqueInput;
    create: Prisma.XOR<Prisma.MesasCreateInput, Prisma.MesasUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MesasUpdateInput, Prisma.MesasUncheckedUpdateInput>;
};
export type MesasDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MesasSelect<ExtArgs> | null;
    omit?: Prisma.MesasOmit<ExtArgs> | null;
    include?: Prisma.MesasInclude<ExtArgs> | null;
    where: Prisma.MesasWhereUniqueInput;
};
export type MesasDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MesasWhereInput;
    limit?: number;
};
export type Mesas$ConsumosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Mesas$ReservasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MesasDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MesasSelect<ExtArgs> | null;
    omit?: Prisma.MesasOmit<ExtArgs> | null;
    include?: Prisma.MesasInclude<ExtArgs> | null;
};
