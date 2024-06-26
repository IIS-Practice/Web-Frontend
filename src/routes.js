import {
  HOME_ROUTE,
  EMPLOYEES_ROUTE,
  EMPLOYMENT_ROUTE,
  FAQ_ROUTE,
  SERVICES_ROUTE,
  PRICE_ROUTE,
  CASES_ROUTE,
  REVIEWS_ROUTE,
  CONTACTS_ROUTE,
} from "@utils/constants";
import {
  Home,
  Employees,
  Employment,
  FAQ,
  CasePage,
  Cases,
  Service,
  Price,
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
    path: CASES_ROUTE + "/:caseName",
    Component: CasePage,
  },
  {
    path: SERVICES_ROUTE + "/:serviceName",
    Component: Service,
  },
  {
    path: PRICE_ROUTE,
    Component: Price,
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
