---
title: About Xplor CVEX
description: 
layout: single
draft: true
url: /research/
---

# Problem Statement
Though the CVE framework standardizes historical security vulnerabilities found across various corporations, it does not provide enough information for researchers or other developers to understand the
vulnerability and how it’s exploited from a technical, and practical level. It lacks details ranging from
analyses of port mappings and network traffic to remote code execution scripts, all of which may serve
towards an elevated understanding of security vulnerabilities and exploits for future security patches.
Studies have shown that being able to simulate or reproduce a vulnerability is key to a better understanding of each vulnerability, which ultimately results in faster, more efficient patching workflows [2].
Currently, there is no standardized method to reproduce cybersecurity vulnerabilities, nor is there a data
set that links a security vulnerability with an executable to simulate it. Research on this idea is limited
due to its novelty and most disclosed vulnerabilities do not have the depth of information required to effectively rebuild them, whether due to the lack of transparency from the corporations that discovery such
vulnerabilities or its lack of documentation. 

Previous attempts to reproduce vulnerabilities have been oriented towards more specific contexts. For instance, Analyzing Vulnerability Reproducibility for the Firefox
Browser [3] primarily targets the analysis and prediction of vulnerabilities within the Firefox browser’s
codebase. Another example is RoBin, which targets vulnerabilities caused by building configurations[1].
Our goal, on the other hand, is to create an effective and generalized way to reproduce vulnerabilities
from any codebase.

# Mission
We propose enhancing the reproducibility of Common Vulnerabilities and Exposures (CVEs) through a
novel format, CVE-X (Common Vulnerabilities and Exposures with Exploits). In this format, we augment
each CVE record with an attached executable packaged within Docker containers. This executable encapsulates the exploit or vulnerability, enabling easy deployment on any local environment.
These containers serve as self-contained environments housing the exploit or vulnerability, facilitating
seamless deployment across diverse local environments, thus ensuring that the entire execution context,
including dependencies and configurations, is preserved. This format offers a comprehensive and reproducible snapshot of the vulnerability that allows researchers to analyze network traffic and gain other key
insights that aid in understanding how the vulnerability works in its native environment. To facilitate this,
we use Dockerfiles, which, when built, pull the necessary environmental resources required to streamline
the reproduction of the vulnerability or exploit. In the future, this may be used to automate the executable creation process using potential scripting or machine learning to eliminate manual implementation of dockerizing
vulnerabilities.

# Significance
CVE-X addresses an oversight in the existing CVE framework by establishing a standardized and replicable
methodology for CVEs. While CVE entries provide essential information about vulnerabilities, reproducing exploits remains a resource-intensive and complex task for security professionals and researchers.

CVE-X offers a streamlined and efficient means for security professionals to deploy and assess vulnera-
bilities in a hands-on manner. Our core objective is to create a standardized approach for enriching CVE
entries with reproducible exploits to help the public gain a deeper understanding of the inner workings
of each vulnerability. We seek to significantly reduce the time and effort required to comprehend and
address security vulnerabilities, as well as empower security teams to engage directly with vulnerabilities
in a controlled environment to prevent future exploits.

In essence, our work aims to create a more resilient, informed, and collaborative cybersecurity landscape.


# References
[1] L. Chen, J. Guo, Z. He, D. Mu, and B. Mao. Robin: Facilitating the reproduction of configuration-related
vulnerability. In 2021 IEEE 20th International Conference on Trust, Security and Privacy in Computing
and Communications (TrustCom), pages 91–98. IEEE Computer Society, 2021.

[2] S. Dashevskyi, D. R. dos Santos, F. Massacci, and A. Sabetta. Testrex: a framework for repeatable
exploits. In International Journal on Software Tools for Technology Transfer, page 105–119, 2017.

[3] M. Davari and M. Zulkernine. Analysing vulnerability reproducibility for firefox browser. In 2016
14th Annual Conference on Privacy, Security and Trust (PST), pages 674–681, 2016.

[4] A. Feutrill, D. Ranathunga, Y. Yarom, and M. Roughan. The effect of common vulnerability scoring
system metrics on vulnerability exploit delay. In 2018 Sixth International Symposium on Computing
and Networking (CANDAR), pages 1–10, 2018.