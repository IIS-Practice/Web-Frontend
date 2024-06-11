import {
    HOME_ROUTE,
    EMPLOYEES_ROUTE,
    CASES_ROUTE,
    SERVICES_ROUTE,
    REVIEWS_ROUTE,
    CONTACTS_ROUTE,
    FAQ_ROUTE,
} from "@utils/constants";
import {
    Home,
    Employees,
    Case,
    Cases,
    Service,
    Reviews,
    Contacts,
    FAQ,
} from "@pages";

export const authRoutes = [];

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home,
    },
    {
        path: EMPLOYEES_ROUTE,
        Component: Employees,
    },
    {
        path: CASES_ROUTE,
        Component: Cases,
    },
    {
        path: CASES_ROUTE + "/:id",
        Component: Case,
    },
    {
        path: SERVICES_ROUTE + "/:id",
        Component: Service,
    },
    {
        path: REVIEWS_ROUTE,
        Component: Reviews,
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts,
    },
    {
        path: FAQ_ROUTE,
        Component: FAQ,
    },
];
