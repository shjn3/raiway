const requiredEnvVars = ["MONGO_URI", "JWT_ACCESS_SECRET", "JWT_REFRESH_SECRET"];
export const validateEnv = () => {
    requiredEnvVars.forEach(v => {
        if (!process.env[v]) {
            throw new Error(`Missing environment variable: ${v}`);
        }
    });
};
//# sourceMappingURL=env.js.map