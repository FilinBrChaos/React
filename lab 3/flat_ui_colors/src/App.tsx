import { HomePage } from "./components/home-page/home-page";
import { ColorPicker } from "./components/color-picker/color-picker";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { dividerClasses } from "@mui/material";
import data from './data/pallete.json'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<HomePage></HomePage>)
    },
    {
      path: "/picker/:id",
      element: (<ColorPicker></ColorPicker>),
      loader: ({params}) => {
        const id: number = parseInt(params.id!)
        return id;
      }
    }
  ])
  return (
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
  );
}

export default App;
