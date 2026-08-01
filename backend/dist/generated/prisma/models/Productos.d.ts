import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProductosModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductosPayload>;
export type AggregateProductos = {
    _count: ProductosCountAggregateOutputType | null;
    _avg: ProductosAvgAggregateOutputType | null;
    _sum: ProductosSumAggregateOutputType | null;
    _min: ProductosMinAggregateOutputType | null;
    _max: ProductosMaxAggregateOutputType | null;
};
export type ProductosAvgAggregateOutputType = {
    IdProducto: number | null;
    Precio: runtime.Decimal | null;
    IdCategoria: number | null;
};
export type ProductosSumAggregateOutputType = {
    IdProducto: number | null;
    Precio: runtime.Decimal | null;
    IdCategoria: number | null;
};
export type ProductosMinAggregateOutputType = {
    IdProducto: number | null;
    Nombre: string | null;
    Precio: runtime.Decimal | null;
    IdCategoria: number | null;
    ImagenUrl: string | null;
};
export type ProductosMaxAggregateOutputType = {
    IdProducto: number | null;
    Nombre: string | null;
    Precio: runtime.Decimal | null;
    IdCategoria: number | null;
    ImagenUrl: string | null;
};
export type ProductosCountAggregateOutputType = {
    IdProducto: number;
    Nombre: number;
    Precio: number;
    IdCategoria: number;
    ImagenUrl: number;
    _all: number;
};
export type ProductosAvgAggregateInputType = {
    IdProducto?: true;
    Precio?: true;
    IdCategoria?: true;
};
export type ProductosSumAggregateInputType = {
    IdProducto?: true;
    Precio?: true;
    IdCategoria?: true;
};
export type ProductosMinAggregateInputType = {
    IdProducto?: true;
    Nombre?: true;
    Precio?: true;
    IdCategoria?: true;
    ImagenUrl?: true;
};
export type ProductosMaxAggregateInputType = {
    IdProducto?: true;
    Nombre?: true;
    Precio?: true;
    IdCategoria?: true;
    ImagenUrl?: true;
};
export type ProductosCountAggregateInputType = {
    IdProducto?: true;
    Nombre?: true;
    Precio?: true;
    IdCategoria?: true;
    ImagenUrl?: true;
    _all?: true;
};
export type ProductosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductosWhereInput;
    orderBy?: Prisma.ProductosOrderByWithRelationInput | Prisma.ProductosOrderByWithRelationInput[];
    cursor?: Prisma.ProductosWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductosCountAggregateInputType;
    _avg?: ProductosAvgAggregateInputType;
    _sum?: ProductosSumAggregateInputType;
    _min?: ProductosMinAggregateInputType;
    _max?: ProductosMaxAggregateInputType;
};
export type GetProductosAggregateType<T extends ProductosAggregateArgs> = {
    [P in keyof T & keyof AggregateProductos]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProductos[P]> : Prisma.GetScalarType<T[P], AggregateProductos[P]>;
};
export type ProductosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductosWhereInput;
    orderBy?: Prisma.ProductosOrderByWithAggregationInput | Prisma.ProductosOrderByWithAggregationInput[];
    by: Prisma.ProductosScalarFieldEnum[] | Prisma.ProductosScalarFieldEnum;
    having?: Prisma.ProductosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductosCountAggregateInputType | true;
    _avg?: ProductosAvgAggregateInputType;
    _sum?: ProductosSumAggregateInputType;
    _min?: ProductosMinAggregateInputType;
    _max?: ProductosMaxAggregateInputType;
};
export type ProductosGroupByOutputType = {
    IdProducto: number;
    Nombre: string;
    Precio: runtime.Decimal;
    IdCategoria: number;
    ImagenUrl: string | null;
    _count: ProductosCountAggregateOutputType | null;
    _avg: ProductosAvgAggregateOutputType | null;
    _sum: ProductosSumAggregateOutputType | null;
    _min: ProductosMinAggregateOutputType | null;
    _max: ProductosMaxAggregateOutputType | null;
};
export type GetProductosGroupByPayload<T extends ProductosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductosGroupByOutputType[P]>;
}>>;
export type ProductosWhereInput = {
    AND?: Prisma.ProductosWhereInput | Prisma.ProductosWhereInput[];
    OR?: Prisma.ProductosWhereInput[];
    NOT?: Prisma.ProductosWhereInput | Prisma.ProductosWhereInput[];
    IdProducto?: Prisma.IntFilter<"Productos"> | number;
    Nombre?: Prisma.StringFilter<"Productos"> | string;
    Precio?: Prisma.DecimalFilter<"Productos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    IdCategoria?: Prisma.IntFilter<"Productos"> | number;
    ImagenUrl?: Prisma.StringNullableFilter<"Productos"> | string | null;
    ConsumoDetalles?: Prisma.ConsumoDetallesListRelationFilter;
    CategoriasProductos?: Prisma.XOR<Prisma.CategoriasProductosScalarRelationFilter, Prisma.CategoriasProductosWhereInput>;
};
export type ProductosOrderByWithRelationInput = {
    IdProducto?: Prisma.SortOrder;
    Nombre?: Prisma.SortOrder;
    Precio?: Prisma.SortOrder;
    IdCategoria?: Prisma.SortOrder;
    ImagenUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    ConsumoDetalles?: Prisma.ConsumoDetallesOrderByRelationAggregateInput;
    CategoriasProductos?: Prisma.CategoriasProductosOrderByWithRelationInput;
};
export type ProductosWhereUniqueInput = Prisma.AtLeast<{
    IdProducto?: number;
    AND?: Prisma.ProductosWhereInput | Prisma.ProductosWhereInput[];
    OR?: Prisma.ProductosWhereInput[];
    NOT?: Prisma.ProductosWhereInput | Prisma.ProductosWhereInput[];
    Nombre?: Prisma.StringFilter<"Productos"> | string;
    Precio?: Prisma.DecimalFilter<"Productos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    IdCategoria?: Prisma.IntFilter<"Productos"> | number;
    ImagenUrl?: Prisma.StringNullableFilter<"Productos"> | string | null;
    ConsumoDetalles?: Prisma.ConsumoDetallesListRelationFilter;
    CategoriasProductos?: Prisma.XOR<Prisma.CategoriasProductosScalarRelationFilter, Prisma.CategoriasProductosWhereInput>;
}, "IdProducto">;
export type ProductosOrderByWithAggregationInput = {
    IdProducto?: Prisma.SortOrder;
    Nombre?: Prisma.SortOrder;
    Precio?: Prisma.SortOrder;
    IdCategoria?: Prisma.SortOrder;
    ImagenUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ProductosCountOrderByAggregateInput;
    _avg?: Prisma.ProductosAvgOrderByAggregateInput;
    _max?: Prisma.ProductosMaxOrderByAggregateInput;
    _min?: Prisma.ProductosMinOrderByAggregateInput;
    _sum?: Prisma.ProductosSumOrderByAggregateInput;
};
export type ProductosScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductosScalarWhereWithAggregatesInput | Prisma.ProductosScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductosScalarWhereWithAggregatesInput | Prisma.ProductosScalarWhereWithAggregatesInput[];
    IdProducto?: Prisma.IntWithAggregatesFilter<"Productos"> | number;
    Nombre?: Prisma.StringWithAggregatesFilter<"Productos"> | string;
    Precio?: Prisma.DecimalWithAggregatesFilter<"Productos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    IdCategoria?: Prisma.IntWithAggregatesFilter<"Productos"> | number;
    ImagenUrl?: Prisma.StringNullableWithAggregatesFilter<"Productos"> | string | null;
};
export type ProductosCreateInput = {
    Nombre: string;
    Precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ImagenUrl?: string | null;
    ConsumoDetalles?: Prisma.ConsumoDetallesCreateNestedManyWithoutProductosInput;
    CategoriasProductos: Prisma.CategoriasProductosCreateNestedOneWithoutProductosInput;
};
export type ProductosUncheckedCreateInput = {
    IdProducto?: number;
    Nombre: string;
    Precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    IdCategoria: number;
    ImagenUrl?: string | null;
    ConsumoDetalles?: Prisma.ConsumoDetallesUncheckedCreateNestedManyWithoutProductosInput;
};
export type ProductosUpdateInput = {
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    Precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ImagenUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ConsumoDetalles?: Prisma.ConsumoDetallesUpdateManyWithoutProductosNestedInput;
    CategoriasProductos?: Prisma.CategoriasProductosUpdateOneRequiredWithoutProductosNestedInput;
};
export type ProductosUncheckedUpdateInput = {
    IdProducto?: Prisma.IntFieldUpdateOperationsInput | number;
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    Precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    IdCategoria?: Prisma.IntFieldUpdateOperationsInput | number;
    ImagenUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ConsumoDetalles?: Prisma.ConsumoDetallesUncheckedUpdateManyWithoutProductosNestedInput;
};
export type ProductosCreateManyInput = {
    IdProducto?: number;
    Nombre: string;
    Precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    IdCategoria: number;
    ImagenUrl?: string | null;
};
export type ProductosUpdateManyMutationInput = {
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    Precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ImagenUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ProductosUncheckedUpdateManyInput = {
    IdProducto?: Prisma.IntFieldUpdateOperationsInput | number;
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    Precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    IdCategoria?: Prisma.IntFieldUpdateOperationsInput | number;
    ImagenUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ProductosListRelationFilter = {
    every?: Prisma.ProductosWhereInput;
    some?: Prisma.ProductosWhereInput;
    none?: Prisma.ProductosWhereInput;
};
export type ProductosOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductosScalarRelationFilter = {
    is?: Prisma.ProductosWhereInput;
    isNot?: Prisma.ProductosWhereInput;
};
export type ProductosCountOrderByAggregateInput = {
    IdProducto?: Prisma.SortOrder;
    Nombre?: Prisma.SortOrder;
    Precio?: Prisma.SortOrder;
    IdCategoria?: Prisma.SortOrder;
    ImagenUrl?: Prisma.SortOrder;
};
export type ProductosAvgOrderByAggregateInput = {
    IdProducto?: Prisma.SortOrder;
    Precio?: Prisma.SortOrder;
    IdCategoria?: Prisma.SortOrder;
};
export type ProductosMaxOrderByAggregateInput = {
    IdProducto?: Prisma.SortOrder;
    Nombre?: Prisma.SortOrder;
    Precio?: Prisma.SortOrder;
    IdCategoria?: Prisma.SortOrder;
    ImagenUrl?: Prisma.SortOrder;
};
export type ProductosMinOrderByAggregateInput = {
    IdProducto?: Prisma.SortOrder;
    Nombre?: Prisma.SortOrder;
    Precio?: Prisma.SortOrder;
    IdCategoria?: Prisma.SortOrder;
    ImagenUrl?: Prisma.SortOrder;
};
export type ProductosSumOrderByAggregateInput = {
    IdProducto?: Prisma.SortOrder;
    Precio?: Prisma.SortOrder;
    IdCategoria?: Prisma.SortOrder;
};
export type ProductosCreateNestedManyWithoutCategoriasProductosInput = {
    create?: Prisma.XOR<Prisma.ProductosCreateWithoutCategoriasProductosInput, Prisma.ProductosUncheckedCreateWithoutCategoriasProductosInput> | Prisma.ProductosCreateWithoutCategoriasProductosInput[] | Prisma.ProductosUncheckedCreateWithoutCategoriasProductosInput[];
    connectOrCreate?: Prisma.ProductosCreateOrConnectWithoutCategoriasProductosInput | Prisma.ProductosCreateOrConnectWithoutCategoriasProductosInput[];
    createMany?: Prisma.ProductosCreateManyCategoriasProductosInputEnvelope;
    connect?: Prisma.ProductosWhereUniqueInput | Prisma.ProductosWhereUniqueInput[];
};
export type ProductosUncheckedCreateNestedManyWithoutCategoriasProductosInput = {
    create?: Prisma.XOR<Prisma.ProductosCreateWithoutCategoriasProductosInput, Prisma.ProductosUncheckedCreateWithoutCategoriasProductosInput> | Prisma.ProductosCreateWithoutCategoriasProductosInput[] | Prisma.ProductosUncheckedCreateWithoutCategoriasProductosInput[];
    connectOrCreate?: Prisma.ProductosCreateOrConnectWithoutCategoriasProductosInput | Prisma.ProductosCreateOrConnectWithoutCategoriasProductosInput[];
    createMany?: Prisma.ProductosCreateManyCategoriasProductosInputEnvelope;
    connect?: Prisma.ProductosWhereUniqueInput | Prisma.ProductosWhereUniqueInput[];
};
export type ProductosUpdateManyWithoutCategoriasProductosNestedInput = {
    create?: Prisma.XOR<Prisma.ProductosCreateWithoutCategoriasProductosInput, Prisma.ProductosUncheckedCreateWithoutCategoriasProductosInput> | Prisma.ProductosCreateWithoutCategoriasProductosInput[] | Prisma.ProductosUncheckedCreateWithoutCategoriasProductosInput[];
    connectOrCreate?: Prisma.ProductosCreateOrConnectWithoutCategoriasProductosInput | Prisma.ProductosCreateOrConnectWithoutCategoriasProductosInput[];
    upsert?: Prisma.ProductosUpsertWithWhereUniqueWithoutCategoriasProductosInput | Prisma.ProductosUpsertWithWhereUniqueWithoutCategoriasProductosInput[];
    createMany?: Prisma.ProductosCreateManyCategoriasProductosInputEnvelope;
    set?: Prisma.ProductosWhereUniqueInput | Prisma.ProductosWhereUniqueInput[];
    disconnect?: Prisma.ProductosWhereUniqueInput | Prisma.ProductosWhereUniqueInput[];
    delete?: Prisma.ProductosWhereUniqueInput | Prisma.ProductosWhereUniqueInput[];
    connect?: Prisma.ProductosWhereUniqueInput | Prisma.ProductosWhereUniqueInput[];
    update?: Prisma.ProductosUpdateWithWhereUniqueWithoutCategoriasProductosInput | Prisma.ProductosUpdateWithWhereUniqueWithoutCategoriasProductosInput[];
    updateMany?: Prisma.ProductosUpdateManyWithWhereWithoutCategoriasProductosInput | Prisma.ProductosUpdateManyWithWhereWithoutCategoriasProductosInput[];
    deleteMany?: Prisma.ProductosScalarWhereInput | Prisma.ProductosScalarWhereInput[];
};
export type ProductosUncheckedUpdateManyWithoutCategoriasProductosNestedInput = {
    create?: Prisma.XOR<Prisma.ProductosCreateWithoutCategoriasProductosInput, Prisma.ProductosUncheckedCreateWithoutCategoriasProductosInput> | Prisma.ProductosCreateWithoutCategoriasProductosInput[] | Prisma.ProductosUncheckedCreateWithoutCategoriasProductosInput[];
    connectOrCreate?: Prisma.ProductosCreateOrConnectWithoutCategoriasProductosInput | Prisma.ProductosCreateOrConnectWithoutCategoriasProductosInput[];
    upsert?: Prisma.ProductosUpsertWithWhereUniqueWithoutCategoriasProductosInput | Prisma.ProductosUpsertWithWhereUniqueWithoutCategoriasProductosInput[];
    createMany?: Prisma.ProductosCreateManyCategoriasProductosInputEnvelope;
    set?: Prisma.ProductosWhereUniqueInput | Prisma.ProductosWhereUniqueInput[];
    disconnect?: Prisma.ProductosWhereUniqueInput | Prisma.ProductosWhereUniqueInput[];
    delete?: Prisma.ProductosWhereUniqueInput | Prisma.ProductosWhereUniqueInput[];
    connect?: Prisma.ProductosWhereUniqueInput | Prisma.ProductosWhereUniqueInput[];
    update?: Prisma.ProductosUpdateWithWhereUniqueWithoutCategoriasProductosInput | Prisma.ProductosUpdateWithWhereUniqueWithoutCategoriasProductosInput[];
    updateMany?: Prisma.ProductosUpdateManyWithWhereWithoutCategoriasProductosInput | Prisma.ProductosUpdateManyWithWhereWithoutCategoriasProductosInput[];
    deleteMany?: Prisma.ProductosScalarWhereInput | Prisma.ProductosScalarWhereInput[];
};
export type ProductosCreateNestedOneWithoutConsumoDetallesInput = {
    create?: Prisma.XOR<Prisma.ProductosCreateWithoutConsumoDetallesInput, Prisma.ProductosUncheckedCreateWithoutConsumoDetallesInput>;
    connectOrCreate?: Prisma.ProductosCreateOrConnectWithoutConsumoDetallesInput;
    connect?: Prisma.ProductosWhereUniqueInput;
};
export type ProductosUpdateOneRequiredWithoutConsumoDetallesNestedInput = {
    create?: Prisma.XOR<Prisma.ProductosCreateWithoutConsumoDetallesInput, Prisma.ProductosUncheckedCreateWithoutConsumoDetallesInput>;
    connectOrCreate?: Prisma.ProductosCreateOrConnectWithoutConsumoDetallesInput;
    upsert?: Prisma.ProductosUpsertWithoutConsumoDetallesInput;
    connect?: Prisma.ProductosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductosUpdateToOneWithWhereWithoutConsumoDetallesInput, Prisma.ProductosUpdateWithoutConsumoDetallesInput>, Prisma.ProductosUncheckedUpdateWithoutConsumoDetallesInput>;
};
export type ProductosCreateWithoutCategoriasProductosInput = {
    Nombre: string;
    Precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ImagenUrl?: string | null;
    ConsumoDetalles?: Prisma.ConsumoDetallesCreateNestedManyWithoutProductosInput;
};
export type ProductosUncheckedCreateWithoutCategoriasProductosInput = {
    IdProducto?: number;
    Nombre: string;
    Precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ImagenUrl?: string | null;
    ConsumoDetalles?: Prisma.ConsumoDetallesUncheckedCreateNestedManyWithoutProductosInput;
};
export type ProductosCreateOrConnectWithoutCategoriasProductosInput = {
    where: Prisma.ProductosWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductosCreateWithoutCategoriasProductosInput, Prisma.ProductosUncheckedCreateWithoutCategoriasProductosInput>;
};
export type ProductosCreateManyCategoriasProductosInputEnvelope = {
    data: Prisma.ProductosCreateManyCategoriasProductosInput | Prisma.ProductosCreateManyCategoriasProductosInput[];
    skipDuplicates?: boolean;
};
export type ProductosUpsertWithWhereUniqueWithoutCategoriasProductosInput = {
    where: Prisma.ProductosWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductosUpdateWithoutCategoriasProductosInput, Prisma.ProductosUncheckedUpdateWithoutCategoriasProductosInput>;
    create: Prisma.XOR<Prisma.ProductosCreateWithoutCategoriasProductosInput, Prisma.ProductosUncheckedCreateWithoutCategoriasProductosInput>;
};
export type ProductosUpdateWithWhereUniqueWithoutCategoriasProductosInput = {
    where: Prisma.ProductosWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductosUpdateWithoutCategoriasProductosInput, Prisma.ProductosUncheckedUpdateWithoutCategoriasProductosInput>;
};
export type ProductosUpdateManyWithWhereWithoutCategoriasProductosInput = {
    where: Prisma.ProductosScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductosUpdateManyMutationInput, Prisma.ProductosUncheckedUpdateManyWithoutCategoriasProductosInput>;
};
export type ProductosScalarWhereInput = {
    AND?: Prisma.ProductosScalarWhereInput | Prisma.ProductosScalarWhereInput[];
    OR?: Prisma.ProductosScalarWhereInput[];
    NOT?: Prisma.ProductosScalarWhereInput | Prisma.ProductosScalarWhereInput[];
    IdProducto?: Prisma.IntFilter<"Productos"> | number;
    Nombre?: Prisma.StringFilter<"Productos"> | string;
    Precio?: Prisma.DecimalFilter<"Productos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    IdCategoria?: Prisma.IntFilter<"Productos"> | number;
    ImagenUrl?: Prisma.StringNullableFilter<"Productos"> | string | null;
};
export type ProductosCreateWithoutConsumoDetallesInput = {
    Nombre: string;
    Precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ImagenUrl?: string | null;
    CategoriasProductos: Prisma.CategoriasProductosCreateNestedOneWithoutProductosInput;
};
export type ProductosUncheckedCreateWithoutConsumoDetallesInput = {
    IdProducto?: number;
    Nombre: string;
    Precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    IdCategoria: number;
    ImagenUrl?: string | null;
};
export type ProductosCreateOrConnectWithoutConsumoDetallesInput = {
    where: Prisma.ProductosWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductosCreateWithoutConsumoDetallesInput, Prisma.ProductosUncheckedCreateWithoutConsumoDetallesInput>;
};
export type ProductosUpsertWithoutConsumoDetallesInput = {
    update: Prisma.XOR<Prisma.ProductosUpdateWithoutConsumoDetallesInput, Prisma.ProductosUncheckedUpdateWithoutConsumoDetallesInput>;
    create: Prisma.XOR<Prisma.ProductosCreateWithoutConsumoDetallesInput, Prisma.ProductosUncheckedCreateWithoutConsumoDetallesInput>;
    where?: Prisma.ProductosWhereInput;
};
export type ProductosUpdateToOneWithWhereWithoutConsumoDetallesInput = {
    where?: Prisma.ProductosWhereInput;
    data: Prisma.XOR<Prisma.ProductosUpdateWithoutConsumoDetallesInput, Prisma.ProductosUncheckedUpdateWithoutConsumoDetallesInput>;
};
export type ProductosUpdateWithoutConsumoDetallesInput = {
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    Precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ImagenUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CategoriasProductos?: Prisma.CategoriasProductosUpdateOneRequiredWithoutProductosNestedInput;
};
export type ProductosUncheckedUpdateWithoutConsumoDetallesInput = {
    IdProducto?: Prisma.IntFieldUpdateOperationsInput | number;
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    Precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    IdCategoria?: Prisma.IntFieldUpdateOperationsInput | number;
    ImagenUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ProductosCreateManyCategoriasProductosInput = {
    IdProducto?: number;
    Nombre: string;
    Precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ImagenUrl?: string | null;
};
export type ProductosUpdateWithoutCategoriasProductosInput = {
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    Precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ImagenUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ConsumoDetalles?: Prisma.ConsumoDetallesUpdateManyWithoutProductosNestedInput;
};
export type ProductosUncheckedUpdateWithoutCategoriasProductosInput = {
    IdProducto?: Prisma.IntFieldUpdateOperationsInput | number;
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    Precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ImagenUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ConsumoDetalles?: Prisma.ConsumoDetallesUncheckedUpdateManyWithoutProductosNestedInput;
};
export type ProductosUncheckedUpdateManyWithoutCategoriasProductosInput = {
    IdProducto?: Prisma.IntFieldUpdateOperationsInput | number;
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    Precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ImagenUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ProductosCountOutputType = {
    ConsumoDetalles: number;
};
export type ProductosCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ConsumoDetalles?: boolean | ProductosCountOutputTypeCountConsumoDetallesArgs;
};
export type ProductosCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductosCountOutputTypeSelect<ExtArgs> | null;
};
export type ProductosCountOutputTypeCountConsumoDetallesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsumoDetallesWhereInput;
};
export type ProductosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IdProducto?: boolean;
    Nombre?: boolean;
    Precio?: boolean;
    IdCategoria?: boolean;
    ImagenUrl?: boolean;
    ConsumoDetalles?: boolean | Prisma.Productos$ConsumoDetallesArgs<ExtArgs>;
    CategoriasProductos?: boolean | Prisma.CategoriasProductosDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductosCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productos"]>;
export type ProductosSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IdProducto?: boolean;
    Nombre?: boolean;
    Precio?: boolean;
    IdCategoria?: boolean;
    ImagenUrl?: boolean;
    CategoriasProductos?: boolean | Prisma.CategoriasProductosDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productos"]>;
export type ProductosSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IdProducto?: boolean;
    Nombre?: boolean;
    Precio?: boolean;
    IdCategoria?: boolean;
    ImagenUrl?: boolean;
    CategoriasProductos?: boolean | Prisma.CategoriasProductosDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productos"]>;
export type ProductosSelectScalar = {
    IdProducto?: boolean;
    Nombre?: boolean;
    Precio?: boolean;
    IdCategoria?: boolean;
    ImagenUrl?: boolean;
};
export type ProductosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"IdProducto" | "Nombre" | "Precio" | "IdCategoria" | "ImagenUrl", ExtArgs["result"]["productos"]>;
export type ProductosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ConsumoDetalles?: boolean | Prisma.Productos$ConsumoDetallesArgs<ExtArgs>;
    CategoriasProductos?: boolean | Prisma.CategoriasProductosDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductosCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProductosIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CategoriasProductos?: boolean | Prisma.CategoriasProductosDefaultArgs<ExtArgs>;
};
export type ProductosIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CategoriasProductos?: boolean | Prisma.CategoriasProductosDefaultArgs<ExtArgs>;
};
export type $ProductosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Productos";
    objects: {
        ConsumoDetalles: Prisma.$ConsumoDetallesPayload<ExtArgs>[];
        CategoriasProductos: Prisma.$CategoriasProductosPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        IdProducto: number;
        Nombre: string;
        Precio: runtime.Decimal;
        IdCategoria: number;
        ImagenUrl: string | null;
    }, ExtArgs["result"]["productos"]>;
    composites: {};
};
export type ProductosGetPayload<S extends boolean | null | undefined | ProductosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductosPayload, S>;
export type ProductosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductosCountAggregateInputType | true;
};
export interface ProductosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Productos'];
        meta: {
            name: 'Productos';
        };
    };
    findUnique<T extends ProductosFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductosClient<runtime.Types.Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductosClient<runtime.Types.Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductosFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductosFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductosClient<runtime.Types.Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductosClient<runtime.Types.Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductosFindManyArgs>(args?: Prisma.SelectSubset<T, ProductosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductosCreateArgs>(args: Prisma.SelectSubset<T, ProductosCreateArgs<ExtArgs>>): Prisma.Prisma__ProductosClient<runtime.Types.Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductosCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductosCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductosDeleteArgs>(args: Prisma.SelectSubset<T, ProductosDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductosClient<runtime.Types.Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductosUpdateArgs>(args: Prisma.SelectSubset<T, ProductosUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductosClient<runtime.Types.Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductosDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductosUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductosUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductosUpsertArgs>(args: Prisma.SelectSubset<T, ProductosUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductosClient<runtime.Types.Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductosCountArgs>(args?: Prisma.Subset<T, ProductosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductosCountAggregateOutputType> : number>;
    aggregate<T extends ProductosAggregateArgs>(args: Prisma.Subset<T, ProductosAggregateArgs>): Prisma.PrismaPromise<GetProductosAggregateType<T>>;
    groupBy<T extends ProductosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductosGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductosGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductosFieldRefs;
}
export interface Prisma__ProductosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ConsumoDetalles<T extends Prisma.Productos$ConsumoDetallesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Productos$ConsumoDetallesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsumoDetallesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    CategoriasProductos<T extends Prisma.CategoriasProductosDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoriasProductosDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoriasProductosClient<runtime.Types.Result.GetResult<Prisma.$CategoriasProductosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductosFieldRefs {
    readonly IdProducto: Prisma.FieldRef<"Productos", 'Int'>;
    readonly Nombre: Prisma.FieldRef<"Productos", 'String'>;
    readonly Precio: Prisma.FieldRef<"Productos", 'Decimal'>;
    readonly IdCategoria: Prisma.FieldRef<"Productos", 'Int'>;
    readonly ImagenUrl: Prisma.FieldRef<"Productos", 'String'>;
}
export type ProductosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductosSelect<ExtArgs> | null;
    omit?: Prisma.ProductosOmit<ExtArgs> | null;
    include?: Prisma.ProductosInclude<ExtArgs> | null;
    where: Prisma.ProductosWhereUniqueInput;
};
export type ProductosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductosSelect<ExtArgs> | null;
    omit?: Prisma.ProductosOmit<ExtArgs> | null;
    include?: Prisma.ProductosInclude<ExtArgs> | null;
    where: Prisma.ProductosWhereUniqueInput;
};
export type ProductosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProductosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProductosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProductosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductosSelect<ExtArgs> | null;
    omit?: Prisma.ProductosOmit<ExtArgs> | null;
    include?: Prisma.ProductosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductosCreateInput, Prisma.ProductosUncheckedCreateInput>;
};
export type ProductosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductosCreateManyInput | Prisma.ProductosCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductosCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductosSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductosOmit<ExtArgs> | null;
    data: Prisma.ProductosCreateManyInput | Prisma.ProductosCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProductosIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProductosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductosSelect<ExtArgs> | null;
    omit?: Prisma.ProductosOmit<ExtArgs> | null;
    include?: Prisma.ProductosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductosUpdateInput, Prisma.ProductosUncheckedUpdateInput>;
    where: Prisma.ProductosWhereUniqueInput;
};
export type ProductosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductosUpdateManyMutationInput, Prisma.ProductosUncheckedUpdateManyInput>;
    where?: Prisma.ProductosWhereInput;
    limit?: number;
};
export type ProductosUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductosSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductosOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductosUpdateManyMutationInput, Prisma.ProductosUncheckedUpdateManyInput>;
    where?: Prisma.ProductosWhereInput;
    limit?: number;
    include?: Prisma.ProductosIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProductosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductosSelect<ExtArgs> | null;
    omit?: Prisma.ProductosOmit<ExtArgs> | null;
    include?: Prisma.ProductosInclude<ExtArgs> | null;
    where: Prisma.ProductosWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductosCreateInput, Prisma.ProductosUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductosUpdateInput, Prisma.ProductosUncheckedUpdateInput>;
};
export type ProductosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductosSelect<ExtArgs> | null;
    omit?: Prisma.ProductosOmit<ExtArgs> | null;
    include?: Prisma.ProductosInclude<ExtArgs> | null;
    where: Prisma.ProductosWhereUniqueInput;
};
export type ProductosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductosWhereInput;
    limit?: number;
};
export type Productos$ConsumoDetallesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsumoDetallesSelect<ExtArgs> | null;
    omit?: Prisma.ConsumoDetallesOmit<ExtArgs> | null;
    include?: Prisma.ConsumoDetallesInclude<ExtArgs> | null;
    where?: Prisma.ConsumoDetallesWhereInput;
    orderBy?: Prisma.ConsumoDetallesOrderByWithRelationInput | Prisma.ConsumoDetallesOrderByWithRelationInput[];
    cursor?: Prisma.ConsumoDetallesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConsumoDetallesScalarFieldEnum | Prisma.ConsumoDetallesScalarFieldEnum[];
};
export type ProductosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductosSelect<ExtArgs> | null;
    omit?: Prisma.ProductosOmit<ExtArgs> | null;
    include?: Prisma.ProductosInclude<ExtArgs> | null;
};
