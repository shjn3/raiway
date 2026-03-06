import type { NextFunction, Request, Response } from "express";
export declare class AuthController {
    static register: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    static login: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    static getSafeUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
//# sourceMappingURL=auth.controller.d.ts.map