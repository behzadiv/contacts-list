import AddContactForm from "./Pages/AddContactForm";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import ContactDetail from "./components/ContactDetail"
const routes = [
    {path:"/:id",component:ContactDetail},
    {path:"/add",component:AddContactForm},
    {path:"/",component:HomePage,exact:true},
    {component:NotFound},
]

export default routes ;