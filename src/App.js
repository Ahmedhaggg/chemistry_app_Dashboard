import { BrowserRouter, Route, Routes, } from "react-router-dom"
import { Provider } from "react-redux";
import Store from "./store/index";
import React from 'react';
import './App.css';
import Dashboard from "./views/dashboard";
import Layout from "./components/layouts/Layout"
import Login from "./views/auth/Login"
import Grades from "./views/grade";
import Grade from "./views/grade/show";
import CreateGrade from "./views/grade/create";
import EditGrade from "./views/grade/edit";
import Courses from "./views/course";
import Course from "./views/course/show";
import CreateCourse from "./views/course/create";
import EditCourse from "./views/course/edit";
import CreateUnit from "./views/unit/create";
import Unit from "./views/unit/show";
import EditUnit from "./views/unit/edit";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" exact element={<Login />} />
            <Route path="/*" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="grades/*">
                <Route index element={<Grades />} />
                <Route path="create" element={<CreateGrade />} />
                <Route path=":id/edit" element={<EditGrade />} />
              </Route>
              <Route path="courses/*">
                <Route index element={< Courses />} />
                <Route path="create" element={< CreateCourse />} />
                <Route path=":id" element={< Course />} />
                <Route path=":id/edit" element={< EditCourse />} />
                <Route path=":courseId/units/*">
                  <Route path="create" element={< CreateUnit />} />
                  <Route path=":unitId" element={< Unit />} />
                  <Route path=":unitId/edit" element={< EditUnit />} />
                  <Route path="*" element={<div>404</div>} />
                </Route>
                <Route path="*" element={<div>404</div>} />
              </Route>
              <Route path="404" element={<>404</>} />
              <Route path="505" element={<>505</>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
