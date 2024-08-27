import React from "react";
import html2canvas from "html2canvas";
import { useSelector } from "react-redux";
import FamilyMember from "./FamilyMember";
import { familyData } from "../data/familydata";

const FamilyTree = () => {
  const members = useSelector((state) => state.familyData);
  const isStoreEmptyData = Object.keys(members).length === 0;
  const familiesMemberData = isStoreEmptyData ? familyData : members;

  const handleExport = async () => {
    const element = document.getElementById("content-to-export");
    if (element) {
      try {
        // Store the original overflow property and scroll width
        const originalOverflow = element.style.overflow;
        const originalWidth = element.style.width;
        const originalHeight = element.style.height;

        // Get the full scrollable width and height
        const scrollWidth = element.scrollWidth;
        const scrollHeight = element.scrollHeight;

        // Temporarily set the element size to fit its content
        element.style.overflow = "visible";
        element.style.width = `${scrollWidth}px`;
        element.style.height = `${scrollHeight + 100}px`;

        // Capture the element with html2canvas
        const canvas = await html2canvas(element, {
          scrollX: 0,
          scrollY: 0,
          useCORS: true,
        });
        const dataURL = canvas.toDataURL("image/png");

        // Restore the original element style
        element.style.overflow = originalOverflow;
        element.style.width = originalWidth;
        element.style.height = originalHeight;

        // Create a link element and trigger a download
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "exported-image.png";
        link.click();
      } catch (error) {
        console.error("Error exporting image:", error);
      }
    }
  };

  return (
    <>
      <button onClick={handleExport} className="generateButton">
        Export as Image
      </button>
      <div className="tree" id="content-to-export">
        <FamilyMember member={familiesMemberData} />
      </div>
    </>
  );
};

export default FamilyTree;
