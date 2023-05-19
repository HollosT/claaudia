
export type RouteList = { [x: string]: Route}

export type Route = {
    show?: boolean;
    icon?: React.ReactNode;
    name: string;
    path: string;
    element: React.ReactNode | null;
}
