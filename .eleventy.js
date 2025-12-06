
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("itemInfo");

  eleventyConfig.addShortcode("item", function(itemName, imageName, itemInfo){
      var itemInfoContents = "";
      fetch(itemInfo)
        .then((res) => res.text())
        .then((text) => itemInfoContents = text.toString())
        .catch((e) => console.log(e));

      return ( `
          <div class="item">
          <img src="${imageName}" alt="Image of ${itemName}" class="itemImage">  
          <div class="itemBlock">
          <strong class="itemHeader">${itemName}</strong>
          <p class="itemInfo">${itemInfoContents.toString()}</p>
          </div>
          </div>
          `
      );
  });
};
