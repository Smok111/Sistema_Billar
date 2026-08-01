import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UsuariosModel = runtime.Types.Result.DefaultSelection<Prisma.$UsuariosPayload>;
export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null;
    _avg: UsuariosAvgAggregateOutputType | null;
    _sum: UsuariosSumAggregateOutputType | null;
    _min: UsuariosMinAggregateOutputType | null;
    _max: UsuariosMaxAggregateOutputType | null;
};
export type UsuariosAvgAggregateOutputType = {
    IdUsuario: number | null;
    IdRol: number | null;
};
export type UsuariosSumAggregateOutputType = {
    IdUsuario: number | null;
    IdRol: number | null;
};
export type UsuariosMinAggregateOutputType = {
    IdUsuario: number | null;
    NomUsuario: string | null;
    ApeUsuario: string | null;
    Correo: string | null;
    Password: string | null;
    IdRol: number | null;
};
export type UsuariosMaxAggregateOutputType = {
    IdUsuario: number | null;
    NomUsuario: string | null;
    ApeUsuario: string | null;
    Correo: string | null;
    Password: string | null;
    IdRol: number | null;
};
export type UsuariosCountAggregateOutputType = {
    IdUsuario: number;
    NomUsuario: number;
    ApeUsuario: number;
    Correo: number;
    Password: number;
    IdRol: number;
    _all: number;
};
export type UsuariosAvgAggregateInputType = {
    IdUsuario?: true;
    IdRol?: true;
};
export type UsuariosSumAggregateInputType = {
    IdUsuario?: true;
    IdRol?: true;
};
export type UsuariosMinAggregateInputType = {
    IdUsuario?: true;
    NomUsuario?: true;
    ApeUsuario?: true;
    Correo?: true;
    Password?: true;
    IdRol?: true;
};
export type UsuariosMaxAggregateInputType = {
    IdUsuario?: true;
    NomUsuario?: true;
    ApeUsuario?: true;
    Correo?: true;
    Password?: true;
    IdRol?: true;
};
export type UsuariosCountAggregateInputType = {
    IdUsuario?: true;
    NomUsuario?: true;
    ApeUsuario?: true;
    Correo?: true;
    Password?: true;
    IdRol?: true;
    _all?: true;
};
export type UsuariosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuariosWhereInput;
    orderBy?: Prisma.UsuariosOrderByWithRelationInput | Prisma.UsuariosOrderByWithRelationInput[];
    cursor?: Prisma.UsuariosWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsuariosCountAggregateInputType;
    _avg?: UsuariosAvgAggregateInputType;
    _sum?: UsuariosSumAggregateInputType;
    _min?: UsuariosMinAggregateInputType;
    _max?: UsuariosMaxAggregateInputType;
};
export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
    [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsuarios[P]> : Prisma.GetScalarType<T[P], AggregateUsuarios[P]>;
};
export type UsuariosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuariosWhereInput;
    orderBy?: Prisma.UsuariosOrderByWithAggregationInput | Prisma.UsuariosOrderByWithAggregationInput[];
    by: Prisma.UsuariosScalarFieldEnum[] | Prisma.UsuariosScalarFieldEnum;
    having?: Prisma.UsuariosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsuariosCountAggregateInputType | true;
    _avg?: UsuariosAvgAggregateInputType;
    _sum?: UsuariosSumAggregateInputType;
    _min?: UsuariosMinAggregateInputType;
    _max?: UsuariosMaxAggregateInputType;
};
export type UsuariosGroupByOutputType = {
    IdUsuario: number;
    NomUsuario: string;
    ApeUsuario: string;
    Correo: string;
    Password: string;
    IdRol: number;
    _count: UsuariosCountAggregateOutputType | null;
    _avg: UsuariosAvgAggregateOutputType | null;
    _sum: UsuariosSumAggregateOutputType | null;
    _min: UsuariosMinAggregateOutputType | null;
    _max: UsuariosMaxAggregateOutputType | null;
};
export type GetUsuariosGroupByPayload<T extends UsuariosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsuariosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsuariosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsuariosGroupByOutputType[P]>;
}>>;
export type UsuariosWhereInput = {
    AND?: Prisma.UsuariosWhereInput | Prisma.UsuariosWhereInput[];
    OR?: Prisma.UsuariosWhereInput[];
    NOT?: Prisma.UsuariosWhereInput | Prisma.UsuariosWhereInput[];
    IdUsuario?: Prisma.IntFilter<"Usuarios"> | number;
    NomUsuario?: Prisma.StringFilter<"Usuarios"> | string;
    ApeUsuario?: Prisma.StringFilter<"Usuarios"> | string;
    Correo?: Prisma.StringFilter<"Usuarios"> | string;
    Password?: Prisma.StringFilter<"Usuarios"> | string;
    IdRol?: Prisma.IntFilter<"Usuarios"> | number;
    Consumos?: Prisma.ConsumosListRelationFilter;
    Roles?: Prisma.XOR<Prisma.RolesScalarRelationFilter, Prisma.RolesWhereInput>;
};
export type UsuariosOrderByWithRelationInput = {
    IdUsuario?: Prisma.SortOrder;
    NomUsuario?: Prisma.SortOrder;
    ApeUsuario?: Prisma.SortOrder;
    Correo?: Prisma.SortOrder;
    Password?: Prisma.SortOrder;
    IdRol?: Prisma.SortOrder;
    Consumos?: Prisma.ConsumosOrderByRelationAggregateInput;
    Roles?: Prisma.RolesOrderByWithRelationInput;
};
export type UsuariosWhereUniqueInput = Prisma.AtLeast<{
    IdUsuario?: number;
    Correo?: string;
    AND?: Prisma.UsuariosWhereInput | Prisma.UsuariosWhereInput[];
    OR?: Prisma.UsuariosWhereInput[];
    NOT?: Prisma.UsuariosWhereInput | Prisma.UsuariosWhereInput[];
    NomUsuario?: Prisma.StringFilter<"Usuarios"> | string;
    ApeUsuario?: Prisma.StringFilter<"Usuarios"> | string;
    Password?: Prisma.StringFilter<"Usuarios"> | string;
    IdRol?: Prisma.IntFilter<"Usuarios"> | number;
    Consumos?: Prisma.ConsumosListRelationFilter;
    Roles?: Prisma.XOR<Prisma.RolesScalarRelationFilter, Prisma.RolesWhereInput>;
}, "IdUsuario" | "Correo">;
export type UsuariosOrderByWithAggregationInput = {
    IdUsuario?: Prisma.SortOrder;
    NomUsuario?: Prisma.SortOrder;
    ApeUsuario?: Prisma.SortOrder;
    Correo?: Prisma.SortOrder;
    Password?: Prisma.SortOrder;
    IdRol?: Prisma.SortOrder;
    _count?: Prisma.UsuariosCountOrderByAggregateInput;
    _avg?: Prisma.UsuariosAvgOrderByAggregateInput;
    _max?: Prisma.UsuariosMaxOrderByAggregateInput;
    _min?: Prisma.UsuariosMinOrderByAggregateInput;
    _sum?: Prisma.UsuariosSumOrderByAggregateInput;
};
export type UsuariosScalarWhereWithAggregatesInput = {
    AND?: Prisma.UsuariosScalarWhereWithAggregatesInput | Prisma.UsuariosScalarWhereWithAggregatesInput[];
    OR?: Prisma.UsuariosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UsuariosScalarWhereWithAggregatesInput | Prisma.UsuariosScalarWhereWithAggregatesInput[];
    IdUsuario?: Prisma.IntWithAggregatesFilter<"Usuarios"> | number;
    NomUsuario?: Prisma.StringWithAggregatesFilter<"Usuarios"> | string;
    ApeUsuario?: Prisma.StringWithAggregatesFilter<"Usuarios"> | string;
    Correo?: Prisma.StringWithAggregatesFilter<"Usuarios"> | string;
    Password?: Prisma.StringWithAggregatesFilter<"Usuarios"> | string;
    IdRol?: Prisma.IntWithAggregatesFilter<"Usuarios"> | number;
};
export type UsuariosCreateInput = {
    NomUsuario: string;
    ApeUsuario: string;
    Correo: string;
    Password: string;
    Consumos?: Prisma.ConsumosCreateNestedManyWithoutUsuariosInput;
    Roles: Prisma.RolesCreateNestedOneWithoutUsuariosInput;
};
export type UsuariosUncheckedCreateInput = {
    IdUsuario?: number;
    NomUsuario: string;
    ApeUsuario: string;
    Correo: string;
    Password: string;
    IdRol: number;
    Consumos?: Prisma.ConsumosUncheckedCreateNestedManyWithoutUsuariosInput;
};
export type UsuariosUpdateInput = {
    NomUsuario?: Prisma.StringFieldUpdateOperationsInput | string;
    ApeUsuario?: Prisma.StringFieldUpdateOperationsInput | string;
    Correo?: Prisma.StringFieldUpdateOperationsInput | string;
    Password?: Prisma.StringFieldUpdateOperationsInput | string;
    Consumos?: Prisma.ConsumosUpdateManyWithoutUsuariosNestedInput;
    Roles?: Prisma.RolesUpdateOneRequiredWithoutUsuariosNestedInput;
};
export type UsuariosUncheckedUpdateInput = {
    IdUsuario?: Prisma.IntFieldUpdateOperationsInput | number;
    NomUsuario?: Prisma.StringFieldUpdateOperationsInput | string;
    ApeUsuario?: Prisma.StringFieldUpdateOperationsInput | string;
    Correo?: Prisma.StringFieldUpdateOperationsInput | string;
    Password?: Prisma.StringFieldUpdateOperationsInput | string;
    IdRol?: Prisma.IntFieldUpdateOperationsInput | number;
    Consumos?: Prisma.ConsumosUncheckedUpdateManyWithoutUsuariosNestedInput;
};
export type UsuariosCreateManyInput = {
    IdUsuario?: number;
    NomUsuario: string;
    ApeUsuario: string;
    Correo: string;
    Password: string;
    IdRol: number;
};
export type UsuariosUpdateManyMutationInput = {
    NomUsuario?: Prisma.StringFieldUpdateOperationsInput | string;
    ApeUsuario?: Prisma.StringFieldUpdateOperationsInput | string;
    Correo?: Prisma.StringFieldUpdateOperationsInput | string;
    Password?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UsuariosUncheckedUpdateManyInput = {
    IdUsuario?: Prisma.IntFieldUpdateOperationsInput | number;
    NomUsuario?: Prisma.StringFieldUpdateOperationsInput | string;
    ApeUsuario?: Prisma.StringFieldUpdateOperationsInput | string;
    Correo?: Prisma.StringFieldUpdateOperationsInput | string;
    Password?: Prisma.StringFieldUpdateOperationsInput | string;
    IdRol?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type UsuariosScalarRelationFilter = {
    is?: Prisma.UsuariosWhereInput;
    isNot?: Prisma.UsuariosWhereInput;
};
export type UsuariosListRelationFilter = {
    every?: Prisma.UsuariosWhereInput;
    some?: Prisma.UsuariosWhereInput;
    none?: Prisma.UsuariosWhereInput;
};
export type UsuariosOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UsuariosCountOrderByAggregateInput = {
    IdUsuario?: Prisma.SortOrder;
    NomUsuario?: Prisma.SortOrder;
    ApeUsuario?: Prisma.SortOrder;
    Correo?: Prisma.SortOrder;
    Password?: Prisma.SortOrder;
    IdRol?: Prisma.SortOrder;
};
export type UsuariosAvgOrderByAggregateInput = {
    IdUsuario?: Prisma.SortOrder;
    IdRol?: Prisma.SortOrder;
};
export type UsuariosMaxOrderByAggregateInput = {
    IdUsuario?: Prisma.SortOrder;
    NomUsuario?: Prisma.SortOrder;
    ApeUsuario?: Prisma.SortOrder;
    Correo?: Prisma.SortOrder;
    Password?: Prisma.SortOrder;
    IdRol?: Prisma.SortOrder;
};
export type UsuariosMinOrderByAggregateInput = {
    IdUsuario?: Prisma.SortOrder;
    NomUsuario?: Prisma.SortOrder;
    ApeUsuario?: Prisma.SortOrder;
    Correo?: Prisma.SortOrder;
    Password?: Prisma.SortOrder;
    IdRol?: Prisma.SortOrder;
};
export type UsuariosSumOrderByAggregateInput = {
    IdUsuario?: Prisma.SortOrder;
    IdRol?: Prisma.SortOrder;
};
export type UsuariosCreateNestedOneWithoutConsumosInput = {
    create?: Prisma.XOR<Prisma.UsuariosCreateWithoutConsumosInput, Prisma.UsuariosUncheckedCreateWithoutConsumosInput>;
    connectOrCreate?: Prisma.UsuariosCreateOrConnectWithoutConsumosInput;
    connect?: Prisma.UsuariosWhereUniqueInput;
};
export type UsuariosUpdateOneRequiredWithoutConsumosNestedInput = {
    create?: Prisma.XOR<Prisma.UsuariosCreateWithoutConsumosInput, Prisma.UsuariosUncheckedCreateWithoutConsumosInput>;
    connectOrCreate?: Prisma.UsuariosCreateOrConnectWithoutConsumosInput;
    upsert?: Prisma.UsuariosUpsertWithoutConsumosInput;
    connect?: Prisma.UsuariosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuariosUpdateToOneWithWhereWithoutConsumosInput, Prisma.UsuariosUpdateWithoutConsumosInput>, Prisma.UsuariosUncheckedUpdateWithoutConsumosInput>;
};
export type UsuariosCreateNestedManyWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.UsuariosCreateWithoutRolesInput, Prisma.UsuariosUncheckedCreateWithoutRolesInput> | Prisma.UsuariosCreateWithoutRolesInput[] | Prisma.UsuariosUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.UsuariosCreateOrConnectWithoutRolesInput | Prisma.UsuariosCreateOrConnectWithoutRolesInput[];
    createMany?: Prisma.UsuariosCreateManyRolesInputEnvelope;
    connect?: Prisma.UsuariosWhereUniqueInput | Prisma.UsuariosWhereUniqueInput[];
};
export type UsuariosUncheckedCreateNestedManyWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.UsuariosCreateWithoutRolesInput, Prisma.UsuariosUncheckedCreateWithoutRolesInput> | Prisma.UsuariosCreateWithoutRolesInput[] | Prisma.UsuariosUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.UsuariosCreateOrConnectWithoutRolesInput | Prisma.UsuariosCreateOrConnectWithoutRolesInput[];
    createMany?: Prisma.UsuariosCreateManyRolesInputEnvelope;
    connect?: Prisma.UsuariosWhereUniqueInput | Prisma.UsuariosWhereUniqueInput[];
};
export type UsuariosUpdateManyWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.UsuariosCreateWithoutRolesInput, Prisma.UsuariosUncheckedCreateWithoutRolesInput> | Prisma.UsuariosCreateWithoutRolesInput[] | Prisma.UsuariosUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.UsuariosCreateOrConnectWithoutRolesInput | Prisma.UsuariosCreateOrConnectWithoutRolesInput[];
    upsert?: Prisma.UsuariosUpsertWithWhereUniqueWithoutRolesInput | Prisma.UsuariosUpsertWithWhereUniqueWithoutRolesInput[];
    createMany?: Prisma.UsuariosCreateManyRolesInputEnvelope;
    set?: Prisma.UsuariosWhereUniqueInput | Prisma.UsuariosWhereUniqueInput[];
    disconnect?: Prisma.UsuariosWhereUniqueInput | Prisma.UsuariosWhereUniqueInput[];
    delete?: Prisma.UsuariosWhereUniqueInput | Prisma.UsuariosWhereUniqueInput[];
    connect?: Prisma.UsuariosWhereUniqueInput | Prisma.UsuariosWhereUniqueInput[];
    update?: Prisma.UsuariosUpdateWithWhereUniqueWithoutRolesInput | Prisma.UsuariosUpdateWithWhereUniqueWithoutRolesInput[];
    updateMany?: Prisma.UsuariosUpdateManyWithWhereWithoutRolesInput | Prisma.UsuariosUpdateManyWithWhereWithoutRolesInput[];
    deleteMany?: Prisma.UsuariosScalarWhereInput | Prisma.UsuariosScalarWhereInput[];
};
export type UsuariosUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.UsuariosCreateWithoutRolesInput, Prisma.UsuariosUncheckedCreateWithoutRolesInput> | Prisma.UsuariosCreateWithoutRolesInput[] | Prisma.UsuariosUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.UsuariosCreateOrConnectWithoutRolesInput | Prisma.UsuariosCreateOrConnectWithoutRolesInput[];
    upsert?: Prisma.UsuariosUpsertWithWhereUniqueWithoutRolesInput | Prisma.UsuariosUpsertWithWhereUniqueWithoutRolesInput[];
    createMany?: Prisma.UsuariosCreateManyRolesInputEnvelope;
    set?: Prisma.UsuariosWhereUniqueInput | Prisma.UsuariosWhereUniqueInput[];
    disconnect?: Prisma.UsuariosWhereUniqueInput | Prisma.UsuariosWhereUniqueInput[];
    delete?: Prisma.UsuariosWhereUniqueInput | Prisma.UsuariosWhereUniqueInput[];
    connect?: Prisma.UsuariosWhereUniqueInput | Prisma.UsuariosWhereUniqueInput[];
    update?: Prisma.UsuariosUpdateWithWhereUniqueWithoutRolesInput | Prisma.UsuariosUpdateWithWhereUniqueWithoutRolesInput[];
    updateMany?: Prisma.UsuariosUpdateManyWithWhereWithoutRolesInput | Prisma.UsuariosUpdateManyWithWhereWithoutRolesInput[];
    deleteMany?: Prisma.UsuariosScalarWhereInput | Prisma.UsuariosScalarWhereInput[];
};
export type UsuariosCreateWithoutConsumosInput = {
    NomUsuario: string;
    ApeUsuario: string;
    Correo: string;
    Password: string;
    Roles: Prisma.RolesCreateNestedOneWithoutUsuariosInput;
};
export type UsuariosUncheckedCreateWithoutConsumosInput = {
    IdUsuario?: number;
    NomUsuario: string;
    ApeUsuario: string;
    Correo: string;
    Password: string;
    IdRol: number;
};
export type UsuariosCreateOrConnectWithoutConsumosInput = {
    where: Prisma.UsuariosWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuariosCreateWithoutConsumosInput, Prisma.UsuariosUncheckedCreateWithoutConsumosInput>;
};
export type UsuariosUpsertWithoutConsumosInput = {
    update: Prisma.XOR<Prisma.UsuariosUpdateWithoutConsumosInput, Prisma.UsuariosUncheckedUpdateWithoutConsumosInput>;
    create: Prisma.XOR<Prisma.UsuariosCreateWithoutConsumosInput, Prisma.UsuariosUncheckedCreateWithoutConsumosInput>;
    where?: Prisma.UsuariosWhereInput;
};
export type UsuariosUpdateToOneWithWhereWithoutConsumosInput = {
    where?: Prisma.UsuariosWhereInput;
    data: Prisma.XOR<Prisma.UsuariosUpdateWithoutConsumosInput, Prisma.UsuariosUncheckedUpdateWithoutConsumosInput>;
};
export type UsuariosUpdateWithoutConsumosInput = {
    NomUsuario?: Prisma.StringFieldUpdateOperationsInput | string;
    ApeUsuario?: Prisma.StringFieldUpdateOperationsInput | string;
    Correo?: Prisma.StringFieldUpdateOperationsInput | string;
    Password?: Prisma.StringFieldUpdateOperationsInput | string;
    Roles?: Prisma.RolesUpdateOneRequiredWithoutUsuariosNestedInput;
};
export type UsuariosUncheckedUpdateWithoutConsumosInput = {
    IdUsuario?: Prisma.IntFieldUpdateOperationsInput | number;
    NomUsuario?: Prisma.StringFieldUpdateOperationsInput | string;
    ApeUsuario?: Prisma.StringFieldUpdateOperationsInput | string;
    Correo?: Prisma.StringFieldUpdateOperationsInput | string;
    Password?: Prisma.StringFieldUpdateOperationsInput | string;
    IdRol?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type UsuariosCreateWithoutRolesInput = {
    NomUsuario: string;
    ApeUsuario: string;
    Correo: string;
    Password: string;
    Consumos?: Prisma.ConsumosCreateNestedManyWithoutUsuariosInput;
};
export type UsuariosUncheckedCreateWithoutRolesInput = {
    IdUsuario?: number;
    NomUsuario: string;
    ApeUsuario: string;
    Correo: string;
    Password: string;
    Consumos?: Prisma.ConsumosUncheckedCreateNestedManyWithoutUsuariosInput;
};
export type UsuariosCreateOrConnectWithoutRolesInput = {
    where: Prisma.UsuariosWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuariosCreateWithoutRolesInput, Prisma.UsuariosUncheckedCreateWithoutRolesInput>;
};
export type UsuariosCreateManyRolesInputEnvelope = {
    data: Prisma.UsuariosCreateManyRolesInput | Prisma.UsuariosCreateManyRolesInput[];
    skipDuplicates?: boolean;
};
export type UsuariosUpsertWithWhereUniqueWithoutRolesInput = {
    where: Prisma.UsuariosWhereUniqueInput;
    update: Prisma.XOR<Prisma.UsuariosUpdateWithoutRolesInput, Prisma.UsuariosUncheckedUpdateWithoutRolesInput>;
    create: Prisma.XOR<Prisma.UsuariosCreateWithoutRolesInput, Prisma.UsuariosUncheckedCreateWithoutRolesInput>;
};
export type UsuariosUpdateWithWhereUniqueWithoutRolesInput = {
    where: Prisma.UsuariosWhereUniqueInput;
    data: Prisma.XOR<Prisma.UsuariosUpdateWithoutRolesInput, Prisma.UsuariosUncheckedUpdateWithoutRolesInput>;
};
export type UsuariosUpdateManyWithWhereWithoutRolesInput = {
    where: Prisma.UsuariosScalarWhereInput;
    data: Prisma.XOR<Prisma.UsuariosUpdateManyMutationInput, Prisma.UsuariosUncheckedUpdateManyWithoutRolesInput>;
};
export type UsuariosScalarWhereInput = {
    AND?: Prisma.UsuariosScalarWhereInput | Prisma.UsuariosScalarWhereInput[];
    OR?: Prisma.UsuariosScalarWhereInput[];
    NOT?: Prisma.UsuariosScalarWhereInput | Prisma.UsuariosScalarWhereInput[];
    IdUsuario?: Prisma.IntFilter<"Usuarios"> | number;
    NomUsuario?: Prisma.StringFilter<"Usuarios"> | string;
    ApeUsuario?: Prisma.StringFilter<"Usuarios"> | string;
    Correo?: Prisma.StringFilter<"Usuarios"> | string;
    Password?: Prisma.StringFilter<"Usuarios"> | string;
    IdRol?: Prisma.IntFilter<"Usuarios"> | number;
};
export type UsuariosCreateManyRolesInput = {
    IdUsuario?: number;
    NomUsuario: string;
    ApeUsuario: string;
    Correo: string;
    Password: string;
};
export type UsuariosUpdateWithoutRolesInput = {
    NomUsuario?: Prisma.StringFieldUpdateOperationsInput | string;
    ApeUsuario?: Prisma.StringFieldUpdateOperationsInput | string;
    Correo?: Prisma.StringFieldUpdateOperationsInput | string;
    Password?: Prisma.StringFieldUpdateOperationsInput | string;
    Consumos?: Prisma.ConsumosUpdateManyWithoutUsuariosNestedInput;
};
export type UsuariosUncheckedUpdateWithoutRolesInput = {
    IdUsuario?: Prisma.IntFieldUpdateOperationsInput | number;
    NomUsuario?: Prisma.StringFieldUpdateOperationsInput | string;
    ApeUsuario?: Prisma.StringFieldUpdateOperationsInput | string;
    Correo?: Prisma.StringFieldUpdateOperationsInput | string;
    Password?: Prisma.StringFieldUpdateOperationsInput | string;
    Consumos?: Prisma.ConsumosUncheckedUpdateManyWithoutUsuariosNestedInput;
};
export type UsuariosUncheckedUpdateManyWithoutRolesInput = {
    IdUsuario?: Prisma.IntFieldUpdateOperationsInput | number;
    NomUsuario?: Prisma.StringFieldUpdateOperationsInput | string;
    ApeUsuario?: Prisma.StringFieldUpdateOperationsInput | string;
    Correo?: Prisma.StringFieldUpdateOperationsInput | string;
    Password?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UsuariosCountOutputType = {
    Consumos: number;
};
export type UsuariosCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Consumos?: boolean | UsuariosCountOutputTypeCountConsumosArgs;
};
export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuariosCountOutputTypeSelect<ExtArgs> | null;
};
export type UsuariosCountOutputTypeCountConsumosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsumosWhereInput;
};
export type UsuariosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IdUsuario?: boolean;
    NomUsuario?: boolean;
    ApeUsuario?: boolean;
    Correo?: boolean;
    Password?: boolean;
    IdRol?: boolean;
    Consumos?: boolean | Prisma.Usuarios$ConsumosArgs<ExtArgs>;
    Roles?: boolean | Prisma.RolesDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuariosCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuarios"]>;
