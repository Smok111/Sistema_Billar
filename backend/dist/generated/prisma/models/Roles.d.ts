import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RolesModel = runtime.Types.Result.DefaultSelection<Prisma.$RolesPayload>;
export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null;
    _avg: RolesAvgAggregateOutputType | null;
    _sum: RolesSumAggregateOutputType | null;
    _min: RolesMinAggregateOutputType | null;
    _max: RolesMaxAggregateOutputType | null;
};
export type RolesAvgAggregateOutputType = {
    IdRol: number | null;
};
export type RolesSumAggregateOutputType = {
    IdRol: number | null;
};
export type RolesMinAggregateOutputType = {
    IdRol: number | null;
    NomRol: string | null;
    DesRol: string | null;
};
export type RolesMaxAggregateOutputType = {
    IdRol: number | null;
    NomRol: string | null;
    DesRol: string | null;
};
export type RolesCountAggregateOutputType = {
    IdRol: number;
    NomRol: number;
    DesRol: number;
    _all: number;
};
export type RolesAvgAggregateInputType = {
    IdRol?: true;
};
export type RolesSumAggregateInputType = {
    IdRol?: true;
};
export type RolesMinAggregateInputType = {
    IdRol?: true;
    NomRol?: true;
    DesRol?: true;
};
export type RolesMaxAggregateInputType = {
    IdRol?: true;
    NomRol?: true;
    DesRol?: true;
};
export type RolesCountAggregateInputType = {
    IdRol?: true;
    NomRol?: true;
    DesRol?: true;
    _all?: true;
};
export type RolesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RolesWhereInput;
    orderBy?: Prisma.RolesOrderByWithRelationInput | Prisma.RolesOrderByWithRelationInput[];
    cursor?: Prisma.RolesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RolesCountAggregateInputType;
    _avg?: RolesAvgAggregateInputType;
    _sum?: RolesSumAggregateInputType;
    _min?: RolesMinAggregateInputType;
    _max?: RolesMaxAggregateInputType;
};
export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
    [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRoles[P]> : Prisma.GetScalarType<T[P], AggregateRoles[P]>;
};
export type RolesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RolesWhereInput;
    orderBy?: Prisma.RolesOrderByWithAggregationInput | Prisma.RolesOrderByWithAggregationInput[];
    by: Prisma.RolesScalarFieldEnum[] | Prisma.RolesScalarFieldEnum;
    having?: Prisma.RolesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RolesCountAggregateInputType | true;
    _avg?: RolesAvgAggregateInputType;
    _sum?: RolesSumAggregateInputType;
    _min?: RolesMinAggregateInputType;
    _max?: RolesMaxAggregateInputType;
};
export type RolesGroupByOutputType = {
    IdRol: number;
    NomRol: string;
    DesRol: string;
    _count: RolesCountAggregateOutputType | null;
    _avg: RolesAvgAggregateOutputType | null;
    _sum: RolesSumAggregateOutputType | null;
    _min: RolesMinAggregateOutputType | null;
    _max: RolesMaxAggregateOutputType | null;
};
export type GetRolesGroupByPayload<T extends RolesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RolesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RolesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RolesGroupByOutputType[P]>;
}>>;
export type RolesWhereInput = {
    AND?: Prisma.RolesWhereInput | Prisma.RolesWhereInput[];
    OR?: Prisma.RolesWhereInput[];
    NOT?: Prisma.RolesWhereInput | Prisma.RolesWhereInput[];
    IdRol?: Prisma.IntFilter<"Roles"> | number;
    NomRol?: Prisma.StringFilter<"Roles"> | string;
    DesRol?: Prisma.StringFilter<"Roles"> | string;
    Usuarios?: Prisma.UsuariosListRelationFilter;
};
export type RolesOrderByWithRelationInput = {
    IdRol?: Prisma.SortOrder;
    NomRol?: Prisma.SortOrder;
    DesRol?: Prisma.SortOrder;
    Usuarios?: Prisma.UsuariosOrderByRelationAggregateInput;
};
export type RolesWhereUniqueInput = Prisma.AtLeast<{
    IdRol?: number;
    NomRol?: string;
    AND?: Prisma.RolesWhereInput | Prisma.RolesWhereInput[];
    OR?: Prisma.RolesWhereInput[];
    NOT?: Prisma.RolesWhereInput | Prisma.RolesWhereInput[];
    DesRol?: Prisma.StringFilter<"Roles"> | string;
    Usuarios?: Prisma.UsuariosListRelationFilter;
}, "IdRol" | "NomRol">;
export type RolesOrderByWithAggregationInput = {
    IdRol?: Prisma.SortOrder;
    NomRol?: Prisma.SortOrder;
    DesRol?: Prisma.SortOrder;
    _count?: Prisma.RolesCountOrderByAggregateInput;
    _avg?: Prisma.RolesAvgOrderByAggregateInput;
    _max?: Prisma.RolesMaxOrderByAggregateInput;
    _min?: Prisma.RolesMinOrderByAggregateInput;
    _sum?: Prisma.RolesSumOrderByAggregateInput;
};
export type RolesScalarWhereWithAggregatesInput = {
    AND?: Prisma.RolesScalarWhereWithAggregatesInput | Prisma.RolesScalarWhereWithAggregatesInput[];
    OR?: Prisma.RolesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RolesScalarWhereWithAggregatesInput | Prisma.RolesScalarWhereWithAggregatesInput[];
    IdRol?: Prisma.IntWithAggregatesFilter<"Roles"> | number;
    NomRol?: Prisma.StringWithAggregatesFilter<"Roles"> | string;
    DesRol?: Prisma.StringWithAggregatesFilter<"Roles"> | string;
};
export type RolesCreateInput = {
    NomRol: string;
    DesRol: string;
    Usuarios?: Prisma.UsuariosCreateNestedManyWithoutRolesInput;
};
export type RolesUncheckedCreateInput = {
    IdRol?: number;
    NomRol: string;
    DesRol: string;
    Usuarios?: Prisma.UsuariosUncheckedCreateNestedManyWithoutRolesInput;
};
export type RolesUpdateInput = {
    NomRol?: Prisma.StringFieldUpdateOperationsInput | string;
    DesRol?: Prisma.StringFieldUpdateOperationsInput | string;
    Usuarios?: Prisma.UsuariosUpdateManyWithoutRolesNestedInput;
};
export type RolesUncheckedUpdateInput = {
    IdRol?: Prisma.IntFieldUpdateOperationsInput | number;
    NomRol?: Prisma.StringFieldUpdateOperationsInput | string;
    DesRol?: Prisma.StringFieldUpdateOperationsInput | string;
    Usuarios?: Prisma.UsuariosUncheckedUpdateManyWithoutRolesNestedInput;
};
export type RolesCreateManyInput = {
    IdRol?: number;
    NomRol: string;
    DesRol: string;
};
export type RolesUpdateManyMutationInput = {
    NomRol?: Prisma.StringFieldUpdateOperationsInput | string;
    DesRol?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RolesUncheckedUpdateManyInput = {
    IdRol?: Prisma.IntFieldUpdateOperationsInput | number;
    NomRol?: Prisma.StringFieldUpdateOperationsInput | string;
    DesRol?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RolesCountOrderByAggregateInput = {
    IdRol?: Prisma.SortOrder;
    NomRol?: Prisma.SortOrder;
    DesRol?: Prisma.SortOrder;
};
export type RolesAvgOrderByAggregateInput = {
    IdRol?: Prisma.SortOrder;
};
export type RolesMaxOrderByAggregateInput = {
    IdRol?: Prisma.SortOrder;
    NomRol?: Prisma.SortOrder;
    DesRol?: Prisma.SortOrder;
};
export type RolesMinOrderByAggregateInput = {
    IdRol?: Prisma.SortOrder;
    NomRol?: Prisma.SortOrder;
    DesRol?: Prisma.SortOrder;
};
export type RolesSumOrderByAggregateInput = {
    IdRol?: Prisma.SortOrder;
};
export type RolesScalarRelationFilter = {
    is?: Prisma.RolesWhereInput;
    isNot?: Prisma.RolesWhereInput;
};
export type RolesCreateNestedOneWithoutUsuariosInput = {
    create?: Prisma.XOR<Prisma.RolesCreateWithoutUsuariosInput, Prisma.RolesUncheckedCreateWithoutUsuariosInput>;
    connectOrCreate?: Prisma.RolesCreateOrConnectWithoutUsuariosInput;
    connect?: Prisma.RolesWhereUniqueInput;
};
export type RolesUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: Prisma.XOR<Prisma.RolesCreateWithoutUsuariosInput, Prisma.RolesUncheckedCreateWithoutUsuariosInput>;
    connectOrCreate?: Prisma.RolesCreateOrConnectWithoutUsuariosInput;
    upsert?: Prisma.RolesUpsertWithoutUsuariosInput;
    connect?: Prisma.RolesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RolesUpdateToOneWithWhereWithoutUsuariosInput, Prisma.RolesUpdateWithoutUsuariosInput>, Prisma.RolesUncheckedUpdateWithoutUsuariosInput>;
};
export type RolesCreateWithoutUsuariosInput = {
    NomRol: string;
    DesRol: string;
};
export type RolesUncheckedCreateWithoutUsuariosInput = {
    IdRol?: number;
    NomRol: string;
    DesRol: string;
};
export type RolesCreateOrConnectWithoutUsuariosInput = {
    where: Prisma.RolesWhereUniqueInput;
    create: Prisma.XOR<Prisma.RolesCreateWithoutUsuariosInput, Prisma.RolesUncheckedCreateWithoutUsuariosInput>;
};
export type RolesUpsertWithoutUsuariosInput = {
    update: Prisma.XOR<Prisma.RolesUpdateWithoutUsuariosInput, Prisma.RolesUncheckedUpdateWithoutUsuariosInput>;
    create: Prisma.XOR<Prisma.RolesCreateWithoutUsuariosInput, Prisma.RolesUncheckedCreateWithoutUsuariosInput>;
    where?: Prisma.RolesWhereInput;
};
export type RolesUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: Prisma.RolesWhereInput;
    data: Prisma.XOR<Prisma.RolesUpdateWithoutUsuariosInput, Prisma.RolesUncheckedUpdateWithoutUsuariosInput>;
};
export type RolesUpdateWithoutUsuariosInput = {
    NomRol?: Prisma.StringFieldUpdateOperationsInput | string;
    DesRol?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RolesUncheckedUpdateWithoutUsuariosInput = {
    IdRol?: Prisma.IntFieldUpdateOperationsInput | number;
    NomRol?: Prisma.StringFieldUpdateOperationsInput | string;
    DesRol?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RolesCountOutputType = {
    Usuarios: number;
};
export type RolesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Usuarios?: boolean | RolesCountOutputTypeCountUsuariosArgs;
};
export type RolesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolesCountOutputTypeSelect<ExtArgs> | null;
};
export type RolesCountOutputTypeCountUsuariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuariosWhereInput;
};
export type RolesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IdRol?: boolean;
    NomRol?: boolean;
    DesRol?: boolean;
    Usuarios?: boolean | Prisma.Roles$UsuariosArgs<ExtArgs>;
    _count?: boolean | Prisma.RolesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["roles"]>;
