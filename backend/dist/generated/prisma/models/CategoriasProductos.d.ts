import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CategoriasProductosModel = runtime.Types.Result.DefaultSelection<Prisma.$CategoriasProductosPayload>;
export type AggregateCategoriasProductos = {
    _count: CategoriasProductosCountAggregateOutputType | null;
    _avg: CategoriasProductosAvgAggregateOutputType | null;
    _sum: CategoriasProductosSumAggregateOutputType | null;
    _min: CategoriasProductosMinAggregateOutputType | null;
    _max: CategoriasProductosMaxAggregateOutputType | null;
};
export type CategoriasProductosAvgAggregateOutputType = {
    IdCategoria: number | null;
};
export type CategoriasProductosSumAggregateOutputType = {
    IdCategoria: number | null;
};
export type CategoriasProductosMinAggregateOutputType = {
    IdCategoria: number | null;
    Nombre: string | null;
};
export type CategoriasProductosMaxAggregateOutputType = {
    IdCategoria: number | null;
    Nombre: string | null;
};
export type CategoriasProductosCountAggregateOutputType = {
    IdCategoria: number;
    Nombre: number;
    _all: number;
};
export type CategoriasProductosAvgAggregateInputType = {
    IdCategoria?: true;
};
export type CategoriasProductosSumAggregateInputType = {
    IdCategoria?: true;
};
export type CategoriasProductosMinAggregateInputType = {
    IdCategoria?: true;
    Nombre?: true;
};
export type CategoriasProductosMaxAggregateInputType = {
    IdCategoria?: true;
    Nombre?: true;
};
export type CategoriasProductosCountAggregateInputType = {
    IdCategoria?: true;
    Nombre?: true;
    _all?: true;
};
export type CategoriasProductosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoriasProductosWhereInput;
    orderBy?: Prisma.CategoriasProductosOrderByWithRelationInput | Prisma.CategoriasProductosOrderByWithRelationInput[];
    cursor?: Prisma.CategoriasProductosWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CategoriasProductosCountAggregateInputType;
    _avg?: CategoriasProductosAvgAggregateInputType;
    _sum?: CategoriasProductosSumAggregateInputType;
    _min?: CategoriasProductosMinAggregateInputType;
    _max?: CategoriasProductosMaxAggregateInputType;
};
export type GetCategoriasProductosAggregateType<T extends CategoriasProductosAggregateArgs> = {
    [P in keyof T & keyof AggregateCategoriasProductos]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCategoriasProductos[P]> : Prisma.GetScalarType<T[P], AggregateCategoriasProductos[P]>;
};
export type CategoriasProductosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoriasProductosWhereInput;
    orderBy?: Prisma.CategoriasProductosOrderByWithAggregationInput | Prisma.CategoriasProductosOrderByWithAggregationInput[];
    by: Prisma.CategoriasProductosScalarFieldEnum[] | Prisma.CategoriasProductosScalarFieldEnum;
    having?: Prisma.CategoriasProductosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoriasProductosCountAggregateInputType | true;
    _avg?: CategoriasProductosAvgAggregateInputType;
    _sum?: CategoriasProductosSumAggregateInputType;
    _min?: CategoriasProductosMinAggregateInputType;
    _max?: CategoriasProductosMaxAggregateInputType;
};
export type CategoriasProductosGroupByOutputType = {
    IdCategoria: number;
    Nombre: string;
    _count: CategoriasProductosCountAggregateOutputType | null;
    _avg: CategoriasProductosAvgAggregateOutputType | null;
    _sum: CategoriasProductosSumAggregateOutputType | null;
    _min: CategoriasProductosMinAggregateOutputType | null;
    _max: CategoriasProductosMaxAggregateOutputType | null;
};
export type GetCategoriasProductosGroupByPayload<T extends CategoriasProductosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CategoriasProductosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CategoriasProductosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CategoriasProductosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CategoriasProductosGroupByOutputType[P]>;
}>>;
export type CategoriasProductosWhereInput = {
    AND?: Prisma.CategoriasProductosWhereInput | Prisma.CategoriasProductosWhereInput[];
    OR?: Prisma.CategoriasProductosWhereInput[];
    NOT?: Prisma.CategoriasProductosWhereInput | Prisma.CategoriasProductosWhereInput[];
    IdCategoria?: Prisma.IntFilter<"CategoriasProductos"> | number;
    Nombre?: Prisma.StringFilter<"CategoriasProductos"> | string;
    Productos?: Prisma.ProductosListRelationFilter;
};
export type CategoriasProductosOrderByWithRelationInput = {
    IdCategoria?: Prisma.SortOrder;
    Nombre?: Prisma.SortOrder;
    Productos?: Prisma.ProductosOrderByRelationAggregateInput;
};
export type CategoriasProductosWhereUniqueInput = Prisma.AtLeast<{
    IdCategoria?: number;
    AND?: Prisma.CategoriasProductosWhereInput | Prisma.CategoriasProductosWhereInput[];
    OR?: Prisma.CategoriasProductosWhereInput[];
    NOT?: Prisma.CategoriasProductosWhereInput | Prisma.CategoriasProductosWhereInput[];
    Nombre?: Prisma.StringFilter<"CategoriasProductos"> | string;
    Productos?: Prisma.ProductosListRelationFilter;
}, "IdCategoria">;
export type CategoriasProductosOrderByWithAggregationInput = {
    IdCategoria?: Prisma.SortOrder;
    Nombre?: Prisma.SortOrder;
    _count?: Prisma.CategoriasProductosCountOrderByAggregateInput;
    _avg?: Prisma.CategoriasProductosAvgOrderByAggregateInput;
    _max?: Prisma.CategoriasProductosMaxOrderByAggregateInput;
    _min?: Prisma.CategoriasProductosMinOrderByAggregateInput;
    _sum?: Prisma.CategoriasProductosSumOrderByAggregateInput;
};
export type CategoriasProductosScalarWhereWithAggregatesInput = {
    AND?: Prisma.CategoriasProductosScalarWhereWithAggregatesInput | Prisma.CategoriasProductosScalarWhereWithAggregatesInput[];
    OR?: Prisma.CategoriasProductosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CategoriasProductosScalarWhereWithAggregatesInput | Prisma.CategoriasProductosScalarWhereWithAggregatesInput[];
    IdCategoria?: Prisma.IntWithAggregatesFilter<"CategoriasProductos"> | number;
    Nombre?: Prisma.StringWithAggregatesFilter<"CategoriasProductos"> | string;
};
export type CategoriasProductosCreateInput = {
    Nombre: string;
    Productos?: Prisma.ProductosCreateNestedManyWithoutCategoriasProductosInput;
};
export type CategoriasProductosUncheckedCreateInput = {
    IdCategoria?: number;
    Nombre: string;
    Productos?: Prisma.ProductosUncheckedCreateNestedManyWithoutCategoriasProductosInput;
};
export type CategoriasProductosUpdateInput = {
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    Productos?: Prisma.ProductosUpdateManyWithoutCategoriasProductosNestedInput;
};
export type CategoriasProductosUncheckedUpdateInput = {
    IdCategoria?: Prisma.IntFieldUpdateOperationsInput | number;
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    Productos?: Prisma.ProductosUncheckedUpdateManyWithoutCategoriasProductosNestedInput;
};
export type CategoriasProductosCreateManyInput = {
    IdCategoria?: number;
    Nombre: string;
};
export type CategoriasProductosUpdateManyMutationInput = {
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CategoriasProductosUncheckedUpdateManyInput = {
    IdCategoria?: Prisma.IntFieldUpdateOperationsInput | number;
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CategoriasProductosCountOrderByAggregateInput = {
    IdCategoria?: Prisma.SortOrder;
    Nombre?: Prisma.SortOrder;
};
export type CategoriasProductosAvgOrderByAggregateInput = {
    IdCategoria?: Prisma.SortOrder;
};
export type CategoriasProductosMaxOrderByAggregateInput = {
    IdCategoria?: Prisma.SortOrder;
    Nombre?: Prisma.SortOrder;
};
export type CategoriasProductosMinOrderByAggregateInput = {
    IdCategoria?: Prisma.SortOrder;
    Nombre?: Prisma.SortOrder;
};
export type CategoriasProductosSumOrderByAggregateInput = {
    IdCategoria?: Prisma.SortOrder;
};
export type CategoriasProductosScalarRelationFilter = {
    is?: Prisma.CategoriasProductosWhereInput;
    isNot?: Prisma.CategoriasProductosWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type CategoriasProductosCreateNestedOneWithoutProductosInput = {
    create?: Prisma.XOR<Prisma.CategoriasProductosCreateWithoutProductosInput, Prisma.CategoriasProductosUncheckedCreateWithoutProductosInput>;
    connectOrCreate?: Prisma.CategoriasProductosCreateOrConnectWithoutProductosInput;
    connect?: Prisma.CategoriasProductosWhereUniqueInput;
};
export type CategoriasProductosUpdateOneRequiredWithoutProductosNestedInput = {
    create?: Prisma.XOR<Prisma.CategoriasProductosCreateWithoutProductosInput, Prisma.CategoriasProductosUncheckedCreateWithoutProductosInput>;
    connectOrCreate?: Prisma.CategoriasProductosCreateOrConnectWithoutProductosInput;
    upsert?: Prisma.CategoriasProductosUpsertWithoutProductosInput;
    connect?: Prisma.CategoriasProductosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CategoriasProductosUpdateToOneWithWhereWithoutProductosInput, Prisma.CategoriasProductosUpdateWithoutProductosInput>, Prisma.CategoriasProductosUncheckedUpdateWithoutProductosInput>;
};
export type CategoriasProductosCreateWithoutProductosInput = {
    Nombre: string;
};
export type CategoriasProductosUncheckedCreateWithoutProductosInput = {
    IdCategoria?: number;
    Nombre: string;
};
export type CategoriasProductosCreateOrConnectWithoutProductosInput = {
    where: Prisma.CategoriasProductosWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategoriasProductosCreateWithoutProductosInput, Prisma.CategoriasProductosUncheckedCreateWithoutProductosInput>;
};
export type CategoriasProductosUpsertWithoutProductosInput = {
    update: Prisma.XOR<Prisma.CategoriasProductosUpdateWithoutProductosInput, Prisma.CategoriasProductosUncheckedUpdateWithoutProductosInput>;
    create: Prisma.XOR<Prisma.CategoriasProductosCreateWithoutProductosInput, Prisma.CategoriasProductosUncheckedCreateWithoutProductosInput>;
    where?: Prisma.CategoriasProductosWhereInput;
};
export type CategoriasProductosUpdateToOneWithWhereWithoutProductosInput = {
    where?: Prisma.CategoriasProductosWhereInput;
    data: Prisma.XOR<Prisma.CategoriasProductosUpdateWithoutProductosInput, Prisma.CategoriasProductosUncheckedUpdateWithoutProductosInput>;
};
export type CategoriasProductosUpdateWithoutProductosInput = {
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CategoriasProductosUncheckedUpdateWithoutProductosInput = {
    IdCategoria?: Prisma.IntFieldUpdateOperationsInput | number;
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CategoriasProductosCountOutputType = {
    Productos: number;
};
export type CategoriasProductosCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Productos?: boolean | CategoriasProductosCountOutputTypeCountProductosArgs;
};
export type CategoriasProductosCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriasProductosCountOutputTypeSelect<ExtArgs> | null;
};
export type CategoriasProductosCountOutputTypeCountProductosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductosWhereInput;
};
export type CategoriasProductosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IdCategoria?: boolean;
    Nombre?: boolean;
    Productos?: boolean | Prisma.CategoriasProductos$ProductosArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoriasProductosCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["categoriasProductos"]>;
export type CategoriasProductosSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IdCategoria?: boolean;
    Nombre?: boolean;
}, ExtArgs["result"]["categoriasProductos"]>;
export type CategoriasProductosSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IdCategoria?: boolean;
    Nombre?: boolean;
}, ExtArgs["result"]["categoriasProductos"]>;
export type CategoriasProductosSelectScalar = {
    IdCategoria?: boolean;
    Nombre?: boolean;
};
export type CategoriasProductosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"IdCategoria" | "Nombre", ExtArgs["result"]["categoriasProductos"]>;
export type CategoriasProductosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Productos?: boolean | Prisma.CategoriasProductos$ProductosArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoriasProductosCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CategoriasProductosIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CategoriasProductosIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CategoriasProductosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CategoriasProductos";
    objects: {
        Productos: Prisma.$ProductosPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        IdCategoria: number;
        Nombre: string;
    }, ExtArgs["result"]["categoriasProductos"]>;
    composites: {};
};
export type CategoriasProductosGetPayload<S extends boolean | null | undefined | CategoriasProductosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CategoriasProductosPayload, S>;
export type CategoriasProductosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CategoriasProductosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CategoriasProductosCountAggregateInputType | true;
};
export interface CategoriasProductosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CategoriasProductos'];
        meta: {
            name: 'CategoriasProductos';
        };
    };
    findUnique<T extends CategoriasProductosFindUniqueArgs>(args: Prisma.SelectSubset<T, CategoriasProductosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CategoriasProductosClient<runtime.Types.Result.GetResult<Prisma.$CategoriasProductosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CategoriasProductosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CategoriasProductosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CategoriasProductosClient<runtime.Types.Result.GetResult<Prisma.$CategoriasProductosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CategoriasProductosFindFirstArgs>(args?: Prisma.SelectSubset<T, CategoriasProductosFindFirstArgs<ExtArgs>>): Prisma.Prisma__CategoriasProductosClient<runtime.Types.Result.GetResult<Prisma.$CategoriasProductosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CategoriasProductosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CategoriasProductosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CategoriasProductosClient<runtime.Types.Result.GetResult<Prisma.$CategoriasProductosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CategoriasProductosFindManyArgs>(args?: Prisma.SelectSubset<T, CategoriasProductosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategoriasProductosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CategoriasProductosCreateArgs>(args: Prisma.SelectSubset<T, CategoriasProductosCreateArgs<ExtArgs>>): Prisma.Prisma__CategoriasProductosClient<runtime.Types.Result.GetResult<Prisma.$CategoriasProductosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CategoriasProductosCreateManyArgs>(args?: Prisma.SelectSubset<T, CategoriasProductosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CategoriasProductosCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CategoriasProductosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategoriasProductosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CategoriasProductosDeleteArgs>(args: Prisma.SelectSubset<T, CategoriasProductosDeleteArgs<ExtArgs>>): Prisma.Prisma__CategoriasProductosClient<runtime.Types.Result.GetResult<Prisma.$CategoriasProductosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CategoriasProductosUpdateArgs>(args: Prisma.SelectSubset<T, CategoriasProductosUpdateArgs<ExtArgs>>): Prisma.Prisma__CategoriasProductosClient<runtime.Types.Result.GetResult<Prisma.$CategoriasProductosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CategoriasProductosDeleteManyArgs>(args?: Prisma.SelectSubset<T, CategoriasProductosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CategoriasProductosUpdateManyArgs>(args: Prisma.SelectSubset<T, CategoriasProductosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CategoriasProductosUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CategoriasProductosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategoriasProductosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CategoriasProductosUpsertArgs>(args: Prisma.SelectSubset<T, CategoriasProductosUpsertArgs<ExtArgs>>): Prisma.Prisma__CategoriasProductosClient<runtime.Types.Result.GetResult<Prisma.$CategoriasProductosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CategoriasProductosCountArgs>(args?: Prisma.Subset<T, CategoriasProductosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CategoriasProductosCountAggregateOutputType> : number>;
    aggregate<T extends CategoriasProductosAggregateArgs>(args: Prisma.Subset<T, CategoriasProductosAggregateArgs>): Prisma.PrismaPromise<GetCategoriasProductosAggregateType<T>>;
    groupBy<T extends CategoriasProductosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CategoriasProductosGroupByArgs['orderBy'];
    } : {
        orderBy?: CategoriasProductosGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CategoriasProductosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriasProductosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CategoriasProductosFieldRefs;
}
export interface Prisma__CategoriasProductosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Productos<T extends Prisma.CategoriasProductos$ProductosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoriasProductos$ProductosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CategoriasProductosFieldRefs {
    readonly IdCategoria: Prisma.FieldRef<"CategoriasProductos", 'Int'>;
    readonly Nombre: Prisma.FieldRef<"CategoriasProductos", 'String'>;
}
export type CategoriasProductosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriasProductosSelect<ExtArgs> | null;
    omit?: Prisma.CategoriasProductosOmit<ExtArgs> | null;
    include?: Prisma.CategoriasProductosInclude<ExtArgs> | null;
    where: Prisma.CategoriasProductosWhereUniqueInput;
};
export type CategoriasProductosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriasProductosSelect<ExtArgs> | null;
    omit?: Prisma.CategoriasProductosOmit<ExtArgs> | null;
    include?: Prisma.CategoriasProductosInclude<ExtArgs> | null;
    where: Prisma.CategoriasProductosWhereUniqueInput;
};
export type CategoriasProductosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriasProductosSelect<ExtArgs> | null;
    omit?: Prisma.CategoriasProductosOmit<ExtArgs> | null;
    include?: Prisma.CategoriasProductosInclude<ExtArgs> | null;
    where?: Prisma.CategoriasProductosWhereInput;
    orderBy?: Prisma.CategoriasProductosOrderByWithRelationInput | Prisma.CategoriasProductosOrderByWithRelationInput[];
    cursor?: Prisma.CategoriasProductosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriasProductosScalarFieldEnum | Prisma.CategoriasProductosScalarFieldEnum[];
};
export type CategoriasProductosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriasProductosSelect<ExtArgs> | null;
    omit?: Prisma.CategoriasProductosOmit<ExtArgs> | null;
    include?: Prisma.CategoriasProductosInclude<ExtArgs> | null;
    where?: Prisma.CategoriasProductosWhereInput;
    orderBy?: Prisma.CategoriasProductosOrderByWithRelationInput | Prisma.CategoriasProductosOrderByWithRelationInput[];
    cursor?: Prisma.CategoriasProductosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriasProductosScalarFieldEnum | Prisma.CategoriasProductosScalarFieldEnum[];
};
export type CategoriasProductosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriasProductosSelect<ExtArgs> | null;
    omit?: Prisma.CategoriasProductosOmit<ExtArgs> | null;
    include?: Prisma.CategoriasProductosInclude<ExtArgs> | null;
    where?: Prisma.CategoriasProductosWhereInput;
    orderBy?: Prisma.CategoriasProductosOrderByWithRelationInput | Prisma.CategoriasProductosOrderByWithRelationInput[];
    cursor?: Prisma.CategoriasProductosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriasProductosScalarFieldEnum | Prisma.CategoriasProductosScalarFieldEnum[];
};
export type CategoriasProductosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriasProductosSelect<ExtArgs> | null;
    omit?: Prisma.CategoriasProductosOmit<ExtArgs> | null;
    include?: Prisma.CategoriasProductosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CategoriasProductosCreateInput, Prisma.CategoriasProductosUncheckedCreateInput>;
};
export type CategoriasProductosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CategoriasProductosCreateManyInput | Prisma.CategoriasProductosCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CategoriasProductosCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriasProductosSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CategoriasProductosOmit<ExtArgs> | null;
    data: Prisma.CategoriasProductosCreateManyInput | Prisma.CategoriasProductosCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CategoriasProductosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriasProductosSelect<ExtArgs> | null;
    omit?: Prisma.CategoriasProductosOmit<ExtArgs> | null;
    include?: Prisma.CategoriasProductosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CategoriasProductosUpdateInput, Prisma.CategoriasProductosUncheckedUpdateInput>;
    where: Prisma.CategoriasProductosWhereUniqueInput;
};
export type CategoriasProductosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CategoriasProductosUpdateManyMutationInput, Prisma.CategoriasProductosUncheckedUpdateManyInput>;
    where?: Prisma.CategoriasProductosWhereInput;
    limit?: number;
};
export type CategoriasProductosUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriasProductosSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CategoriasProductosOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CategoriasProductosUpdateManyMutationInput, Prisma.CategoriasProductosUncheckedUpdateManyInput>;
    where?: Prisma.CategoriasProductosWhereInput;
    limit?: number;
};
export type CategoriasProductosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriasProductosSelect<ExtArgs> | null;
    omit?: Prisma.CategoriasProductosOmit<ExtArgs> | null;
    include?: Prisma.CategoriasProductosInclude<ExtArgs> | null;
    where: Prisma.CategoriasProductosWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategoriasProductosCreateInput, Prisma.CategoriasProductosUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CategoriasProductosUpdateInput, Prisma.CategoriasProductosUncheckedUpdateInput>;
};
export type CategoriasProductosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriasProductosSelect<ExtArgs> | null;
    omit?: Prisma.CategoriasProductosOmit<ExtArgs> | null;
    include?: Prisma.CategoriasProductosInclude<ExtArgs> | null;
    where: Prisma.CategoriasProductosWhereUniqueInput;
};
export type CategoriasProductosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoriasProductosWhereInput;
    limit?: number;
};
export type CategoriasProductos$ProductosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductosSelect<ExtArgs> | null;
    omit?: Prisma.ProductosOmit<ExtArgs> | null;
    include?: Prisma.ProductosInclude<ExtArgs> | null;
    where?: Prisma.ProductosWhereInput;
    orderBy?: Prisma.ProductosOrderByWithRelationInput | Prisma.ProductosOrderByWithRelationInput[];
    cursor?: Prisma.ProductosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductosScalarFieldEnum | Prisma.ProductosScalarFieldEnum[];
};
export type CategoriasProductosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriasProductosSelect<ExtArgs> | null;
    omit?: Prisma.CategoriasProductosOmit<ExtArgs> | null;
    include?: Prisma.CategoriasProductosInclude<ExtArgs> | null;
};