export type UsuariosSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IdUsuario?: boolean;
    NomUsuario?: boolean;
    ApeUsuario?: boolean;
    Correo?: boolean;
    Password?: boolean;
    IdRol?: boolean;
    Roles?: boolean | Prisma.RolesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuarios"]>;
export type UsuariosSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IdUsuario?: boolean;
    NomUsuario?: boolean;
    ApeUsuario?: boolean;
    Correo?: boolean;
    Password?: boolean;
    IdRol?: boolean;
    Roles?: boolean | Prisma.RolesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuarios"]>;
export type UsuariosSelectScalar = {
    IdUsuario?: boolean;
    NomUsuario?: boolean;
    ApeUsuario?: boolean;
    Correo?: boolean;
    Password?: boolean;
    IdRol?: boolean;
};
export type UsuariosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"IdUsuario" | "NomUsuario" | "ApeUsuario" | "Correo" | "Password" | "IdRol", ExtArgs["result"]["usuarios"]>;
export type UsuariosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Consumos?: boolean | Prisma.Usuarios$ConsumosArgs<ExtArgs>;
    Roles?: boolean | Prisma.RolesDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuariosCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UsuariosIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Roles?: boolean | Prisma.RolesDefaultArgs<ExtArgs>;
};
export type UsuariosIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Roles?: boolean | Prisma.RolesDefaultArgs<ExtArgs>;
};
export type $UsuariosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Usuarios";
    objects: {
        Consumos: Prisma.$ConsumosPayload<ExtArgs>[];
        Roles: Prisma.$RolesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        IdUsuario: number;
        NomUsuario: string;
        ApeUsuario: string;
        Correo: string;
        Password: string;
        IdRol: number;
    }, ExtArgs["result"]["usuarios"]>;
    composites: {};
};
export type UsuariosGetPayload<S extends boolean | null | undefined | UsuariosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UsuariosPayload, S>;
export type UsuariosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UsuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsuariosCountAggregateInputType | true;
};
export interface UsuariosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Usuarios'];
        meta: {
            name: 'Usuarios';
        };
    };
    findUnique<T extends UsuariosFindUniqueArgs>(args: Prisma.SelectSubset<T, UsuariosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UsuariosClient<runtime.Types.Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UsuariosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UsuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsuariosClient<runtime.Types.Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UsuariosFindFirstArgs>(args?: Prisma.SelectSubset<T, UsuariosFindFirstArgs<ExtArgs>>): Prisma.Prisma__UsuariosClient<runtime.Types.Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UsuariosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UsuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsuariosClient<runtime.Types.Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UsuariosFindManyArgs>(args?: Prisma.SelectSubset<T, UsuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UsuariosCreateArgs>(args: Prisma.SelectSubset<T, UsuariosCreateArgs<ExtArgs>>): Prisma.Prisma__UsuariosClient<runtime.Types.Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UsuariosCreateManyArgs>(args?: Prisma.SelectSubset<T, UsuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UsuariosCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UsuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UsuariosDeleteArgs>(args: Prisma.SelectSubset<T, UsuariosDeleteArgs<ExtArgs>>): Prisma.Prisma__UsuariosClient<runtime.Types.Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UsuariosUpdateArgs>(args: Prisma.SelectSubset<T, UsuariosUpdateArgs<ExtArgs>>): Prisma.Prisma__UsuariosClient<runtime.Types.Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UsuariosDeleteManyArgs>(args?: Prisma.SelectSubset<T, UsuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UsuariosUpdateManyArgs>(args: Prisma.SelectSubset<T, UsuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UsuariosUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UsuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UsuariosUpsertArgs>(args: Prisma.SelectSubset<T, UsuariosUpsertArgs<ExtArgs>>): Prisma.Prisma__UsuariosClient<runtime.Types.Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UsuariosCountArgs>(args?: Prisma.Subset<T, UsuariosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsuariosCountAggregateOutputType> : number>;
    aggregate<T extends UsuariosAggregateArgs>(args: Prisma.Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>;
    groupBy<T extends UsuariosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UsuariosGroupByArgs['orderBy'];
    } : {
        orderBy?: UsuariosGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UsuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UsuariosFieldRefs;
}
export interface Prisma__UsuariosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Consumos<T extends Prisma.Usuarios$ConsumosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuarios$ConsumosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsumosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    Roles<T extends Prisma.RolesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RolesDefaultArgs<ExtArgs>>): Prisma.Prisma__RolesClient<runtime.Types.Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UsuariosFieldRefs {
    readonly IdUsuario: Prisma.FieldRef<"Usuarios", 'Int'>;
    readonly NomUsuario: Prisma.FieldRef<"Usuarios", 'String'>;
    readonly ApeUsuario: Prisma.FieldRef<"Usuarios", 'String'>;
    readonly Correo: Prisma.FieldRef<"Usuarios", 'String'>;
    readonly Password: Prisma.FieldRef<"Usuarios", 'String'>;
    readonly IdRol: Prisma.FieldRef<"Usuarios", 'Int'>;
}
export type UsuariosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuariosSelect<ExtArgs> | null;
    omit?: Prisma.UsuariosOmit<ExtArgs> | null;
    include?: Prisma.UsuariosInclude<ExtArgs> | null;
    where: Prisma.UsuariosWhereUniqueInput;
};
export type UsuariosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuariosSelect<ExtArgs> | null;
    omit?: Prisma.UsuariosOmit<ExtArgs> | null;
    include?: Prisma.UsuariosInclude<ExtArgs> | null;
    where: Prisma.UsuariosWhereUniqueInput;
};
export type UsuariosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuariosSelect<ExtArgs> | null;
    omit?: Prisma.UsuariosOmit<ExtArgs> | null;
    include?: Prisma.UsuariosInclude<ExtArgs> | null;
    where?: Prisma.UsuariosWhereInput;
    orderBy?: Prisma.UsuariosOrderByWithRelationInput | Prisma.UsuariosOrderByWithRelationInput[];
    cursor?: Prisma.UsuariosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuariosScalarFieldEnum | Prisma.UsuariosScalarFieldEnum[];
};
export type UsuariosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuariosSelect<ExtArgs> | null;
    omit?: Prisma.UsuariosOmit<ExtArgs> | null;
    include?: Prisma.UsuariosInclude<ExtArgs> | null;
    where?: Prisma.UsuariosWhereInput;
    orderBy?: Prisma.UsuariosOrderByWithRelationInput | Prisma.UsuariosOrderByWithRelationInput[];
    cursor?: Prisma.UsuariosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuariosScalarFieldEnum | Prisma.UsuariosScalarFieldEnum[];
};
export type UsuariosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuariosSelect<ExtArgs> | null;
    omit?: Prisma.UsuariosOmit<ExtArgs> | null;
    include?: Prisma.UsuariosInclude<ExtArgs> | null;
    where?: Prisma.UsuariosWhereInput;
    orderBy?: Prisma.UsuariosOrderByWithRelationInput | Prisma.UsuariosOrderByWithRelationInput[];
    cursor?: Prisma.UsuariosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuariosScalarFieldEnum | Prisma.UsuariosScalarFieldEnum[];
};
export type UsuariosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuariosSelect<ExtArgs> | null;
    omit?: Prisma.UsuariosOmit<ExtArgs> | null;
    include?: Prisma.UsuariosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuariosCreateInput, Prisma.UsuariosUncheckedCreateInput>;
};
export type UsuariosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UsuariosCreateManyInput | Prisma.UsuariosCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UsuariosCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuariosSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsuariosOmit<ExtArgs> | null;
    data: Prisma.UsuariosCreateManyInput | Prisma.UsuariosCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UsuariosIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UsuariosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuariosSelect<ExtArgs> | null;
    omit?: Prisma.UsuariosOmit<ExtArgs> | null;
    include?: Prisma.UsuariosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuariosUpdateInput, Prisma.UsuariosUncheckedUpdateInput>;
    where: Prisma.UsuariosWhereUniqueInput;
};
export type UsuariosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UsuariosUpdateManyMutationInput, Prisma.UsuariosUncheckedUpdateManyInput>;
    where?: Prisma.UsuariosWhereInput;
    limit?: number;
};
export type UsuariosUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuariosSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsuariosOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuariosUpdateManyMutationInput, Prisma.UsuariosUncheckedUpdateManyInput>;
    where?: Prisma.UsuariosWhereInput;
    limit?: number;
    include?: Prisma.UsuariosIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UsuariosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuariosSelect<ExtArgs> | null;
    omit?: Prisma.UsuariosOmit<ExtArgs> | null;
    include?: Prisma.UsuariosInclude<ExtArgs> | null;
    where: Prisma.UsuariosWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuariosCreateInput, Prisma.UsuariosUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UsuariosUpdateInput, Prisma.UsuariosUncheckedUpdateInput>;
};
export type UsuariosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuariosSelect<ExtArgs> | null;
    omit?: Prisma.UsuariosOmit<ExtArgs> | null;
    include?: Prisma.UsuariosInclude<ExtArgs> | null;
    where: Prisma.UsuariosWhereUniqueInput;
};
export type UsuariosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuariosWhereInput;
    limit?: number;
};
export type Usuarios$ConsumosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UsuariosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuariosSelect<ExtArgs> | null;
    omit?: Prisma.UsuariosOmit<ExtArgs> | null;
    include?: Prisma.UsuariosInclude<ExtArgs> | null;
};