export type RolesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IdRol?: boolean;
    NomRol?: boolean;
    DesRol?: boolean;
}, ExtArgs["result"]["roles"]>;
export type RolesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IdRol?: boolean;
    NomRol?: boolean;
    DesRol?: boolean;
}, ExtArgs["result"]["roles"]>;
export type RolesSelectScalar = {
    IdRol?: boolean;
    NomRol?: boolean;
    DesRol?: boolean;
};
export type RolesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"IdRol" | "NomRol" | "DesRol", ExtArgs["result"]["roles"]>;
export type RolesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Usuarios?: boolean | Prisma.Roles$UsuariosArgs<ExtArgs>;
    _count?: boolean | Prisma.RolesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RolesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type RolesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $RolesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Roles";
    objects: {
        Usuarios: Prisma.$UsuariosPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        IdRol: number;
        NomRol: string;
        DesRol: string;
    }, ExtArgs["result"]["roles"]>;
    composites: {};
};
export type RolesGetPayload<S extends boolean | null | undefined | RolesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RolesPayload, S>;
export type RolesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RolesCountAggregateInputType | true;
};
export interface RolesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Roles'];
        meta: {
            name: 'Roles';
        };
    };
    findUnique<T extends RolesFindUniqueArgs>(args: Prisma.SelectSubset<T, RolesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RolesClient<runtime.Types.Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RolesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RolesClient<runtime.Types.Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RolesFindFirstArgs>(args?: Prisma.SelectSubset<T, RolesFindFirstArgs<ExtArgs>>): Prisma.Prisma__RolesClient<runtime.Types.Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RolesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RolesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RolesClient<runtime.Types.Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RolesFindManyArgs>(args?: Prisma.SelectSubset<T, RolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RolesCreateArgs>(args: Prisma.SelectSubset<T, RolesCreateArgs<ExtArgs>>): Prisma.Prisma__RolesClient<runtime.Types.Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RolesCreateManyArgs>(args?: Prisma.SelectSubset<T, RolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RolesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RolesDeleteArgs>(args: Prisma.SelectSubset<T, RolesDeleteArgs<ExtArgs>>): Prisma.Prisma__RolesClient<runtime.Types.Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RolesUpdateArgs>(args: Prisma.SelectSubset<T, RolesUpdateArgs<ExtArgs>>): Prisma.Prisma__RolesClient<runtime.Types.Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RolesDeleteManyArgs>(args?: Prisma.SelectSubset<T, RolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RolesUpdateManyArgs>(args: Prisma.SelectSubset<T, RolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RolesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RolesUpsertArgs>(args: Prisma.SelectSubset<T, RolesUpsertArgs<ExtArgs>>): Prisma.Prisma__RolesClient<runtime.Types.Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RolesCountArgs>(args?: Prisma.Subset<T, RolesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RolesCountAggregateOutputType> : number>;
    aggregate<T extends RolesAggregateArgs>(args: Prisma.Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>;
    groupBy<T extends RolesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RolesGroupByArgs['orderBy'];
    } : {
        orderBy?: RolesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RolesFieldRefs;
}
export interface Prisma__RolesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Usuarios<T extends Prisma.Roles$UsuariosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Roles$UsuariosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RolesFieldRefs {
    readonly IdRol: Prisma.FieldRef<"Roles", 'Int'>;
    readonly NomRol: Prisma.FieldRef<"Roles", 'String'>;
    readonly DesRol: Prisma.FieldRef<"Roles", 'String'>;
}
export type RolesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolesSelect<ExtArgs> | null;
    omit?: Prisma.RolesOmit<ExtArgs> | null;
    include?: Prisma.RolesInclude<ExtArgs> | null;
    where: Prisma.RolesWhereUniqueInput;
};
export type RolesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolesSelect<ExtArgs> | null;
    omit?: Prisma.RolesOmit<ExtArgs> | null;
    include?: Prisma.RolesInclude<ExtArgs> | null;
    where: Prisma.RolesWhereUniqueInput;
};
export type RolesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolesSelect<ExtArgs> | null;
    omit?: Prisma.RolesOmit<ExtArgs> | null;
    include?: Prisma.RolesInclude<ExtArgs> | null;
    where?: Prisma.RolesWhereInput;
    orderBy?: Prisma.RolesOrderByWithRelationInput | Prisma.RolesOrderByWithRelationInput[];
    cursor?: Prisma.RolesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RolesScalarFieldEnum | Prisma.RolesScalarFieldEnum[];
};
export type RolesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolesSelect<ExtArgs> | null;
    omit?: Prisma.RolesOmit<ExtArgs> | null;
    include?: Prisma.RolesInclude<ExtArgs> | null;
    where?: Prisma.RolesWhereInput;
    orderBy?: Prisma.RolesOrderByWithRelationInput | Prisma.RolesOrderByWithRelationInput[];
    cursor?: Prisma.RolesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RolesScalarFieldEnum | Prisma.RolesScalarFieldEnum[];
};
export type RolesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolesSelect<ExtArgs> | null;
    omit?: Prisma.RolesOmit<ExtArgs> | null;
    include?: Prisma.RolesInclude<ExtArgs> | null;
    where?: Prisma.RolesWhereInput;
    orderBy?: Prisma.RolesOrderByWithRelationInput | Prisma.RolesOrderByWithRelationInput[];
    cursor?: Prisma.RolesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RolesScalarFieldEnum | Prisma.RolesScalarFieldEnum[];
};
export type RolesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolesSelect<ExtArgs> | null;
    omit?: Prisma.RolesOmit<ExtArgs> | null;
    include?: Prisma.RolesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RolesCreateInput, Prisma.RolesUncheckedCreateInput>;
};
export type RolesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RolesCreateManyInput | Prisma.RolesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RolesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RolesOmit<ExtArgs> | null;
    data: Prisma.RolesCreateManyInput | Prisma.RolesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RolesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolesSelect<ExtArgs> | null;
    omit?: Prisma.RolesOmit<ExtArgs> | null;
    include?: Prisma.RolesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RolesUpdateInput, Prisma.RolesUncheckedUpdateInput>;
    where: Prisma.RolesWhereUniqueInput;
};
export type RolesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RolesUpdateManyMutationInput, Prisma.RolesUncheckedUpdateManyInput>;
    where?: Prisma.RolesWhereInput;
    limit?: number;
};
export type RolesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RolesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RolesUpdateManyMutationInput, Prisma.RolesUncheckedUpdateManyInput>;
    where?: Prisma.RolesWhereInput;
    limit?: number;
};
export type RolesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolesSelect<ExtArgs> | null;
    omit?: Prisma.RolesOmit<ExtArgs> | null;
    include?: Prisma.RolesInclude<ExtArgs> | null;
    where: Prisma.RolesWhereUniqueInput;
    create: Prisma.XOR<Prisma.RolesCreateInput, Prisma.RolesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RolesUpdateInput, Prisma.RolesUncheckedUpdateInput>;
};
export type RolesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolesSelect<ExtArgs> | null;
    omit?: Prisma.RolesOmit<ExtArgs> | null;
    include?: Prisma.RolesInclude<ExtArgs> | null;
    where: Prisma.RolesWhereUniqueInput;
};
export type RolesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RolesWhereInput;
    limit?: number;
};
export type Roles$UsuariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RolesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolesSelect<ExtArgs> | null;
    omit?: Prisma.RolesOmit<ExtArgs> | null;
    include?: Prisma.RolesInclude<ExtArgs> | null;
};
