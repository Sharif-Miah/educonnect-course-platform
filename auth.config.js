export const authConfig = {
    session: {
        strategy: 'jwt',
    },
    providers: [],
    secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET,
    trustHost: true,
};