import {createBrowserRouter, Navigate} from "react-router-dom";
import {TodosPage} from "./pages/TodosPage";
import {CommentsPage} from "./pages/CommentsPage";
import {AlbumsPage} from "./pages/AlbumsPage";
import {MainLayout} from "./layouts/MainLayout";
import {PostsPage} from "./pages/PostsPage";

const router = createBrowserRouter([
    {
        path:'', element: <MainLayout/>, children:[
            {
                index:true, element:<Navigate to={'todos'}/>
            },
            {
                path:'todos', element: <TodosPage/>
            },
            {
                path:'comments', element: <CommentsPage/>, children:[{
                    path:'post', element: <PostsPage/>
                }]
            },
            {
                path:'albums', element: <AlbumsPage/>
            },
        ]
    }
]);

export {
    router
}