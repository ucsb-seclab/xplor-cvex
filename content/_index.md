---
title: Common Vulnerability and Exposure Executables (CVEX)
description: 
layout: single
url: /
---
### What is a CVEX?
CVEX is an executable that runs a software exploit and outputs relevant data in the form of network traffic. Each CVEX is packaged in the form of a Docker container, which has the benefit of being convenient and compatible with any operating system. As a result, CVEXes can be run and analyzed by any person curious to understand the workings of a software vulnerability.

### How to run a CVEX
1. Pull from the GitHub Container Registry (GHCR):  
&nbsp;&nbsp;a. 'docker pull ghcr.io/ucsb-seclab/NAME_OF_CONTAINER:TAG'  
&nbsp;&nbsp;b. for example, 'docker pull ghcr.io/ucsb-seclab/demo/client:latest'  
&nbsp;&nbsp;c. check each container's README for more details, and [for help on ghcr](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry#pulling-container-images) 

2. Or (for v2 only): pull from the Github and run as instructed in the README

<!-- ![CVEX](./images/cvex.png#center) -->

### Our Mission

#### We aim to extract more information from each CVE vulnerability by tranforming this...

![Before](./images/zoom.png#center)

#### To something like this

![Before](./images/poc.png#center)

### A Collection of our Completed CVEXes
This static HUGO website serves as a database of completed CVEXes. These CVEXes were created by the Team of Professors Kruegel & Vigna, with 4 undergraduate researchers affiliated with UCSB's Early Research Scholars Program 2023-2024 cohort.


*Special thanks to Noah Spahn, Professor Giovanni Vigna, and Professor Christopher Kruegel, and UCSB SecLab.*