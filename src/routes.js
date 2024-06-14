import {
  HOME_ROUTE,
  EMPLOYEES_ROUTE,
  EMPLOYMENT_ROUTE,
  FAQ_ROUTE,
  CASES_ROUTE,
  WEBDEV_ROUTE,
  MOBILEDEV_ROUTE,
  BOTDEV_ROUTE,
  DESIGN_ROUTE,
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
  WebdevService,
  MobiledevService,
  BotdevService,
  DesignService,
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
    path: WEBDEV_ROUTE,
    Component: WebdevService,
  },
  {
    path: MOBILEDEV_ROUTE,
    Component: MobiledevService,
  },
  {
    path: BOTDEV_ROUTE,
    Component: BotdevService,
  },
  {
    path: DESIGN_ROUTE,
    Component: DesignService,
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
