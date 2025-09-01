---
layout: page
title: Whole-body Trajectory Optimization and Tracking for a Ballbot
description: Optimizing and tracking whole-body trajectories for a ballbot equipped with arms. By using direct collocation and Time-Variant Linear Quadratic Regulators (TVLQR), the ballbot performs dynamic tasks such as navigating complex paths and pushing off walls, maintaining balance despite changes in its center of mass.
img: assets/img/ballbot_st.png
importance: 1
category: school
related_publications: false
---

---
    Course: CMU 16-745: Optimal Control and Reinforcement Learning Spring 2023
    Instructor: Zachary Manchester
    Authors: Juan Alvarez-Padilla, Christian Berger, Sayan Mondal, Haoru Xue, and Zhikai Zhang

---

Several ballbots have been developed, yet only a handful have been equipped with arms to enhance their maneuverability and manipulability. The incorporation of 7-DOF arms to the CMU ballbot has presented challenges in balancing and navigation due to the constantly changing center of mass. This project aims to propose a control strategy that incorporates the arms dynamics. Our approach is to use a simplified whole-body dynamics model, with only the shoulder and elbow joints moving for each arm. This reduces the number of states and accelerates convergence. We focused on two specific tasks: navigation (straight and curved paths) and pushing a wall. Trajectories were generated using direct collocation for the navigation task and hybrid contact trajectory optimization for pushing the wall. A time-variant linear-quadratic-regulator (TVLQR) was designed to track the trajectories. The resulting trajectories were tracked with a mean-average error of less than 4 cm, even for the more complex path. These experiments represent an initial step towards unlocking the full potential of ballbots in dynamic and interactive environments.

<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/ballbot.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Ballbot tracking a trajectory to push a wall with a TV-LQR controller.
</div>

Check the project **[here](https://github.com/jrapudg/OCRL-BallbotTrajOptAndControl)**.