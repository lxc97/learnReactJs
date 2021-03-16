import AddUser from "./components/users/AddUser"
import ListUser from "./components/users/ListUser"

const routers = [
    {
        name: "Option",
        icon: "",
        component: "component Option",
        path: "/option"
    },
    {
        name: "User",
        icon: "",
        children: [
            {
                name: "Add User",
                icon:"",
                component: <AddUser /> ,
                path: "/user/add",
            },
            {
                name: "List User",
                icon:"",
                component: <ListUser />,
                path: "/user/list"
            }
        ]
    },
    // {
    //     name: "LogOut",
    //     icon: "",
    //     component: "",
    //     path: "",
    //     id: "logout"
    // },
]
export default routers;