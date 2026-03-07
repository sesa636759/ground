interface IconResponse {
    ok: boolean;
    status: number;
    data: string;
}
declare const requestIcon: (url: string) => Promise<IconResponse>;
export default requestIcon;
//# sourceMappingURL=request.d.ts.map