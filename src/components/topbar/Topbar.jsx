import React from 'react';
import "./topbar.css";
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {

      return (
            <div className="topbar">

                  <div className="topbarWrapper">

                        <div className="topLeft">

                              <span className="logo">
                                    lamaadmin
                              </span>
                        </div>

                        <div className="topRight">



                              <div className="topbarIconContainer">
                                    <NotificationsNone />
                                    <span className="topIconBadge">
                                          2
                                    </span>
                              </div>
                              <div className="topbarIconContainer">
                                    <Language />
                                    <span className="topIconBadge">
                                          2
                                    </span></div>
                              <div className="topbarIconContainer">
                                    <Settings />
                              </div>
                              <img src="https://images.pexels.com/photos/10206882/pexels-photo-10206882.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="topAvatar" />



                        </div>
                  </div>
            </div>


      );

}