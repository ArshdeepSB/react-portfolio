import React, {useEffect} from "react";
import "../Styles/TextSphere.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

function TextSphere(){
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = ["VSCode", "Android Studio", "React", "Git", "Linux", "Azure", "PowerBi", "Emacs", "Pharo", "Databases"];
      const options = {
        radius: 300,
        maxSpeed: "fast",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextSphere;