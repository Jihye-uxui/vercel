const settings = {
  "name": "portfolio",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Jihye Choe - Portfolio",
      "description": "Frontend Web Developer & UI Designer"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Work",
              "/work-archive"
            ],
            [
              "About",
              "/about-me/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://wp.jihyedesign.com",
          "postTypes": [
            {
              type: "works", // type slug
              endpoint: "works", // REST API endpoint
              archive: "/work-archive" // link where this custom posts are listed
            }
          ],
          taxonomies: [
            {
              taxonomy: "work-skills", // taxonomy slug
              endpoint: "custom_work_category", // REST API endpoint
              postTypeEndpoint: "custom_work_category", // endpoint from which posts from this taxonomy are fetched
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
