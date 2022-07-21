import { Contacts } from "../pages/Contacts/Contacts";
import { Main } from "../pages/Main/Main";
import { Personal } from "../pages/Personal/Personal";

export const privateRoutes = [
  {path: '/contacts', element: Contacts},
  {path: '/main', element: Main},
  {path: '/personal', element: Personal}
]

export const publicRoutes = [
  {path: '/contacts', element: Contacts},
  {path: '/main', element: Main}
]