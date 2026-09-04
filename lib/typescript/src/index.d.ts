export type OpenTapToPayParams = {
    token: string;
    url?: string;
};
export declare function openTapToPay(params: OpenTapToPayParams): Promise<string>;
export declare const PlatechTapToPay: {
    openTapToPay: typeof openTapToPay;
};
export default PlatechTapToPay;
//# sourceMappingURL=index.d.ts.map