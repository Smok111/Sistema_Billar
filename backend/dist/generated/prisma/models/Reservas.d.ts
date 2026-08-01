import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ReservasModel = runtime.Types.Result.DefaultSelection<Prisma.$ReservasPayload>;
export type AggregateReservas = {
    _count: ReservasCountAggregateOutputType | null;
    _avg: ReservasAvgAggregateOutputType | null;
    _sum: ReservasSumAggregateOutputType | null;
    _min: ReservasMinAggregateOutputType | null;
    _max: ReservasMaxAggregateOutputType | null;
};
export type ReservasAvgAggregateOutputType = {
    IdReserva: number | null;
    IdMesa: number | null;
    IdCliente: number | null;
    NumeroPersonas: number | null;
};
export type ReservasSumAggregateOutputType = {
    IdReserva: number | null;
    IdMesa: number | null;
    IdCliente: number | null;
    NumeroPersonas: number | null;
};
export type ReservasMinAggregateOutputType = {
    IdReserva: number | null;
    FechaReserva: Date | null;
    HoraInicio: string | null;
    HoraFin: string | null;
    FechaHoraInicioJuego: Date | null;
    FechaHoraFinJuego: Date | null;
    IdMesa: number | null;
    IdCliente: number | null;
    Estado: string | null;
    Observaciones: string | null;
    NumeroPersonas: number | null;
};
export type ReservasMaxAggregateOutputType = {
    IdReserva: number | null;
    FechaReserva: Date | null;
    HoraInicio: string | null;
    HoraFin: string | null;
    FechaHoraInicioJuego: Date | null;
    FechaHoraFinJuego: Date | null;
    IdMesa: number | null;
    IdCliente: number | null;
    Estado: string | null;
    Observaciones: string | null;
    NumeroPersonas: number | null;
};
export type ReservasCountAggregateOutputType = {
    IdReserva: number;
    FechaReserva: number;
    HoraInicio: number;
    HoraFin: number;
    FechaHoraInicioJuego: number;
    FechaHoraFinJuego: number;
    IdMesa: number;
    IdCliente: number;
    Estado: number;
    Observaciones: number;
    NumeroPersonas: number;
    _all: number;
};
export type ReservasAvgAggregateInputType = {
    IdReserva?: true;
    IdMesa?: true;
    IdCliente?: true;
    NumeroPersonas?: true;
};
export type ReservasSumAggregateInputType = {
    IdReserva?: true;
    IdMesa?: true;
    IdCliente?: true;
    NumeroPersonas?: true;
};
export type ReservasMinAggregateInputType = {
    IdReserva?: true;
    FechaReserva?: true;
    HoraInicio?: true;
    HoraFin?: true;
    FechaHoraInicioJuego?: true;
    FechaHoraFinJuego?: true;
    IdMesa?: true;
    IdCliente?: true;
    Estado?: true;
    Observaciones?: true;
    NumeroPersonas?: true;
};
export type ReservasMaxAggregateInputType = {
    IdReserva?: true;
    FechaReserva?: true;
    HoraInicio?: true;
    HoraFin?: true;
    FechaHoraInicioJuego?: true;
    FechaHoraFinJuego?: true;
    IdMesa?: true;
    IdCliente?: true;
    Estado?: true;
    Observaciones?: true;
    NumeroPersonas?: true;
};
export type ReservasCountAggregateInputType = {
    IdReserva?: true;
    FechaReserva?: true;
    HoraInicio?: true;
    HoraFin?: true;
    FechaHoraInicioJuego?: true;
    FechaHoraFinJuego?: true;
    IdMesa?: true;
    IdCliente?: true;
    Estado?: true;
    Observaciones?: true;
    NumeroPersonas?: true;
    _all?: true;
};
export type ReservasAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReservasWhereInput;
    orderBy?: Prisma.ReservasOrderByWithRelationInput | Prisma.ReservasOrderByWithRelationInput[];
    cursor?: Prisma.ReservasWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReservasCountAggregateInputType;
    _avg?: ReservasAvgAggregateInputType;
    _sum?: ReservasSumAggregateInputType;
    _min?: ReservasMinAggregateInputType;
    _max?: ReservasMaxAggregateInputType;
};
export type GetReservasAggregateType<T extends ReservasAggregateArgs> = {
    [P in keyof T & keyof AggregateReservas]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReservas[P]> : Prisma.GetScalarType<T[P], AggregateReservas[P]>;
};
export type ReservasGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReservasWhereInput;
    orderBy?: Prisma.ReservasOrderByWithAggregationInput | Prisma.ReservasOrderByWithAggregationInput[];
    by: Prisma.ReservasScalarFieldEnum[] | Prisma.ReservasScalarFieldEnum;
    having?: Prisma.ReservasScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReservasCountAggregateInputType | true;
    _avg?: ReservasAvgAggregateInputType;
    _sum?: ReservasSumAggregateInputType;
    _min?: ReservasMinAggregateInputType;
    _max?: ReservasMaxAggregateInputType;
};
export type ReservasGroupByOutputType = {
    IdReserva: number;
    FechaReserva: Date;
    HoraInicio: string;
    HoraFin: string;
    FechaHoraInicioJuego: Date | null;
    FechaHoraFinJuego: Date | null;
    IdMesa: number;
    IdCliente: number;
    Estado: string;
    Observaciones: string | null;
    NumeroPersonas: number;
    _count: ReservasCountAggregateOutputType | null;
    _avg: ReservasAvgAggregateOutputType | null;
    _sum: ReservasSumAggregateOutputType | null;
    _min: ReservasMinAggregateOutputType | null;
    _max: ReservasMaxAggregateOutputType | null;
};
export type GetReservasGroupByPayload<T extends ReservasGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReservasGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReservasGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReservasGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReservasGroupByOutputType[P]>;
}>>;
export type ReservasWhereInput = {
    AND?: Prisma.ReservasWhereInput | Prisma.ReservasWhereInput[];
    OR?: Prisma.ReservasWhereInput[];
    NOT?: Prisma.ReservasWhereInput | Prisma.ReservasWhereInput[];
    IdReserva?: Prisma.IntFilter<"Reservas"> | number;
    FechaReserva?: Prisma.DateTimeFilter<"Reservas"> | Date | string;
    HoraInicio?: Prisma.StringFilter<"Reservas"> | string;
    HoraFin?: Prisma.StringFilter<"Reservas"> | string;
    FechaHoraInicioJuego?: Prisma.DateTimeNullableFilter<"Reservas"> | Date | string | null;
    FechaHoraFinJuego?: Prisma.DateTimeNullableFilter<"Reservas"> | Date | string | null;
    IdMesa?: Prisma.IntFilter<"Reservas"> | number;
    IdCliente?: Prisma.IntFilter<"Reservas"> | number;
    Estado?: Prisma.StringFilter<"Reservas"> | string;
    Observaciones?: Prisma.StringNullableFilter<"Reservas"> | string | null;
    NumeroPersonas?: Prisma.IntFilter<"Reservas"> | number;
    Clientes?: Prisma.XOR<Prisma.ClientesScalarRelationFilter, Prisma.ClientesWhereInput>;
    Mesas?: Prisma.XOR<Prisma.MesasScalarRelationFilter, Prisma.MesasWhereInput>;
};
export type ReservasOrderByWithRelationInput = {
    IdReserva?: Prisma.SortOrder;
    FechaReserva?: Prisma.SortOrder;
    HoraInicio?: Prisma.SortOrder;
    HoraFin?: Prisma.SortOrder;
    FechaHoraInicioJuego?: Prisma.SortOrderInput | Prisma.SortOrder;
    FechaHoraFinJuego?: Prisma.SortOrderInput | Prisma.SortOrder;
    IdMesa?: Prisma.SortOrder;
    IdCliente?: Prisma.SortOrder;
    Estado?: Prisma.SortOrder;
    Observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    NumeroPersonas?: Prisma.SortOrder;
    Clientes?: Prisma.ClientesOrderByWithRelationInput;
    Mesas?: Prisma.MesasOrderByWithRelationInput;
};
export type ReservasWhereUniqueInput = Prisma.AtLeast<{
    IdReserva?: number;
    AND?: Prisma.ReservasWhereInput | Prisma.ReservasWhereInput[];
    OR?: Prisma.ReservasWhereInput[];
    NOT?: Prisma.ReservasWhereInput | Prisma.ReservasWhereInput[];
    FechaReserva?: Prisma.DateTimeFilter<"Reservas"> | Date | string;
    HoraInicio?: Prisma.StringFilter<"Reservas"> | string;
    HoraFin?: Prisma.StringFilter<"Reservas"> | string;
    FechaHoraInicioJuego?: Prisma.DateTimeNullableFilter<"Reservas"> | Date | string | null;
    FechaHoraFinJuego?: Prisma.DateTimeNullableFilter<"Reservas"> | Date | string | null;
    IdMesa?: Prisma.IntFilter<"Reservas"> | number;
    IdCliente?: Prisma.IntFilter<"Reservas"> | number;
    Estado?: Prisma.StringFilter<"Reservas"> | string;
    Observaciones?: Prisma.StringNullableFilter<"Reservas"> | string | null;
    NumeroPersonas?: Prisma.IntFilter<"Reservas"> | number;
    Clientes?: Prisma.XOR<Prisma.ClientesScalarRelationFilter, Prisma.ClientesWhereInput>;
    Mesas?: Prisma.XOR<Prisma.MesasScalarRelationFilter, Prisma.MesasWhereInput>;
}, "IdReserva">;
export type ReservasOrderByWithAggregationInput = {
    IdReserva?: Prisma.SortOrder;
    FechaReserva?: Prisma.SortOrder;
    HoraInicio?: Prisma.SortOrder;
    HoraFin?: Prisma.SortOrder;
    FechaHoraInicioJuego?: Prisma.SortOrderInput | Prisma.SortOrder;
    FechaHoraFinJuego?: Prisma.SortOrderInput | Prisma.SortOrder;
    IdMesa?: Prisma.SortOrder;
    IdCliente?: Prisma.SortOrder;
    Estado?: Prisma.SortOrder;
    Observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    NumeroPersonas?: Prisma.SortOrder;
    _count?: Prisma.ReservasCountOrderByAggregateInput;
    _avg?: Prisma.ReservasAvgOrderByAggregateInput;
    _max?: Prisma.ReservasMaxOrderByAggregateInput;
    _min?: Prisma.ReservasMinOrderByAggregateInput;
    _sum?: Prisma.ReservasSumOrderByAggregateInput;
};
export type ReservasScalarWhereWithAggregatesInput = {
    AND?: Prisma.ReservasScalarWhereWithAggregatesInput | Prisma.ReservasScalarWhereWithAggregatesInput[];
    OR?: Prisma.ReservasScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ReservasScalarWhereWithAggregatesInput | Prisma.ReservasScalarWhereWithAggregatesInput[];
    IdReserva?: Prisma.IntWithAggregatesFilter<"Reservas"> | number;
    FechaReserva?: Prisma.DateTimeWithAggregatesFilter<"Reservas"> | Date | string;
    HoraInicio?: Prisma.StringWithAggregatesFilter<"Reservas"> | string;
    HoraFin?: Prisma.StringWithAggregatesFilter<"Reservas"> | string;
    FechaHoraInicioJuego?: Prisma.DateTimeNullableWithAggregatesFilter<"Reservas"> | Date | string | null;
    FechaHoraFinJuego?: Prisma.DateTimeNullableWithAggregatesFilter<"Reservas"> | Date | string | null;
    IdMesa?: Prisma.IntWithAggregatesFilter<"Reservas"> | number;
    IdCliente?: Prisma.IntWithAggregatesFilter<"Reservas"> | number;
    Estado?: Prisma.StringWithAggregatesFilter<"Reservas"> | string;
    Observaciones?: Prisma.StringNullableWithAggregatesFilter<"Reservas"> | string | null;
    NumeroPersonas?: Prisma.IntWithAggregatesFilter<"Reservas"> | number;
};
export type ReservasCreateInput = {
    FechaReserva: Date | string;
    HoraInicio: string;
    HoraFin: string;
    FechaHoraInicioJuego?: Date | string | null;
    FechaHoraFinJuego?: Date | string | null;
    Estado: string;
    Observaciones?: string | null;
    NumeroPersonas: number;
    Clientes: Prisma.ClientesCreateNestedOneWithoutReservasInput;
    Mesas: Prisma.MesasCreateNestedOneWithoutReservasInput;
};
export type ReservasUncheckedCreateInput = {
    IdReserva?: number;
    FechaReserva: Date | string;
    HoraInicio: string;
    HoraFin: string;
    FechaHoraInicioJuego?: Date | string | null;
    FechaHoraFinJuego?: Date | string | null;
    IdMesa: number;
    IdCliente: number;
    Estado: string;
    Observaciones?: string | null;
    NumeroPersonas: number;
};
export type ReservasUpdateInput = {
    FechaReserva?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    HoraInicio?: Prisma.StringFieldUpdateOperationsInput | string;
    HoraFin?: Prisma.StringFieldUpdateOperationsInput | string;
    FechaHoraInicioJuego?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FechaHoraFinJuego?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    Estado?: Prisma.StringFieldUpdateOperationsInput | string;
    Observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NumeroPersonas?: Prisma.IntFieldUpdateOperationsInput | number;
    Clientes?: Prisma.ClientesUpdateOneRequiredWithoutReservasNestedInput;
    Mesas?: Prisma.MesasUpdateOneRequiredWithoutReservasNestedInput;
};
export type ReservasUncheckedUpdateInput = {
    IdReserva?: Prisma.IntFieldUpdateOperationsInput | number;
    FechaReserva?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    HoraInicio?: Prisma.StringFieldUpdateOperationsInput | string;
    HoraFin?: Prisma.StringFieldUpdateOperationsInput | string;
    FechaHoraInicioJuego?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FechaHoraFinJuego?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    IdMesa?: Prisma.IntFieldUpdateOperationsInput | number;
    IdCliente?: Prisma.IntFieldUpdateOperationsInput | number;
    Estado?: Prisma.StringFieldUpdateOperationsInput | string;
    Observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NumeroPersonas?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ReservasCreateManyInput = {
    IdReserva?: number;
    FechaReserva: Date | string;
    HoraInicio: string;
    HoraFin: string;
    FechaHoraInicioJuego?: Date | string | null;
    FechaHoraFinJuego?: Date | string | null;
    IdMesa: number;
    IdCliente: number;
    Estado: string;
    Observaciones?: string | null;
    NumeroPersonas: number;
};
export type ReservasUpdateManyMutationInput = {
    FechaReserva?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    HoraInicio?: Prisma.StringFieldUpdateOperationsInput | string;
    HoraFin?: Prisma.StringFieldUpdateOperationsInput | string;
    FechaHoraInicioJuego?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FechaHoraFinJuego?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    Estado?: Prisma.StringFieldUpdateOperationsInput | string;
    Observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NumeroPersonas?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ReservasUncheckedUpdateManyInput = {
    IdReserva?: Prisma.IntFieldUpdateOperationsInput | number;
    FechaReserva?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    HoraInicio?: Prisma.StringFieldUpdateOperationsInput | string;
    HoraFin?: Prisma.StringFieldUpdateOperationsInput | string;
    FechaHoraInicioJuego?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FechaHoraFinJuego?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    IdMesa?: Prisma.IntFieldUpdateOperationsInput | number;
    IdCliente?: Prisma.IntFieldUpdateOperationsInput | number;
    Estado?: Prisma.StringFieldUpdateOperationsInput | string;
    Observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NumeroPersonas?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ReservasListRelationFilter = {
    every?: Prisma.ReservasWhereInput;
    some?: Prisma.ReservasWhereInput;
    none?: Prisma.ReservasWhereInput;
};
export type ReservasOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ReservasCountOrderByAggregateInput = {
    IdReserva?: Prisma.SortOrder;
    FechaReserva?: Prisma.SortOrder;
    HoraInicio?: Prisma.SortOrder;
    HoraFin?: Prisma.SortOrder;
    FechaHoraInicioJuego?: Prisma.SortOrder;
    FechaHoraFinJuego?: Prisma.SortOrder;
    IdMesa?: Prisma.SortOrder;
    IdCliente?: Prisma.SortOrder;
    Estado?: Prisma.SortOrder;
    Observaciones?: Prisma.SortOrder;
    NumeroPersonas?: Prisma.SortOrder;
};
export type ReservasAvgOrderByAggregateInput = {
    IdReserva?: Prisma.SortOrder;
    IdMesa?: Prisma.SortOrder;
    IdCliente?: Prisma.SortOrder;
    NumeroPersonas?: Prisma.SortOrder;
};
export type ReservasMaxOrderByAggregateInput = {
    IdReserva?: Prisma.SortOrder;
    FechaReserva?: Prisma.SortOrder;
    HoraInicio?: Prisma.SortOrder;
    HoraFin?: Prisma.SortOrder;
    FechaHoraInicioJuego?: Prisma.SortOrder;
    FechaHoraFinJuego?: Prisma.SortOrder;
    IdMesa?: Prisma.SortOrder;
    IdCliente?: Prisma.SortOrder;
    Estado?: Prisma.SortOrder;
    Observaciones?: Prisma.SortOrder;
    NumeroPersonas?: Prisma.SortOrder;
};
export type ReservasMinOrderByAggregateInput = {
    IdReserva?: Prisma.SortOrder;
    FechaReserva?: Prisma.SortOrder;
    HoraInicio?: Prisma.SortOrder;
    HoraFin?: Prisma.SortOrder;
    FechaHoraInicioJuego?: Prisma.SortOrder;
    FechaHoraFinJuego?: Prisma.SortOrder;
    IdMesa?: Prisma.SortOrder;
    IdCliente?: Prisma.SortOrder;
    Estado?: Prisma.SortOrder;
    Observaciones?: Prisma.SortOrder;
    NumeroPersonas?: Prisma.SortOrder;
};
export type ReservasSumOrderByAggregateInput = {
    IdReserva?: Prisma.SortOrder;
    IdMesa?: Prisma.SortOrder;
    IdCliente?: Prisma.SortOrder;
    NumeroPersonas?: Prisma.SortOrder;
};
export type ReservasCreateNestedManyWithoutClientesInput = {
    create?: Prisma.XOR<Prisma.ReservasCreateWithoutClientesInput, Prisma.ReservasUncheckedCreateWithoutClientesInput> | Prisma.ReservasCreateWithoutClientesInput[] | Prisma.ReservasUncheckedCreateWithoutClientesInput[];
    connectOrCreate?: Prisma.ReservasCreateOrConnectWithoutClientesInput | Prisma.ReservasCreateOrConnectWithoutClientesInput[];
    createMany?: Prisma.ReservasCreateManyClientesInputEnvelope;
    connect?: Prisma.ReservasWhereUniqueInput | Prisma.ReservasWhereUniqueInput[];
};
export type ReservasUncheckedCreateNestedManyWithoutClientesInput = {
    create?: Prisma.XOR<Prisma.ReservasCreateWithoutClientesInput, Prisma.ReservasUncheckedCreateWithoutClientesInput> | Prisma.ReservasCreateWithoutClientesInput[] | Prisma.ReservasUncheckedCreateWithoutClientesInput[];
    connectOrCreate?: Prisma.ReservasCreateOrConnectWithoutClientesInput | Prisma.ReservasCreateOrConnectWithoutClientesInput[];
    createMany?: Prisma.ReservasCreateManyClientesInputEnvelope;
    connect?: Prisma.ReservasWhereUniqueInput | Prisma.ReservasWhereUniqueInput[];
};
export type ReservasUpdateManyWithoutClientesNestedInput = {
    create?: Prisma.XOR<Prisma.ReservasCreateWithoutClientesInput, Prisma.ReservasUncheckedCreateWithoutClientesInput> | Prisma.ReservasCreateWithoutClientesInput[] | Prisma.ReservasUncheckedCreateWithoutClientesInput[];
    connectOrCreate?: Prisma.ReservasCreateOrConnectWithoutClientesInput | Prisma.ReservasCreateOrConnectWithoutClientesInput[];
    upsert?: Prisma.ReservasUpsertWithWhereUniqueWithoutClientesInput | Prisma.ReservasUpsertWithWhereUniqueWithoutClientesInput[];
    createMany?: Prisma.ReservasCreateManyClientesInputEnvelope;
    set?: Prisma.ReservasWhereUniqueInput | Prisma.ReservasWhereUniqueInput[];
    disconnect?: Prisma.ReservasWhereUniqueInput | Prisma.ReservasWhereUniqueInput[];
    delete?: Prisma.ReservasWhereUniqueInput | Prisma.ReservasWhereUniqueInput[];
    connect?: Prisma.ReservasWhereUniqueInput | Prisma.ReservasWhereUniqueInput[];
    update?: Prisma.ReservasUpdateWithWhereUniqueWithoutClientesInput | Prisma.ReservasUpdateWithWhereUniqueWithoutClientesInput[];
    updateMany?: Prisma.ReservasUpdateManyWithWhereWithoutClientesInput | Prisma.ReservasUpdateManyWithWhereWithoutClientesInput[];
    deleteMany?: Prisma.ReservasScalarWhereInput | Prisma.ReservasScalarWhereInput[];
};
export type ReservasUncheckedUpdateManyWithoutClientesNestedInput = {
    create?: Prisma.XOR<Prisma.ReservasCreateWithoutClientesInput, Prisma.ReservasUncheckedCreateWithoutClientesInput> | Prisma.ReservasCreateWithoutClientesInput[] | Prisma.ReservasUncheckedCreateWithoutClientesInput[];
    connectOrCreate?: Prisma.ReservasCreateOrConnectWithoutClientesInput | Prisma.ReservasCreateOrConnectWithoutClientesInput[];
    upsert?: Prisma.ReservasUpsertWithWhereUniqueWithoutClientesInput | Prisma.ReservasUpsertWithWhereUniqueWithoutClientesInput[];
    createMany?: Prisma.ReservasCreateManyClientesInputEnvelope;
    set?: Prisma.ReservasWhereUniqueInput | Prisma.ReservasWhereUniqueInput[];
    disconnect?: Prisma.ReservasWhereUniqueInput | Prisma.ReservasWhereUniqueInput[];
    delete?: Prisma.ReservasWhereUniqueInput | Prisma.ReservasWhereUniqueInput[];
    connect?: Prisma.ReservasWhereUniqueInput | Prisma.ReservasWhereUniqueInput[];
    update?: Prisma.ReservasUpdateWithWhereUniqueWithoutClientesInput | Prisma.ReservasUpdateWithWhereUniqueWithoutClientesInput[];
    updateMany?: Prisma.ReservasUpdateManyWithWhereWithoutClientesInput | Prisma.ReservasUpdateManyWithWhereWithoutClientesInput[];
    deleteMany?: Prisma.ReservasScalarWhereInput | Prisma.ReservasScalarWhereInput[];
};
export type ReservasCreateNestedManyWithoutMesasInput = {
    create?: Prisma.XOR<Prisma.ReservasCreateWithoutMesasInput, Prisma.ReservasUncheckedCreateWithoutMesasInput> | Prisma.ReservasCreateWithoutMesasInput[] | Prisma.ReservasUncheckedCreateWithoutMesasInput[];
    connectOrCreate?: Prisma.ReservasCreateOrConnectWithoutMesasInput | Prisma.ReservasCreateOrConnectWithoutMesasInput[];
    createMany?: Prisma.ReservasCreateManyMesasInputEnvelope;
    connect?: Prisma.ReservasWhereUniqueInput | Prisma.ReservasWhereUniqueInput[];
};
export type ReservasUncheckedCreateNestedManyWithoutMesasInput = {
    create?: Prisma.XOR<Prisma.ReservasCreateWithoutMesasInput, Prisma.ReservasUncheckedCreateWithoutMesasInput> | Prisma.ReservasCreateWithoutMesasInput[] | Prisma.ReservasUncheckedCreateWithoutMesasInput[];
    connectOrCreate?: Prisma.ReservasCreateOrConnectWithoutMesasInput | Prisma.ReservasCreateOrConnectWithoutMesasInput[];
    createMany?: Prisma.ReservasCreateManyMesasInputEnvelope;
    connect?: Prisma.ReservasWhereUniqueInput | Prisma.ReservasWhereUniqueInput[];
};
export type ReservasUpdateManyWithoutMesasNestedInput = {
    create?: Prisma.XOR<Prisma.ReservasCreateWithoutMesasInput, Prisma.ReservasUncheckedCreateWithoutMesasInput> | Prisma.ReservasCreateWithoutMesasInput[] | Prisma.ReservasUncheckedCreateWithoutMesasInput[];
    connectOrCreate?: Prisma.ReservasCreateOrConnectWithoutMesasInput | Prisma.ReservasCreateOrConnectWithoutMesasInput[];
    upsert?: Prisma.ReservasUpsertWithWhereUniqueWithoutMesasInput | Prisma.ReservasUpsertWithWhereUniqueWithoutMesasInput[];
    createMany?: Prisma.ReservasCreateManyMesasInputEnvelope;
    set?: Prisma.ReservasWhereUniqueInput | Prisma.ReservasWhereUniqueInput[];
    disconnect?: Prisma.ReservasWhereUniqueInput | Prisma.ReservasWhereUniqueInput[];
    delete?: Prisma.ReservasWhereUniqueInput | Prisma.ReservasWhereUniqueInput[];
    connect?: Prisma.ReservasWhereUniqueInput | Prisma.ReservasWhereUniqueInput[];
    update?: Prisma.ReservasUpdateWithWhereUniqueWithoutMesasInput | Prisma.ReservasUpdateWithWhereUniqueWithoutMesasInput[];
    updateMany?: Prisma.ReservasUpdateManyWithWhereWithoutMesasInput | Prisma.ReservasUpdateManyWithWhereWithoutMesasInput[];
    deleteMany?: Prisma.ReservasScalarWhereInput | Prisma.ReservasScalarWhereInput[];
};
export type ReservasUncheckedUpdateManyWithoutMesasNestedInput = {
    create?: Prisma.XOR<Prisma.ReservasCreateWithoutMesasInput, Prisma.ReservasUncheckedCreateWithoutMesasInput> | Prisma.ReservasCreateWithoutMesasInput[] | Prisma.ReservasUncheckedCreateWithoutMesasInput[];
    connectOrCreate?: Prisma.ReservasCreateOrConnectWithoutMesasInput | Prisma.ReservasCreateOrConnectWithoutMesasInput[];
    upsert?: Prisma.ReservasUpsertWithWhereUniqueWithoutMesasInput | Prisma.ReservasUpsertWithWhereUniqueWithoutMesasInput[];
    createMany?: Prisma.ReservasCreateManyMesasInputEnvelope;
    set?: Prisma.ReservasWhereUniqueInput | Prisma.ReservasWhereUniqueInput[];
    disconnect?: Prisma.ReservasWhereUniqueInput | Prisma.ReservasWhereUniqueInput[];
    delete?: Prisma.ReservasWhereUniqueInput | Prisma.ReservasWhereUniqueInput[];
    connect?: Prisma.ReservasWhereUniqueInput | Prisma.ReservasWhereUniqueInput[];
    update?: Prisma.ReservasUpdateWithWhereUniqueWithoutMesasInput | Prisma.ReservasUpdateWithWhereUniqueWithoutMesasInput[];
    updateMany?: Prisma.ReservasUpdateManyWithWhereWithoutMesasInput | Prisma.ReservasUpdateManyWithWhereWithoutMesasInput[];
    deleteMany?: Prisma.ReservasScalarWhereInput | Prisma.ReservasScalarWhereInput[];
};
export type ReservasCreateWithoutClientesInput = {
    FechaReserva: Date | string;
    HoraInicio: string;
    HoraFin: string;
    FechaHoraInicioJuego?: Date | string | null;
    FechaHoraFinJuego?: Date | string | null;
    Estado: string;
    Observaciones?: string | null;
    NumeroPersonas: number;
    Mesas: Prisma.MesasCreateNestedOneWithoutReservasInput;
};
export type ReservasUncheckedCreateWithoutClientesInput = {
    IdReserva?: number;
    FechaReserva: Date | string;
    HoraInicio: string;
    HoraFin: string;
    FechaHoraInicioJuego?: Date | string | null;
    FechaHoraFinJuego?: Date | string | null;
    IdMesa: number;
    Estado: string;
    Observaciones?: string | null;
    NumeroPersonas: number;
};
export type ReservasCreateOrConnectWithoutClientesInput = {
    where: Prisma.ReservasWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReservasCreateWithoutClientesInput, Prisma.ReservasUncheckedCreateWithoutClientesInput>;
};
export type ReservasCreateManyClientesInputEnvelope = {
    data: Prisma.ReservasCreateManyClientesInput | Prisma.ReservasCreateManyClientesInput[];
    skipDuplicates?: boolean;
};
export type ReservasUpsertWithWhereUniqueWithoutClientesInput = {
    where: Prisma.ReservasWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReservasUpdateWithoutClientesInput, Prisma.ReservasUncheckedUpdateWithoutClientesInput>;
    create: Prisma.XOR<Prisma.ReservasCreateWithoutClientesInput, Prisma.ReservasUncheckedCreateWithoutClientesInput>;
};
export type ReservasUpdateWithWhereUniqueWithoutClientesInput = {
    where: Prisma.ReservasWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReservasUpdateWithoutClientesInput, Prisma.ReservasUncheckedUpdateWithoutClientesInput>;
};
export type ReservasUpdateManyWithWhereWithoutClientesInput = {
    where: Prisma.ReservasScalarWhereInput;
    data: Prisma.XOR<Prisma.ReservasUpdateManyMutationInput, Prisma.ReservasUncheckedUpdateManyWithoutClientesInput>;
};
export type ReservasScalarWhereInput = {
    AND?: Prisma.ReservasScalarWhereInput | Prisma.ReservasScalarWhereInput[];
    OR?: Prisma.ReservasScalarWhereInput[];
    NOT?: Prisma.ReservasScalarWhereInput | Prisma.ReservasScalarWhereInput[];
    IdReserva?: Prisma.IntFilter<"Reservas"> | number;
    FechaReserva?: Prisma.DateTimeFilter<"Reservas"> | Date | string;
    HoraInicio?: Prisma.StringFilter<"Reservas"> | string;
    HoraFin?: Prisma.StringFilter<"Reservas"> | string;
    FechaHoraInicioJuego?: Prisma.DateTimeNullableFilter<"Reservas"> | Date | string | null;
    FechaHoraFinJuego?: Prisma.DateTimeNullableFilter<"Reservas"> | Date | string | null;
    IdMesa?: Prisma.IntFilter<"Reservas"> | number;
    IdCliente?: Prisma.IntFilter<"Reservas"> | number;
    Estado?: Prisma.StringFilter<"Reservas"> | string;
    Observaciones?: Prisma.StringNullableFilter<"Reservas"> | string | null;
    NumeroPersonas?: Prisma.IntFilter<"Reservas"> | number;
};
export type ReservasCreateWithoutMesasInput = {
    FechaReserva: Date | string;
    HoraInicio: string;
    HoraFin: string;
    FechaHoraInicioJuego?: Date | string | null;
    FechaHoraFinJuego?: Date | string | null;
    Estado: string;
    Observaciones?: string | null;
    NumeroPersonas: number;
    Clientes: Prisma.ClientesCreateNestedOneWithoutReservasInput;
};
export type ReservasUncheckedCreateWithoutMesasInput = {
    IdReserva?: number;
    FechaReserva: Date | string;
    HoraInicio: string;
    HoraFin: string;
    FechaHoraInicioJuego?: Date | string | null;
    FechaHoraFinJuego?: Date | string | null;
    IdCliente: number;
    Estado: string;
    Observaciones?: string | null;
    NumeroPersonas: number;
};
export type ReservasCreateOrConnectWithoutMesasInput = {
    where: Prisma.ReservasWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReservasCreateWithoutMesasInput, Prisma.ReservasUncheckedCreateWithoutMesasInput>;
};
export type ReservasCreateManyMesasInputEnvelope = {
    data: Prisma.ReservasCreateManyMesasInput | Prisma.ReservasCreateManyMesasInput[];
    skipDuplicates?: boolean;
};
export type ReservasUpsertWithWhereUniqueWithoutMesasInput = {
    where: Prisma.ReservasWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReservasUpdateWithoutMesasInput, Prisma.ReservasUncheckedUpdateWithoutMesasInput>;
    create: Prisma.XOR<Prisma.ReservasCreateWithoutMesasInput, Prisma.ReservasUncheckedCreateWithoutMesasInput>;
};
export type ReservasUpdateWithWhereUniqueWithoutMesasInput = {
    where: Prisma.ReservasWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReservasUpdateWithoutMesasInput, Prisma.ReservasUncheckedUpdateWithoutMesasInput>;
};
export type ReservasUpdateManyWithWhereWithoutMesasInput = {
    where: Prisma.ReservasScalarWhereInput;
    data: Prisma.XOR<Prisma.ReservasUpdateManyMutationInput, Prisma.ReservasUncheckedUpdateManyWithoutMesasInput>;
};
export type ReservasCreateManyClientesInput = {
    IdReserva?: number;
    FechaReserva: Date | string;
    HoraInicio: string;
    HoraFin: string;
    FechaHoraInicioJuego?: Date | string | null;
    FechaHoraFinJuego?: Date | string | null;
    IdMesa: number;
    Estado: string;
    Observaciones?: string | null;
    NumeroPersonas: number;
};
export type ReservasUpdateWithoutClientesInput = {
    FechaReserva?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    HoraInicio?: Prisma.StringFieldUpdateOperationsInput | string;
    HoraFin?: Prisma.StringFieldUpdateOperationsInput | string;
    FechaHoraInicioJuego?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FechaHoraFinJuego?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    Estado?: Prisma.StringFieldUpdateOperationsInput | string;
    Observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NumeroPersonas?: Prisma.IntFieldUpdateOperationsInput | number;
    Mesas?: Prisma.MesasUpdateOneRequiredWithoutReservasNestedInput;
};
export type ReservasUncheckedUpdateWithoutClientesInput = {
    IdReserva?: Prisma.IntFieldUpdateOperationsInput | number;
    FechaReserva?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    HoraInicio?: Prisma.StringFieldUpdateOperationsInput | string;
    HoraFin?: Prisma.StringFieldUpdateOperationsInput | string;
    FechaHoraInicioJuego?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FechaHoraFinJuego?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    IdMesa?: Prisma.IntFieldUpdateOperationsInput | number;
    Estado?: Prisma.StringFieldUpdateOperationsInput | string;
    Observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NumeroPersonas?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ReservasUncheckedUpdateManyWithoutClientesInput = {
    IdReserva?: Prisma.IntFieldUpdateOperationsInput | number;
    FechaReserva?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    HoraInicio?: Prisma.StringFieldUpdateOperationsInput | string;
    HoraFin?: Prisma.StringFieldUpdateOperationsInput | string;
    FechaHoraInicioJuego?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FechaHoraFinJuego?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    IdMesa?: Prisma.IntFieldUpdateOperationsInput | number;
    Estado?: Prisma.StringFieldUpdateOperationsInput | string;
    Observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NumeroPersonas?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ReservasCreateManyMesasInput = {
    IdReserva?: number;
    FechaReserva: Date | string;
    HoraInicio: string;
    HoraFin: string;
    FechaHoraInicioJuego?: Date | string | null;
    FechaHoraFinJuego?: Date | string | null;
    IdCliente: number;
    Estado: string;
    Observaciones?: string | null;
    NumeroPersonas: number;
};
export type ReservasUpdateWithoutMesasInput = {
    FechaReserva?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    HoraInicio?: Prisma.StringFieldUpdateOperationsInput | string;
    HoraFin?: Prisma.StringFieldUpdateOperationsInput | string;
    FechaHoraInicioJuego?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FechaHoraFinJuego?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    Estado?: Prisma.StringFieldUpdateOperationsInput | string;
    Observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NumeroPersonas?: Prisma.IntFieldUpdateOperationsInput | number;
    Clientes?: Prisma.ClientesUpdateOneRequiredWithoutReservasNestedInput;
};
export type ReservasUncheckedUpdateWithoutMesasInput = {
    IdReserva?: Prisma.IntFieldUpdateOperationsInput | number;
    FechaReserva?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    HoraInicio?: Prisma.StringFieldUpdateOperationsInput | string;
    HoraFin?: Prisma.StringFieldUpdateOperationsInput | string;
    FechaHoraInicioJuego?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FechaHoraFinJuego?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    IdCliente?: Prisma.IntFieldUpdateOperationsInput | number;
    Estado?: Prisma.StringFieldUpdateOperationsInput | string;
    Observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NumeroPersonas?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ReservasUncheckedUpdateManyWithoutMesasInput = {
    IdReserva?: Prisma.IntFieldUpdateOperationsInput | number;
    FechaReserva?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    HoraInicio?: Prisma.StringFieldUpdateOperationsInput | string;
    HoraFin?: Prisma.StringFieldUpdateOperationsInput | string;
    FechaHoraInicioJuego?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    FechaHoraFinJuego?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    IdCliente?: Prisma.IntFieldUpdateOperationsInput | number;
    Estado?: Prisma.StringFieldUpdateOperationsInput | string;
    Observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NumeroPersonas?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ReservasSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IdReserva?: boolean;
    FechaReserva?: boolean;
    HoraInicio?: boolean;
    HoraFin?: boolean;
    FechaHoraInicioJuego?: boolean;
    FechaHoraFinJuego?: boolean;
    IdMesa?: boolean;
    IdCliente?: boolean;
    Estado?: boolean;
    Observaciones?: boolean;
    NumeroPersonas?: boolean;
    Clientes?: boolean | Prisma.ClientesDefaultArgs<ExtArgs>;
    Mesas?: boolean | Prisma.MesasDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reservas"]>;
export type ReservasSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IdReserva?: boolean;
    FechaReserva?: boolean;
    HoraInicio?: boolean;
    HoraFin?: boolean;
    FechaHoraInicioJuego?: boolean;
    FechaHoraFinJuego?: boolean;
    IdMesa?: boolean;
    IdCliente?: boolean;
    Estado?: boolean;
    Observaciones?: boolean;
    NumeroPersonas?: boolean;
    Clientes?: boolean | Prisma.ClientesDefaultArgs<ExtArgs>;
    Mesas?: boolean | Prisma.MesasDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reservas"]>;
export type ReservasSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IdReserva?: boolean;
    FechaReserva?: boolean;
    HoraInicio?: boolean;
    HoraFin?: boolean;
    FechaHoraInicioJuego?: boolean;
    FechaHoraFinJuego?: boolean;
    IdMesa?: boolean;
    IdCliente?: boolean;
    Estado?: boolean;
    Observaciones?: boolean;
    NumeroPersonas?: boolean;
    Clientes?: boolean | Prisma.ClientesDefaultArgs<ExtArgs>;
    Mesas?: boolean | Prisma.MesasDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reservas"]>;
export type ReservasSelectScalar = {
    IdReserva?: boolean;
    FechaReserva?: boolean;
    HoraInicio?: boolean;
    HoraFin?: boolean;
    FechaHoraInicioJuego?: boolean;
    FechaHoraFinJuego?: boolean;
    IdMesa?: boolean;
    IdCliente?: boolean;
    Estado?: boolean;
    Observaciones?: boolean;
    NumeroPersonas?: boolean;
};
export type ReservasOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"IdReserva" | "FechaReserva" | "HoraInicio" | "HoraFin" | "FechaHoraInicioJuego" | "FechaHoraFinJuego" | "IdMesa" | "IdCliente" | "Estado" | "Observaciones" | "NumeroPersonas", ExtArgs["result"]["reservas"]>;
export type ReservasInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Clientes?: boolean | Prisma.ClientesDefaultArgs<ExtArgs>;
    Mesas?: boolean | Prisma.MesasDefaultArgs<ExtArgs>;
};
export type ReservasIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Clientes?: boolean | Prisma.ClientesDefaultArgs<ExtArgs>;
    Mesas?: boolean | Prisma.MesasDefaultArgs<ExtArgs>;
};
export type ReservasIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Clientes?: boolean | Prisma.ClientesDefaultArgs<ExtArgs>;
    Mesas?: boolean | Prisma.MesasDefaultArgs<ExtArgs>;
};
export type $ReservasPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Reservas";
    objects: {
        Clientes: Prisma.$ClientesPayload<ExtArgs>;
        Mesas: Prisma.$MesasPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        IdReserva: number;
        FechaReserva: Date;
        HoraInicio: string;
        HoraFin: string;
        FechaHoraInicioJuego: Date | null;
        FechaHoraFinJuego: Date | null;
        IdMesa: number;
        IdCliente: number;
        Estado: string;
        Observaciones: string | null;
        NumeroPersonas: number;
    }, ExtArgs["result"]["reservas"]>;
    composites: {};
};
export type ReservasGetPayload<S extends boolean | null | undefined | ReservasDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReservasPayload, S>;
export type ReservasCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ReservasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReservasCountAggregateInputType | true;
};
export interface ReservasDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Reservas'];
        meta: {
            name: 'Reservas';
        };
    };
    findUnique<T extends ReservasFindUniqueArgs>(args: Prisma.SelectSubset<T, ReservasFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReservasClient<runtime.Types.Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ReservasFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReservasFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReservasClient<runtime.Types.Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ReservasFindFirstArgs>(args?: Prisma.SelectSubset<T, ReservasFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReservasClient<runtime.Types.Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ReservasFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReservasFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReservasClient<runtime.Types.Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ReservasFindManyArgs>(args?: Prisma.SelectSubset<T, ReservasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ReservasCreateArgs>(args: Prisma.SelectSubset<T, ReservasCreateArgs<ExtArgs>>): Prisma.Prisma__ReservasClient<runtime.Types.Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ReservasCreateManyArgs>(args?: Prisma.SelectSubset<T, ReservasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ReservasCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ReservasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ReservasDeleteArgs>(args: Prisma.SelectSubset<T, ReservasDeleteArgs<ExtArgs>>): Prisma.Prisma__ReservasClient<runtime.Types.Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ReservasUpdateArgs>(args: Prisma.SelectSubset<T, ReservasUpdateArgs<ExtArgs>>): Prisma.Prisma__ReservasClient<runtime.Types.Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ReservasDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReservasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ReservasUpdateManyArgs>(args: Prisma.SelectSubset<T, ReservasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ReservasUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ReservasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ReservasUpsertArgs>(args: Prisma.SelectSubset<T, ReservasUpsertArgs<ExtArgs>>): Prisma.Prisma__ReservasClient<runtime.Types.Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ReservasCountArgs>(args?: Prisma.Subset<T, ReservasCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReservasCountAggregateOutputType> : number>;
    aggregate<T extends ReservasAggregateArgs>(args: Prisma.Subset<T, ReservasAggregateArgs>): Prisma.PrismaPromise<GetReservasAggregateType<T>>;
    groupBy<T extends ReservasGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ReservasGroupByArgs['orderBy'];
    } : {
        orderBy?: ReservasGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ReservasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ReservasFieldRefs;
}
export interface Prisma__ReservasClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Clientes<T extends Prisma.ClientesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientesDefaultArgs<ExtArgs>>): Prisma.Prisma__ClientesClient<runtime.Types.Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    Mesas<T extends Prisma.MesasDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MesasDefaultArgs<ExtArgs>>): Prisma.Prisma__MesasClient<runtime.Types.Result.GetResult<Prisma.$MesasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ReservasFieldRefs {
    readonly IdReserva: Prisma.FieldRef<"Reservas", 'Int'>;
    readonly FechaReserva: Prisma.FieldRef<"Reservas", 'DateTime'>;
    readonly HoraInicio: Prisma.FieldRef<"Reservas", 'String'>;
    readonly HoraFin: Prisma.FieldRef<"Reservas", 'String'>;
    readonly FechaHoraInicioJuego: Prisma.FieldRef<"Reservas", 'DateTime'>;
    readonly FechaHoraFinJuego: Prisma.FieldRef<"Reservas", 'DateTime'>;
    readonly IdMesa: Prisma.FieldRef<"Reservas", 'Int'>;
    readonly IdCliente: Prisma.FieldRef<"Reservas", 'Int'>;
    readonly Estado: Prisma.FieldRef<"Reservas", 'String'>;
    readonly Observaciones: Prisma.FieldRef<"Reservas", 'String'>;
    readonly NumeroPersonas: Prisma.FieldRef<"Reservas", 'Int'>;
}
export type ReservasFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservasSelect<ExtArgs> | null;
    omit?: Prisma.ReservasOmit<ExtArgs> | null;
    include?: Prisma.ReservasInclude<ExtArgs> | null;
    where: Prisma.ReservasWhereUniqueInput;
};
export type ReservasFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservasSelect<ExtArgs> | null;
    omit?: Prisma.ReservasOmit<ExtArgs> | null;
    include?: Prisma.ReservasInclude<ExtArgs> | null;
    where: Prisma.ReservasWhereUniqueInput;
};
export type ReservasFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ReservasFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ReservasFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ReservasCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservasSelect<ExtArgs> | null;
    omit?: Prisma.ReservasOmit<ExtArgs> | null;
    include?: Prisma.ReservasInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReservasCreateInput, Prisma.ReservasUncheckedCreateInput>;
};
export type ReservasCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ReservasCreateManyInput | Prisma.ReservasCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ReservasCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservasSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReservasOmit<ExtArgs> | null;
    data: Prisma.ReservasCreateManyInput | Prisma.ReservasCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ReservasIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ReservasUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservasSelect<ExtArgs> | null;
    omit?: Prisma.ReservasOmit<ExtArgs> | null;
    include?: Prisma.ReservasInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReservasUpdateInput, Prisma.ReservasUncheckedUpdateInput>;
    where: Prisma.ReservasWhereUniqueInput;
};
export type ReservasUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ReservasUpdateManyMutationInput, Prisma.ReservasUncheckedUpdateManyInput>;
    where?: Prisma.ReservasWhereInput;
    limit?: number;
};
export type ReservasUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservasSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReservasOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReservasUpdateManyMutationInput, Prisma.ReservasUncheckedUpdateManyInput>;
    where?: Prisma.ReservasWhereInput;
    limit?: number;
    include?: Prisma.ReservasIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ReservasUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservasSelect<ExtArgs> | null;
    omit?: Prisma.ReservasOmit<ExtArgs> | null;
    include?: Prisma.ReservasInclude<ExtArgs> | null;
    where: Prisma.ReservasWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReservasCreateInput, Prisma.ReservasUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ReservasUpdateInput, Prisma.ReservasUncheckedUpdateInput>;
};
export type ReservasDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservasSelect<ExtArgs> | null;
    omit?: Prisma.ReservasOmit<ExtArgs> | null;
    include?: Prisma.ReservasInclude<ExtArgs> | null;
    where: Prisma.ReservasWhereUniqueInput;
};
export type ReservasDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReservasWhereInput;
    limit?: number;
};
export type ReservasDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservasSelect<ExtArgs> | null;
    omit?: Prisma.ReservasOmit<ExtArgs> | null;
    include?: Prisma.ReservasInclude<ExtArgs> | null;
};
