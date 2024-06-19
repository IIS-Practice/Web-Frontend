import {
  HOME_ROUTE,
  EMPLOYEES_ROUTE,
  EMPLOYMENT_ROUTE,
  FAQ_ROUTE,
  SERVICES_ROUTE,
  CASES_ROUTE,
  REVIEWS_ROUTE,
  CONTACTS_ROUTE,
} from "@utils/constants";
import {
  Home,
  Employees,
  Employment,
  FAQ,
  Case,
  Cases,
  Service,
  Reviews,
  Contacts,
} from "@pages";

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
    path: EMPLOYMENT_ROUTE,
    Component: Employment,
  },
  {
    path: FAQ_ROUTE,
    Component: FAQ,
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
    path: SERVICES_ROUTE + "/:serviceName",
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
];
