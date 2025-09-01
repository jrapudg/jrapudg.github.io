---
layout: page
title: On-Orbit Optimal Kinodynamic Planning for Low-Thrust Trajectory Maneuvers
description: Using RRT* with an LQR-based heuristic to efficiently design low-thrust spacecraft trajectories, addressing nonlinear dynamics and long-duration maneuvers.
img: assets/img/planner.png
importance: 2
category: work
related_publications: false
giscus_comments: false
---

---
    Course: CMU 16-782: Planning and Decision-making for Robotics Fall 2023
    Instructor: Maxim Likhachev
    Authors: Juan Alvarez-Padilla, Ibrahima Sory Sow, Fausto Vega and Nayana Survana

---

For our project, we would like to design and generate a low-thrust trajectory for a spacecraft orbital transfer (i.e. GEO to GTO transfer maneuver)[1]. This problem presents extensive challenges as the dynamics are highly nonlinear, the spacecraft has little control authority (several orders of magnitude difference compared to traditional chemically propelled trajectory), and is typically underactuated. Furthermore, those trajectories span over weeks and months involving a significant problem size and potential numerical difficulties.

We want to leverage the cost-to-go function of linear quadratic regulation (LQR) as a cost metric to extend a particular sampling-based planner (e.g. RRT*) and compare this approach to other optimal-based sampling-based planners. In particular, we take inspiration from [2]. We plan on implementing our approach in C++ with visualization in ROS/Rviz or Meshcat.

<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/planner_sampling.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    RRT* panner with LQR cost-to-go visualization.
</div>

Check the project [here](https://github.com/jrapudg/OptimalSamplingLowThrust).