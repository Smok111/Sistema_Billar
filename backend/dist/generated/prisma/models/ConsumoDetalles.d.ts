import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ConsumoDetallesModel = runtime.Types.Result.DefaultSelection<Prisma.$ConsumoDetallesPayload>;
export type AggregateConsumoDetalles = {
    _count: ConsumoDetallesCountAggregateOutputType | null;
    _avg: ConsumoDetallesAvgAggregateOutputType | null;
    _sum: ConsumoDetallesSumAggregateOutputType | null;
    _min: ConsumoDetallesMinAggregateOutputType | null;
    _max: ConsumoDetallesMaxAggregateOutputType | null;
};
export type ConsumoDetallesAvgAggregateOutputType = {
    IdDetalle: number | null;
    IdConsumo: number | null;
    IdProducto: number | null;
    Cantidad: number | null;
    PrecioUnitario: runtime.Decimal | null;
};
export type ConsumoDetallesSumAggregateOutputType = {
    IdDetalle: number | null;
    IdConsumo: number | null;
    IdProducto: number | null;
    Cantidad: number | null;
    PrecioUnitario: runtime.Decimal | null;
};
export type ConsumoDetallesMinAggregateOutputType = {
    IdDetalle: number | null;
    IdConsumo: number | null;
    IdProducto: number | null;
    Cantidad: number | null;
    PrecioUnitario: runtime.Decimal | null;
    FechaRegistro: Date | null;
};
export type ConsumoDetallesMaxAggregateOutputType = {
    IdDetalle: number | null;
    IdConsumo: number | null;
    IdProducto: number | null;
    Cantidad: number | null;
    PrecioUnitario: runtime.Decimal | null;
    FechaRegistro: Date | null;
};
export type ConsumoDetallesCountAggregateOutputType = {
    IdDetalle: number;
    IdConsumo: number;
    IdProducto: number;
    Cantidad: number;
    PrecioUnitario: number;
    FechaRegistro: number;
    _all: number;
};
export type ConsumoDetallesAvgAggregateInputType = {
    IdDetalle?: true;
    IdConsumo?: true;
    IdProducto?: true;
    Cantidad?: true;
    PrecioUnitario?: true;
};
export type ConsumoDetallesSumAggregateInputType = {
    IdDetalle?: true;
    IdConsumo?: true;
    IdProducto?: true;
    Cantidad?: true;
    PrecioUnitario?: true;
};
export type ConsumoDetallesMinAggregateInputType = {
    IdDetalle?: true;
    IdConsumo?: true;
    IdProducto?: true;
    Cantidad?: true;
    PrecioUnitario?: true;
    FechaRegistro?: true;
};
export type ConsumoDetallesMaxAggregateInputType = {
    IdDetalle?: true;
    IdConsumo?: true;
    IdProducto?: true;
    Cantidad?: true;
    PrecioUnitario?: true;
    FechaRegistro?: true;
};
export type ConsumoDetallesCountAggregateInputType = {
    IdDetalle?: true;
    IdConsumo?: true;
    IdProducto?: true;
    Cantidad?: true;
    PrecioUnitario?: true;
    FechaRegistro?: true;
    _all?: true;
};
export type ConsumoDetallesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsumoDetallesWhereInput;
    orderBy?: Prisma.ConsumoDetallesOrderByWithRelationInput | Prisma.ConsumoDetallesOrderByWithRelationInput[];
    cursor?: Prisma.ConsumoDetallesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ConsumoDetallesCountAggregateInputType;
    _avg?: ConsumoDetallesAvgAggregateInputType;
    _sum?: ConsumoDetallesSumAggregateInputType;
    _min?: ConsumoDetallesMinAggregateInputType;
    _max?: ConsumoDetallesMaxAggregateInputType;
};
export type GetConsumoDetallesAggregateType<T extends ConsumoDetallesAggregateArgs> = {
    [P in keyof T & keyof AggregateConsumoDetalles]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConsumoDetalles[P]> : Prisma.GetScalarType<T[P], AggregateConsumoDetalles[P]>;
};
export type ConsumoDetallesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsumoDetallesWhereInput;
    orderBy?: Prisma.ConsumoDetallesOrderByWithAggregationInput | Prisma.ConsumoDetallesOrderByWithAggregationInput[];
    by: Prisma.ConsumoDetallesScalarFieldEnum[] | Prisma.ConsumoDetallesScalarFieldEnum;
    having?: Prisma.ConsumoDetallesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConsumoDetallesCountAggregateInputType | true;
    _avg?: ConsumoDetallesAvgAggregateInputType;
    _sum?: ConsumoDetallesSumAggregateInputType;
    _min?: ConsumoDetallesMinAggregateInputType;
    _max?: ConsumoDetallesMaxAggregateInputType;
};
export type ConsumoDetallesGroupByOutputType = {
    IdDetalle: number;
    IdConsumo: number;
    IdProducto: number;
    Cantidad: number;
    PrecioUnitario: runtime.Decimal;
    FechaRegistro: Date;
    _count: ConsumoDetallesCountAggregateOutputType | null;
    _avg: ConsumoDetallesAvgAggregateOutputType | null;
    _sum: ConsumoDetallesSumAggregateOutputType | null;
    _min: ConsumoDetallesMinAggregateOutputType | null;
    _max: ConsumoDetallesMaxAggregateOutputType | null;
};
export type GetConsumoDetallesGroupByPayload<T extends ConsumoDetallesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConsumoDetallesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConsumoDetallesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConsumoDetallesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConsumoDetallesGroupByOutputType[P]>;
}>>;
export type ConsumoDetallesWhereInput = {
    AND?: Prisma.ConsumoDetallesWhereInput | Prisma.ConsumoDetallesWhereInput[];
    OR?: Prisma.ConsumoDetallesWhereInput[];
    NOT?: Prisma.ConsumoDetallesWhereInput | Prisma.ConsumoDetallesWhereInput[];
    IdDetalle?: Prisma.IntFilter<"ConsumoDetalles"> | number;
    IdConsumo?: Prisma.IntFilter<"ConsumoDetalles"> | number;
    IdProducto?: Prisma.IntFilter<"ConsumoDetalles"> | number;
    Cantidad?: Prisma.IntFilter<"ConsumoDetalles"> | number;
    PrecioUnitario?: Prisma.DecimalFilter<"ConsumoDetalles"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    FechaRegistro?: Prisma.DateTimeFilter<"ConsumoDetalles"> | Date | string;
    Consumos?: Prisma.XOR<Prisma.ConsumosScalarRelationFilter, Prisma.ConsumosWhereInput>;
    Productos?: Prisma.XOR<Prisma.ProductosScalarRelationFilter, Prisma.ProductosWhereInput>;
};
export type ConsumoDetallesOrderByWithRelationInput = {
    IdDetalle?: Prisma.SortOrder;
    IdConsumo?: Prisma.SortOrder;
    IdProducto?: Prisma.SortOrder;
    Cantidad?: Prisma.SortOrder;
    PrecioUnitario?: Prisma.SortOrder;
    FechaRegistro?: Prisma.SortOrder;
    Consumos?: Prisma.ConsumosOrderByWithRelationInput;
    Productos?: Prisma.ProductosOrderByWithRelationInput;
};
export type ConsumoDetallesWhereUniqueInput = Prisma.AtLeast<{
    IdDetalle?: number;
    AND?: Prisma.ConsumoDetallesWhereInput | Prisma.ConsumoDetallesWhereInput[];
    OR?: Prisma.ConsumoDetallesWhereInput[];
    NOT?: Prisma.ConsumoDetallesWhereInput | Prisma.ConsumoDetallesWhereInput[];
    IdConsumo?: Prisma.IntFilter<"ConsumoDetalles"> | number;
    IdProducto?: Prisma.IntFilter<"ConsumoDetalles"> | number;
    Cantidad?: Prisma.IntFilter<"ConsumoDetalles"> | number;
    PrecioUnitario?: Prisma.DecimalFilter<"ConsumoDetalles"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    FechaRegistro?: Prisma.DateTimeFilter<"ConsumoDetalles"> | Date | string;
    Consumos?: Prisma.XOR<Prisma.ConsumosScalarRelationFilter, Prisma.ConsumosWhereInput>;
    Productos?: Prisma.XOR<Prisma.ProductosScalarRelationFilter, Prisma.ProductosWhereInput>;
}, "IdDetalle">;
export type ConsumoDetallesOrderByWithAggregationInput = {
    IdDetalle?: Prisma.SortOrder;
    IdConsumo?: Prisma.SortOrder;
    IdProducto?: Prisma.SortOrder;
    Cantidad?: Prisma.SortOrder;
    PrecioUnitario?: Prisma.SortOrder;
    FechaRegistro?: Prisma.SortOrder;
    _count?: Prisma.ConsumoDetallesCountOrderByAggregateInput;
    _avg?: Prisma.ConsumoDetallesAvgOrderByAggregateInput;
    _max?: Prisma.ConsumoDetallesMaxOrderByAggregateInput;
    _min?: Prisma.ConsumoDetallesMinOrderByAggregateInput;
    _sum?: Prisma.ConsumoDetallesSumOrderByAggregateInput;
};
export type ConsumoDetallesScalarWhereWithAggregatesInput = {
    AND?: Prisma.ConsumoDetallesScalarWhereWithAggregatesInput | Prisma.ConsumoDetallesScalarWhereWithAggregatesInput[];
    OR?: Prisma.ConsumoDetallesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ConsumoDetallesScalarWhereWithAggregatesInput | Prisma.ConsumoDetallesScalarWhereWithAggregatesInput[];
    IdDetalle?: Prisma.IntWithAggregatesFilter<"ConsumoDetalles"> | number;
    IdConsumo?: Prisma.IntWithAggregatesFilter<"ConsumoDetalles"> | number;
    IdProducto?: Prisma.IntWithAggregatesFilter<"ConsumoDetalles"> | number;
    Cantidad?: Prisma.IntWithAggregatesFilter<"ConsumoDetalles"> | number;
    PrecioUnitario?: Prisma.DecimalWithAggregatesFilter<"ConsumoDetalles"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    FechaRegistro?: Prisma.DateTimeWithAggregatesFilter<"ConsumoDetalles"> | Date | string;
};
export type ConsumoDetallesCreateInput = {
    Cantidad: number;
    PrecioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    FechaRegistro: Date | string;
    Consumos: Prisma.ConsumosCreateNestedOneWithoutConsumoDetallesInput;
    Productos: Prisma.ProductosCreateNestedOneWithoutConsumoDetallesInput;
};
export type ConsumoDetallesUncheckedCreateInput = {
    IdDetalle?: number;
    IdConsumo: number;
    IdProducto: number;
    Cantidad: number;
    PrecioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    FechaRegistro: Date | string;
};
export type ConsumoDetallesUpdateInput = {
    Cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    PrecioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    FechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Consumos?: Prisma.ConsumosUpdateOneRequiredWithoutConsumoDetallesNestedInput;
    Productos?: Prisma.ProductosUpdateOneRequiredWithoutConsumoDetallesNestedInput;
};
export type ConsumoDetallesUncheckedUpdateInput = {
    IdDetalle?: Prisma.IntFieldUpdateOperationsInput | number;
    IdConsumo?: Prisma.IntFieldUpdateOperationsInput | number;
    IdProducto?: Prisma.IntFieldUpdateOperationsInput | number;
    Cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    PrecioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    FechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsumoDetallesCreateManyInput = {
    IdDetalle?: number;
    IdConsumo: number;
    IdProducto: number;
    Cantidad: number;
    PrecioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    FechaRegistro: Date | string;
};
export type ConsumoDetallesUpdateManyMutationInput = {
    Cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    PrecioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    FechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsumoDetallesUncheckedUpdateManyInput = {
    IdDetalle?: Prisma.IntFieldUpdateOperationsInput | number;
    IdConsumo?: Prisma.IntFieldUpdateOperationsInput | number;
    IdProducto?: Prisma.IntFieldUpdateOperationsInput | number;
    Cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    PrecioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    FechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsumoDetallesCountOrderByAggregateInput = {
    IdDetalle?: Prisma.SortOrder;
    IdConsumo?: Prisma.SortOrder;
    IdProducto?: Prisma.SortOrder;
    Cantidad?: Prisma.SortOrder;
    PrecioUnitario?: Prisma.SortOrder;
    FechaRegistro?: Prisma.SortOrder;
};
export type ConsumoDetallesAvgOrderByAggregateInput = {
    IdDetalle?: Prisma.SortOrder;
    IdConsumo?: Prisma.SortOrder;
    IdProducto?: Prisma.SortOrder;
    Cantidad?: Prisma.SortOrder;
    PrecioUnitario?: Prisma.SortOrder;
};
export type ConsumoDetallesMaxOrderByAggregateInput = {
    IdDetalle?: Prisma.SortOrder;
    IdConsumo?: Prisma.SortOrder;
    IdProducto?: Prisma.SortOrder;
    Cantidad?: Prisma.SortOrder;
    PrecioUnitario?: Prisma.SortOrder;
    FechaRegistro?: Prisma.SortOrder;
};
export type ConsumoDetallesMinOrderByAggregateInput = {
    IdDetalle?: Prisma.SortOrder;
    IdConsumo?: Prisma.SortOrder;
    IdProducto?: Prisma.SortOrder;
    Cantidad?: Prisma.SortOrder;
    PrecioUnitario?: Prisma.SortOrder;
    FechaRegistro?: Prisma.SortOrder;
};
export type ConsumoDetallesSumOrderByAggregateInput = {
    IdDetalle?: Prisma.SortOrder;
    IdConsumo?: Prisma.SortOrder;
    IdProducto?: Prisma.SortOrder;
    Cantidad?: Prisma.SortOrder;
    PrecioUnitario?: Prisma.SortOrder;
};
export type ConsumoDetallesListRelationFilter = {
    every?: Prisma.ConsumoDetallesWhereInput;
    some?: Prisma.ConsumoDetallesWhereInput;
    none?: Prisma.ConsumoDetallesWhereInput;
};
export type ConsumoDetallesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type ConsumoDetallesCreateNestedManyWithoutConsumosInput = {
    create?: Prisma.XOR<Prisma.ConsumoDetallesCreateWithoutConsumosInput, Prisma.ConsumoDetallesUncheckedCreateWithoutConsumosInput> | Prisma.ConsumoDetallesCreateWithoutConsumosInput[] | Prisma.ConsumoDetallesUncheckedCreateWithoutConsumosInput[];
    connectOrCreate?: Prisma.ConsumoDetallesCreateOrConnectWithoutConsumosInput | Prisma.ConsumoDetallesCreateOrConnectWithoutConsumosInput[];
    createMany?: Prisma.ConsumoDetallesCreateManyConsumosInputEnvelope;
    connect?: Prisma.ConsumoDetallesWhereUniqueInput | Prisma.ConsumoDetallesWhereUniqueInput[];
};
export type ConsumoDetallesUncheckedCreateNestedManyWithoutConsumosInput = {
    create?: Prisma.XOR<Prisma.ConsumoDetallesCreateWithoutConsumosInput, Prisma.ConsumoDetallesUncheckedCreateWithoutConsumosInput> | Prisma.ConsumoDetallesCreateWithoutConsumosInput[] | Prisma.ConsumoDetallesUncheckedCreateWithoutConsumosInput[];
    connectOrCreate?: Prisma.ConsumoDetallesCreateOrConnectWithoutConsumosInput | Prisma.ConsumoDetallesCreateOrConnectWithoutConsumosInput[];
    createMany?: Prisma.ConsumoDetallesCreateManyConsumosInputEnvelope;
    connect?: Prisma.ConsumoDetallesWhereUniqueInput | Prisma.ConsumoDetallesWhereUniqueInput[];
};
export type ConsumoDetallesUpdateManyWithoutConsumosNestedInput = {
    create?: Prisma.XOR<Prisma.ConsumoDetallesCreateWithoutConsumosInput, Prisma.ConsumoDetallesUncheckedCreateWithoutConsumosInput> | Prisma.ConsumoDetallesCreateWithoutConsumosInput[] | Prisma.ConsumoDetallesUncheckedCreateWithoutConsumosInput[];
    connectOrCreate?: Prisma.ConsumoDetallesCreateOrConnectWithoutConsumosInput | Prisma.ConsumoDetallesCreateOrConnectWithoutConsumosInput[];
    upsert?: Prisma.ConsumoDetallesUpsertWithWhereUniqueWithoutConsumosInput | Prisma.ConsumoDetallesUpsertWithWhereUniqueWithoutConsumosInput[];
    createMany?: Prisma.ConsumoDetallesCreateManyConsumosInputEnvelope;
    set?: Prisma.ConsumoDetallesWhereUniqueInput | Prisma.ConsumoDetallesWhereUniqueInput[];
    disconnect?: Prisma.ConsumoDetallesWhereUniqueInput | Prisma.ConsumoDetallesWhereUniqueInput[];
    delete?: Prisma.ConsumoDetallesWhereUniqueInput | Prisma.ConsumoDetallesWhereUniqueInput[];
    connect?: Prisma.ConsumoDetallesWhereUniqueInput | Prisma.ConsumoDetallesWhereUniqueInput[];
    update?: Prisma.ConsumoDetallesUpdateWithWhereUniqueWithoutConsumosInput | Prisma.ConsumoDetallesUpdateWithWhereUniqueWithoutConsumosInput[];
    updateMany?: Prisma.ConsumoDetallesUpdateManyWithWhereWithoutConsumosInput | Prisma.ConsumoDetallesUpdateManyWithWhereWithoutConsumosInput[];
    deleteMany?: Prisma.ConsumoDetallesScalarWhereInput | Prisma.ConsumoDetallesScalarWhereInput[];
};
export type ConsumoDetallesUncheckedUpdateManyWithoutConsumosNestedInput = {
    create?: Prisma.XOR<Prisma.ConsumoDetallesCreateWithoutConsumosInput, Prisma.ConsumoDetallesUncheckedCreateWithoutConsumosInput> | Prisma.ConsumoDetallesCreateWithoutConsumosInput[] | Prisma.ConsumoDetallesUncheckedCreateWithoutConsumosInput[];
    connectOrCreate?: Prisma.ConsumoDetallesCreateOrConnectWithoutConsumosInput | Prisma.ConsumoDetallesCreateOrConnectWithoutConsumosInput[];
    upsert?: Prisma.ConsumoDetallesUpsertWithWhereUniqueWithoutConsumosInput | Prisma.ConsumoDetallesUpsertWithWhereUniqueWithoutConsumosInput[];
    createMany?: Prisma.ConsumoDetallesCreateManyConsumosInputEnvelope;
    set?: Prisma.ConsumoDetallesWhereUniqueInput | Prisma.ConsumoDetallesWhereUniqueInput[];
    disconnect?: Prisma.ConsumoDetallesWhereUniqueInput | Prisma.ConsumoDetallesWhereUniqueInput[];
    delete?: Prisma.ConsumoDetallesWhereUniqueInput | Prisma.ConsumoDetallesWhereUniqueInput[];
    connect?: Prisma.ConsumoDetallesWhereUniqueInput | Prisma.ConsumoDetallesWhereUniqueInput[];
    update?: Prisma.ConsumoDetallesUpdateWithWhereUniqueWithoutConsumosInput | Prisma.ConsumoDetallesUpdateWithWhereUniqueWithoutConsumosInput[];
    updateMany?: Prisma.ConsumoDetallesUpdateManyWithWhereWithoutConsumosInput | Prisma.ConsumoDetallesUpdateManyWithWhereWithoutConsumosInput[];
    deleteMany?: Prisma.ConsumoDetallesScalarWhereInput | Prisma.ConsumoDetallesScalarWhereInput[];
};
export type ConsumoDetallesCreateNestedManyWithoutProductosInput = {
    create?: Prisma.XOR<Prisma.ConsumoDetallesCreateWithoutProductosInput, Prisma.ConsumoDetallesUncheckedCreateWithoutProductosInput> | Prisma.ConsumoDetallesCreateWithoutProductosInput[] | Prisma.ConsumoDetallesUncheckedCreateWithoutProductosInput[];
    connectOrCreate?: Prisma.ConsumoDetallesCreateOrConnectWithoutProductosInput | Prisma.ConsumoDetallesCreateOrConnectWithoutProductosInput[];
    createMany?: Prisma.ConsumoDetallesCreateManyProductosInputEnvelope;
    connect?: Prisma.ConsumoDetallesWhereUniqueInput | Prisma.ConsumoDetallesWhereUniqueInput[];
};
export type ConsumoDetallesUncheckedCreateNestedManyWithoutProductosInput = {
    create?: Prisma.XOR<Prisma.ConsumoDetallesCreateWithoutProductosInput, Prisma.ConsumoDetallesUncheckedCreateWithoutProductosInput> | Prisma.ConsumoDetallesCreateWithoutProductosInput[] | Prisma.ConsumoDetallesUncheckedCreateWithoutProductosInput[];
    connectOrCreate?: Prisma.ConsumoDetallesCreateOrConnectWithoutProductosInput | Prisma.ConsumoDetallesCreateOrConnectWithoutProductosInput[];
    createMany?: Prisma.ConsumoDetallesCreateManyProductosInputEnvelope;
    connect?: Prisma.ConsumoDetallesWhereUniqueInput | Prisma.ConsumoDetallesWhereUniqueInput[];
};
export type ConsumoDetallesUpdateManyWithoutProductosNestedInput = {
    create?: Prisma.XOR<Prisma.ConsumoDetallesCreateWithoutProductosInput, Prisma.ConsumoDetallesUncheckedCreateWithoutProductosInput> | Prisma.ConsumoDetallesCreateWithoutProductosInput[] | Prisma.ConsumoDetallesUncheckedCreateWithoutProductosInput[];
    connectOrCreate?: Prisma.ConsumoDetallesCreateOrConnectWithoutProductosInput | Prisma.ConsumoDetallesCreateOrConnectWithoutProductosInput[];
    upsert?: Prisma.ConsumoDetallesUpsertWithWhereUniqueWithoutProductosInput | Prisma.ConsumoDetallesUpsertWithWhereUniqueWithoutProductosInput[];
    createMany?: Prisma.ConsumoDetallesCreateManyProductosInputEnvelope;
    set?: Prisma.ConsumoDetallesWhereUniqueInput | Prisma.ConsumoDetallesWhereUniqueInput[];
    disconnect?: Prisma.ConsumoDetallesWhereUniqueInput | Prisma.ConsumoDetallesWhereUniqueInput[];
    delete?: Prisma.ConsumoDetallesWhereUniqueInput | Prisma.ConsumoDetallesWhereUniqueInput[];
    connect?: Prisma.ConsumoDetallesWhereUniqueInput | Prisma.ConsumoDetallesWhereUniqueInput[];
    update?: Prisma.ConsumoDetallesUpdateWithWhereUniqueWithoutProductosInput | Prisma.ConsumoDetallesUpdateWithWhereUniqueWithoutProductosInput[];
    updateMany?: Prisma.ConsumoDetallesUpdateManyWithWhereWithoutProductosInput | Prisma.ConsumoDetallesUpdateManyWithWhereWithoutProductosInput[];
    deleteMany?: Prisma.ConsumoDetallesScalarWhereInput | Prisma.ConsumoDetallesScalarWhereInput[];
};
export type ConsumoDetallesUncheckedUpdateManyWithoutProductosNestedInput = {
    create?: Prisma.XOR<Prisma.ConsumoDetallesCreateWithoutProductosInput, Prisma.ConsumoDetallesUncheckedCreateWithoutProductosInput> | Prisma.ConsumoDetallesCreateWithoutProductosInput[] | Prisma.ConsumoDetallesUncheckedCreateWithoutProductosInput[];
    connectOrCreate?: Prisma.ConsumoDetallesCreateOrConnectWithoutProductosInput | Prisma.ConsumoDetallesCreateOrConnectWithoutProductosInput[];
    upsert?: Prisma.ConsumoDetallesUpsertWithWhereUniqueWithoutProductosInput | Prisma.ConsumoDetallesUpsertWithWhereUniqueWithoutProductosInput[];
    createMany?: Prisma.ConsumoDetallesCreateManyProductosInputEnvelope;
    set?: Prisma.ConsumoDetallesWhereUniqueInput | Prisma.ConsumoDetallesWhereUniqueInput[];
    disconnect?: Prisma.ConsumoDetallesWhereUniqueInput | Prisma.ConsumoDetallesWhereUniqueInput[];
    delete?: Prisma.ConsumoDetallesWhereUniqueInput | Prisma.ConsumoDetallesWhereUniqueInput[];
    connect?: Prisma.ConsumoDetallesWhereUniqueInput | Prisma.ConsumoDetallesWhereUniqueInput[];
    update?: Prisma.ConsumoDetallesUpdateWithWhereUniqueWithoutProductosInput | Prisma.ConsumoDetallesUpdateWithWhereUniqueWithoutProductosInput[];
    updateMany?: Prisma.ConsumoDetallesUpdateManyWithWhereWithoutProductosInput | Prisma.ConsumoDetallesUpdateManyWithWhereWithoutProductosInput[];
    deleteMany?: Prisma.ConsumoDetallesScalarWhereInput | Prisma.ConsumoDetallesScalarWhereInput[];
};
export type ConsumoDetallesCreateWithoutConsumosInput = {
    Cantidad: number;
    PrecioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    FechaRegistro: Date | string;
    Productos: Prisma.ProductosCreateNestedOneWithoutConsumoDetallesInput;
};
export type ConsumoDetallesUncheckedCreateWithoutConsumosInput = {
    IdDetalle?: number;
    IdProducto: number;
    Cantidad: number;
    PrecioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    FechaRegistro: Date | string;
};
export type ConsumoDetallesCreateOrConnectWithoutConsumosInput = {
    where: Prisma.ConsumoDetallesWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConsumoDetallesCreateWithoutConsumosInput, Prisma.ConsumoDetallesUncheckedCreateWithoutConsumosInput>;
};
export type ConsumoDetallesCreateManyConsumosInputEnvelope = {
    data: Prisma.ConsumoDetallesCreateManyConsumosInput | Prisma.ConsumoDetallesCreateManyConsumosInput[];
    skipDuplicates?: boolean;
};
export type ConsumoDetallesUpsertWithWhereUniqueWithoutConsumosInput = {
    where: Prisma.ConsumoDetallesWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConsumoDetallesUpdateWithoutConsumosInput, Prisma.ConsumoDetallesUncheckedUpdateWithoutConsumosInput>;
    create: Prisma.XOR<Prisma.ConsumoDetallesCreateWithoutConsumosInput, Prisma.ConsumoDetallesUncheckedCreateWithoutConsumosInput>;
};
export type ConsumoDetallesUpdateWithWhereUniqueWithoutConsumosInput = {
    where: Prisma.ConsumoDetallesWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConsumoDetallesUpdateWithoutConsumosInput, Prisma.ConsumoDetallesUncheckedUpdateWithoutConsumosInput>;
};
export type ConsumoDetallesUpdateManyWithWhereWithoutConsumosInput = {
    where: Prisma.ConsumoDetallesScalarWhereInput;
    data: Prisma.XOR<Prisma.ConsumoDetallesUpdateManyMutationInput, Prisma.ConsumoDetallesUncheckedUpdateManyWithoutConsumosInput>;
};
export type ConsumoDetallesScalarWhereInput = {
    AND?: Prisma.ConsumoDetallesScalarWhereInput | Prisma.ConsumoDetallesScalarWhereInput[];
    OR?: Prisma.ConsumoDetallesScalarWhereInput[];
    NOT?: Prisma.ConsumoDetallesScalarWhereInput | Prisma.ConsumoDetallesScalarWhereInput[];
    IdDetalle?: Prisma.IntFilter<"ConsumoDetalles"> | number;
    IdConsumo?: Prisma.IntFilter<"ConsumoDetalles"> | number;
    IdProducto?: Prisma.IntFilter<"ConsumoDetalles"> | number;
    Cantidad?: Prisma.IntFilter<"ConsumoDetalles"> | number;
    PrecioUnitario?: Prisma.DecimalFilter<"ConsumoDetalles"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    FechaRegistro?: Prisma.DateTimeFilter<"ConsumoDetalles"> | Date | string;
};
export type ConsumoDetallesCreateWithoutProductosInput = {
    Cantidad: number;
    PrecioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    FechaRegistro: Date | string;
    Consumos: Prisma.ConsumosCreateNestedOneWithoutConsumoDetallesInput;
};
export type ConsumoDetallesUncheckedCreateWithoutProductosInput = {
    IdDetalle?: number;
    IdConsumo: number;
    Cantidad: number;
    PrecioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    FechaRegistro: Date | string;
};
export type ConsumoDetallesCreateOrConnectWithoutProductosInput = {
    where: Prisma.ConsumoDetallesWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConsumoDetallesCreateWithoutProductosInput, Prisma.ConsumoDetallesUncheckedCreateWithoutProductosInput>;
};
export type ConsumoDetallesCreateManyProductosInputEnvelope = {
    data: Prisma.ConsumoDetallesCreateManyProductosInput | Prisma.ConsumoDetallesCreateManyProductosInput[];
    skipDuplicates?: boolean;
};
export type ConsumoDetallesUpsertWithWhereUniqueWithoutProductosInput = {
    where: Prisma.ConsumoDetallesWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConsumoDetallesUpdateWithoutProductosInput, Prisma.ConsumoDetallesUncheckedUpdateWithoutProductosInput>;
    create: Prisma.XOR<Prisma.ConsumoDetallesCreateWithoutProductosInput, Prisma.ConsumoDetallesUncheckedCreateWithoutProductosInput>;
};
export type ConsumoDetallesUpdateWithWhereUniqueWithoutProductosInput = {
    where: Prisma.ConsumoDetallesWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConsumoDetallesUpdateWithoutProductosInput, Prisma.ConsumoDetallesUncheckedUpdateWithoutProductosInput>;
};
export type ConsumoDetallesUpdateManyWithWhereWithoutProductosInput = {
    where: Prisma.ConsumoDetallesScalarWhereInput;
    data: Prisma.XOR<Prisma.ConsumoDetallesUpdateManyMutationInput, Prisma.ConsumoDetallesUncheckedUpdateManyWithoutProductosInput>;
};
export type ConsumoDetallesCreateManyConsumosInput = {
    IdDetalle?: number;
    IdProducto: number;
    Cantidad: number;
    PrecioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    FechaRegistro: Date | string;
};
export type ConsumoDetallesUpdateWithoutConsumosInput = {
    Cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    PrecioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    FechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Productos?: Prisma.ProductosUpdateOneRequiredWithoutConsumoDetallesNestedInput;
};
export type ConsumoDetallesUncheckedUpdateWithoutConsumosInput = {
    IdDetalle?: Prisma.IntFieldUpdateOperationsInput | number;
    IdProducto?: Prisma.IntFieldUpdateOperationsInput | number;
    Cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    PrecioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    FechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsumoDetallesUncheckedUpdateManyWithoutConsumosInput = {
    IdDetalle?: Prisma.IntFieldUpdateOperationsInput | number;
    IdProducto?: Prisma.IntFieldUpdateOperationsInput | number;
    Cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    PrecioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    FechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsumoDetallesCreateManyProductosInput = {
    IdDetalle?: number;
    IdConsumo: number;
    Cantidad: number;
    PrecioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    FechaRegistro: Date | string;
};
export type ConsumoDetallesUpdateWithoutProductosInput = {
    Cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    PrecioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    FechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Consumos?: Prisma.ConsumosUpdateOneRequiredWithoutConsumoDetallesNestedInput;
};
export type ConsumoDetallesUncheckedUpdateWithoutProductosInput = {
    IdDetalle?: Prisma.IntFieldUpdateOperationsInput | number;
    IdConsumo?: Prisma.IntFieldUpdateOperationsInput | number;
    Cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    PrecioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    FechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsumoDetallesUncheckedUpdateManyWithoutProductosInput = {
    IdDetalle?: Prisma.IntFieldUpdateOperationsInput | number;
    IdConsumo?: Prisma.IntFieldUpdateOperationsInput | number;
    Cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    PrecioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    FechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsumoDetallesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IdDetalle?: boolean;
    IdConsumo?: boolean;
    IdProducto?: boolean;
    Cantidad?: boolean;
    PrecioUnitario?: boolean;
    FechaRegistro?: boolean;
    Consumos?: boolean | Prisma.ConsumosDefaultArgs<ExtArgs>;
    Productos?: boolean | Prisma.ProductosDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["consumoDetalles"]>;
export type ConsumoDetallesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IdDetalle?: boolean;
    IdConsumo?: boolean;
    IdProducto?: boolean;
    Cantidad?: boolean;
    PrecioUnitario?: boolean;
    FechaRegistro?: boolean;
    Consumos?: boolean | Prisma.ConsumosDefaultArgs<ExtArgs>;
    Productos?: boolean | Prisma.ProductosDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["consumoDetalles"]>;
export type ConsumoDetallesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IdDetalle?: boolean;
    IdConsumo?: boolean;
    IdProducto?: boolean;
    Cantidad?: boolean;
    PrecioUnitario?: boolean;
    FechaRegistro?: boolean;
    Consumos?: boolean | Prisma.ConsumosDefaultArgs<ExtArgs>;
    Productos?: boolean | Prisma.ProductosDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["consumoDetalles"]>;
export type ConsumoDetallesSelectScalar = {
    IdDetalle?: boolean;
    IdConsumo?: boolean;
    IdProducto?: boolean;
    Cantidad?: boolean;
    PrecioUnitario?: boolean;
    FechaRegistro?: boolean;
};
export type ConsumoDetallesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"IdDetalle" | "IdConsumo" | "IdProducto" | "Cantidad" | "PrecioUnitario" | "FechaRegistro", ExtArgs["result"]["consumoDetalles"]>;
export type ConsumoDetallesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Consumos?: boolean | Prisma.ConsumosDefaultArgs<ExtArgs>;
    Productos?: boolean | Prisma.ProductosDefaultArgs<ExtArgs>;
};
export type ConsumoDetallesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Consumos?: boolean | Prisma.ConsumosDefaultArgs<ExtArgs>;
    Productos?: boolean | Prisma.ProductosDefaultArgs<ExtArgs>;
};
export type ConsumoDetallesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Consumos?: boolean | Prisma.ConsumosDefaultArgs<ExtArgs>;
    Productos?: boolean | Prisma.ProductosDefaultArgs<ExtArgs>;
};
export type $ConsumoDetallesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ConsumoDetalles";
    objects: {
        Consumos: Prisma.$ConsumosPayload<ExtArgs>;
        Productos: Prisma.$ProductosPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        IdDetalle: number;
        IdConsumo: number;
        IdProducto: number;
        Cantidad: number;
        PrecioUnitario: runtime.Decimal;
        FechaRegistro: Date;
    }, ExtArgs["result"]["consumoDetalles"]>;
    composites: {};
};
export type ConsumoDetallesGetPayload<S extends boolean | null | undefined | ConsumoDetallesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConsumoDetallesPayload, S>;
export type ConsumoDetallesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ConsumoDetallesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConsumoDetallesCountAggregateInputType | true;
};
export interface ConsumoDetallesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ConsumoDetalles'];
        meta: {
            name: 'ConsumoDetalles';
        };
    };
    findUnique<T extends ConsumoDetallesFindUniqueArgs>(args: Prisma.SelectSubset<T, ConsumoDetallesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConsumoDetallesClient<runtime.Types.Result.GetResult<Prisma.$ConsumoDetallesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ConsumoDetallesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConsumoDetallesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConsumoDetallesClient<runtime.Types.Result.GetResult<Prisma.$ConsumoDetallesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ConsumoDetallesFindFirstArgs>(args?: Prisma.SelectSubset<T, ConsumoDetallesFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConsumoDetallesClient<runtime.Types.Result.GetResult<Prisma.$ConsumoDetallesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ConsumoDetallesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConsumoDetallesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConsumoDetallesClient<runtime.Types.Result.GetResult<Prisma.$ConsumoDetallesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ConsumoDetallesFindManyArgs>(args?: Prisma.SelectSubset<T, ConsumoDetallesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsumoDetallesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ConsumoDetallesCreateArgs>(args: Prisma.SelectSubset<T, ConsumoDetallesCreateArgs<ExtArgs>>): Prisma.Prisma__ConsumoDetallesClient<runtime.Types.Result.GetResult<Prisma.$ConsumoDetallesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ConsumoDetallesCreateManyArgs>(args?: Prisma.SelectSubset<T, ConsumoDetallesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ConsumoDetallesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ConsumoDetallesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsumoDetallesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ConsumoDetallesDeleteArgs>(args: Prisma.SelectSubset<T, ConsumoDetallesDeleteArgs<ExtArgs>>): Prisma.Prisma__ConsumoDetallesClient<runtime.Types.Result.GetResult<Prisma.$ConsumoDetallesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ConsumoDetallesUpdateArgs>(args: Prisma.SelectSubset<T, ConsumoDetallesUpdateArgs<ExtArgs>>): Prisma.Prisma__ConsumoDetallesClient<runtime.Types.Result.GetResult<Prisma.$ConsumoDetallesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ConsumoDetallesDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConsumoDetallesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ConsumoDetallesUpdateManyArgs>(args: Prisma.SelectSubset<T, ConsumoDetallesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ConsumoDetallesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ConsumoDetallesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsumoDetallesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ConsumoDetallesUpsertArgs>(args: Prisma.SelectSubset<T, ConsumoDetallesUpsertArgs<ExtArgs>>): Prisma.Prisma__ConsumoDetallesClient<runtime.Types.Result.GetResult<Prisma.$ConsumoDetallesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ConsumoDetallesCountArgs>(args?: Prisma.Subset<T, ConsumoDetallesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConsumoDetallesCountAggregateOutputType> : number>;
    aggregate<T extends ConsumoDetallesAggregateArgs>(args: Prisma.Subset<T, ConsumoDetallesAggregateArgs>): Prisma.PrismaPromise<GetConsumoDetallesAggregateType<T>>;
    groupBy<T extends ConsumoDetallesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ConsumoDetallesGroupByArgs['orderBy'];
    } : {
        orderBy?: ConsumoDetallesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ConsumoDetallesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsumoDetallesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ConsumoDetallesFieldRefs;
}
export interface Prisma__ConsumoDetallesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Consumos<T extends Prisma.ConsumosDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ConsumosDefaultArgs<ExtArgs>>): Prisma.Prisma__ConsumosClient<runtime.Types.Result.GetResult<Prisma.$ConsumosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    Productos<T extends Prisma.ProductosDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductosDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductosClient<runtime.Types.Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ConsumoDetallesFieldRefs {
    readonly IdDetalle: Prisma.FieldRef<"ConsumoDetalles", 'Int'>;
    readonly IdConsumo: Prisma.FieldRef<"ConsumoDetalles", 'Int'>;
    readonly IdProducto: Prisma.FieldRef<"ConsumoDetalles", 'Int'>;
    readonly Cantidad: Prisma.FieldRef<"ConsumoDetalles", 'Int'>;
    readonly PrecioUnitario: Prisma.FieldRef<"ConsumoDetalles", 'Decimal'>;
    readonly FechaRegistro: Prisma.FieldRef<"ConsumoDetalles", 'DateTime'>;
}
export type ConsumoDetallesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsumoDetallesSelect<ExtArgs> | null;
    omit?: Prisma.ConsumoDetallesOmit<ExtArgs> | null;
    include?: Prisma.ConsumoDetallesInclude<ExtArgs> | null;
    where: Prisma.ConsumoDetallesWhereUniqueInput;
};
export type ConsumoDetallesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsumoDetallesSelect<ExtArgs> | null;
    omit?: Prisma.ConsumoDetallesOmit<ExtArgs> | null;
    include?: Prisma.ConsumoDetallesInclude<ExtArgs> | null;
    where: Prisma.ConsumoDetallesWhereUniqueInput;
};
export type ConsumoDetallesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ConsumoDetallesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ConsumoDetallesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ConsumoDetallesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsumoDetallesSelect<ExtArgs> | null;
    omit?: Prisma.ConsumoDetallesOmit<ExtArgs> | null;
    include?: Prisma.ConsumoDetallesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConsumoDetallesCreateInput, Prisma.ConsumoDetallesUncheckedCreateInput>;
};
export type ConsumoDetallesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ConsumoDetallesCreateManyInput | Prisma.ConsumoDetallesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ConsumoDetallesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsumoDetallesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConsumoDetallesOmit<ExtArgs> | null;
    data: Prisma.ConsumoDetallesCreateManyInput | Prisma.ConsumoDetallesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ConsumoDetallesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ConsumoDetallesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsumoDetallesSelect<ExtArgs> | null;
    omit?: Prisma.ConsumoDetallesOmit<ExtArgs> | null;
    include?: Prisma.ConsumoDetallesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConsumoDetallesUpdateInput, Prisma.ConsumoDetallesUncheckedUpdateInput>;
    where: Prisma.ConsumoDetallesWhereUniqueInput;
};
export type ConsumoDetallesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ConsumoDetallesUpdateManyMutationInput, Prisma.ConsumoDetallesUncheckedUpdateManyInput>;
    where?: Prisma.ConsumoDetallesWhereInput;
    limit?: number;
};
export type ConsumoDetallesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsumoDetallesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConsumoDetallesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConsumoDetallesUpdateManyMutationInput, Prisma.ConsumoDetallesUncheckedUpdateManyInput>;
    where?: Prisma.ConsumoDetallesWhereInput;
    limit?: number;
    include?: Prisma.ConsumoDetallesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ConsumoDetallesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsumoDetallesSelect<ExtArgs> | null;
    omit?: Prisma.ConsumoDetallesOmit<ExtArgs> | null;
    include?: Prisma.ConsumoDetallesInclude<ExtArgs> | null;
    where: Prisma.ConsumoDetallesWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConsumoDetallesCreateInput, Prisma.ConsumoDetallesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ConsumoDetallesUpdateInput, Prisma.ConsumoDetallesUncheckedUpdateInput>;
};
export type ConsumoDetallesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsumoDetallesSelect<ExtArgs> | null;
    omit?: Prisma.ConsumoDetallesOmit<ExtArgs> | null;
    include?: Prisma.ConsumoDetallesInclude<ExtArgs> | null;
    where: Prisma.ConsumoDetallesWhereUniqueInput;
};
export type ConsumoDetallesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsumoDetallesWhereInput;
    limit?: number;
};
export type ConsumoDetallesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsumoDetallesSelect<ExtArgs> | null;
    omit?: Prisma.ConsumoDetallesOmit<ExtArgs> | null;
    include?: Prisma.ConsumoDetallesInclude<ExtArgs> | null;
};
