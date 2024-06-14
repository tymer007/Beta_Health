// DashboardWriterProfile.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dashboard, { DashboardItem } from "./Dashboard";
import {
  User,
  Home,
  SquarePen,
  LogOut,
  Calendar,
  LifeBuoy,
  Settings,
} from "lucide-react";
import Loader from "../components/Loader";
import axios from "axios";
import FroalaEditor from 'react-froala-wysiwyg';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/js/plugins/char_counter.min.js';
import 'froala-editor/js/plugins/image.min.js';
import 'froala-editor/js/plugins/save.min.js';
import './TextEditor.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DashboardWriterProfile = () => {
  const [content, setContent] = useState('');

  const handleModelChange = (model) => {
    setContent(model);
  };

  const editorConfig = {
    placeholderText: 'Your content goes here...',
    charCounterCount: true,
    wordCounter: true,
    charCounterMax: 6000,
    saveInterval: 5000,
    events: {
      "charCounter.exceeded": function () {
        alert('You have reached the maximum number of characters.');
        // notify = () => toast("Limit reached!");
      },
    },
    dragInline: false,
    fileAllowedTypes: ['image/jpeg', 'image/jpg', 'image/png'],
    editorClass: 'custom-editor-class'
  };

  return (
    <>
      {/* <div>
        <Loader />
      </div> */}

      {/* Dashboard */}
      <div className="flex">
        <Dashboard>
          <DashboardItem icon={<Home size={20} />} text="Home" />
          <DashboardItem
            icon={<SquarePen size={20} />}
            text="Write Article"
            active
          />
          <DashboardItem
            icon={<Calendar size={20} />}
            text="Consultations"
            alert
          />
          <DashboardItem icon={<User size={20} />} text="Your Profile" />
          <hr className="my-3 border-gray-600" />
          <DashboardItem icon={<Settings size={20} />} text="Settings" />
          <DashboardItem icon={<LifeBuoy size={20} />} text="Help" />
          <DashboardItem icon={<LogOut size={20} />} text="Log Out" />
        </Dashboard>
        <div className="flex-1 p-8 text-center">
          <h1 className="text-2xl font-bold">Write an Article</h1>
          <p className="text-customOrange">Fill in the fields below</p>


          <div>
            <form action="" className="flex flex-col gap-2 md:gap-4">
              <textarea
                type="text"
                name="title"
                placeholder="Enter your title..."
                className="placeholder-gray-500 placeholder-opacity-75 placeholder:text-6xl text-6xl pl-1 border-none focus:outline-none"
                required
              />

              <textarea
                type="text"
                name="description"
                placeholder="Insert your description here"
                className="placeholder-gray-500 placeholder-opacity-75 max-w-full h-12 placeholder:text-xl text-xl text-gray-900 pl-2 pb-2 md:pb-4 border-none focus:outline-none md:w-full"
                required
              />

              <FroalaEditor
                tag='textarea'
                config={editorConfig}
                model={content}
                onModelChange={handleModelChange}
              />

              <div className="flex flex-col md:flex-row gap-2 md:gap-4 pt-2 md:pt-4">
                <select
                  id="category"
                  name="category"
                  required
                  className="rounded-md p-2 bg-teal-100 md:w-1/2"
                >
                  <option value="">Select Category</option>
                  <option value="Alternative & Complementary Medicine">Alternative & Complementary Medicine</option>
                  <option value="Child & Adolescent Health">Child & Adolescent Health</option>
                  <option value="Chronic Diseases and Conditions">Chronic Diseases and Conditions</option>
                  <option value="Fitness & Exercise">Fitness & Exercise</option>
                  <option value="Men's Health">Men's Health</option>
                  <option value="Mental Health Awareness & Management">Mental Health Awareness & Management</option>
                  <option value="Nutrition & Diet">Nutrition & Diet</option>
                  <option value="Personal Hygiene">Personal Hygiene</option>
                  <option value="Preventative Healthcare">Preventative Healthcare</option>
                  <option value="Sleep Hygiene">Sleep Hygiene</option>
                  <option value="Women's Health">Women's Health</option>
                </select>

                <button className="text-customOrange rounded-md bg-orange-100 p-2 md:w-1/2">Submit</button>
              </div>
            </form>
          </div>


        </div>
      </div>
    </>
  );
};

export default DashboardWriterProfile;
