const { Octokit } = require("@octokit/rest");
const fs = require('fs');
const path = require('path');

const username = process.env.GITHUB_USERNAME;
const token = process.env.GITHUB_TOKEN;
const packageType = process.env.PACKAGE_TYPE;

const octokit = new Octokit({ auth: token });
const data = JSON.parse(fs.readFileSync('cve-cvex.json'));

/** Summary. DON'T USE. JUST DEMO: fetch JSON data for seclab images */
async function listPackages() {
  try {
    const response = await octokit.request('GET /users/{username}/packages', {
      username: username,
      package_type: packageType 
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching packages: ${error}`);
  }
}

/**
 * Summary. Given a container name, fetch  JSON data for image
 * @param {string} container name of container from our ghcr.io registry
 * @return {string} JSON-formatted data */
async function fetchPackage(container) {
try {
    const response = await octokit.request('GET /users/{username}/packages/{package_type}/{package_name}', {
      username: username,
      package_type: packageType,
      package_name: container
    });
    console.log(response.data);
    return response.data;
    } catch (error) {
        console.error(`Error fetching package: ${error}`);
    }
}

/**
 * Summary. Given a cve id & container type, fetch  JSON data for cvex image
 * @param {string} cve_id name of container from our ghcr.io registry
 * @param {string} type exploiter or target
 * @return {string} JSON-formatted data */
async function fetchPackageViaCveId(cve_id, type) {
  try {
      const name = data[cve_id]+'/'+type;
      console.log(name);
      const response = await octokit.request('GET /users/{username}/packages/{package_type}/{package_name}', {
        username: username,
        package_type: packageType,
        package_name: name
      });
      console.log(response.data); // replace with a return instead when using it
      return response.data;
      } catch (error) {
          console.error(`Error fetching package: ${error}`);
      }
  }

/** Summary. fetch ALL CVEXes in JSON format */
async function listCvexContainers(){
    try{
        const prefix = "cvex";
        const response = await octokit.request('GET /users/{username}/packages', {
        username: username,
        package_type: packageType
        });
        const packages = response.data;
        const filteredPackages = packages.filter(pkg => pkg.name.startsWith(prefix));
        console.log(filteredPackages);
        return filteredPackages;
    }catch (error) {
        console.error(`Error fetching packages: ${error}`);
    }
}

// testing
// let res = fetchPackageViaCveId("CVE-2012-1823", "exploiter");
listCvexContainers();
// listPackages();
// fetchPackage("cvex-210825-010/exploiter");
