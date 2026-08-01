import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EFMigrationsHistoryModel = runtime.Types.Result.DefaultSelection<Prisma.$EFMigrationsHistoryPayload>;
export type AggregateEFMigrationsHistory = {
    _count: EFMigrationsHistoryCountAggregateOutputType | null;
    _min: EFMigrationsHistoryMinAggregateOutputType | null;
    _max: EFMigrationsHistoryMaxAggregateOutputType | null;
};
export type EFMigrationsHistoryMinAggregateOutputType = {
    MigrationId: string | null;
    ProductVersion: string | null;
};
export type EFMigrationsHistoryMaxAggregateOutputType = {
    MigrationId: string | null;
    ProductVersion: string | null;
};
export type EFMigrationsHistoryCountAggregateOutputType = {
    MigrationId: number;
    ProductVersion: number;
    _all: number;
};
export type EFMigrationsHistoryMinAggregateInputType = {
    MigrationId?: true;
    ProductVersion?: true;
};
export type EFMigrationsHistoryMaxAggregateInputType = {
    MigrationId?: true;
    ProductVersion?: true;
};
export type EFMigrationsHistoryCountAggregateInputType = {
    MigrationId?: true;
    ProductVersion?: true;
    _all?: true;
};
export type EFMigrationsHistoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EFMigrationsHistoryWhereInput;
    orderBy?: Prisma.EFMigrationsHistoryOrderByWithRelationInput | Prisma.EFMigrationsHistoryOrderByWithRelationInput[];
    cursor?: Prisma.EFMigrationsHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EFMigrationsHistoryCountAggregateInputType;
    _min?: EFMigrationsHistoryMinAggregateInputType;
    _max?: EFMigrationsHistoryMaxAggregateInputType;
};
export type GetEFMigrationsHistoryAggregateType<T extends EFMigrationsHistoryAggregateArgs> = {
    [P in keyof T & keyof AggregateEFMigrationsHistory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEFMigrationsHistory[P]> : Prisma.GetScalarType<T[P], AggregateEFMigrationsHistory[P]>;
};
export type EFMigrationsHistoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EFMigrationsHistoryWhereInput;
    orderBy?: Prisma.EFMigrationsHistoryOrderByWithAggregationInput | Prisma.EFMigrationsHistoryOrderByWithAggregationInput[];
    by: Prisma.EFMigrationsHistoryScalarFieldEnum[] | Prisma.EFMigrationsHistoryScalarFieldEnum;
    having?: Prisma.EFMigrationsHistoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EFMigrationsHistoryCountAggregateInputType | true;
    _min?: EFMigrationsHistoryMinAggregateInputType;
    _max?: EFMigrationsHistoryMaxAggregateInputType;
};
export type EFMigrationsHistoryGroupByOutputType = {
    MigrationId: string;
    ProductVersion: string;
    _count: EFMigrationsHistoryCountAggregateOutputType | null;
    _min: EFMigrationsHistoryMinAggregateOutputType | null;
    _max: EFMigrationsHistoryMaxAggregateOutputType | null;
};
export type GetEFMigrationsHistoryGroupByPayload<T extends EFMigrationsHistoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EFMigrationsHistoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EFMigrationsHistoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EFMigrationsHistoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EFMigrationsHistoryGroupByOutputType[P]>;
}>>;
export type EFMigrationsHistoryWhereInput = {
    AND?: Prisma.EFMigrationsHistoryWhereInput | Prisma.EFMigrationsHistoryWhereInput[];
    OR?: Prisma.EFMigrationsHistoryWhereInput[];
    NOT?: Prisma.EFMigrationsHistoryWhereInput | Prisma.EFMigrationsHistoryWhereInput[];
    MigrationId?: Prisma.StringFilter<"EFMigrationsHistory"> | string;
    ProductVersion?: Prisma.StringFilter<"EFMigrationsHistory"> | string;
};
export type EFMigrationsHistoryOrderByWithRelationInput = {
    MigrationId?: Prisma.SortOrder;
    ProductVersion?: Prisma.SortOrder;
};
export type EFMigrationsHistoryWhereUniqueInput = Prisma.AtLeast<{
    MigrationId?: string;
    AND?: Prisma.EFMigrationsHistoryWhereInput | Prisma.EFMigrationsHistoryWhereInput[];
    OR?: Prisma.EFMigrationsHistoryWhereInput[];
    NOT?: Prisma.EFMigrationsHistoryWhereInput | Prisma.EFMigrationsHistoryWhereInput[];
    ProductVersion?: Prisma.StringFilter<"EFMigrationsHistory"> | string;
}, "MigrationId">;
export type EFMigrationsHistoryOrderByWithAggregationInput = {
    MigrationId?: Prisma.SortOrder;
    ProductVersion?: Prisma.SortOrder;
    _count?: Prisma.EFMigrationsHistoryCountOrderByAggregateInput;
    _max?: Prisma.EFMigrationsHistoryMaxOrderByAggregateInput;
    _min?: Prisma.EFMigrationsHistoryMinOrderByAggregateInput;
};
export type EFMigrationsHistoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.EFMigrationsHistoryScalarWhereWithAggregatesInput | Prisma.EFMigrationsHistoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.EFMigrationsHistoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EFMigrationsHistoryScalarWhereWithAggregatesInput | Prisma.EFMigrationsHistoryScalarWhereWithAggregatesInput[];
    MigrationId?: Prisma.StringWithAggregatesFilter<"EFMigrationsHistory"> | string;
    ProductVersion?: Prisma.StringWithAggregatesFilter<"EFMigrationsHistory"> | string;
};
export type EFMigrationsHistoryCreateInput = {
    MigrationId: string;
    ProductVersion: string;
};
export type EFMigrationsHistoryUncheckedCreateInput = {
    MigrationId: string;
    ProductVersion: string;
};
export type EFMigrationsHistoryUpdateInput = {
    MigrationId?: Prisma.StringFieldUpdateOperationsInput | string;
    ProductVersion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EFMigrationsHistoryUncheckedUpdateInput = {
    MigrationId?: Prisma.StringFieldUpdateOperationsInput | string;
    ProductVersion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EFMigrationsHistoryCreateManyInput = {
    MigrationId: string;
    ProductVersion: string;
};
export type EFMigrationsHistoryUpdateManyMutationInput = {
    MigrationId?: Prisma.StringFieldUpdateOperationsInput | string;
    ProductVersion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EFMigrationsHistoryUncheckedUpdateManyInput = {
    MigrationId?: Prisma.StringFieldUpdateOperationsInput | string;
    ProductVersion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EFMigrationsHistoryCountOrderByAggregateInput = {
    MigrationId?: Prisma.SortOrder;
    ProductVersion?: Prisma.SortOrder;
};
export type EFMigrationsHistoryMaxOrderByAggregateInput = {
    MigrationId?: Prisma.SortOrder;
    ProductVersion?: Prisma.SortOrder;
};
export type EFMigrationsHistoryMinOrderByAggregateInput = {
    MigrationId?: Prisma.SortOrder;
    ProductVersion?: Prisma.SortOrder;
};
export type EFMigrationsHistorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    MigrationId?: boolean;
    ProductVersion?: boolean;
}, ExtArgs["result"]["eFMigrationsHistory"]>;
export type EFMigrationsHistorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    MigrationId?: boolean;
    ProductVersion?: boolean;
}, ExtArgs["result"]["eFMigrationsHistory"]>;
export type EFMigrationsHistorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    MigrationId?: boolean;
    ProductVersion?: boolean;
}, ExtArgs["result"]["eFMigrationsHistory"]>;
export type EFMigrationsHistorySelectScalar = {
    MigrationId?: boolean;
    ProductVersion?: boolean;
};
export type EFMigrationsHistoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"MigrationId" | "ProductVersion", ExtArgs["result"]["eFMigrationsHistory"]>;
export type $EFMigrationsHistoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EFMigrationsHistory";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        MigrationId: string;
        ProductVersion: string;
    }, ExtArgs["result"]["eFMigrationsHistory"]>;
    composites: {};
};
export type EFMigrationsHistoryGetPayload<S extends boolean | null | undefined | EFMigrationsHistoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EFMigrationsHistoryPayload, S>;
export type EFMigrationsHistoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EFMigrationsHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EFMigrationsHistoryCountAggregateInputType | true;
};
export interface EFMigrationsHistoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EFMigrationsHistory'];
        meta: {
            name: 'EFMigrationsHistory';
        };
    };
    findUnique<T extends EFMigrationsHistoryFindUniqueArgs>(args: Prisma.SelectSubset<T, EFMigrationsHistoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EFMigrationsHistoryClient<runtime.Types.Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EFMigrationsHistoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EFMigrationsHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EFMigrationsHistoryClient<runtime.Types.Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EFMigrationsHistoryFindFirstArgs>(args?: Prisma.SelectSubset<T, EFMigrationsHistoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__EFMigrationsHistoryClient<runtime.Types.Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EFMigrationsHistoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EFMigrationsHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EFMigrationsHistoryClient<runtime.Types.Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EFMigrationsHistoryFindManyArgs>(args?: Prisma.SelectSubset<T, EFMigrationsHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EFMigrationsHistoryCreateArgs>(args: Prisma.SelectSubset<T, EFMigrationsHistoryCreateArgs<ExtArgs>>): Prisma.Prisma__EFMigrationsHistoryClient<runtime.Types.Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EFMigrationsHistoryCreateManyArgs>(args?: Prisma.SelectSubset<T, EFMigrationsHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EFMigrationsHistoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EFMigrationsHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EFMigrationsHistoryDeleteArgs>(args: Prisma.SelectSubset<T, EFMigrationsHistoryDeleteArgs<ExtArgs>>): Prisma.Prisma__EFMigrationsHistoryClient<runtime.Types.Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EFMigrationsHistoryUpdateArgs>(args: Prisma.SelectSubset<T, EFMigrationsHistoryUpdateArgs<ExtArgs>>): Prisma.Prisma__EFMigrationsHistoryClient<runtime.Types.Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EFMigrationsHistoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, EFMigrationsHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EFMigrationsHistoryUpdateManyArgs>(args: Prisma.SelectSubset<T, EFMigrationsHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EFMigrationsHistoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EFMigrationsHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EFMigrationsHistoryUpsertArgs>(args: Prisma.SelectSubset<T, EFMigrationsHistoryUpsertArgs<ExtArgs>>): Prisma.Prisma__EFMigrationsHistoryClient<runtime.Types.Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EFMigrationsHistoryCountArgs>(args?: Prisma.Subset<T, EFMigrationsHistoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EFMigrationsHistoryCountAggregateOutputType> : number>;
    aggregate<T extends EFMigrationsHistoryAggregateArgs>(args: Prisma.Subset<T, EFMigrationsHistoryAggregateArgs>): Prisma.PrismaPromise<GetEFMigrationsHistoryAggregateType<T>>;
    groupBy<T extends EFMigrationsHistoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EFMigrationsHistoryGroupByArgs['orderBy'];
    } : {
        orderBy?: EFMigrationsHistoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EFMigrationsHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEFMigrationsHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EFMigrationsHistoryFieldRefs;
}
export interface Prisma__EFMigrationsHistoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EFMigrationsHistoryFieldRefs {
    readonly MigrationId: Prisma.FieldRef<"EFMigrationsHistory", 'String'>;
    readonly ProductVersion: Prisma.FieldRef<"EFMigrationsHistory", 'String'>;
}
export type EFMigrationsHistoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EFMigrationsHistorySelect<ExtArgs> | null;
    omit?: Prisma.EFMigrationsHistoryOmit<ExtArgs> | null;
    where: Prisma.EFMigrationsHistoryWhereUniqueInput;
};
export type EFMigrationsHistoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EFMigrationsHistorySelect<ExtArgs> | null;
    omit?: Prisma.EFMigrationsHistoryOmit<ExtArgs> | null;
    where: Prisma.EFMigrationsHistoryWhereUniqueInput;
};
export type EFMigrationsHistoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EFMigrationsHistorySelect<ExtArgs> | null;
    omit?: Prisma.EFMigrationsHistoryOmit<ExtArgs> | null;
    where?: Prisma.EFMigrationsHistoryWhereInput;
    orderBy?: Prisma.EFMigrationsHistoryOrderByWithRelationInput | Prisma.EFMigrationsHistoryOrderByWithRelationInput[];
    cursor?: Prisma.EFMigrationsHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EFMigrationsHistoryScalarFieldEnum | Prisma.EFMigrationsHistoryScalarFieldEnum[];
};
export type EFMigrationsHistoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EFMigrationsHistorySelect<ExtArgs> | null;
    omit?: Prisma.EFMigrationsHistoryOmit<ExtArgs> | null;
    where?: Prisma.EFMigrationsHistoryWhereInput;
    orderBy?: Prisma.EFMigrationsHistoryOrderByWithRelationInput | Prisma.EFMigrationsHistoryOrderByWithRelationInput[];
    cursor?: Prisma.EFMigrationsHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EFMigrationsHistoryScalarFieldEnum | Prisma.EFMigrationsHistoryScalarFieldEnum[];
};
export type EFMigrationsHistoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EFMigrationsHistorySelect<ExtArgs> | null;
    omit?: Prisma.EFMigrationsHistoryOmit<ExtArgs> | null;
    where?: Prisma.EFMigrationsHistoryWhereInput;
    orderBy?: Prisma.EFMigrationsHistoryOrderByWithRelationInput | Prisma.EFMigrationsHistoryOrderByWithRelationInput[];
    cursor?: Prisma.EFMigrationsHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EFMigrationsHistoryScalarFieldEnum | Prisma.EFMigrationsHistoryScalarFieldEnum[];
};
export type EFMigrationsHistoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EFMigrationsHistorySelect<ExtArgs> | null;
    omit?: Prisma.EFMigrationsHistoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EFMigrationsHistoryCreateInput, Prisma.EFMigrationsHistoryUncheckedCreateInput>;
};
export type EFMigrationsHistoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EFMigrationsHistoryCreateManyInput | Prisma.EFMigrationsHistoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EFMigrationsHistoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EFMigrationsHistorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EFMigrationsHistoryOmit<ExtArgs> | null;
    data: Prisma.EFMigrationsHistoryCreateManyInput | Prisma.EFMigrationsHistoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EFMigrationsHistoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EFMigrationsHistorySelect<ExtArgs> | null;
    omit?: Prisma.EFMigrationsHistoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EFMigrationsHistoryUpdateInput, Prisma.EFMigrationsHistoryUncheckedUpdateInput>;
    where: Prisma.EFMigrationsHistoryWhereUniqueInput;
};
export type EFMigrationsHistoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EFMigrationsHistoryUpdateManyMutationInput, Prisma.EFMigrationsHistoryUncheckedUpdateManyInput>;
    where?: Prisma.EFMigrationsHistoryWhereInput;
    limit?: number;
};
export type EFMigrationsHistoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EFMigrationsHistorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EFMigrationsHistoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EFMigrationsHistoryUpdateManyMutationInput, Prisma.EFMigrationsHistoryUncheckedUpdateManyInput>;
    where?: Prisma.EFMigrationsHistoryWhereInput;
    limit?: number;
};
export type EFMigrationsHistoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EFMigrationsHistorySelect<ExtArgs> | null;
    omit?: Prisma.EFMigrationsHistoryOmit<ExtArgs> | null;
    where: Prisma.EFMigrationsHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.EFMigrationsHistoryCreateInput, Prisma.EFMigrationsHistoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EFMigrationsHistoryUpdateInput, Prisma.EFMigrationsHistoryUncheckedUpdateInput>;
};
export type EFMigrationsHistoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EFMigrationsHistorySelect<ExtArgs> | null;
    omit?: Prisma.EFMigrationsHistoryOmit<ExtArgs> | null;
    where: Prisma.EFMigrationsHistoryWhereUniqueInput;
};
export type EFMigrationsHistoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EFMigrationsHistoryWhereInput;
    limit?: number;
};
export type EFMigrationsHistoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EFMigrationsHistorySelect<ExtArgs> | null;
    omit?: Prisma.EFMigrationsHistoryOmit<ExtArgs> | null;
};
