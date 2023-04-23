
export type RouteList = { [x: string]: Route}

export type Route = {
    name: string;
    path: string;
    element: React.ReactNode | null;
}
