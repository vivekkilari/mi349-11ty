
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("itemInfo");

  eleventyConfig.addShortcode("item", async function(itemName, imageName, itemInfo){
      return ( `
          <div class="item">
          <img src="${imageName}" alt="Image of ${itemName}" class="itemImage">  
          <div class="itemBlock">
          <strong class="itemHeader">${itemName}</strong>
          <p class="itemInfo">${itemInfo}</p>
          </div>
          </div>
          `
      );
  });

  eleventyConfig.addShortcode("itemLink", async function(itemName, itemLink, imageLink){
      return ( `
          <a href=${itemLink} class="itemLink">
          <img src="${imageLink}" alt="Image link to ${itemName}" class="itemImage">  
          <div class="itemBlock">
          <strong class="itemHeader">${itemName}</strong>
          </div>
          </a>
          `
      );
  });
};
