// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import { JournalPostForm } from "./pages/JournalPostForm";
import { ContactUs } from "./pages/ContactUs";
import { Login } from "./pages/Login";
import { HomePage } from "./pages/HomePage";
import { WorldMap } from "./pages/WorldMap";
import { Destination } from "./pages/Destination";
import { Signup } from "./pages/Signup";
import { JournalFeed } from "./pages/JournalFeed";
import { JournalPostDetail } from "./pages/JournalPostDetail";


export const router = createBrowserRouter(
  createRoutesFromElements(
    // CreateRoutesFromElements function allows you to build route elements declaratively.
    // Create your routes here, if you want to keep the Navbar and Footer in all views, add your new routes inside the containing Route.
    // Root, on the contrary, create a sister Route, if you have doubts, try it!
    // Note: keep in mind that errorElement will be the default page when you don't get a route, customize that page to make your project more attractive.
    // Note: The child paths of the Layout element replace the Outlet component with the elements contained in the "element" attribute of these child paths.

    // Root Route: All navigation will start from here.
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >


        {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
        <Route path= "/" element={<Home />} />
        <Route path= "/login" element={<Login />} />
        <Route path= "/homepage" element={<HomePage />} />
        <Route path= "/signup" element={<Signup />} />
        <Route path= "/worldmap" element={<WorldMap />} />
        <Route path="/single/:theId" element={ <Single />} />  {/* Dynamic route for single items */}
        <Route path="/demo" element={<Demo />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/destination" element={<Destination />} />
        <Route path= "/journalpostform" element={ <JournalPostForm /> } />
        <Route path="/journals" element={<JournalFeed />} />
        <Route path="/journal/:id" element={<JournalPostDetail />} />


      </Route>
    ),
    {
      future: {
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    },
})
       